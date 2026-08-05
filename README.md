# Portfolio — Albar SAMB

Portfolio personnel d'Albar SAMB, Ingénieur IA, déployé sur GitHub Pages.

**Live** → [albarsamb](https://albarportfolio.netlify.app/)

## Stack

- **Astro** + **Tailwind CSS** — site statique, thème terminal minimal (dark par défaut, toggle clair)
- **@fontsource/jetbrains-mono** + **@fontsource/inter**
- **@astrojs/sitemap** — génération du sitemap
- **gh-pages** — déploiement GitHub Pages

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
npm run dev      # http://localhost:4321/portfolio-github-pages
```

## Déployer

```bash
npm run deploy   # build + push sur gh-pages
```

## Auteur

**Albar SAMB** — [GitHub](https://github.com/albarSamb) · [albarsamb1@gmail.com](mailto:albarsamb1@gmail.com)
