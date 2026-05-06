export const company = {
  name: 'CB Forestal',
  phone: '+34 936 94 21 74',
  phoneHref: 'tel:+34936942174',
  email: 'info@cbforestal.es',
  emailHref: 'mailto:info@cbforestal.es',
  website: 'https://www.cbforestal.es',
  hasPublicPhone: true,
  hasWhatsapp: false,
  socialLinks: [],
  serviceAreas: [
    'Barcelona',
    'Girona',
    'Tarragona',
    'Lleida',
    'Costa Brava',
    'Costa Daurada',
    'Pirineus',
    "Terres de l'Ebre",
  ],
};

export const quoteRequestHash = 'formulario-presupuesto';
export const quoteRequestPath = `/contacto#${quoteRequestHash}`;
export const worksPath = '/trabajos';
export const podaBarcelonaPath = '/poda-arboles-barcelona';
export const talaBarcelonaPath = '/tala-arboles-barcelona';
export const desbroceBarcelonaPath = '/desbroce-parcelas-barcelona';
export const servicesSectionHash = 'listado-servicios';
export const servicesSectionPath = `/servicios#${servicesSectionHash}`;
export const zonesSectionHash = 'zonas-cobertura';
export const zonesSectionPath = `/zonas#${zonesSectionHash}`;
export const fencesSectionHash = 'detalles-cerramientos';
export const fencesSectionPath = `/cerramientos#${fencesSectionHash}`;

export function buildQuoteRequestPath(params = {}) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });

  const queryString = searchParams.toString();

  return queryString
    ? `/contacto?${queryString}#${quoteRequestHash}`
    : quoteRequestPath;
}

export const pageMeta = {
  '/': {
    title: {
      ca: 'Serveis forestals a Barcelona i Catalunya | CB Forestal',
      es: 'Servicios forestales en Barcelona y Cataluña | CB Forestal',
    },
    description: {
      ca: 'CB Forestal ofereix tala, poda, desbrossament, manteniment de parcel·les i tancaments a Barcelona i Catalunya. Pressupost ràpid i treball professional.',
      es: 'CB Forestal ofrece tala, poda, desbroce, mantenimiento de parcelas y cerramientos en Barcelona y Cataluña. Presupuesto rápido y trabajo profesional.',
    },
  },
  '/nosotros': {
    title: {
      ca: 'CB FORESTAL — Qui som',
      es: 'CB FORESTAL — Nosotros',
    },
    description: {
      ca: 'Coneix l’equip de CB Forestal, especialistes en espais verds, manteniment i tancaments amb cobertura a Catalunya.',
      es: 'Conoce al equipo de CB Forestal, especialistas en espacios verdes, mantenimiento y cerramientos con cobertura en Cataluña.',
    },
  },
  '/servicios': {
    title: {
      ca: 'Serveis forestals, desbrossament i tancaments | CB Forestal',
      es: 'Servicios forestales, desbroce y cerramientos | CB Forestal',
    },
    description: {
      ca: 'Serveis de tala, poda, desbrossament, manteniment, piscines i tancaments per a particulars, comunitats i empreses a Barcelona i Catalunya.',
      es: 'Servicios de tala, poda, desbroce, mantenimiento, piscinas y cerramientos para particulares, comunidades y empresas en Barcelona y Cataluña.',
    },
  },
  '/cerramientos': {
    title: {
      ca: 'CB FORESTAL — Tancaments',
      es: 'CB FORESTAL — Cerramientos',
    },
    description: {
      ca: 'Instal·lació de tancaments metàl·lics, de fusta, sintètics i de pedra amb acabat professional i garantia.',
      es: 'Instalación de cerramientos metálicos, de madera, sintéticos y de piedra con acabado profesional y garantía.',
    },
  },
  '/zonas': {
    title: {
      ca: 'CB FORESTAL — Zones',
      es: 'CB FORESTAL — Zonas',
    },
    description: {
      ca: 'Cobertura de CB Forestal a Barcelona, Girona, Tarragona, Lleida, Costa Brava, Pirineus i més zones de Catalunya.',
      es: 'Cobertura de CB Forestal en Barcelona, Girona, Tarragona, Lleida, Costa Brava, Pirineos y más zonas de Cataluña.',
    },
  },
  '/contacto': {
    title: {
      ca: 'Pressupost de tala, poda i desbrossament | CB Forestal',
      es: 'Presupuesto de tala, poda y desbroce | CB Forestal',
    },
    description: {
      ca: 'Contacta amb CB Forestal per demanar pressupost de tala, poda, desbrossament, manteniment o tancaments a Barcelona i Catalunya.',
      es: 'Contacta con CB Forestal para pedir presupuesto de tala, poda, desbroce, mantenimiento o cerramientos en Barcelona y Cataluña.',
    },
  },
  '/trabajos': {
    title: {
      ca: 'CB FORESTAL — Treballs reals',
      es: 'CB FORESTAL — Trabajos reales',
    },
    description: {
      ca: 'Galeria de treballs reals de tala, poda, desbrossament, manteniment i tancaments executats per CB Forestal.',
      es: 'Galería de trabajos reales de tala, poda, desbroce, mantenimiento y cerramientos ejecutados por CB Forestal.',
    },
  },
  '/poda-arboles-barcelona': {
    title: {
      ca: "Poda d'arbres a Barcelona | CB Forestal",
      es: 'Poda de árboles en Barcelona | CB Forestal',
    },
    description: {
      ca: "Servei professional de poda d'arbres en altura a Barcelona i rodalia. Seguretat, equip tècnic i pressupost ràpid.",
      es: 'Servicio profesional de poda de árboles en altura en Barcelona y alrededores. Seguridad, equipo técnico y presupuesto rápido.',
    },
  },
  '/tala-arboles-barcelona': {
    title: {
      ca: "Tala d'arbres a Barcelona | CB Forestal",
      es: 'Tala de árboles en Barcelona | CB Forestal',
    },
    description: {
      ca: "Tala controlada de pins i arbres a Barcelona i Catalunya. Retirada de restes, treball segur i resposta ràpida.",
      es: 'Tala controlada de pinos y árboles en Barcelona y Cataluña. Retirada de restos, trabajo seguro y respuesta rápida.',
    },
  },
  '/desbroce-parcelas-barcelona': {
    title: {
      ca: 'Desbrossament de parcel·les a Barcelona | CB Forestal',
      es: 'Desbroce de parcelas en Barcelona | CB Forestal',
    },
    description: {
      ca: 'Desbrossament de parcel·les, talussos i finques a Barcelona i rodalia. Prevenció d’incendis i neteja professional.',
      es: 'Desbroce de parcelas, taludes y fincas en Barcelona y alrededores. Prevención de incendios y limpieza profesional.',
    },
  },
  '/privacidad': {
    title: {
      ca: 'CB FORESTAL — Política de privacitat',
      es: 'CB FORESTAL — Política de privacidad',
    },
    description: {
      ca: 'Informació sobre el tractament de dades personals en les consultes i sol·licituds de pressupost de CB Forestal.',
      es: 'Información sobre el tratamiento de datos personales en las consultas y solicitudes de presupuesto de CB Forestal.',
    },
  },
  '/aviso-legal': {
    title: {
      ca: 'CB FORESTAL — Avís legal',
      es: 'CB FORESTAL — Aviso legal',
    },
    description: {
      ca: 'Condicions generals d’ús, propietat intel·lectual i dades de contacte del lloc web de CB Forestal.',
      es: 'Condiciones generales de uso, propiedad intelectual y datos de contacto del sitio web de CB Forestal.',
    },
  },
  '/cookies': {
    title: {
      ca: 'CB FORESTAL — Política de cookies',
      es: 'CB FORESTAL — Política de cookies',
    },
    description: {
      ca: 'Informació sobre l’ús de cookies tècniques i de tercers al lloc web de CB Forestal.',
      es: 'Información sobre el uso de cookies técnicas y de terceros en el sitio web de CB Forestal.',
    },
  },
};

