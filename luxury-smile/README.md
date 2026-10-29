# Luxury Smile · Landing

Landing de la clínica con un recorrido **scroll-world**: la posición del scroll controla el tiempo de 7 clips encadenados (la cámara se mueve dentro del vídeo; el texto es HTML aparte).

## Comandos (pnpm)

```sh
pnpm install
pnpm astro dev --background   # servidor en http://localhost:4321 (astro dev stop / status / logs)
pnpm check                    # revisa tipos de .astro y .ts
pnpm build                    # genera dist/
pnpm preview
```

## Dónde está cada cosa

| Qué | Archivo |
|---|---|
| Dominio público (`site`) y fuente Manrope autoalojada | `astro.config.mjs` |
| Datos de la clínica (dirección, teléfono, horario, email, redes) y tratamientos | `src/data/clinic.ts` |
| Fotos de los tratamientos (Astro las optimiza en el build) | `src/assets/treatments/` |
| Logo de la cabecera (SVG, toma el color del texto) | `src/assets/brand/logo.svg` |
| Cabecera flotante con navegación | `src/components/SiteHeader.astro` |
| Escenas del recorrido: clip, textos, ritmo de scroll | `src/data/scenes.ts` |
| Motor de scroll (adaptado de la skill scroll-world) | `src/scripts/scroll-world.js` |
| Montaje del recorrido, tema y fallback sin JS | `src/components/ScrollWorld.astro` |
| Layout común: meta/SEO, fuente, estilos globales y animación de entrada de secciones | `src/layouts/Layout.astro` |
| Secciones normales: frase, tratamientos, contacto, pie | `src/components/*.astro` |
| Páginas legales y 404 | `src/pages/aviso-legal.astro`, `privacidad.astro`, `404.astro` |

Antes de publicar, cambia `site` en `astro.config.mjs` por el dominio real (se usa en `og:image` y en la URL canónica).

Los valores que empiezan por `[Pendiente` se muestran marcados en la web hasta que se sustituyan por los datos reales. El botón «Contactar con la clínica» queda deshabilitado hasta que haya `phoneHref` o un email real.

## Vídeos

Solo WebM (VP9), en `public/videos/`:

- `clip-0N.webm`: escritorio, 1920×1080, keyframe cada 10 frames para que el scrub sea fluido.
- `clip-0N-m.webm`: móvil, 1280×720, keyframe cada 4 frames.
- `posters/clip-0N.webp`: primer fotograma de cada clip; se ve mientras carga el vídeo, con `prefers-reduced-motion` y en conexiones lentas (Save-Data / 2G), donde no se descarga vídeo.

Codificación (con ffmpeg), recortando al centro para llenar 16:9 sin bandas:

```sh
ffmpeg -i src.mp4 -an -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30,format=yuv420p" \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -g 10 -keyint_min 10 -row-mt 1 clip-0N.webm
ffmpeg -i src.mp4 -an -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=30,format=yuv420p" \
  -c:v libvpx-vp9 -crf 36 -b:v 0 -g 4 -keyint_min 4 -row-mt 1 clip-0N-m.webm
ffmpeg -i clip-0N.webm -frames:v 1 -c:v libwebp -quality 82 posters/clip-0N.webp
```

Cada clip debe terminar en el encuadre con el que empieza el siguiente; el motor hace un fundido corto entre clips.
