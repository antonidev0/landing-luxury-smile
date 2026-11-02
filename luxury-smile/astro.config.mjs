// @ts-check
import process from 'node:process';
import { defineConfig, fontProviders } from 'astro/config';

// Dominio público de la web: se usa para las URL absolutas de og:image y canonical.
// Orden: SITE_URL (variable de entorno, p. ej. tu dominio propio) → dominio de producción
// que Vercel asigna al proyecto → marcador local.
const site =
	process.env.SITE_URL ??
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'https://example.com');

// https://astro.build/config
export default defineConfig({
	site,
	// Manrope variable autoalojada desde npm (@fontsource-variable/manrope): Astro la copia al
	// build, genera el @font-face y una fuente de reserva ajustada. Sin peticiones a Google Fonts.
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Manrope',
			cssVariable: '--font-manrope',
			fallbacks: ['system-ui', 'sans-serif'],
			options: {
				variants: [
					{
						src: ['@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2'],
						weight: '200 800',
						style: 'normal',
					},
				],
			},
		},
	],
});