export const navigation = [
  { to: '/', label: { ca: 'Inici', es: 'Inicio' } },
  { to: '/servicios', label: { ca: 'Serveis', es: 'Servicios' } },
  { to: '/cerramientos', label: { ca: 'Tancaments', es: 'Cerramientos' } },
  { to: '/zonas', label: { ca: 'Zones', es: 'Zonas' } },
  { to: '/nosotros', label: { ca: 'Nosaltres', es: 'Nosotros' } },
];

export const hero = {
  tag: {
    ca: 'Serveis forestals · Barcelona i Catalunya',
    es: 'Servicios forestales · Barcelona y Cataluña',
  },
  title: {
    ca: 'Experts en tala, poda i treballs forestals',
    es: 'Expertos en tala, poda y trabajos forestales',
  },
  emphasis: {
    ca: 'tala, poda',
    es: 'tala, poda',
  },
  description: {
    ca: 'Tala controlada de pins i arbres, poda en altura, desbrossaments, manteniment de parcel·les i tancaments per a particulars, finques i empreses a Barcelona i Catalunya.',
    es: 'Tala controlada de pinos y árboles, poda en altura, desbroces, mantenimiento de parcelas y cerramientos para particulares, fincas y empresas en Barcelona y Cataluña.',
  },
  primaryCta: {
    ca: 'Sol·licitar pressupost',
    es: 'Solicitar presupuesto',
  },
  secondaryCta: {
    ca: 'Veure serveis',
    es: 'Ver servicios',
  },
  trustSignals: [
    {
      ca: "+15 anys d'experiència",
      es: '+15 años de experiencia',
    },
    {
      ca: 'Pressupost orientatiu en 48h',
      es: 'Presupuesto orientativo en 48h',
    },
    {
      ca: 'Cobertura a tota Catalunya',
      es: 'Cobertura en toda Cataluña',
    },
  ],
};

export const about = {
  label: { ca: 'Qui som', es: 'Quiénes somos' },
  title: {
    ca: 'Professionals forestals i de jardineria amb resposta ràpida',
    es: 'Profesionales forestales y de jardinería con respuesta rápida',
  },
  paragraphs: [
    {
      ca: 'A CB FORESTAL treballem tant en entorns residencials com en finques rústiques, parcel·les, comunitats i espais empresarials. Intervenim en tala, poda, desbrossament, manteniment i tancaments amb equips preparats per actuar a tota Catalunya.',
      es: 'En CB FORESTAL trabajamos tanto en entornos residenciales como en fincas rústicas, parcelas, comunidades y espacios empresariales. Intervenimos en tala, poda, desbroce, mantenimiento y cerramientos con equipos preparados para actuar en toda Cataluña.',
    },
    {
      ca: 'Prioritzem seguretat, ordre i acabat professional en cada intervenció, tant si es tracta d’una poda en altura com d’un vallat perimetral o d’un manteniment periòdic.',
      es: 'Priorizamos seguridad, orden y acabado profesional en cada intervención, tanto si se trata de una poda en altura como de un vallado perimetral o de un mantenimiento periódico.',
    },
  ],
  stats: [
    {
      value: '+15',
      label: {
        ca: "Anys d'experiència en jardineria professional",
        es: 'Años de experiencia en jardinería profesional',
      },
    },
    {
      value: '+800',
      label: {
        ca: 'Projectes completats arreu de Catalunya',
        es: 'Proyectos completados en toda Cataluña',
      },
    },
    {
      value: '48h',
      label: {
        ca: 'Temps de resposta garantit per a pressupostos',
        es: 'Tiempo de respuesta garantizado para presupuestos',
      },
    },
    {
      value: '100%',
      label: {
        ca: 'Satisfacció garantida en tots els serveis',
        es: 'Satisfacción garantizada en todos los servicios',
      },
    },
  ],
};

export const servicesIntro = {
  label: { ca: 'Els nostres serveis', es: 'Nuestros servicios' },
  title: {
    ca: 'Solucions completes per al seu espai verd',
    es: 'Soluciones completas para su espacio verde',
  },
  description: {
    ca: "Professionals amb maquinària homologada i equip assegurat per a qualsevol tipus de treball forestal, agrícola o d'espais verds.",
    es: 'Profesionales con maquinaria homologada y equipo asegurado para cualquier tipo de trabajo forestal, agrícola o de espacios verdes.',
  },
  quickListTitle: {
    ca: 'Tot el que necessites en un sol lloc',
    es: 'Todo lo que necesitas en un solo lugar',
  },
  quickItems: [
    { icon: '🌿', label: { ca: 'Jardineria', es: 'Jardinería' } },
    { icon: '✂️', label: { ca: 'Poda i tala', es: 'Poda y tala' } },
    { icon: '🌲', label: { ca: 'Desbrossament', es: 'Desbroce' } },
    { icon: '💧', label: { ca: 'Sistemes de reg', es: 'Sistemas de riego' } },
    { icon: '🏊', label: { ca: 'Piscines', es: 'Piscinas' } },
    { icon: '🔩', label: { ca: 'Tancaments', es: 'Cerramientos' } },
    { icon: '🛡️', label: { ca: 'Tractaments fitosanitaris', es: 'Tratamientos fitosanitarios' } },
  ],
};

