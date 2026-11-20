# Portfolio — Albar SAMB

Portfolio personnel d'Albar SAMB, Ingénieur IA, déployé sur Netlify.

**Live** → [albarsamb](https://albarportfolio.netlify.app/)

## Stack

- **Astro** + **Tailwind CSS** — site généré en statique, thème terminal minimal (dark par défaut, toggle clair)
- **@fontsource/jetbrains-mono** + **@fontsource/inter**
- **@astrojs/sitemap** — génération du sitemap
- **@astrojs/netlify** — pages statiques + fonction serveur pour le formulaire de contact (`/api/contact`, envoi via Resend)

## Contenu

Le texte de chaque section vit dans `src/data/*.json` (site, about, skills, experiences, projects, education, certifications, community) — à éditer directement, sans toucher aux composants.

## Sections

| Section | Fichier |
|---|---|
| Hero | `src/components/Hero.astro` |
| À propos | `src/components/About.astro` |
| Compétences | `src/components/Skills.astro` |
| Expériences | `src/components/Experience.astro` |
| Projets | `src/components/Projects.astro` |
| Formation | `src/components/Education.astro` |
| Certifications | `src/components/Certifications.astro` |
| Communautés | `src/components/Community.astro` |

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:4321
```

## Déployer

```bash
netlify deploy --prod   # ou push sur main si le dépôt est relié à Netlify
```

## Auteur

**Albar SAMB** — [GitHub](https://github.com/albarSamb) · [albarsambpro@gmail.com](mailto:albarsambpro@gmail.com)
