import type { ImageMetadata } from 'astro';
import limpiezaBucal from '../assets/treatments/limpieza-bucal.webp';
import ortodoncia from '../assets/treatments/ortodoncia.webp';
import exodoncia from '../assets/treatments/exodoncia.webp';
import implantes from '../assets/treatments/implantes.webp';
import seguimiento from '../assets/treatments/seguimiento.webp';

// Datos reales de la clínica. Todo lo que empieza por "[Pendiente" se muestra tal cual
// en la web hasta que se sustituya por el dato real: no inventar valores aquí.

export const PENDING = '[Pendiente';
export const isPending = (value: string) => value.startsWith(PENDING);

export const clinic = {
  name: 'Luxury Smile',
  tagline: 'Clínica dental',
  address: '[Pendiente: dirección completa]',
  phone: '[Pendiente: teléfono]',
  // Formato internacional sin espacios para el enlace tel:, p. ej. "+34600000000".
  phoneHref: '',
  email: '[Pendiente: email de contacto]',
  hours: [
    { days: '[Pendiente: días]', time: '[Pendiente: horario]' },
  ],
  mapsUrl: '',
  social: [
    // { label: 'Instagram', href: 'https://instagram.com/...' },
  ] as { label: string; href: string }[],
};

export interface Treatment {
  id: string;
  name: string;
  description: string;
  group: 'Odontología' | 'Acompañamiento';
  image: ImageMetadata;
}

// Tratamientos que ofrece la clínica. Las fotos viven en src/assets/treatments y Astro
// las optimiza en el build (tamaños y formato), así que pueden subirse en cualquier tamaño.
// La landing solo muestra tratamientos dentales: no incluir aquí medicina estética.
export const treatments: Treatment[] = [
  {
    id: 'limpieza-bucal',
    name: 'Limpieza bucal',
    description: 'Higiene profesional para eliminar placa y sarro y mantener encías sanas.',
    group: 'Odontología',
    image: limpiezaBucal,
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    description: 'Brackets para alinear los dientes y corregir la mordida de forma progresiva.',
    group: 'Odontología',
    image: ortodoncia,
  },
  {
    id: 'exodoncia',
    name: 'Exodoncia',
    description: 'Extracción dental planificada y realizada con cuidado para tu comodidad.',
    group: 'Odontología',
    image: exodoncia,
  },
  {
    id: 'implantes',
    name: 'Implantes y regeneración ósea',
    description: 'Reposición de piezas perdidas con implantes y, cuando hace falta, regeneración del hueso.',
    group: 'Odontología',
    image: implantes,
  },
  {
    id: 'seguimiento',
    name: 'Seguimiento de paciente',
    description: 'Revisiones y control de tu evolución después de cada tratamiento.',
    group: 'Acompañamiento',
    image: seguimiento,
  },
];