export const services = [
  {
    icon: '🌳',
    title: { ca: 'Disseny de Jardins', es: 'Diseño de Jardines' },
    description: {
      ca: 'Creem jardins a mida des de zero, amb plantes autòctones i disseny paisatgístic personalitzat per a particulars i empreses.',
      es: 'Creamos jardines a medida desde cero, con plantas autóctonas y diseño paisajístico personalizado para particulares y empresas.',
    },
    image: '/trabajos/servicios/diseno-jardines-grava-decorativa.jpg',
    tags: [
      { ca: 'Disseny paisatgístic', es: 'Diseño paisajístico' },
      { ca: 'Plantes autòctones', es: 'Plantas autóctonas' },
      { ca: 'Jardins privats', es: 'Jardines privados' },
      { ca: 'Zones verdes empreses', es: 'Zonas verdes empresas' },
    ],
  },
  {
    icon: '✂️',
    title: { ca: 'Poda i Tala en Altura', es: 'Poda y Tala en Altura' },
    description: {
      ca: "Especialistes en poda d'arbres d'altura i eliminació segura de pins i arbres amb equip homologat i assegurat a tota Catalunya.",
      es: 'Especialistas en poda de árboles de altura y eliminación segura de pinos y árboles con equipo homologado y asegurado en toda Cataluña.',
    },
    image: '/trabajos/servicios/poda-tala-camion-grua.jpg',
    href: '/poda-arboles-barcelona',
    tags: [
      { ca: 'Treballs en altura', es: 'Trabajos en altura' },
      { ca: 'Equip homologat', es: 'Equipo homologado' },
      { ca: 'Tala controlada', es: 'Tala controlada' },
      { ca: 'Retirada de restes', es: 'Retirada de restos' },
    ],
  },
  {
    icon: '🌲',
    title: { ca: 'Desbrossaments', es: 'Desbroces' },
    description: {
      ca: "Neteja i desbrossament de parcel·les, finques i boscos amb maquinària professional. Prevenció d'incendis forestals.",
      es: 'Limpieza y desbroce de parcelas, fincas y bosques con maquinaria profesional. Prevención de incendios forestales.',
    },
    image: '/trabajos/servicios/desbroce-talud-limpio.jpg',
    href: '/desbroce-parcelas-barcelona',
    tags: [
      { ca: 'Prevenció incendis', es: 'Prevención incendios' },
      { ca: 'Parcel·les', es: 'Parcelas' },
      { ca: 'Boscos', es: 'Bosques' },
      { ca: 'Maquinària pesada', es: 'Maquinaria pesada' },
    ],
  },
  {
    icon: '💧',
    title: { ca: 'Sistemes de Reg', es: 'Sistemas de Riego' },
    description: {
      ca: "Instal·lació de reg per degoteig, aspersió i programadors intel·ligents per a jardins eficients i estalvi d'aigua.",
      es: 'Instalación de riego por goteo, aspersión y programadores inteligentes para jardines eficientes y ahorro de agua.',
    },
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    tags: [
      { ca: 'Reg degoteig', es: 'Riego por goteo' },
      { ca: 'Aspersió', es: 'Aspersión' },
      { ca: 'Programadors intel·ligents', es: 'Programadores inteligentes' },
      { ca: "Estalvi d'aigua", es: 'Ahorro de agua' },
    ],
  },
  {
    icon: '🏠',
    title: { ca: 'Manteniment Periòdic', es: 'Mantenimiento Periódico' },
    description: {
      ca: "Plans mensuals o trimestrals de poda, sega, fertilitzat i control de plagues. Mantenim el seu jardí impecable tot l'any.",
      es: 'Planes mensuales o trimestrales de poda, siega, fertilización y control de plagas. Mantenemos su jardín impecable todo el año.',
    },
    image: '/trabajos/servicios/mantenimiento-parcela-despejada.jpg',
    tags: [
      { ca: 'Pla mensual', es: 'Plan mensual' },
      { ca: 'Pla trimestral', es: 'Plan trimestral' },
      { ca: 'Control plagues', es: 'Control de plagas' },
      { ca: 'Fertilitzat', es: 'Fertilización' },
    ],
  },
  {
    icon: '🔩',
    title: { ca: 'Tancaments i Vallats', es: 'Cerramientos y Vallados' },
    description: {
      ca: 'Instal·lació professional de tancaments metàl·lics, fusta, PVC, alumini, ferro i pedra. Garantia 5 anys.',
      es: 'Instalación profesional de cerramientos metálicos, madera, PVC, aluminio, hierro y piedra. Garantía 5 años.',
    },
    image: '/trabajos/servicios/cerramiento-portillo-metalico.jpg',
    tags: [
      { ca: 'Metàl·lic', es: 'Metálico' },
      { ca: 'Fusta', es: 'Madera' },
      { ca: 'PVC i alumini', es: 'PVC y aluminio' },
      { ca: '5 anys garantia', es: '5 años garantía' },
    ],
  },
  {
    icon: '🏊',
    title: { ca: 'Manteniment de Piscines', es: 'Mantenimiento de Piscinas' },
    description: {
      ca: "Neteja, tractament de l'aigua, revisió d'instal·lacions i posada a punt de la seva piscina per a la temporada d'estiu.",
      es: 'Limpieza, tratamiento del agua, revisión de instalaciones y puesta a punto de su piscina para la temporada de verano.',
    },
    image: '/trabajos/servicios/mantenimiento-piscina-vaciada.jpg',
    tags: [
      { ca: 'Tractament aigua', es: 'Tratamiento agua' },
      { ca: 'Neteja fons', es: 'Limpieza fondo' },
      { ca: 'Revisió bombes', es: 'Revisión bombas' },
      { ca: 'Posada a punt', es: 'Puesta a punto' },
    ],
  },
  {
    icon: '🛡️',
    title: { ca: 'Tractaments Fitosanitaris', es: 'Tratamientos Fitosanitarios' },
    description: {
      ca: 'Control i eliminació de plagues, malalties i fongs en arbres, jardins i cultius. Productes homologats i respectuosos.',
      es: 'Control y eliminación de plagas, enfermedades y hongos en árboles, jardines y cultivos. Productos homologados y respetuosos.',
    },
    image: 'https://images.unsplash.com/photo-1599629954294-14df9ec8dfe2?w=600&q=80',
    tags: [
      { ca: 'Control plagues', es: 'Control plagas' },
      { ca: 'Productes homologats', es: 'Productos homologados' },
      { ca: 'Fongs i malalties', es: 'Hongos y enfermedades' },
      { ca: 'Cultius', es: 'Cultivos' },
    ],
  },
  {
    icon: '🌾',
    title: { ca: 'Neteja de Terrenys', es: 'Limpieza de Terrenos' },
    description: {
      ca: 'Desbrossament i neteja de parcel·les i solars per a particulars, comunitats i empreses. Servei ràpid i eficient.',
      es: 'Desbroce y limpieza de parcelas y solares para particulares, comunidades y empresas. Servicio rápido y eficiente.',
    },
    image: '/trabajos/servicios/limpieza-terreno-con-tocones.jpg',
    href: '/tala-arboles-barcelona',
    tags: [
      { ca: 'Particulars', es: 'Particulares' },
      { ca: 'Comunitats', es: 'Comunidades' },
      { ca: 'Empreses', es: 'Empresas' },
      { ca: 'Servei urgent', es: 'Servicio urgente' },
    ],
  },
];

