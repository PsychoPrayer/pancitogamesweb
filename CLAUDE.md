@AGENTS.md

# PancitoGames web

Portafolio del estudio: https://pancitogamesweb.vercel.app. Next.js con App Router y Tailwind v4.
Habla con el usuario en español.

## Contenido

- Los juegos y sus avances viven en `data/juegos.json`; los tipos y ayudas, en `lib/juegos.ts`.
- Cómo añadir juegos: `GUIA_PORTAFOLIO.md`.
- Las carátulas son JPG de 900×1200 en `public/portadas/`.
- `/privacy`, `/terms` y `/memory-history` no se pueden quitar: las tiendas de apps enlazan a ellas.

## Desarrollo

- Servidor local: `npx next dev --webpack -p 3005` (configurado en `.claude/launch.json`).
- En el PC con Windows hace falta `--webpack`: Avast intercepta TLS y Turbopack no puede descargar las Google Fonts.
- Si los tipos fallan con errores de `.next/dev`, para el servidor y borra `.next`.

## Publicar

Vercel NO está conectado a GitHub: hacer `git push` no publica nada. Para publicar:

```bash
npx vercel deploy --prod --yes
```

- El equipo de Vercel es `pancitogames-projects` y el proyecto, `pancitogamesweb`.
- El primer intento a veces devuelve un error (incluso "Not authorized"); suele bastar con reintentar.
- Pide confirmación antes de hacer commit, push o publicar.

## Poner en marcha un ordenador nuevo

`.vercel` y `.env.local` no están en el repositorio, así que cada ordenador los crea:

```bash
git clone https://github.com/PsychoPrayer/pancitogamesweb.git
cd pancitogamesweb
npm ci
npx vercel login
npx vercel link --yes --project pancitogamesweb --scope pancitogames-projects
```
