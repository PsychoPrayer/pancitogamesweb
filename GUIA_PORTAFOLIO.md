# Guía del portafolio de juegos

Todo el contenido de los juegos está en **un solo archivo**: [`data/juegos.json`](data/juegos.json).
No hace falta tocar código para añadir juegos, avances o carátulas.

## Páginas

| Ruta | Qué es |
|------|--------|
| `/` | Inicio: galería de carátulas, filtros y últimos avances |
| `/juegos/<id>` | Página de cada juego: reproductor, descripción, ficha y avances |
| `/memory-history`, `/privacy`, `/terms`, `/about`, `/contact` | Se mantienen igual (las tiendas enlazan a privacidad y términos) |

Al hacer clic en una carátula se abre `/juegos/<id>?jugar=1` y el juego arranca directamente
dentro de la página (cargando su link de Vercel en un `iframe`).

## Añadir un juego nuevo

Copia un bloque dentro de `"juegos": [ ... ]` y cambia los valores:

```json
{
  "id": "mi-juego",
  "titulo": "Mi Juego",
  "resumen": { "es": "Frase corta para la tarjeta.", "en": "Short card sentence." },
  "descripcion": { "es": "Texto largo.\n\nOtro párrafo.", "en": "Long text." },
  "portada": "/portadas/mi-juego.png",
  "colores": ["#af6c3e", "#9ec5d3"],
  "estado": "en-desarrollo",
  "plataformas": ["Web"],
  "generos": ["Plataformas"],
  "url": "https://mi-juego.vercel.app",
  "incrustar": true,
  "controles": { "es": "WASD para moverte.", "en": "WASD to move." },
  "destacado": false,
  "capturas": ["/capturas/mi-juego-1.png"],
  "avances": []
}
```

- **id**: va en la URL (`/juegos/mi-juego`). Minúsculas y guiones, sin espacios.
- **estado**: `publicado`, `en-desarrollo` o `prototipo`.
- **portada**: imagen en `public/portadas/`. Formato vertical **3:4** (ej. 900×1200). Si la dejas vacía (`""`) se genera una carátula con los `colores` y el título.
- **incrustar**: `true` para jugarlo dentro de la página. Usa `false` si el link no es un juego web (ej. Memory History, que es móvil).
- **destacado**: `true` lo pone primero en la galería.
- Los textos pueden ser `"solo en un idioma"` o `{ "es": "...", "en": "..." }`. Si falta `en`, se usa el español.

## Añadir un avance

Dentro del juego, en `"avances"`, añade (el orden no importa, se ordena por fecha):

```json
{
  "fecha": "2026-10-20",
  "titulo": { "es": "Nuevo nivel", "en": "New level" },
  "texto": { "es": "Qué cambió.", "en": "What changed." },
  "imagen": "/capturas/mi-juego-nivel2.png"
}
```

`imagen` es opcional. Los 4 avances más recientes de todos los juegos aparecen en el inicio.

## Diseños con ChatGPT

Prompts para pedir imágenes (guárdalas en `public/portadas/` o `public/capturas/`):

**Carátula (3:4):**
> Carátula vertical 3:4 para el videojuego "TÍTULO", un JUEGO DE GÉNERO sobre DE QUÉ TRATA.
> Estilo ilustración acuarela con textura de pergamino, colores cálidos (sepia, terracota, azul cielo suave),
> el título del juego grande y legible arriba, personaje principal al centro. Sin bordes ni marcos.

**Banner / imagen para redes (1200×630):**
> Banner horizontal 1200×630 del estudio PancitoGames con los personajes de mis juegos, estilo acuarela,
> fondo de pergamino, espacio libre a la izquierda para texto.

Para cambiar el estilo general de la web, pídele a ChatGPT una paleta o maqueta y cambia los colores en
`app/globals.css` (variables `--parchment-*`, `--ink-*`, `--accent-*`, `--watercolor-*`).

## Probar en tu PC

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Publicar (GitHub + Vercel)

El repo `PsychoPrayer/pancitogamesweb` ya está conectado a Vercel. Cada `git push` a `main` publica la web:

```bash
git add .
git commit -m "Nuevo avance de Mi Juego"
git push
```

> **Si un juego no carga dentro de la página:** algunos sitios bloquean ser mostrados dentro de otra web
> (cabeceras `X-Frame-Options` o `frame-ancestors`). En ese caso pon `"incrustar": false` o quita esas
> cabeceras en el proyecto de ese juego. El botón "Abrir en otra pestaña" siempre funciona.
