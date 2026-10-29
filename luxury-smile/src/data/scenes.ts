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

export const scenes: Scene[] = [
  {
    id: 'bienvenida',
    label: 'Bienvenida',
    clip: 'clip-01',
    accent: '#4F7FA8',
    scroll: 1.9,
    linger: 0.45,
    eyebrow: 'Luxury Smile · Clínica dental y estética',
    title: 'Tu sonrisa, en las mejores manos',
    body: 'Cuidamos de tu salud bucodental con atención personalizada y tecnología avanzada.',
    cta: { primary: { label: 'Conoce nuestra clínica', href: '#escena-clinica' } },
  },
  {
    id: 'clinica',
    label: 'Nuestra clínica',
    clip: 'clip-02',
    accent: '#5B87AE',
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
    accent: '#3F6F98',
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
    accent: '#4F7FA8',
    scroll: 1.6,
    linger: 0.35,
    eyebrow: 'Tratamientos dentales',
    title: 'De la higiene a la implantología',
    body: 'Limpieza bucal, ortodoncia, exodoncia e implantes con regeneración ósea, en un mismo lugar.',
    tags: ['Limpieza bucal', 'Ortodoncia', 'Exodoncia', 'Implantes'],
  },
  {
    id: 'estetica',
    label: 'Estética',
    clip: 'clip-05',
    accent: '#9A7B63',
    scroll: 2.0,
    linger: 0.35,
    eyebrow: 'Medicina estética',
    title: 'Tu piel, con el mismo cuidado',
    body: 'Limpieza facial, microneedling y botox, con la misma atención que dedicamos a tu sonrisa.',
    tags: ['Limpieza facial', 'Microneedling', 'Botox'],
  },
  {
    id: 'confianza',
    label: 'Confianza',
    clip: 'clip-06',
    accent: '#8A7462',
    scroll: 1.6,
    linger: 0.35,
    eyebrow: 'Atención humana',
    title: 'Cercanía en cada visita',
    body: 'Te acompañamos antes, durante y después de cada tratamiento para que vivas cada visita con tranquilidad.',
  },
  {
    id: 'contacto',
    label: 'Contacto',
    clip: 'clip-07',
    accent: '#4F7FA8',
    scroll: 1.9,
    linger: 0.3,
    eyebrow: 'Seguimiento y contacto',
    title: 'Seguimos a tu lado después de cada visita',
    body: 'Revisamos tu evolución y resolvemos tus dudas cuando lo necesites, sin esperar a la siguiente cita.',
    cta: {
      primary: { label: 'Pedir cita', href: '#contacto' },
      secondary: { label: 'Ver tratamientos', href: '#tratamientos' },
    },
  },
];