export const fences = {
  label: { ca: 'Tancaments i Vallats', es: 'Cerramientos y Vallados' },
  title: {
    ca: 'Tancament complet de terrenys, parcel·les i finques',
    es: 'Cerrado completo de terrenos, parcelas y fincas',
  },
  badge: {
    ca: 'Instal·lació garantida 5 anys',
    es: 'Instalación garantizada 5 años',
  },
  paragraphs: [
    {
      ca: "Fem el tancament complet de terrenys, parcel·les, finques rústiques i zones forestals perquè quedin ben delimitades, protegides i preparades per a un ús segur.",
      es: 'Realizamos el cerrado completo de terrenos, parcelas, fincas rústicas y zonas forestales para que queden bien delimitadas, protegidas y preparadas para un uso seguro.',
    },
    {
      ca: 'Instal·lem des de malla simple torsió i tanca cinegètica fins a panell rígid, pals reforçats i portes d’accés, adaptant el vallat al perímetre real del terreny i al tipus d’ús que necessitis.',
      es: 'Instalamos desde malla simple torsión y vallado cinegético hasta panel rígido, postes reforzados y puertas de acceso, adaptando el vallado al perímetro real del terreno y al tipo de uso que necesites.',
    },
  ],
  types: [
    {
      ca: 'Tancament complet de parcel·les i terrenys rústics',
      es: 'Cerrado completo de parcelas y terrenos rústicos',
    },
    {
      ca: 'Malla simple torsió i tanca cinegètica per delimitar finques',
      es: 'Malla simple torsión y vallado cinegético para delimitar fincas',
    },
    {
      ca: 'Panell rígid i electrosoldat per tancat perimetral segur',
      es: 'Panel rígido y electrosoldado para cerrado perimetral seguro',
    },
    {
      ca: 'Portes metàl·liques d’accés per a vehicles, maquinària o manteniment',
      es: 'Puertas metálicas de acceso para vehículos, maquinaria o mantenimiento',
    },
    {
      ca: 'Reforç de pals, cantonades i tensors en terrenys irregulars',
      es: 'Refuerzo de postes, esquinas y tensores en terrenos irregulares',
    },
    {
      ca: 'Tancament de seguretat per a recintes forestals o industrials',
      es: 'Cerramiento de seguridad para recintos forestales o industriales',
    },
  ],
};

export const zonesIntro = {
  label: { ca: 'Cobertura territorial', es: 'Cobertura territorial' },
  title: {
    ca: 'Servei a tota Catalunya',
    es: 'Servicio en toda Cataluña',
  },
  description: {
    ca: "Disposem d'equips mòbils distribuïts per tot el territori per garantir un servei ràpid i de qualitat en qualsevol punt de Catalunya.",
    es: 'Disponemos de equipos móviles distribuidos por todo el territorio para garantizar un servicio rápido y de calidad en cualquier punto de Cataluña.',
  },
};

export const zones = [
  ['Barcelona', 'Barcelonès · Maresme · Vallès'],
  ['Girona', 'Empordà · La Selva · Ripollès'],
  ['Tarragona', 'Tarragonès · Baix Camp · Priorat'],
  ['Lleida', 'Segrià · Noguera · Urgell'],
  ['Costa Brava', 'Roses · Begur · Tossa de Mar'],
  ['Costa Daurada', 'Salou · Cambrils · Calafell'],
  ['Pirineus', 'Cerdanya · Pallars · Aran'],
  ["Terres de l'Ebre", 'Amposta · Tortosa · Deltebre'],
].map(([name, desc]) => ({
  name,
  desc,
  contactHref: buildQuoteRequestPath({ zona: name }),
}));

