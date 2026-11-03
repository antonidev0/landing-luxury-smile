// Datos reales de la clínica. Todo lo que empieza por "[Pendiente" se muestra tal cual
// en la web hasta que se sustituya por el dato real: no inventar valores aquí.

export const PENDING = '[Pendiente';
export const isPending = (value: string) => value.startsWith(PENDING);

export const clinic = {
  name: 'Luxury Smile',
  tagline: 'Clínica dental',
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

export interface Service {
  name: string;
  description: string;
}

export interface Specialty {
  id: string;
  name: string;
  services: Service[];
}

// Servicios y tratamientos de la clínica, tal como aparecen en su catálogo oficial
// («Servicios Odontológicos Luxury Smile»). Solo odontología para jóvenes y adultos.
export const specialties: Specialty[] = [
  {
    id: 'general',
    name: 'Odontología general y preventiva',
    services: [
      {
        name: 'Limpiezas dentales profesionales',
        description: 'Profilaxis profunda, eliminación de placa bacteriana y remoción de tártaro.',
      },
      {
        name: 'Restauraciones estéticas',
        description: 'Obturaciones y calzas básicas de alta durabilidad adaptadas al tono natural del diente.',
      },
      {
        name: 'Evaluación diagnóstica integral',
        description: 'Revisión clínica general y diseño de plan de tratamiento.',
      },
    ],
  },
  {
    id: 'estetica-dental',
    name: 'Odontología estética',
    services: [
      {
        name: 'Blanqueamiento dental',
        description: 'Tratamientos de aclaramiento dental de alta efectividad y mínima sensibilidad.',
      },
      {
        name: 'Diseño de sonrisa',
        description: 'Armonización de la forma, alineación, proporción y color de la dentadura.',
      },
    ],
  },
  {
    id: 'implantologia',
    name: 'Implantología y regeneración avanzada',
    services: [
      {
        name: 'Implantología dental de precisión',
        description: 'Colocación de implantes biocompatibles para reposición de piezas perdidas.',
      },
      {
        name: 'Implantología con recuperación acelerada (iPRF + exosomas)',
        description:
          'Protocolo biológico que utiliza fibrina rica en plaquetas (iPRF) y exosomas para estimular la regeneración celular y acelerar la cicatrización postquirúrgica.',
      },
    ],
  },
  {
    id: 'cirugia',
    name: 'Odontología quirúrgica y apical',
    services: [
      {
        name: 'Exodoncias y extracciones básicas',
        description: 'Extracción segura e indolora de piezas comprometidas.',
      },
      {
        name: 'Cirugías apicales',
        description: 'Intervención localizada para preservar la pieza dental eliminando infecciones periapicales.',
      },
      {
        name: 'Cirugía de renovación e iPRF en encías',
        description:
          'Procedimiento reconstructivo periodontal guiado con plasma rico en plaquetas para restaurar la firmeza gingival.',
      },
    ],
  },
  {
    id: 'periodoncia',
    name: 'Periodoncia especializada',
    services: [
      {
        name: 'Cirugías periodontales totales',
        description: 'Tratamiento quirúrgico avanzado para enfermedades complejas del tejido de soporte dental.',
      },
      {
        name: 'Raspado y alisado radicular',
        description: 'Limpieza subgingival profunda para el control efectivo de gingivitis y periodontitis.',
      },
    ],
  },
  {
    id: 'rehabilitacion',
    name: 'Rehabilitación protésica',
    services: [
      {
        name: 'Rehabilitación protésica sobre implantes',
        description: 'Restauración avanzada mediante coronas, puentes o prótesis ancladas fijas.',
      },
      {
        name: 'Rehabilitación protésica general',
        description:
          'Confección de prótesis fijas y removibles para devolver la correcta función masticatoria y estética.',
      },
    ],
  },
  {
    id: 'endodoncia',
    name: 'Endodoncia',
    services: [
      {
        name: 'Tratamiento de conductos',
        description: 'Procedimiento para la conservación de piezas dentales dañadas en su pulpa u origen nervioso.',
      },
      {
        name: 'Desinfección y sellado aséptico',
        description: 'Alivio del dolor e intervención radicular con tecnología biosegura.',
      },
    ],
  },
  {
    id: 'radiologia',
    name: 'Radiología diagnóstica',
    services: [
      {
        name: 'Radiología periapical',
        description:
          'Evaluación por imágenes focalizada e inmediata de la raíz dental y el hueso adyacente para diagnósticos precisos en la misma consulta.',
      },
    ],
  },
];

// Protocolos destacados del catálogo.
export const highlights: Service[] = [
  {
    name: 'Biotecnología en recuperación',
    description:
      'iPRF y exosomas en tratamientos quirúrgicos e implantológicos para minimizar molestias y acelerar la cicatrización.',
  },
  {
    name: 'Diagnóstico integral e inmediato',
    description: 'Radiología periapical en la clínica, sin necesidad de desplazamientos externos.',
  },
  {
    name: 'Estética y funcionalidad',
    description: 'Desde blanqueamientos hasta rehabilitaciones protésicas sobre implantes.',
  },
  {
    name: 'Atención para jóvenes y adultos',
    description: 'Atendemos todas las especialidades odontológicas en jóvenes y adultos. No prestamos servicio de odontopediatría.',
  },
];
