// Datos reales de la clínica. Todo lo que empieza por "[Pendiente" se muestra tal cual
// en la web hasta que se sustituya por el dato real: no inventar valores aquí.

export const PENDING = '[Pendiente';
export const isPending = (value: string) => value.startsWith(PENDING);

export const clinic = {
  name: 'Luxury Smile',
  tagline: 'Clínica dental y estética',
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
  siteUrl: 'https://example.com',
};

// Tratamientos que ofrece la clínica (los de las fotos de /public/photos).
// `href` apunta al detalle de cada tratamiento; mientras no existan páginas propias,
// lleva al bloque de contacto para pedir información.
export const treatments = [
  {
    id: 'limpieza-bucal',
    name: 'Limpieza bucal',
    description: 'Higiene profesional para eliminar placa y sarro y mantener encías sanas.',
    group: 'Odontología',
    href: '#contacto',
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    description: 'Brackets para alinear los dientes y corregir la mordida de forma progresiva.',
    group: 'Odontología',
    href: '#contacto',
  },
  {
    id: 'exodoncia',
    name: 'Exodoncia',
    description: 'Extracción dental planificada y realizada con cuidado para tu comodidad.',
    group: 'Odontología',
    href: '#contacto',
  },
  {
    id: 'implantes',
    name: 'Implantes y regeneración ósea',
    description: 'Reposición de piezas perdidas con implantes y, cuando hace falta, regeneración del hueso.',
    group: 'Odontología',
    href: '#contacto',
  },
  {
    id: 'limpieza-facial',
    name: 'Limpieza facial',
    description: 'Limpieza profunda de la piel para retirar impurezas y devolverle luminosidad.',
    group: 'Estética',
    href: '#contacto',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    description: 'Microperforaciones controladas que estimulan la regeneración natural de la piel.',
    group: 'Estética',
    href: '#contacto',
  },
  {
    id: 'botox',
    name: 'Botox',
    description: 'Tratamiento con toxina botulínica para suavizar las líneas de expresión.',
    group: 'Estética',
    href: '#contacto',
  },
  {
    id: 'seguimiento',
    name: 'Seguimiento de paciente',
    description: 'Revisiones y control de tu evolución después de cada tratamiento.',
    group: 'Acompañamiento',
    href: '#contacto',
  },
];