export const projects = {
  label: { ca: 'Treballs reals', es: 'Trabajos reales' },
  title: {
    ca: 'Exemples d’obra executada per l’equip',
    es: 'Ejemplos de obra ejecutada por el equipo',
  },
  description: {
    ca: 'Una selecció de feines reals de tala, desbrossament, tancaments i manteniment perquè puguis veure acabat, entorn i tipus d’intervenció.',
    es: 'Una selección de trabajos reales de tala, desbroce, cerramientos y mantenimiento para que puedas ver acabado, entorno y tipo de intervención.',
  },
  items: [
    {
      image: '/trabajos/galeria/poda-altura-arborista.jpg',
      title: { ca: 'Poda en altura amb arborista', es: 'Poda en altura con arborista' },
      summary: {
        ca: 'Treball vertical en pi de gran alçada amb accés controlat i seguretat de maniobra.',
        es: 'Trabajo vertical en pino de gran altura con acceso controlado y seguridad de maniobra.',
      },
      meta: { ca: 'Poda i tala · Treball en altura', es: 'Poda y tala · Trabajo en altura' },
    },
    {
      image: '/trabajos/galeria/cerramiento-malla-talud-lateral.jpg',
      title: { ca: 'Tancament de talús amb malla', es: 'Cerramiento de talud con malla' },
      summary: {
        ca: 'Instal·lació de tancament metàl·lic adaptat al desnivell i al perímetre real del terreny.',
        es: 'Instalación de cerramiento metálico adaptado al desnivel y al perímetro real del terreno.',
      },
      meta: { ca: 'Tancaments · Finca en pendent', es: 'Cerramientos · Finca en pendiente' },
    },
    {
      image: '/trabajos/galeria/limpieza-pinar-urbano.jpg',
      title: { ca: 'Desbrossament de pinar urbà', es: 'Desbroce de pinar urbano' },
      summary: {
        ca: 'Neteja i manteniment de parcel·la amb pendent per reduir vegetació acumulada i millorar accés.',
        es: 'Limpieza y mantenimiento de parcela con pendiente para reducir vegetación acumulada y mejorar acceso.',
      },
      meta: { ca: 'Desbrossaments · Entorn residencial', es: 'Desbroces · Entorno residencial' },
    },
    {
      image: '/trabajos/galeria/tala-controlada-piscina.jpg',
      title: { ca: 'Tala controlada a zona residencial', es: 'Tala controlada en zona residencial' },
      summary: {
        ca: 'Desmuntatge progressiu amb zona de treball protegida i retirada de restes de gran volum.',
        es: 'Desmontaje progresivo con zona de trabajo protegida y retirada de restos de gran volumen.',
      },
      meta: { ca: 'Tala · Camió grua i suport', es: 'Tala · Camión grúa y apoyo' },
    },
    {
      image: '/trabajos/galeria/cerramiento-panel-porton.jpg',
      title: { ca: 'Tanca perimetral amb portó', es: 'Valla perimetral con portón' },
      summary: {
        ca: 'Línia de tancament reforçada amb accés integrat per a vehicles i manteniment.',
        es: 'Línea de cerramiento reforzada con acceso integrado para vehículos y mantenimiento.',
      },
      meta: { ca: 'Tancaments · Accés metàl·lic', es: 'Cerramientos · Acceso metálico' },
    },
    {
      image: '/trabajos/galeria/piscina-vaciada-anclajes.jpg',
      title: { ca: 'Manteniment de piscina', es: 'Mantenimiento de piscina' },
      summary: {
        ca: 'Treball de preparació i intervenció sobre vas buit per a posada a punt i revisió.',
        es: 'Trabajo de preparación e intervención sobre vaso vacío para puesta a punto y revisión.',
      },
      meta: { ca: 'Piscines · Posada a punt', es: 'Piscinas · Puesta a punto' },
    },
  ],
  videosTitle: { ca: 'Vídeos de treball', es: 'Vídeos de trabajo' },
  videosDescription: {
    ca: 'Alguns clips curts d’intervencions reals sobre el terreny.',
    es: 'Algunos clips cortos de intervenciones reales sobre el terreno.',
  },
  videos: [
    {
      src: '/trabajos/videos/trabajo-altura-01.mp4',
      title: { ca: 'Treball en altura', es: 'Trabajo en altura' },
      summary: {
        ca: 'Intervenció vertical amb equip especialitzat.',
        es: 'Intervención vertical con equipo especializado.',
      },
    },
    {
      src: '/trabajos/videos/trabajo-forestal-01.mp4',
      title: { ca: 'Treball forestal', es: 'Trabajo forestal' },
      summary: {
        ca: 'Procés real d’execució en camp.',
        es: 'Proceso real de ejecución en campo.',
      },
    },
    {
      src: '/trabajos/videos/trabajo-parcela-01.mp4',
      title: { ca: 'Treball de parcel·la', es: 'Trabajo de parcela' },
      summary: {
        ca: 'Mostra breu de feina en entorn residencial.',
        es: 'Muestra breve de trabajo en entorno residencial.',
      },
    },
  ],
  galleryCta: {
    ca: 'Veure galeria completa',
    es: 'Ver galería completa',
  },
  gallery: [
    {
      image: '/trabajos/galeria/tala-controlada-trepador.jpg',
      title: { ca: 'Tala controlada amb trepador', es: 'Tala controlada con trepador' },
      meta: { ca: 'Tala · Entorn residencial', es: 'Tala · Entorno residencial' },
    },
    {
      image: '/trabajos/galeria/tala-controlada-camion-grua.jpg',
      title: { ca: 'Suport amb camió grua', es: 'Apoyo con camión grúa' },
      meta: { ca: 'Tala · Retirada de tronc', es: 'Tala · Retirada de tronco' },
    },
    {
      image: '/trabajos/galeria/poda-altura-arborista.jpg',
      title: { ca: 'Poda en altura', es: 'Poda en altura' },
      meta: { ca: 'Arboricultura · Seguretat', es: 'Arboricultura · Seguridad' },
    },
    {
      image: '/trabajos/galeria/poda-pino-gran-formato.jpg',
      title: { ca: 'Intervenció en pi gran', es: 'Intervención en pino grande' },
      meta: { ca: 'Poda · Treball tècnic', es: 'Poda · Trabajo técnico' },
    },
    {
      image: '/trabajos/galeria/cerramiento-malla-talud-frontal.jpg',
      title: { ca: 'Malla en talús', es: 'Malla en talud' },
      meta: { ca: 'Tancaments · Façana', es: 'Cerramientos · Frente' },
    },
    {
      image: '/trabajos/galeria/cerramiento-malla-talud-lateral.jpg',
      title: { ca: 'Tancament lateral', es: 'Cerramiento lateral' },
      meta: { ca: 'Tancaments · Desnivell', es: 'Cerramientos · Desnivel' },
    },
    {
      image: '/trabajos/galeria/cerramiento-postes-alineados.jpg',
      title: { ca: 'Alineació de pals', es: 'Alineación de postes' },
      meta: { ca: 'Tancaments · Execució', es: 'Cerramientos · Ejecución' },
    },
    {
      image: '/trabajos/galeria/cerramiento-panel-porton.jpg',
      title: { ca: 'Portó i tanca metàl·lica', es: 'Portón y valla metálica' },
      meta: { ca: 'Tancaments · Accés', es: 'Cerramientos · Acceso' },
    },
    {
      image: '/trabajos/galeria/cimentacion-cerramiento-armado.jpg',
      title: { ca: 'Fonamentació armada', es: 'Cimentación armada' },
      meta: { ca: 'Tancaments · Base', es: 'Cerramientos · Base' },
    },
    {
      image: '/trabajos/galeria/muro-bloque-cerramiento-obra.jpg',
      title: { ca: 'Mur de bloc en obra', es: 'Muro de bloque en obra' },
      meta: { ca: 'Tancament d’obra', es: 'Cerramiento de obra' },
    },
    {
      image: '/trabajos/galeria/desbroce-talud-antes.jpg',
      title: { ca: 'Talús abans de sanejar', es: 'Talud antes de sanear' },
      meta: { ca: 'Desbrossament · Abans', es: 'Desbroce · Antes' },
    },
    {
      image: '/trabajos/galeria/limpieza-talud-urbano.jpg',
      title: { ca: 'Talús urbà netejat', es: 'Talud urbano limpiado' },
      meta: { ca: 'Desbrossament · Després', es: 'Desbroce · Después' },
    },
    {
      image: '/trabajos/galeria/limpieza-pinar-urbano.jpg',
      title: { ca: 'Neteja de pinar', es: 'Limpieza de pinar' },
      meta: { ca: 'Manteniment · Parcel·la', es: 'Mantenimiento · Parcela' },
    },
    {
      image: '/trabajos/galeria/piscina-vaciada-anclajes.jpg',
      title: { ca: 'Piscina en posada a punt', es: 'Piscina en puesta a punto' },
      meta: { ca: 'Piscines · Manteniment', es: 'Piscinas · Mantenimiento' },
    },
  ],
};

