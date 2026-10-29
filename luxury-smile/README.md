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

Los originales en máxima calidad están en `higgs/clip-N.mp4` (no se publican). A partir de ellos se generan, en `public/videos/`:

- `clip-0N.webm`: escritorio, VP9 1920×1080 a 24 fps (los fps originales), crf 26, keyframe cada 8 frames para que el scrub sea fluido.
- `clip-0N-m.webm`: móvil, VP9 1280×720, crf 32, keyframe cada 4 frames.
- `clip-0N.mp4`: H.264 1080p para navegadores sin VP9 (Safari antiguo).
- `posters/clip-0N.webp`: primer fotograma de cada clip; se ve mientras carga el vídeo, con `prefers-reduced-motion` y en conexiones lentas (Save-Data / 2G), donde no se descarga vídeo.

Los originales no son 16:9 exactos; se recortan al centro para llenar 16:9 sin bandas:

```sh
VF="scale=1920:1080:force_original_aspect_ratio=increase:flags=lanczos,crop=1920:1080,format=yuv420p"
VFM="scale=1280:720:force_original_aspect_ratio=increase:flags=lanczos,crop=1280:720,format=yuv420p"
ffmpeg -i higgs/clip-N.mp4 -an -vf "$VF" -c:v libvpx-vp9 -crf 26 -b:v 0 -g 8 -keyint_min 8 -row-mt 1 -deadline good -cpu-used 2 public/videos/clip-0N.webm
ffmpeg -i higgs/clip-N.mp4 -an -vf "$VFM" -c:v libvpx-vp9 -crf 32 -b:v 0 -g 4 -keyint_min 4 -row-mt 1 -deadline good -cpu-used 2 public/videos/clip-0N-m.webm
ffmpeg -i higgs/clip-N.mp4 -an -vf "$VF" -c:v libx264 -preset slow -crf 23 -profile:v high -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart public/videos/clip-0N.mp4
ffmpeg -i public/videos/clip-0N.webm -frames:v 1 -c:v libwebp -quality 85 public/videos/posters/clip-0N.webp
```

Cada clip debe terminar en el encuadre con el que empieza el siguiente; el motor hace un fundido corto entre clips. Al acabar el recorrido, su último fotograma se queda fijo de fondo, oscurecido y difuminado, detrás del resto de secciones.
