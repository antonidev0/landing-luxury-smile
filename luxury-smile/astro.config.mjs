// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Dominio público de la web: se usa para las URL absolutas de og:image y canonical.
	// Cámbialo por el dominio real cuando se publique.
	site: 'https://example.com',
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