export const serviceLandingPages = {
  [podaBarcelonaPath]: {
    eyebrow: { ca: "Poda d'arbres", es: 'Poda de árboles' },
    title: {
      ca: "Poda d'arbres en altura a Barcelona i rodalia",
      es: 'Poda de árboles en altura en Barcelona y alrededores',
    },
    description: {
      ca: "Fem poda tècnica i controlada de pins i arbres en jardins, parcel·les, comunitats i entorns residencials amb equip preparat per treballar en altura.",
      es: 'Realizamos poda técnica y controlada de pinos y árboles en jardines, parcelas, comunidades y entornos residenciales con equipo preparado para trabajar en altura.',
    },
    image: '/trabajos/galeria/poda-altura-arborista.jpg',
    intro: {
      ca: "Si necessites una empresa de poda d'arbres a Barcelona, treballem amb criteri tècnic, seguretat i ordre a l'obra. Actuem tant en poda de manteniment com en reduccions, sanejament i actuacions en altura.",
      es: 'Si necesitas una empresa de poda de árboles en Barcelona, trabajamos con criterio técnico, seguridad y orden en obra. Actuamos tanto en poda de mantenimiento como en reducciones, saneamiento y trabajos en altura.',
    },
    paragraphs: [
      {
        ca: "La poda d'arbres no consisteix només a tallar branques. Cal valorar l'espècie, l'estat estructural, la proximitat a habitatges o línies i la manera més segura d'executar cada tall.",
        es: 'La poda de árboles no consiste solo en cortar ramas. Hay que valorar la especie, el estado estructural, la proximidad a viviendas o líneas y la forma más segura de ejecutar cada corte.',
      },
      {
        ca: 'Treballem a Barcelona i municipis propers per a particulars, comunitats i finques que necessiten mantenir arbres grans en condicions segures i controlades.',
        es: 'Trabajamos en Barcelona y municipios cercanos para particulares, comunidades y fincas que necesitan mantener árboles grandes en condiciones seguras y controladas.',
      },
    ],
    bullets: [
      { ca: 'Poda en altura amb tècniques d’arboricultura', es: 'Poda en altura con técnicas de arboricultura' },
      { ca: 'Sanejament i retirada de branques perilloses', es: 'Saneamiento y retirada de ramas peligrosas' },
      { ca: 'Intervenció en parcel·les, jardins i comunitats', es: 'Intervención en parcelas, jardines y comunidades' },
      { ca: 'Retirada de restes vegetals i neteja final', es: 'Retirada de restos vegetales y limpieza final' },
    ],
  },
  [talaBarcelonaPath]: {
    eyebrow: { ca: "Tala d'arbres", es: 'Tala de árboles' },
    title: {
      ca: "Tala controlada d'arbres i pins a Barcelona",
      es: 'Tala controlada de árboles y pinos en Barcelona',
    },
    description: {
      ca: "Executem tala controlada en entorns residencials, parcel·les i finques amb planificació de maniobra, seguretat i retirada de troncs i restes.",
      es: 'Ejecutamos tala controlada en entornos residenciales, parcelas y fincas con planificación de maniobra, seguridad y retirada de troncos y restos.',
    },
    image: '/trabajos/galeria/tala-controlada-piscina.jpg',
    intro: {
      ca: "Quan un arbre s'ha de retirar, el més important és fer-ho sense risc per a persones, habitatges o tancaments. A CB Forestal fem tala controlada a Barcelona amb suport tècnic i equip adequat.",
      es: 'Cuando un árbol debe retirarse, lo más importante es hacerlo sin riesgo para personas, viviendas o cerramientos. En CB Forestal hacemos tala controlada en Barcelona con apoyo técnico y equipo adecuado.',
    },
    paragraphs: [
      {
        ca: 'Actuem en pins, arbres grans i exemplars situats en zones complicades, valorant accessos, desnivells i possibles interferències abans de començar.',
        es: 'Actuamos en pinos, árboles grandes y ejemplares situados en zonas complicadas, valorando accesos, desniveles y posibles interferencias antes de empezar.',
      },
      {
        ca: 'El servei inclou, segons el cas, desmuntatge per trams, suport amb camió grua, retirada de fusta i neteja de la zona de treball.',
        es: 'El servicio incluye, según el caso, desmontaje por tramos, apoyo con camión grúa, retirada de madera y limpieza de la zona de trabajo.',
      },
    ],
    bullets: [
      { ca: 'Tala controlada en entorn residencial', es: 'Tala controlada en entorno residencial' },
      { ca: 'Desmuntatge per trams i maniobra segura', es: 'Desmontaje por tramos y maniobra segura' },
      { ca: 'Retirada de troncs, branques i restes', es: 'Retirada de troncos, ramas y restos' },
      { ca: 'Servei ràpid a Barcelona i Catalunya', es: 'Servicio rápido en Barcelona y Cataluña' },
    ],
  },
  [desbroceBarcelonaPath]: {
    eyebrow: { ca: 'Desbrossament', es: 'Desbroce' },
    title: {
      ca: 'Desbrossament de parcel·les i talussos a Barcelona',
      es: 'Desbroce de parcelas y taludes en Barcelona',
    },
    description: {
      ca: 'Netegem parcel·les, finques i zones amb pendent per reduir vegetació acumulada, millorar accessos i prevenir risc d’incendi.',
      es: 'Limpiamos parcelas, fincas y zonas con pendiente para reducir vegetación acumulada, mejorar accesos y prevenir riesgo de incendio.',
    },
    image: '/trabajos/servicios/desbroce-talud-limpio.jpg',
    intro: {
      ca: 'El desbrossament és una feina clau per mantenir una parcel·la segura i preparada. Treballem a Barcelona i rodalia en solars, talussos, finques i zones forestals.',
      es: 'El desbroce es un trabajo clave para mantener una parcela segura y preparada. Trabajamos en Barcelona y alrededores en solares, taludes, fincas y zonas forestales.',
    },
    paragraphs: [
      {
        ca: 'Actuem tant en neteges puntuals com en manteniment periòdic, especialment en zones on la vegetació creix ràpid o hi ha acumulació de restes seques.',
        es: 'Actuamos tanto en limpiezas puntuales como en mantenimiento periódico, especialmente en zonas donde la vegetación crece rápido o hay acumulación de restos secos.',
      },
      {
        ca: 'És un servei especialment útil abans d’estiu, en parcel·les abandonades o en terrenys que necessiten una posada a punt per vendre, construir o mantenir.',
        es: 'Es un servicio especialmente útil antes del verano, en parcelas abandonadas o en terrenos que necesitan una puesta a punto para vender, construir o mantener.',
      },
    ],
    bullets: [
      { ca: 'Desbrossament de parcel·les i solars', es: 'Desbroce de parcelas y solares' },
      { ca: 'Neteja de talussos i zones amb pendent', es: 'Limpieza de taludes y zonas con pendiente' },
      { ca: 'Prevenció d’incendis i sanejament', es: 'Prevención de incendios y saneamiento' },
      { ca: 'Manteniment puntual o recurrent', es: 'Mantenimiento puntual o recurrente' },
    ],
  },
};

