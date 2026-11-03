// Recorrido scroll-world: un clip por escena, en orden. Cada clip termina en el
// encuadre con el que empieza el siguiente, así que se encadenan sin conectores.
// Los vídeos viven en /public/videos (ver docs en README).

export interface Scene {
  id: string;
  label: string;
  clip: string; // nombre base, sin extensión: se sirve /videos/<clip>.webm (y <clip>-m.webm en móvil)
  accent: string;
  scroll?: number; // altura de scroll (en pantallas) que ocupa la escena
  linger?: number; // 0..0.6: la cámara se detiene a mitad de escena mientras se lee el texto
  eyebrow: string;
  title: string;
  body: string;
  tags?: string[];
  cta?: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

const allScenes: Scene[] = [
  {
    id: 'bienvenida',
    label: 'Bienvenida',
    clip: 'clip-01',
    accent: '#D4AF5A',
    scroll: 1.9,
    linger: 0.45,
    eyebrow: 'Luxury Smile · Clínica dental',
    title: 'Tu sonrisa, en las mejores manos',
    body: 'Cuidamos de tu salud bucodental con atención personalizada y tecnología avanzada.',
    cta: { primary: { label: 'Conoce nuestra clínica', href: '#escena-clinica' } },
  },
  {
    id: 'clinica',
    label: 'Nuestra clínica',
    clip: 'clip-02',
    accent: '#D4AF5A',
    scroll: 1.6,
    linger: 0.35,
    eyebrow: 'Nuestra clínica',
    title: 'Un plan pensado para cada sonrisa',
    body: 'Escuchamos, te explicamos cada paso y decidimos contigo el tratamiento, en un entorno tranquilo y cuidado.',
    tags: ['Atención personalizada', 'Trato cercano', 'Bienestar'],
  },
  {
    id: 'tecnologia',
    label: 'Tecnología',
    clip: 'clip-03',
    accent: '#D4AF5A',
    scroll: 1.6,
    linger: 0.35,
    eyebrow: 'Tecnología y diagnóstico',
    title: 'Precisión desde el primer diagnóstico',
    body: 'Trabajamos con equipamiento profesional para diagnosticar con detalle, prevenir a tiempo y planificar cada tratamiento.',
    tags: ['Prevención', 'Diagnóstico', 'Planificación'],
  },
  {
    id: 'odontologia',
    label: 'Odontología',
    clip: 'clip-04',
    accent: '#D4AF5A',
    scroll: 1.6,
    linger: 0.35,
    eyebrow: 'Tratamientos dentales',
    title: 'De la higiene a la implantología',
    body: 'Limpiezas, estética dental, implantes, cirugía, periodoncia, prótesis y endodoncia, en un mismo lugar.',
    tags: ['Limpiezas', 'Implantes', 'Periodoncia', 'Endodoncia'],
  },
  {
    id: 'confianza',
    label: 'Confianza',
    clip: 'clip-06',
    accent: '#D4AF5A',
    scroll: 1.6,
    linger: 0.35,
    eyebrow: 'Atención humana',
    title: 'Cercanía en cada visita',
    body: 'Te acompañamos antes, durante y después de cada tratamiento para que vivas cada visita con tranquilidad.',
  },
  {
    id: 'seguimiento',
    label: 'Seguimiento',
    clip: 'clip-07',
    accent: '#D4AF5A',
    scroll: 1.9,
    linger: 0.3,
    eyebrow: 'Seguimiento',
    title: 'Seguimos a tu lado después de cada visita',
    body: 'Revisamos tu evolución tras cada tratamiento para que tu sonrisa siga sana con el paso del tiempo.',
    cta: {
      primary: { label: 'Ver tratamientos', href: '#tratamientos' },
    },
  },
];

// Beta: el recorrido termina en el clip 3. Para volver al recorrido completo, pon
// BETA_SCENES = allScenes.length (o quita el recorte).
const BETA_SCENES = 3;

export const scenes: Scene[] = allScenes.slice(0, BETA_SCENES).map((scene, i, list) =>
  // La última escena visible cierra el recorrido con el botón a los tratamientos.
  i === list.length - 1 && !scene.cta
    ? { ...scene, cta: { primary: { label: 'Ver tratamientos', href: '#tratamientos' } } }
    : scene,
);
