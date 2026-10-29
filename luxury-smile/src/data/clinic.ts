import type { ImageMetadata } from 'astro';
import limpiezaBucal from '../assets/treatments/limpieza-bucal.webp';
import ortodoncia from '../assets/treatments/ortodoncia.webp';
import exodoncia from '../assets/treatments/exodoncia.webp';
import implantes from '../assets/treatments/implantes.webp';
import limpiezaFacial from '../assets/treatments/limpieza-facial.png';
import microneedling from '../assets/treatments/microneedling.webp';
import botox from '../assets/treatments/botox.png';
import seguimiento from '../assets/treatments/seguimiento.webp';

// Datos reales de la clínica. Todo lo que empieza por "[Pendiente" se muestra tal cual
// en la web hasta que se sustituya por el dato real: no inventar valores aquí.

export const PENDING = '[Pendiente';
export const isPending = (value: string) => value.startsWith(PENDING);

export const clinic = {
  name: 'Luxury Smile',
  tagline: 'Clínica dental y estética',
  address: 'Porlamar, Nueva Esparta',
  phone: '0414-1111111',
  // Formato internacional sin espacios para el enlace tel: (Venezuela, +58).
  phoneHref: '+584141111111',
  email: 'prueba@example.com',
  // `days` es opcional: si se deja vacío solo se muestra el horario.
  hours: [{ days: '', time: '8:00 am a 8:00 pm' }],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Porlamar%2C%20Nueva%20Esparta%2C%20Venezuela',
  social: [
    // { label: 'Instagram', href: 'https://instagram.com/...' },
  ] as { label: string; href: string }[],
};

export interface Treatment {
  id: string;
  name: string;
  description: string;
  group: 'Odontología' | 'Estética' | 'Acompañamiento';
  image: ImageMetadata;
  href: string;
}

// Tratamientos que ofrece la clínica. Las fotos viven en src/assets/treatments y Astro
// las optimiza en el build (tamaños y formato), así que pueden subirse en cualquier tamaño.
// `href` apunta al detalle de cada tratamiento; mientras no existan páginas propias,
// lleva al bloque de contacto para pedir información.
export const treatments: Treatment[] = [
  {
    id: 'limpieza-bucal',
    name: 'Limpieza bucal',
    description: 'Higiene profesional para eliminar placa y sarro y mantener encías sanas.',
    group: 'Odontología',
    image: limpiezaBucal,
    href: '#contacto',
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    description: 'Brackets para alinear los dientes y corregir la mordida de forma progresiva.',
    group: 'Odontología',
    image: ortodoncia,
    href: '#contacto',
  },
  {
    id: 'exodoncia',
    name: 'Exodoncia',
    description: 'Extracción dental planificada y realizada con cuidado para tu comodidad.',
    group: 'Odontología',
    image: exodoncia,
    href: '#contacto',
  },
  {
    id: 'implantes',
    name: 'Implantes y regeneración ósea',
    description: 'Reposición de piezas perdidas con implantes y, cuando hace falta, regeneración del hueso.',
    group: 'Odontología',
    image: implantes,
    href: '#contacto',
  },
  {
    id: 'limpieza-facial',
    name: 'Limpieza facial',
    description: 'Limpieza profunda de la piel para retirar impurezas y devolverle luminosidad.',
    group: 'Estética',
    image: limpiezaFacial,
    href: '#contacto',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    description: 'Microperforaciones controladas que estimulan la regeneración natural de la piel.',
    group: 'Estética',
    image: microneedling,
    href: '#contacto',
  },
  {
    id: 'botox',
    name: 'Botox',
    description: 'Tratamiento con toxina botulínica para suavizar las líneas de expresión.',
    group: 'Estética',
    image: botox,
    href: '#contacto',
  },
  {
    id: 'seguimiento',
    name: 'Seguimiento de paciente',
    description: 'Revisiones y control de tu evolución después de cada tratamiento.',
    group: 'Acompañamiento',
    image: seguimiento,
    href: '#contacto',
  },
];