export const processSection = {
  label: { ca: 'Com treballem', es: 'Cómo trabajamos' },
  title: {
    ca: 'El nostre procés, senzill i transparent',
    es: 'Nuestro proceso, sencillo y transparente',
  },
  steps: [
    {
      number: '01',
      title: { ca: 'Consulta gratuïta', es: 'Consulta gratuita' },
      description: {
        ca: "Contacta'ns per formulari web o correu electrònic. T'assessorem sense cap compromís.",
        es: 'Contáctanos por formulario web o correo electrónico. Te asesoramos sin ningún compromiso.',
      },
    },
    {
      number: '02',
      title: { ca: 'Visita i pressupost', es: 'Visita y presupuesto' },
      description: {
        ca: "Visitem l'espai i t'enviem un pressupost detallat i sense sorpreses en menys de 48h.",
        es: 'Visitamos el espacio y te enviamos un presupuesto detallado y sin sorpresas en menos de 48h.',
      },
    },
    {
      number: '03',
      title: { ca: 'Execució', es: 'Ejecución' },
      description: {
        ca: "El nostre equip treballa amb professionalitat, respectant terminis i mantenint l'ordre.",
        es: 'Nuestro equipo trabaja con profesionalidad, respetando plazos y manteniendo el orden.',
      },
    },
    {
      number: '04',
      title: { ca: 'Seguiment', es: 'Seguimiento' },
      description: {
        ca: "Un cop acabada la feina, t'oferim pla de manteniment i servei postvenda garantit.",
        es: 'Una vez terminado el trabajo, te ofrecemos plan de mantenimiento y servicio posventa garantizado.',
      },
    },
  ],
};

export const testimonials = {
  label: { ca: 'Clients satisfets', es: 'Clientes satisfechos' },
  title: {
    ca: 'El que diuen de nosaltres',
    es: 'Lo que dicen de nosotros',
  },
  items: [
    {
      text: {
        ca: 'Van dissenyar el nostre jardí de zero i va quedar espectacular. Molt professionals i amables. Ens van assessorar en tot moment amb la selecció de plantes.',
        es: 'Diseñaron nuestro jardín desde cero y quedó espectacular. Muy profesionales y amables. Nos asesoraron en todo momento con la selección de plantas.',
      },
      author: 'Marta G.',
      location: 'Sant Cugat del Vallès',
      badge: { ca: 'Projecte residencial', es: 'Proyecto residencial' },
    },
    {
      text: {
        ca: 'Excel·lents en el manteniment periòdic. Fa 3 anys que treballen amb nosaltres i el jardí mai havia estat tan bé. Molt recomanables.',
        es: 'Excelentes en el mantenimiento periódico. Hace 3 años que trabajan con nosotros y el jardín nunca había estado tan bien. Muy recomendables.',
      },
      author: 'Josep M.',
      location: 'Girona',
      badge: { ca: 'Manteniment continuat', es: 'Mantenimiento continuado' },
    },
    {
      text: {
        ca: 'Van instal·lar el tancament de la nostra finca en dos dies i amb una qualitat impressionant. Pressupost molt competitiu i sense sorpreses.',
        es: 'Instalaron el cerramiento de nuestra finca en dos días y con una calidad impresionante. Presupuesto muy competitivo y sin sorpresas.',
      },
      author: 'Anna P.',
      location: 'Tarragona',
      badge: { ca: 'Tancament de finca', es: 'Cerramiento de finca' },
    },
  ],
};

export const contact = {
  label: { ca: 'Contacte', es: 'Contacto' },
  title: {
    ca: 'Comença avui el jardí dels teus somnis',
    es: 'Empieza hoy el jardín de tus sueños',
  },
  description: {
    ca: "Deixa'ns el teu telèfon o correu i t'atenem en menys de 24 hores. Pressupost gratuït i sense compromís.",
    es: 'Déjanos tu teléfono o correo y te atendemos en menos de 24 horas. Presupuesto gratuito y sin compromiso.',
  },
  notePrefix: {
    ca: 'També ens pots contactar directament:',
    es: 'También puedes contactarnos directamente:',
  },
};

export const footer = {
  brand: {
    ca: 'Professionals en jardineria i tancaments a tota Catalunya des del 2009. Qualitat, confiança i respecte pel medi ambient.',
    es: 'Profesionales en jardinería y cerramientos en toda Cataluña desde 2009. Calidad, confianza y respeto por el medio ambiente.',
  },
  servicesTitle: { ca: 'Serveis', es: 'Servicios' },
  zonesTitle: { ca: 'Zones', es: 'Zonas' },
  contactTitle: { ca: 'Contacte', es: 'Contacto' },
  rights: {
    ca: `© ${new Date().getFullYear()} CB FORESTAL · Tots els drets reservats`,
    es: `© ${new Date().getFullYear()} CB FORESTAL · Todos los derechos reservados`,
  },
  legalLinks: [
    {
      to: '/privacidad',
      label: { ca: 'Política de privacitat', es: 'Política de privacidad' },
    },
    {
      to: '/aviso-legal',
      label: { ca: 'Avís legal', es: 'Aviso legal' },
    },
    {
      to: '/cookies',
      label: { ca: 'Cookies', es: 'Cookies' },
    },
  ],
};

