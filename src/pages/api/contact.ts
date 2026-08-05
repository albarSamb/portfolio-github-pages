import type { APIRoute, APIContext } from 'astro';
import { getStore } from '@netlify/blobs';

export const prerender = false;

const CONTACT_EMAIL_TO = 'albarsambpro@gmail.com';
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;
const URL_RE = /https?:\/\/|www\./gi;

const MIN_FILL_TIME_MS = 1500;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 min
const RATE_LIMIT_MAX = 3;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isTrustedOrigin(request: Request): boolean {
  const selfOrigin = new URL(request.url).origin;
  const origin = request.headers.get('origin');
  if (origin) return origin === selfOrigin;

  const referer = request.headers.get('referer');
  if (referer) {
    try {
      return new URL(referer).origin === selfOrigin;
    } catch {
      return false;
    }
  }
  return false;
}

function getClientIp(context: APIContext): string {
  try {
    if (context.clientAddress) return context.clientAddress;
  } catch {
    // clientAddress non disponible dans cet environnement, on retombe sur les en-têtes.
  }
  const headers = context.request.headers;
  return (
    headers.get('x-nf-client-connection-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

async function checkRateLimit(ip: string): Promise<boolean> {
  const store = getStore('contact-rate-limit');
  const now = Date.now();
  const raw = (await store.get(ip, { type: 'json' })) as { count: number; windowStart: number } | null;

  if (!raw || now - raw.windowStart > RATE_LIMIT_WINDOW_MS) {
    await store.setJSON(ip, { count: 1, windowStart: now });
    return true;
  }

  if (raw.count >= RATE_LIMIT_MAX) {
    return false;
  }

  await store.setJSON(ip, { count: raw.count + 1, windowStart: raw.windowStart });
  return true;
}

export const POST: APIRoute = async (context) => {
  const { request } = context;

  if (!isTrustedOrigin(request)) {
    return new Response(JSON.stringify({ error: 'forbidden' }), { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400 });
  }

  const { name, email, message, company, elapsed } = (body ?? {}) as Record<string, unknown>;

  // Honeypot : un bot qui remplit ce champ caché est silencieusement ignoré.
  if (typeof company === 'string' && company.trim() !== '') {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  // Un envoi quasi instantané après le rendu de la page trahit un bot.
  if (typeof elapsed !== 'number' || elapsed < MIN_FILL_TIME_MS) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return new Response(JSON.stringify({ error: 'missing_fields' }), { status: 400 });
  }

  if (name.length > 120 || email.length > 180 || message.length > 4000) {
    return new Response(JSON.stringify({ error: 'field_too_long' }), { status: 400 });
  }

  if (!EMAIL_RE.test(email.trim())) {
    return new Response(JSON.stringify({ error: 'invalid_email' }), { status: 400 });
  }

  // Spam classique : liens dans le nom, ou message bourré de liens.
  if (URL_RE.test(name)) {
    return new Response(JSON.stringify({ error: 'invalid_name' }), { status: 400 });
  }
  const urlMatches = message.match(URL_RE);
  if (urlMatches && urlMatches.length > 2) {
    return new Response(JSON.stringify({ error: 'too_many_links' }), { status: 400 });
  }

  const ip = getClientIp(context);
  const withinLimit = await checkRateLimit(ip);
  if (!withinLimit) {
    return new Response(JSON.stringify({ error: 'rate_limited' }), { status: 429 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'server_misconfigured' }), { status: 500 });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Albar SAMB <onboarding@resend.dev>',
      to: CONTACT_EMAIL_TO,
      reply_to: email.trim(),
      subject: `Nouveau message de ${name.trim()} via le portfolio`,
      html: `<p><strong>Nom :</strong> ${safeName}</p><p><strong>Email :</strong> ${safeEmail}</p><p><strong>Message :</strong></p><p>${safeMessage}</p>`,
    }),
  });

  if (!resendRes.ok) {
    return new Response(JSON.stringify({ error: 'send_failed' }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