export const legalPages = {
  privacy: {
    label: { ca: 'Política de privacitat', es: 'Política de privacidad' },
    title: {
      ca: 'Com tractem les teves dades de contacte',
      es: 'Cómo tratamos tus datos de contacto',
    },
    description: {
      ca: 'Aquesta política explica com utilitzem la informació que ens envies quan demanes informació o pressupost a través del web o del correu electrònic.',
      es: 'Esta política explica cómo utilizamos la información que nos envías cuando solicitas información o presupuesto a través de la web o del correo electrónico.',
    },
    sections: [
      {
        title: { ca: 'Responsable del tractament', es: 'Responsable del tratamiento' },
        paragraphs: [
          {
            ca: `${company.name} és la responsable del tractament de les dades personals facilitades a través d'aquest lloc web i dels canals de contacte publicats.`,
            es: `${company.name} es la responsable del tratamiento de los datos personales facilitados a través de este sitio web y de los canales de contacto publicados.`,
          },
          {
            ca: `Per a qualsevol consulta relativa a privacitat ens pots escriure a ${company.email} o trucar al ${company.phone}.`,
            es: `Para cualquier consulta relativa a privacidad puedes escribirnos a ${company.email} o llamar al ${company.phone}.`,
          },
        ],
      },
      {
        title: { ca: 'Quines dades recollim', es: 'Qué datos recogemos' },
        paragraphs: [
          {
            ca: 'Nom, telèfon, correu electrònic, servei sol·licitat i el contingut del missatge que ens enviïs voluntàriament.',
            es: 'Nombre, teléfono, correo electrónico, servicio solicitado y el contenido del mensaje que nos envíes voluntariamente.',
          },
        ],
      },
      {
        title: { ca: 'Finalitat i base jurídica', es: 'Finalidad y base jurídica' },
        paragraphs: [
          {
            ca: 'Utilitzem aquestes dades per respondre consultes, preparar pressupostos, gestionar comunicacions comercials relacionades amb la teva sol·licitud i fer seguiment del servei si el contractes.',
            es: 'Utilizamos estos datos para responder consultas, preparar presupuestos, gestionar comunicaciones comerciales relacionadas con tu solicitud y hacer seguimiento del servicio si lo contratas.',
          },
          {
            ca: 'La base jurídica és l’aplicació de mesures precontractuals a petició de l’interessat i, quan correspongui, el consentiment prestat en contactar-nos.',
            es: 'La base jurídica es la aplicación de medidas precontractuales a petición del interesado y, cuando corresponda, el consentimiento prestado al contactarnos.',
          },
        ],
      },
      {
        title: { ca: 'Conservació de les dades', es: 'Conservación de los datos' },
        paragraphs: [
          {
            ca: 'Conservarem les dades el temps necessari per atendre la teva petició i, si finalment hi ha contractació, durant els terminis exigits per les obligacions legals i administratives aplicables.',
            es: 'Conservaremos los datos el tiempo necesario para atender tu petición y, si finalmente hay contratación, durante los plazos exigidos por las obligaciones legales y administrativas aplicables.',
          },
        ],
      },
      {
        title: { ca: 'Drets de l’usuari', es: 'Derechos del usuario' },
        paragraphs: [
          {
            ca: 'Pots exercir els drets d’accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a l’adreça electrònica indicada en aquesta pàgina.',
            es: 'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a la dirección electrónica indicada en esta página.',
          },
          {
            ca: 'Si consideres que el tractament no s’ajusta a la normativa, pots presentar una reclamació davant l’autoritat de control competent.',
            es: 'Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la autoridad de control competente.',
          },
        ],
      },
    ],
  },
  legalNotice: {
    label: { ca: 'Avís legal', es: 'Aviso legal' },
    title: {
      ca: 'Condicions d’ús del lloc web',
      es: 'Condiciones de uso del sitio web',
    },
    description: {
      ca: 'Aquest espai regula l’accés i ús del lloc web corporatiu de CB Forestal i la informació que s’hi publica.',
      es: 'Este espacio regula el acceso y uso del sitio web corporativo de CB Forestal y la información que se publica en él.',
    },
    sections: [
      {
        title: { ca: 'Titular del lloc web', es: 'Titular del sitio web' },
        paragraphs: [
          {
            ca: `${company.name} posa a disposició dels usuaris aquest lloc web com a canal d'informació sobre els seus serveis de jardineria i tancaments a Catalunya.`,
            es: `${company.name} pone a disposición de los usuarios este sitio web como canal de información sobre sus servicios de jardinería y cerramientos en Cataluña.`,
          },
          {
            ca: `Per a comunicacions directes pots utilitzar el correu ${company.email} o el telèfon ${company.phone}.`,
            es: `Para comunicaciones directas puedes utilizar el correo ${company.email} o el teléfono ${company.phone}.`,
          },
        ],
      },
      {
        title: { ca: 'Ús del lloc web', es: 'Uso del sitio web' },
        paragraphs: [
          {
            ca: 'L’usuari es compromet a fer un ús adequat dels continguts, a no emprar-los per a activitats il·lícites i a no danyar els sistemes físics o lògics del lloc web.',
            es: 'El usuario se compromete a hacer un uso adecuado de los contenidos, a no emplearlos para actividades ilícitas y a no dañar los sistemas físicos o lógicos del sitio web.',
          },
        ],
      },
      {
        title: { ca: 'Propietat intel·lectual', es: 'Propiedad intelectual' },
        paragraphs: [
          {
            ca: 'Els textos, dissenys, logotips, marques i altres continguts del web estan protegits per la normativa aplicable i no es poden reproduir sense autorització prèvia.',
            es: 'Los textos, diseños, logotipos, marcas y demás contenidos de la web están protegidos por la normativa aplicable y no pueden reproducirse sin autorización previa.',
          },
        ],
      },
      {
        title: { ca: 'Responsabilitat', es: 'Responsabilidad' },
        paragraphs: [
          {
            ca: 'CB Forestal treballa perquè la informació publicada sigui correcta i actualitzada, però no garanteix l’absència absoluta d’errors ni la disponibilitat permanent del lloc web.',
            es: 'CB Forestal trabaja para que la información publicada sea correcta y actualizada, pero no garantiza la ausencia absoluta de errores ni la disponibilidad permanente del sitio web.',
          },
        ],
      },
    ],
  },
  cookies: {
    label: { ca: 'Política de cookies', es: 'Política de cookies' },
    title: {
      ca: 'Cookies i tecnologies similars',
      es: 'Cookies y tecnologías similares',
    },
    description: {
      ca: 'Aquest lloc web utilitza únicament les cookies necessàries per al funcionament bàsic i pot carregar recursos de tercers com tipografies o imatges.',
      es: 'Este sitio web utiliza únicamente las cookies necesarias para el funcionamiento básico y puede cargar recursos de terceros como tipografías o imágenes.',
    },
    sections: [
      {
        title: { ca: 'Què és una cookie', es: 'Qué es una cookie' },
        paragraphs: [
          {
            ca: 'Una cookie és un petit fitxer que s’emmagatzema al teu navegador i que permet recordar informació sobre la visita o millorar determinades funcions tècniques.',
            es: 'Una cookie es un pequeño archivo que se almacena en tu navegador y que permite recordar información sobre la visita o mejorar determinadas funciones técnicas.',
          },
        ],
      },
      {
        title: { ca: 'Cookies utilitzades', es: 'Cookies utilizadas' },
        paragraphs: [
          {
            ca: 'Actualment el lloc web només utilitza una dada local per recordar l’idioma seleccionat entre català i castellà. Aquesta preferència no s’utilitza amb finalitats publicitàries.',
            es: 'Actualmente el sitio web solo utiliza un dato local para recordar el idioma seleccionado entre catalán y castellano. Esta preferencia no se utiliza con fines publicitarios.',
          },
          {
            ca: 'També es poden carregar recursos externs de proveïdors com Google Fonts o serveis d’imatge, subjectes a les seves pròpies polítiques.',
            es: 'También pueden cargarse recursos externos de proveedores como Google Fonts o servicios de imagen, sujetos a sus propias políticas.',
          },
        ],
      },
      {
        title: { ca: 'Com gestionar-les', es: 'Cómo gestionarlas' },
        paragraphs: [
          {
            ca: 'Pots configurar el teu navegador per bloquejar o eliminar cookies. Tingues en compte que això podria afectar algunes funcionalitats bàsiques del lloc web.',
            es: 'Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que esto podría afectar a algunas funcionalidades básicas del sitio web.',
          },
        ],
      },
    ],
  },
};
