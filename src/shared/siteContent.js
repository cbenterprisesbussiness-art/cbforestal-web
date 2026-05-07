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
export const worksPoolsHash = 'trabajos-piscinas';
export const worksPoolsPath = `${worksPath}#${worksPoolsHash}`;
export const podaBarcelonaPath = '/poda-arboles-barcelona';
export const talaBarcelonaPath = '/tala-arboles-barcelona';
export const desbroceBarcelonaPath = '/desbroce-parcelas-barcelona';
export const cerramientosRuralesPath = '/cerramientos-rurales';
export const santCugatPath = '/servicios-forestales-sant-cugat';
export const rubiPath = '/servicios-forestales-rubi';
export const sabadellPath = '/servicios-forestales-sabadell';
export const terrassaPath = '/servicios-forestales-terrassa';
export const baixLlobregatPath = '/servicios-forestales-baix-llobregat';
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
  '/cerramientos-rurales': {
    title: {
      ca: 'Tancaments rurals a Barcelona | CB Forestal',
      es: 'Cerramientos rurales en Barcelona | CB Forestal',
    },
    description: {
      ca: 'Instal·lació de tancaments rurals, vallats perimetrals, malla i accessos per a finques, parcel·les i terrenys a Barcelona i Catalunya.',
      es: 'Instalación de cerramientos rurales, vallados perimetrales, malla y accesos para fincas, parcelas y terrenos en Barcelona y Cataluña.',
    },
  },
  '/servicios-forestales-sant-cugat': {
    title: {
      ca: 'Serveis forestals a Sant Cugat | CB Forestal',
      es: 'Servicios forestales en Sant Cugat | CB Forestal',
    },
    description: {
      ca: 'Tala, poda, desbrossament, manteniment de parcel·les i tancaments a Sant Cugat i rodalia. Pressupost ràpid i treball professional.',
      es: 'Tala, poda, desbroce, mantenimiento de parcelas y cerramientos en Sant Cugat y alrededores. Presupuesto rápido y trabajo profesional.',
    },
  },
  '/servicios-forestales-rubi': {
    title: {
      ca: 'Serveis forestals a Rubí | CB Forestal',
      es: 'Servicios forestales en Rubí | CB Forestal',
    },
    description: {
      ca: 'Poda, tala, desbrossament i tancaments a Rubí i municipis propers amb equip propi i resposta àgil.',
      es: 'Poda, tala, desbroce y cerramientos en Rubí y municipios cercanos con equipo propio y respuesta ágil.',
    },
  },
  '/servicios-forestales-sabadell': {
    title: {
      ca: 'Serveis forestals a Sabadell | CB Forestal',
      es: 'Servicios forestales en Sabadell | CB Forestal',
    },
    description: {
      ca: 'Treballs forestals, poda, tala, neteja de parcel·les i tancaments a Sabadell i entorn del Vallès.',
      es: 'Trabajos forestales, poda, tala, limpieza de parcelas y cerramientos en Sabadell y entorno del Vallès.',
    },
  },
  '/servicios-forestales-terrassa': {
    title: {
      ca: 'Serveis forestals a Terrassa | CB Forestal',
      es: 'Servicios forestales en Terrassa | CB Forestal',
    },
    description: {
      ca: 'Serveis de poda, tala, desbrossament, manteniment i tancaments a Terrassa i municipis propers.',
      es: 'Servicios de poda, tala, desbroce, mantenimiento y cerramientos en Terrassa y municipios próximos.',
    },
  },
  '/servicios-forestales-baix-llobregat': {
    title: {
      ca: 'Serveis forestals al Baix Llobregat | CB Forestal',
      es: 'Servicios forestales en Baix Llobregat | CB Forestal',
    },
    description: {
      ca: 'Tala, poda, desbrossament, manteniment de terrenys i tancaments al Baix Llobregat, incloent Martorell, Abrera, Corbera o Vallirana.',
      es: 'Tala, poda, desbroce, mantenimiento de terrenos y cerramientos en Baix Llobregat, incluyendo Martorell, Abrera, Corbera o Vallirana.',
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
  { to: worksPath, label: { ca: 'Treballs', es: 'Trabajos' } },
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
    {
      ca: 'Treballs reals i equip propi',
      es: 'Trabajos reales y equipo propio',
    },
  ],
};

export const conversionSection = {
  label: { ca: 'Per què triar-nos', es: 'Por qué elegirnos' },
  title: {
    ca: 'La diferència entre una visita i un pressupost que sí et resol el problema',
    es: 'La diferencia entre una visita y un presupuesto que sí te resuelve el problema',
  },
  description: {
    ca: 'No venem una web bonica: venem resposta ràpida, criteri tècnic i execució segura perquè sàpigues qui entra a la teva finca i què farà exactament.',
    es: 'No vendemos una web bonita: vendemos respuesta rápida, criterio técnico y ejecución segura para que sepas quién entra en tu finca y qué va a hacer exactamente.',
  },
  items: [
    {
      title: { ca: 'Pressupost clar', es: 'Presupuesto claro' },
      text: {
        ca: 'T’expliquem l’actuació, l’abast i el tipus de feina abans de començar, sense improvisacions ni sorpreses de darrera hora.',
        es: 'Te explicamos la actuación, el alcance y el tipo de trabajo antes de empezar, sin improvisaciones ni sorpresas de última hora.',
      },
    },
    {
      title: { ca: 'Seguretat i ordre', es: 'Seguridad y orden' },
      text: {
        ca: 'Treballs en alçada, tala, desbrossament o tancaments executats amb criteri i neteja final de la zona de treball.',
        es: 'Trabajos en altura, tala, desbroce o cerramientos ejecutados con criterio y limpieza final de la zona de trabajo.',
      },
    },
    {
      title: { ca: 'Resposta ràpida', es: 'Respuesta rápida' },
      text: {
        ca: 'Si ens escrius per una poda, una tala o una parcel·la bruta, et contestem ràpid perquè puguis decidir sense perdre dies.',
        es: 'Si nos escribes por una poda, una tala o una parcela sucia, te contestamos rápido para que puedas decidir sin perder días.',
      },
    },
  ],
};

export const about = {
  label: { ca: 'Qui som', es: 'Quiénes somos' },
  title: {
    ca: 'Professionals forestals i de manteniment exterior amb resposta ràpida',
    es: 'Profesionales forestales y de mantenimiento exterior con respuesta rápida',
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
        ca: "Anys d'experiència en treball forestal i exterior",
        es: 'Años de experiencia en trabajo forestal y exterior',
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
    ca: 'Solucions completes per a finques, parcel·les i exteriors',
    es: 'Soluciones completas para fincas, parcelas y exteriores',
  },
  description: {
    ca: "Professionals amb maquinària homologada i equip assegurat per a treball forestal, manteniment de terrenys i tancaments.",
    es: 'Profesionales con maquinaria homologada y equipo asegurado para trabajo forestal, mantenimiento de terrenos y cerramientos.',
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
    image: '/trabajos/servicios/tala-pino-corte-controlado.jpg',
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
    image: '/trabajos/servicios/diseno-jardines-grava-decorativa.jpg',
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
    image: '/trabajos/servicios/cerramiento-murete-portillon.jpg',
    href: cerramientosRuralesPath,
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
    image: '/trabajos/servicios/piscina-vaso-vacio-obra.jpg',
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
    image: '/trabajos/galeria/poda-olivo-tecnica.jpg',
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
    href: desbroceBarcelonaPath,
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

export const localFocusZones = [
  {
    name: 'Sant Cugat',
    desc: 'Sant Cugat · Valldoreix · Mira-sol · Bellaterra',
    href: santCugatPath,
  },
  {
    name: 'Rubí',
    desc: 'Rubí · Castellbisbal · Sant Quirze',
    href: rubiPath,
  },
  {
    name: 'Sabadell',
    desc: 'Sabadell · Barberà · Badia · Sentmenat',
    href: sabadellPath,
  },
  {
    name: 'Terrassa',
    desc: 'Terrassa · Matadepera · Viladecavalls',
    href: terrassaPath,
  },
  {
    name: 'Baix Llobregat',
    desc: 'Martorell · Abrera · Vallirana · Cervelló · Corbera · Sant Vicenç dels Horts',
    href: baixLlobregatPath,
  },
];

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
      image: '/trabajos/galeria/poda-palmeras-en-altura.jpg',
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
      image: '/trabajos/galeria/limpieza-bosque-pendiente.jpg',
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
      image: '/trabajos/servicios/cerramiento-murete-portillon.jpg',
      title: { ca: 'Tanca perimetral amb portó', es: 'Valla perimetral con portón' },
      summary: {
        ca: 'Tancament amb muret i portell integrat per resoldre accés, desnivell i seguretat en una sola intervenció.',
        es: 'Cerramiento con murete y portillo integrado para resolver acceso, desnivel y seguridad en una sola intervención.',
      },
      meta: { ca: 'Tancaments · Muret i accés', es: 'Cerramientos · Murete y acceso' },
    },
    {
      image: '/trabajos/servicios/piscina-vaso-vacio-obra.jpg',
      title: { ca: 'Manteniment de piscina', es: 'Mantenimiento de piscina' },
      summary: {
        ca: 'Posada a punt de piscina amb revisió de vas, equips i acabat tècnic de la instal·lació.',
        es: 'Puesta a punto de piscina con revisión de vaso, equipos y acabado técnico de la instalación.',
      },
      meta: { ca: 'Piscines · Revisió tècnica', es: 'Piscinas · Revisión técnica' },
    },
  ],
  videosTitle: { ca: 'Vídeos de treball', es: 'Vídeos de trabajo' },
  videosDescription: {
    ca: 'Clips curts de poda, tala, treball en altura i intervencions tècniques gravats en obra real.',
    es: 'Clips cortos de poda, tala, trabajo en altura e intervenciones técnicas grabados en obra real.',
  },
  videos: [
    {
      src: '/trabajos/videos-nuevos/poda-palmeras-destacado.mp4',
      title: { ca: 'Poda de palmeres', es: 'Poda de palmeras' },
      summary: {
        ca: 'Retall en altura amb maniobra neta i controlada sobre palmeres.',
        es: 'Recorte en altura con maniobra limpia y controlada sobre palmeras.',
      },
    },
    {
      src: '/trabajos/videos-nuevos/tala-controlada-destacado.mp4',
      title: { ca: 'Tala controlada', es: 'Tala controlada' },
      summary: {
        ca: 'Desmuntatge progressiu en entorn residencial amb espai de maniobra reduït.',
        es: 'Desmontaje progresivo en entorno residencial con espacio de maniobra reducido.',
      },
    },
    {
      src: '/trabajos/videos-nuevos/poda-altura-destacado.mp4',
      title: { ca: 'Poda tècnica en altura', es: 'Poda técnica en altura' },
      summary: {
        ca: 'Treball vertical sobre arbre gran amb equip i tècnica d’arborista.',
        es: 'Trabajo vertical sobre árbol grande con equipo y técnica de arborista.',
      },
    },
    {
      src: '/trabajos/videos-nuevos/tala-pino-corte-corto.mp4',
      title: { ca: 'Tall de pi controlat', es: 'Corte controlado de pino' },
      summary: {
        ca: 'Seqüència curta de tall i descàrrega controlada de fusta.',
        es: 'Secuencia corta de corte y descarga controlada de madera.',
      },
    },
    {
      src: '/trabajos/videos-nuevos/poda-olivo-corto.mp4',
      title: { ca: 'Poda d’olivera', es: 'Poda de olivo' },
      summary: {
        ca: 'Intervenció ràpida de manteniment amb acabat net.',
        es: 'Intervención rápida de mantenimiento con acabado limpio.',
      },
    },
    {
      src: '/trabajos/videos-nuevos/piscina-obra-general.mp4',
      title: { ca: 'Piscina en obra', es: 'Piscina en obra' },
      summary: {
        ca: 'Vista curta d’una piscina en fase de preparació i revisió d’obra.',
        es: 'Vista corta de una piscina en fase de preparación y revisión de obra.',
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
      image: '/trabajos/galeria/poda-palmeras-en-altura.jpg',
      title: { ca: 'Poda de palmeres', es: 'Poda de palmeras' },
      meta: { ca: 'Poda · Treball vertical', es: 'Poda · Trabajo vertical' },
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
      image: '/trabajos/servicios/cerramiento-murete-portillon.jpg',
      title: { ca: 'Portell amb muret', es: 'Portillo con murete' },
      meta: { ca: 'Tancaments · Accés resolt', es: 'Cerramientos · Acceso resuelto' },
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
      image: '/trabajos/galeria/poda-olivo-tecnica.jpg',
      title: { ca: 'Poda tècnica d’olivera', es: 'Poda técnica de olivo' },
      meta: { ca: 'Poda · Manteniment', es: 'Poda · Mantenimiento' },
    },
    {
      image: '/trabajos/galeria/tala-pino-altura-bosque.jpg',
      title: { ca: 'Tala de pi en altura', es: 'Tala de pino en altura' },
      meta: { ca: 'Tala · Entorn forestal', es: 'Tala · Entorno forestal' },
    },
    {
      image: '/trabajos/galeria/piscina-sala-tecnica-detalle.jpg',
      title: { ca: 'Sala tècnica de piscina', es: 'Sala técnica de piscina' },
      meta: { ca: 'Piscines · Instal·lació', es: 'Piscinas · Instalación' },
    },
    {
      image: '/trabajos/galeria/piscina-instalacion-exterior.jpg',
      title: { ca: 'Instal·lació exterior de piscina', es: 'Instalación exterior de piscina' },
      meta: { ca: 'Piscines · Equip tècnic', es: 'Piscinas · Equipo técnico' },
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
    scenarios: [
      {
        title: { ca: 'Pins propers a habitatges', es: 'Pinos próximos a viviendas' },
        text: {
          ca: 'Actuacions en jardins i parcel·les on la copa o les branques afecten façanes, cobertes, línies o espais de pas.',
          es: 'Actuaciones en jardines y parcelas donde la copa o las ramas afectan fachadas, cubiertas, líneas o zonas de paso.',
        },
      },
      {
        title: { ca: 'Poda de manteniment periòdic', es: 'Poda de mantenimiento periódico' },
        text: {
          ca: 'Ideal per comunitats, finques i cases que necessiten control de creixement, sanejament i millor aspecte general.',
          es: 'Ideal para comunidades, fincas y viviendas que necesitan control de crecimiento, saneamiento y mejor aspecto general.',
        },
      },
      {
        title: { ca: 'Treballs en altura i accés difícil', es: 'Trabajos en altura y acceso difícil' },
        text: {
          ca: 'Intervencions en arbres grans o zones complicades on cal tècnica, equip propi i maniobra segura.',
          es: 'Intervenciones en árboles grandes o zonas complicadas donde hace falta técnica, equipo propio y maniobra segura.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Valoració tècnica prèvia', es: 'Valoración técnica previa' },
        text: {
          ca: 'Abans de podar, revisem espècie, volum, estructura i risc per definir la intervenció que realment convé.',
          es: 'Antes de podar, revisamos especie, volumen, estructura y riesgo para definir la intervención que realmente conviene.',
        },
      },
      {
        title: { ca: 'Ordre i neteja en obra', es: 'Orden y limpieza en obra' },
        text: {
          ca: 'No només fem el tall: també retirem restes i deixem la zona recollida perquè la feina quedi acabada de veritat.',
          es: 'No solo hacemos el corte: también retiramos restos y dejamos la zona recogida para que el trabajo quede realmente terminado.',
        },
      },
      {
        title: { ca: 'Servei per particulars i finques', es: 'Servicio para particulares y fincas' },
        text: {
          ca: 'Treballem tant en cases particulars com en comunitats, finques rústiques i espais amb exigència de maniobra.',
          es: 'Trabajamos tanto en viviendas particulares como en comunidades, fincas rústicas y espacios con exigencia de maniobra.',
        },
      },
    ],
    areas: {
      ca: 'Barcelona, Sant Cugat, Cerdanyola, Rubí, Sabadell, Terrassa i municipis propers.',
      es: 'Barcelona, Sant Cugat, Cerdanyola, Rubí, Sabadell, Terrassa y municipios cercanos.',
    },
    relatedLinks: [
      { to: worksPath, label: { ca: 'Veure treballs de poda', es: 'Ver trabajos de poda' } },
      { to: talaBarcelonaPath, label: { ca: 'Veure tala controlada', es: 'Ver tala controlada' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: "Quan convé fer una poda d'arbres?", es: '¿Cuándo conviene hacer una poda de árboles?' },
        answer: {
          ca: "Depèn de l'espècie i de l'objectiu de la intervenció. Valorem cada cas per executar la poda en el moment més segur i adequat.",
          es: 'Depende de la especie y del objetivo de la intervención. Valoramos cada caso para ejecutar la poda en el momento más seguro y adecuado.',
        },
      },
      {
        question: { ca: 'Feu poda en arbres grans o en altura?', es: '¿Hacéis poda en árboles grandes o en altura?' },
        answer: {
          ca: 'Sí. Treballem amb equip preparat per a poda en altura i intervencions tècniques en espais residencials o amb accessos complicats.',
          es: 'Sí. Trabajamos con equipo preparado para poda en altura e intervenciones técnicas en espacios residenciales o con accesos complicados.',
        },
      },
      {
        question: { ca: 'Retireu també les restes?', es: '¿Retiráis también los restos?' },
        answer: {
          ca: 'Sí, el servei es pot completar amb retirada de branques, fusta i neteja final de la zona de treball.',
          es: 'Sí, el servicio puede completarse con retirada de ramas, madera y limpieza final de la zona de trabajo.',
        },
      },
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
    scenarios: [
      {
        title: { ca: 'Arbres amb risc real', es: 'Árboles con riesgo real' },
        text: {
          ca: 'Pins i arbres desestabilitzats, malalts o massa pròxims a habitatges, piscines, tanques o línies.',
          es: 'Pinos y árboles desestabilizados, enfermos o demasiado próximos a viviendas, piscinas, vallas o líneas.',
        },
      },
      {
        title: { ca: 'Entorns residencials delicats', es: 'Entornos residenciales delicados' },
        text: {
          ca: 'Treballs on no es pot improvisar i cal controlar cada tram de desmuntatge per no comprometre l’entorn.',
          es: 'Trabajos donde no se puede improvisar y hace falta controlar cada tramo de desmontaje para no comprometer el entorno.',
        },
      },
      {
        title: { ca: 'Retirada completa de restes', es: 'Retirada completa de restos' },
        text: {
          ca: 'Projectes on el client necessita deixar el terreny net, amb troncs, branques i volum vegetal retirats.',
          es: 'Proyectos donde el cliente necesita dejar el terreno limpio, con troncos, ramas y volumen vegetal retirados.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Planificació abans de tallar', es: 'Planificación antes de cortar' },
        text: {
          ca: 'Analitzem accés, inclinació, espai de caiguda i mitjans necessaris per executar la tala amb criteri.',
          es: 'Analizamos acceso, inclinación, espacio de caída y medios necesarios para ejecutar la tala con criterio.',
        },
      },
      {
        title: { ca: 'Equip preparat per maniobres complexes', es: 'Equipo preparado para maniobras complejas' },
        text: {
          ca: 'Treballem amb suport tècnic i recursos propis per actuar en espais complicats sense improvisació.',
          es: 'Trabajamos con apoyo técnico y recursos propios para actuar en espacios complicados sin improvisación.',
        },
      },
      {
        title: { ca: 'Resposta ràpida en Barcelona', es: 'Respuesta rápida en Barcelona' },
        text: {
          ca: 'Quan hi ha risc o urgència, la rapidesa importa. Donem resposta àgil i pressupost clar.',
          es: 'Cuando hay riesgo o urgencia, la rapidez importa. Damos respuesta ágil y presupuesto claro.',
        },
      },
    ],
    areas: {
      ca: 'Barcelona, Maresme, Vallès, Baix Llobregat i altres zones de Catalunya.',
      es: 'Barcelona, Maresme, Vallès, Baix Llobregat y otras zonas de Cataluña.',
    },
    relatedLinks: [
      { to: worksPath, label: { ca: 'Veure tales reals', es: 'Ver talas reales' } },
      { to: podaBarcelonaPath, label: { ca: 'Veure poda en altura', es: 'Ver poda en altura' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Quan cal fer una tala i no una poda?', es: '¿Cuándo hay que hacer una tala y no una poda?' },
        answer: {
          ca: "Quan l'arbre està compromès, mal orientat, massa a prop d'estructures o representa un risc que no es resol amb poda.",
          es: 'Cuando el árbol está comprometido, mal orientado, demasiado cerca de estructuras o representa un riesgo que no se resuelve con poda.',
        },
      },
      {
        question: { ca: 'Podeu talar arbres en espais petits?', es: '¿Podéis talar árboles en espacios pequeños?' },
        answer: {
          ca: 'Sí. Planifiquem la maniobra i, si cal, fem desmuntatge per trams per treballar amb seguretat en entorns complicats.',
          es: 'Sí. Planificamos la maniobra y, si hace falta, realizamos desmontaje por tramos para trabajar con seguridad en entornos complicados.',
        },
      },
      {
        question: { ca: 'Incloeu retirada de fusta i restes?', es: '¿Incluís retirada de madera y restos?' },
        answer: {
          ca: 'Sí, podem incloure retirada de troncs, branques i neteja final segons el tipus de projecte.',
          es: 'Sí, podemos incluir retirada de troncos, ramas y limpieza final según el tipo de proyecto.',
        },
      },
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
    scenarios: [
      {
        title: { ca: 'Parcel·les abandonades o molt carregades', es: 'Parcelas abandonadas o muy cargadas' },
        text: {
          ca: 'Terrenys amb vegetació acumulada, herba alta, restes seques o falta de manteniment des de fa temps.',
          es: 'Terrenos con vegetación acumulada, hierba alta, restos secos o falta de mantenimiento desde hace tiempo.',
        },
      },
      {
        title: { ca: 'Talussos i pendents', es: 'Taludes y pendientes' },
        text: {
          ca: 'Zones on l’accés és més exigent i cal combinar neteja, control vegetal i seguretat de pas.',
          es: 'Zonas donde el acceso es más exigente y hace falta combinar limpieza, control vegetal y seguridad de paso.',
        },
      },
      {
        title: { ca: 'Posada a punt abans d’estiu o d’obra', es: 'Puesta a punto antes del verano o de una obra' },
        text: {
          ca: 'Intervencions per reduir risc d’incendi, preparar una venda, facilitar una obra o recuperar l’ús del terreny.',
          es: 'Intervenciones para reducir riesgo de incendio, preparar una venta, facilitar una obra o recuperar el uso del terreno.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Desbrossament útil, no superficial', es: 'Desbroce útil, no superficial' },
        text: {
          ca: 'Treballem perquè la parcel·la quedi realment transitable, sanejada i preparada per al següent ús.',
          es: 'Trabajamos para que la parcela quede realmente transitable, saneada y preparada para el siguiente uso.',
        },
      },
      {
        title: { ca: 'Servei puntual o regular', es: 'Servicio puntual o regular' },
        text: {
          ca: 'Ens adaptem tant a neteges úniques com a manteniments periòdics de finques i solars.',
          es: 'Nos adaptamos tanto a limpiezas únicas como a mantenimientos periódicos de fincas y solares.',
        },
      },
      {
        title: { ca: 'Coneixement de terreny i temporada', es: 'Conocimiento de terreno y temporada' },
        text: {
          ca: 'Planifiquem el moment i l’abast del desbrossament segons volum vegetal, pendent i necessitat real del client.',
          es: 'Planificamos el momento y el alcance del desbroce según volumen vegetal, pendiente y necesidad real del cliente.',
        },
      },
    ],
    areas: {
      ca: 'Barcelona, Vallès, Maresme i finques de l’entorn metropolità.',
      es: 'Barcelona, Vallès, Maresme y fincas del entorno metropolitano.',
    },
    relatedLinks: [
      { to: worksPath, label: { ca: 'Veure treballs de desbrossament', es: 'Ver trabajos de desbroce' } },
      { to: talaBarcelonaPath, label: { ca: 'Veure neteja i tala', es: 'Ver limpieza y tala' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Feu desbrossament de talussos?', es: '¿Hacéis desbroce de taludes?' },
        answer: {
          ca: 'Sí. Treballem en zones amb pendent, accessos difícils i parcel·les que necessiten sanejament o manteniment periòdic.',
          es: 'Sí. Trabajamos en zonas con pendiente, accesos difíciles y parcelas que necesitan saneamiento o mantenimiento periódico.',
        },
      },
      {
        question: { ca: 'Serveix per prevenció d’incendis?', es: '¿Sirve para prevención de incendios?' },
        answer: {
          ca: 'Sí, el desbrossament redueix vegetació acumulada i ajuda a mantenir la parcel·la en condicions més segures.',
          es: 'Sí, el desbroce reduce vegetación acumulada y ayuda a mantener la parcela en condiciones más seguras.',
        },
      },
      {
        question: { ca: 'Feu manteniment recurrent?', es: '¿Hacéis mantenimiento recurrente?' },
        answer: {
          ca: 'Sí, podem treballar tant en actuacions puntuals com en manteniment regular de parcel·les i finques.',
          es: 'Sí, podemos trabajar tanto en actuaciones puntuales como en mantenimiento regular de parcelas y fincas.',
        },
      },
    ],
  },
  [cerramientosRuralesPath]: {
    eyebrow: { ca: 'Tancaments rurals', es: 'Cerramientos rurales' },
    title: {
      ca: 'Tancaments rurals per a finques i parcel·les a Barcelona',
      es: 'Cerramientos rurales para fincas y parcelas en Barcelona',
    },
    description: {
      ca: 'Instal·lem tancaments rurals, malla, pals, accessos i solucions perimetrals per protegir parcel·les, finques i terrenys amb acabat professional.',
      es: 'Instalamos cerramientos rurales, malla, postes, accesos y soluciones perimetrales para proteger parcelas, fincas y terrenos con acabado profesional.',
    },
    image: '/trabajos/servicios/cerramiento-murete-portillon.jpg',
    intro: {
      ca: 'Si necessites tancar una finca, una parcel·la o un terreny a Barcelona o Catalunya, t’ajudem a resoldre’l amb una solució funcional, resistent i adaptada al desnivell, l’accés i l’ús real de l’espai.',
      es: 'Si necesitas cerrar una finca, una parcela o un terreno en Barcelona o Cataluña, te ayudamos a resolverlo con una solución funcional, resistente y adaptada al desnivel, el acceso y el uso real del espacio.',
    },
    paragraphs: [
      {
        ca: 'No tots els tancaments rurals són iguals. Cal valorar perímetre, tipus de terreny, punts d’accés, altura necessària i el resultat que realment necessita la finca.',
        es: 'No todos los cerramientos rurales son iguales. Hay que valorar perímetro, tipo de terreno, puntos de acceso, altura necesaria y el resultado que realmente necesita la finca.',
      },
      {
        ca: 'Treballem en parcel·les residencials, finques rústiques, terrenys amb pendent i accessos que necessiten una execució neta, estable i duradora.',
        es: 'Trabajamos en parcelas residenciales, fincas rústicas, terrenos con pendiente y accesos que necesitan una ejecución limpia, estable y duradera.',
      },
      {
        ca: 'Podem resoldre tant un vallat senzill com un tancament amb portell, muret, reforç o combinació de materials segons el projecte.',
        es: 'Podemos resolver tanto un vallado sencillo como un cerramiento con portillo, murete, refuerzo o combinación de materiales según el proyecto.',
      },
    ],
    bullets: [
      { ca: 'Tancaments perimetrals per a finques i parcel·les', es: 'Cerramientos perimetrales para fincas y parcelas' },
      { ca: 'Malla metàl·lica, pals i reforços', es: 'Malla metálica, postes y refuerzos' },
      { ca: 'Portells, accessos i punts d’entrada', es: 'Portillos, accesos y puntos de entrada' },
      { ca: 'Solucions adaptades a desnivell i ús real', es: 'Soluciones adaptadas a desnivel y uso real' },
    ],
    scenarios: [
      {
        title: { ca: 'Finques que necessiten perímetre clar', es: 'Fincas que necesitan perímetro claro' },
        text: {
          ca: 'Per protegir límits, controlar accessos o ordenar millor l’ús del terreny.',
          es: 'Para proteger límites, controlar accesos u ordenar mejor el uso del terreno.',
        },
      },
      {
        title: { ca: 'Terrenys amb pendent o geometria irregular', es: 'Terrenos con pendiente o geometría irregular' },
        text: {
          ca: 'Quan el tancament ha d’adaptar-se al relleu i no val una solució estàndard.',
          es: 'Cuando el cerramiento debe adaptarse al relieve y no sirve una solución estándar.',
        },
      },
      {
        title: { ca: 'Accessos per a vehicles o manteniment', es: 'Accesos para vehículos o mantenimiento' },
        text: {
          ca: 'Projectes on cal combinar seguretat, pas i comoditat d’ús diari.',
          es: 'Proyectos donde hace falta combinar seguridad, paso y comodidad de uso diario.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Solució pensada per al terreny', es: 'Solución pensada para el terreno' },
        text: {
          ca: 'Revisem el perímetre abans de pressupostar per plantejar un tancament que funcioni de veritat sobre el lloc.',
          es: 'Revisamos el perímetro antes de presupuestar para plantear un cerramiento que funcione de verdad sobre el terreno.',
        },
      },
      {
        title: { ca: 'Execució neta i estable', es: 'Ejecución limpia y estable' },
        text: {
          ca: 'Busquem un resultat robust, alineat i coherent amb l’ús que tindrà la finca, no una instal·lació improvisada.',
          es: 'Buscamos un resultado robusto, alineado y coherente con el uso que tendrá la finca, no una instalación improvisada.',
        },
      },
      {
        title: { ca: 'Projecte complet amb accessos', es: 'Proyecto completo con accesos' },
        text: {
          ca: 'Si cal, integrem portell o punts d’entrada perquè el tancament sigui útil i no només visual.',
          es: 'Si hace falta, integramos portillo o puntos de entrada para que el cerramiento sea útil y no solo visual.',
        },
      },
    ],
    areas: {
      ca: 'Barcelona, Baix Llobregat, Vallès, Maresme i finques de Catalunya.',
      es: 'Barcelona, Baix Llobregat, Vallès, Maresme y fincas de Cataluña.',
    },
    relatedLinks: [
      { to: '/cerramientos', label: { ca: 'Veure tots els tancaments', es: 'Ver todos los cerramientos' } },
      { to: worksPath, label: { ca: 'Veure treballs reals', es: 'Ver trabajos reales' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Feu tancaments en parcel·les amb desnivell?', es: '¿Hacéis cerramientos en parcelas con desnivel?' },
        answer: {
          ca: 'Sí. És un dels casos habituals i adaptem la solució al relleu real del terreny.',
          es: 'Sí. Es uno de los casos habituales y adaptamos la solución al relieve real del terreno.',
        },
      },
      {
        question: { ca: 'Podeu incloure portell o accés?', es: '¿Podéis incluir portillo o acceso?' },
        answer: {
          ca: 'Sí, podem plantejar accessos integrats per a pas de persones, manteniment o vehicles segons el projecte.',
          es: 'Sí, podemos plantear accesos integrados para paso de personas, mantenimiento o vehículos según el proyecto.',
        },
      },
      {
        question: { ca: 'Treballeu només a Barcelona ciutat?', es: '¿Trabajáis solo en Barcelona ciudad?' },
        answer: {
          ca: 'No. També actuem en municipis propers i en finques de diferents zones de Catalunya.',
          es: 'No. También actuamos en municipios próximos y en fincas de distintas zonas de Cataluña.',
        },
      },
    ],
  },
};

export const areaLandingPages = {
  [santCugatPath]: {
    eyebrow: { ca: 'Sant Cugat i rodalia', es: 'Sant Cugat y alrededores' },
    title: {
      ca: 'Serveis forestals a Sant Cugat per a cases, finques i comunitats',
      es: 'Servicios forestales en Sant Cugat para viviendas, fincas y comunidades',
    },
    description: {
      ca: 'Treballem a Sant Cugat amb poda, tala, desbrossament, manteniment de parcel·les i tancaments per a particulars i comunitats.',
      es: 'Trabajamos en Sant Cugat con poda, tala, desbroce, mantenimiento de parcelas y cerramientos para particulares y comunidades.',
    },
    image: '/trabajos/galeria/poda-altura-arborista.jpg',
    intro: {
      ca: 'Sant Cugat és una de les zones on millor encaixa el nostre servei: habitatges amb jardí, parcel·les, arbres grans, tanques i manteniment exterior que demana rapidesa i bona execució.',
      es: 'Sant Cugat es una de las zonas donde mejor encaja nuestro servicio: viviendas con jardín, parcelas, árboles grandes, vallas y mantenimiento exterior que pide rapidez y buena ejecución.',
    },
    paragraphs: [
      {
        ca: 'Actuem tant en poda i tala de pins com en desbrossament de parcel·les, neteja de terrenys, manteniment exterior i tancaments perimetrals.',
        es: 'Actuamos tanto en poda y tala de pinos como en desbroce de parcelas, limpieza de terrenos, mantenimiento exterior y cerramientos perimetrales.',
      },
      {
        ca: 'És una zona on la seguretat, la neteja final i la capacitat de treballar en entorn residencial marquen la diferència.',
        es: 'Es una zona donde la seguridad, la limpieza final y la capacidad de trabajar en entorno residencial marcan la diferencia.',
      },
    ],
    bullets: [
      { ca: 'Poda i tala en jardins i parcel·les', es: 'Poda y tala en jardines y parcelas' },
      { ca: 'Desbrossament i manteniment exterior', es: 'Desbroce y mantenimiento exterior' },
      { ca: 'Tancaments i accessos perimetrals', es: 'Cerramientos y accesos perimetrales' },
      { ca: 'Servei ràpid a Sant Cugat i entorn', es: 'Servicio rápido en Sant Cugat y entorno' },
    ],
    scenarios: [
      {
        title: { ca: 'Cases amb jardí i arbres grans', es: 'Viviendas con jardín y árboles grandes' },
        text: {
          ca: 'Intervencions habituals en pins, palmeres, oliveres i vegetació que necessita control, sanejament o retirada.',
          es: 'Intervenciones habituales en pinos, palmeras, olivos y vegetación que necesita control, saneamiento o retirada.',
        },
      },
      {
        title: { ca: 'Parcel·les i franges netes', es: 'Parcelas y franjas limpias' },
        text: {
          ca: 'Molts clients ens contacten per mantenir el terreny transitable, més segur i millor presentat.',
          es: 'Muchos clientes nos contactan para mantener el terreno transitable, más seguro y mejor presentado.',
        },
      },
      {
        title: { ca: 'Tancaments en habitatge i finca', es: 'Cerramientos en vivienda y finca' },
        text: {
          ca: 'Solucions per delimitar, protegir o renovar accessos i perímetres sense improvisació.',
          es: 'Soluciones para delimitar, proteger o renovar accesos y perímetros sin improvisación.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Coneixem bé el tipus de treball', es: 'Conocemos bien el tipo de trabajo' },
        text: {
          ca: 'No és una zona genèrica: sabem com intervenir en entorns residencials amb veïnat, accessos i espais delicats.',
          es: 'No es una zona genérica: sabemos cómo intervenir en entornos residenciales con vecindario, accesos y espacios delicados.',
        },
      },
      {
        title: { ca: 'Servei complet', es: 'Servicio completo' },
        text: {
          ca: 'Des de la valoració fins a la retirada de restes, busquem que el client no hagi de coordinar res més.',
          es: 'Desde la valoración hasta la retirada de restos, buscamos que el cliente no tenga que coordinar nada más.',
        },
      },
      {
        title: { ca: 'Proximitat real', es: 'Proximidad real' },
        text: {
          ca: 'És una zona propera per nosaltres, i això es nota en capacitat de resposta i seguiment.',
          es: 'Es una zona cercana para nosotros, y eso se nota en capacidad de respuesta y seguimiento.',
        },
      },
    ],
    areas: {
      ca: 'Sant Cugat, Valldoreix, Mira-sol, Bellaterra i entorn immediat.',
      es: 'Sant Cugat, Valldoreix, Mira-sol, Bellaterra y entorno inmediato.',
    },
    relatedLinks: [
      { to: podaBarcelonaPath, label: { ca: 'Veure poda en altura', es: 'Ver poda en altura' } },
      { to: worksPath, label: { ca: 'Veure treballs reals', es: 'Ver trabajos reales' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Treballeu en urbanitzacions i comunitats?', es: '¿Trabajáis en urbanizaciones y comunidades?' },
        answer: {
          ca: 'Sí. És un tipus de feina habitual a Sant Cugat i adaptem la maniobra a accessos, horaris i entorn residencial.',
          es: 'Sí. Es un tipo de trabajo habitual en Sant Cugat y adaptamos la maniobra a accesos, horarios y entorno residencial.',
        },
      },
      {
        question: { ca: 'Feu també manteniment periòdic?', es: '¿Hacéis también mantenimiento periódico?' },
        answer: {
          ca: 'Sí, podem combinar actuacions puntuals amb manteniment recurrent de parcel·les o exteriors.',
          es: 'Sí, podemos combinar actuaciones puntuales con mantenimiento recurrente de parcelas o exteriores.',
        },
      },
      {
        question: { ca: 'Podeu incloure tancaments?', es: '¿Podéis incluir cerramientos?' },
        answer: {
          ca: 'Sí. A més de treball forestal, també fem tancaments i vallats segons les necessitats de la finca.',
          es: 'Sí. Además de trabajo forestal, también hacemos cerramientos y vallados según las necesidades de la finca.',
        },
      },
    ],
  },
  [rubiPath]: {
    eyebrow: { ca: 'Rubí i entorn', es: 'Rubí y entorno' },
    title: {
      ca: 'Poda, tala i desbrossament a Rubí amb resposta ràpida',
      es: 'Poda, tala y desbroce en Rubí con respuesta rápida',
    },
    description: {
      ca: 'Serveis forestals i tancaments a Rubí per a particulars, finques, parcel·les i entorns residencials.',
      es: 'Servicios forestales y cerramientos en Rubí para particulares, fincas, parcelas y entornos residenciales.',
    },
    image: '/trabajos/galeria/tala-controlada-piscina.jpg',
    intro: {
      ca: 'A Rubí fem des de treballs tècnics de poda i tala fins a desbrossament, neteja de terrenys i tancaments perimetrals amb enfocament pràctic.',
      es: 'En Rubí hacemos desde trabajos técnicos de poda y tala hasta desbroce, limpieza de terrenos y cerramientos perimetrales con enfoque práctico.',
    },
    paragraphs: [
      {
        ca: 'És una zona on hi ha combinació d’habitatge, parcel·la i finca, i això exigeix un equip capaç de resoldre diferents tipus de servei amb continuïtat.',
        es: 'Es una zona donde hay combinación de vivienda, parcela y finca, y eso exige un equipo capaz de resolver distintos tipos de servicio con continuidad.',
      },
      {
        ca: 'Ens contacteu sobretot per tala de pins, manteniment de vegetació, parcel·les carregades i necessitat de delimitar o renovar tancaments.',
        es: 'Nos contactáis sobre todo por tala de pinos, mantenimiento de vegetación, parcelas cargadas y necesidad de delimitar o renovar cerramientos.',
      },
    ],
    bullets: [
      { ca: 'Tala i poda d’arbres', es: 'Tala y poda de árboles' },
      { ca: 'Neteja i desbrossament de terrenys', es: 'Limpieza y desbroce de terrenos' },
      { ca: 'Manteniment exterior de finca', es: 'Mantenimiento exterior de finca' },
      { ca: 'Tancaments i accessos', es: 'Cerramientos y accesos' },
    ],
    scenarios: [
      {
        title: { ca: 'Pins i arbres massa pròxims', es: 'Pinos y árboles demasiado próximos' },
        text: {
          ca: 'Quan la vegetació interfereix amb habitatges, tanques, línies o espais d’ús diari.',
          es: 'Cuando la vegetación interfiere con viviendas, vallas, líneas o zonas de uso diario.',
        },
      },
      {
        title: { ca: 'Parcel·les que s’han de recuperar', es: 'Parcelas que hay que recuperar' },
        text: {
          ca: 'Desbrossament i sanejament per tornar a fer útil, segura i presentable una finca o solar.',
          es: 'Desbroce y saneamiento para volver útil, segura y presentable una finca o solar.',
        },
      },
      {
        title: { ca: 'Perímetres que cal renovar', es: 'Perímetros que hay que renovar' },
        text: {
          ca: 'Tancaments antics, accessos mal resolts o límits que necessiten una solució més sòlida.',
          es: 'Cerramientos antiguos, accesos mal resueltos o límites que necesitan una solución más sólida.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Un sol equip per a tot', es: 'Un solo equipo para todo' },
        text: {
          ca: 'Poda, tala, desbrossament i tancaments dins d’una mateixa empresa, sense anar coordinant industrials separats.',
          es: 'Poda, tala, desbroce y cerramientos dentro de una misma empresa, sin ir coordinando industriales separados.',
        },
      },
      {
        title: { ca: 'Intervencions útils i netes', es: 'Intervenciones útiles y limpias' },
        text: {
          ca: 'Busquem que el terreny o la finca quedin realment resolts, no només “tocats”.',
          es: 'Buscamos que el terreno o la finca queden realmente resueltos, no solo “tocados”.',
        },
      },
      {
        title: { ca: 'Cobertura propera', es: 'Cobertura cercana' },
        text: {
          ca: 'Rubí i l’entorn formen part de la nostra zona natural de treball, i això ens dona agilitat.',
          es: 'Rubí y su entorno forman parte de nuestra zona natural de trabajo, y eso nos da agilidad.',
        },
      },
    ],
    areas: {
      ca: 'Rubí, Castellbisbal, Sant Quirze i municipis propers.',
      es: 'Rubí, Castellbisbal, Sant Quirze y municipios cercanos.',
    },
    relatedLinks: [
      { to: desbroceBarcelonaPath, label: { ca: 'Veure desbrossament', es: 'Ver desbroce' } },
      { to: cerramientosRuralesPath, label: { ca: 'Veure tancaments', es: 'Ver cerramientos' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Feu desbrossament en parcel·les grans?', es: '¿Hacéis desbroce en parcelas grandes?' },
        answer: {
          ca: 'Sí, tant en parcel·les particulars com en finques o terrenys amb més extensió.',
          es: 'Sí, tanto en parcelas particulares como en fincas o terrenos de mayor extensión.',
        },
      },
      {
        question: { ca: 'Podeu treballar en habitatges amb poc espai?', es: '¿Podéis trabajar en viviendas con poco espacio?' },
        answer: {
          ca: 'Sí. Planifiquem la maniobra per adaptar-nos a accessos i espais més delicats.',
          es: 'Sí. Planificamos la maniobra para adaptarnos a accesos y espacios más delicados.',
        },
      },
      {
        question: { ca: 'Feu també retirada de restes?', es: '¿Hacéis también retirada de restos?' },
        answer: {
          ca: 'Sí, i és una part important del servei quan es tracta de tala, poda o neteja de terrenys.',
          es: 'Sí, y es una parte importante del servicio cuando se trata de tala, poda o limpieza de terrenos.',
        },
      },
    ],
  },
  [sabadellPath]: {
    eyebrow: { ca: 'Sabadell i Vallès', es: 'Sabadell y Vallès' },
    title: {
      ca: 'Serveis forestals a Sabadell per a habitatges, empreses i parcel·les',
      es: 'Servicios forestales en Sabadell para viviendas, empresas y parcelas',
    },
    description: {
      ca: 'Treballem a Sabadell amb poda, tala, desbrossament, manteniment exterior i tancaments segons el tipus d’espai.',
      es: 'Trabajamos en Sabadell con poda, tala, desbroce, mantenimiento exterior y cerramientos según el tipo de espacio.',
    },
    image: '/trabajos/galeria/poda-palmeras-en-altura.jpg',
    intro: {
      ca: 'Sabadell concentra tant entorns residencials com espais industrials i parcel·les que necessiten serveis exteriors ben executats i amb resposta clara.',
      es: 'Sabadell concentra tanto entornos residenciales como espacios industriales y parcelas que necesitan servicios exteriores bien ejecutados y con respuesta clara.',
    },
    paragraphs: [
      {
        ca: 'Ens adaptem a la necessitat concreta: poda en jardins i comunitats, tala en espais compromesos, desbrossament de terrenys o tancaments per protegir i ordenar el perímetre.',
        es: 'Nos adaptamos a la necesidad concreta: poda en jardines y comunidades, tala en espacios comprometidos, desbroce de terrenos o cerramientos para proteger y ordenar el perímetro.',
      },
      {
        ca: 'També és una zona on el manteniment periòdic té sentit, especialment en parcel·les, exteriors d’empresa i finques amb vegetació que cal controlar.',
        es: 'También es una zona donde el mantenimiento periódico tiene sentido, especialmente en parcelas, exteriores de empresa y fincas con vegetación que hay que controlar.',
      },
    ],
    bullets: [
      { ca: 'Poda en altura i sanejament', es: 'Poda en altura y saneamiento' },
      { ca: 'Tala controlada de pins i arbres', es: 'Tala controlada de pinos y árboles' },
      { ca: 'Desbrossament i neteja de terrenys', es: 'Desbroce y limpieza de terrenos' },
      { ca: 'Manteniment exterior i tancaments', es: 'Mantenimiento exterior y cerramientos' },
    ],
    scenarios: [
      {
        title: { ca: 'Comunitats i espais comuns', es: 'Comunidades y espacios comunes' },
        text: {
          ca: 'Treballs de poda, sanejament i ordre en jardins, accessos i entorns compartits.',
          es: 'Trabajos de poda, saneamiento y orden en jardines, accesos y entornos compartidos.',
        },
      },
      {
        title: { ca: 'Parcel·les que cal sanejar', es: 'Parcelas que hay que sanear' },
        text: {
          ca: 'Intervencions per desbrossar, recuperar ús i reduir acumulació vegetal o risc estacional.',
          es: 'Intervenciones para desbrozar, recuperar uso y reducir acumulación vegetal o riesgo estacional.',
        },
      },
      {
        title: { ca: 'Entorns d’empresa o naus', es: 'Entornos de empresa o naves' },
        text: {
          ca: 'Quan cal mantenir exteriors nets, accessibles i amb una imatge més cuidada.',
          es: 'Cuando hace falta mantener exteriores limpios, accesibles y con una imagen más cuidada.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Capacitat de servei variat', es: 'Capacidad de servicio variado' },
        text: {
          ca: 'No treballem només arbres: també resolem manteniment exterior, parcel·les i tancaments.',
          es: 'No trabajamos solo árboles: también resolvemos mantenimiento exterior, parcelas y cerramientos.',
        },
      },
      {
        title: { ca: 'Execució professional', es: 'Ejecución profesional' },
        text: {
          ca: 'En zones urbanes i mixtes, l’ordre, el ritme i la neteja final pesen tant com la pròpia maniobra.',
          es: 'En zonas urbanas y mixtas, el orden, el ritmo y la limpieza final pesan tanto como la propia maniobra.',
        },
      },
      {
        title: { ca: 'Seguiment fàcil', es: 'Seguimiento fácil' },
        text: {
          ca: 'Treballem amb resposta directa i pressupostos clars, especialment quan es tracta de manteniment recurrent.',
          es: 'Trabajamos con respuesta directa y presupuestos claros, especialmente cuando se trata de mantenimiento recurrente.',
        },
      },
    ],
    areas: {
      ca: 'Sabadell, Barberà, Badia, Sentmenat i entorn del Vallès.',
      es: 'Sabadell, Barberà, Badia, Sentmenat y entorno del Vallès.',
    },
    relatedLinks: [
      { to: talaBarcelonaPath, label: { ca: 'Veure tala controlada', es: 'Ver tala controlada' } },
      { to: worksPath, label: { ca: 'Veure treballs reals', es: 'Ver trabajos reales' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Feu servei per empreses o naus?', es: '¿Hacéis servicio para empresas o naves?' },
        answer: {
          ca: 'Sí. Podem intervenir en exteriors, parcel·les i entorns de treball que necessiten manteniment o sanejament.',
          es: 'Sí. Podemos intervenir en exteriores, parcelas y entornos de trabajo que necesitan mantenimiento o saneamiento.',
        },
      },
      {
        question: { ca: 'Podeu combinar poda i desbrossament?', es: '¿Podéis combinar poda y desbroce?' },
        answer: {
          ca: 'Sí, és molt habitual en parcel·les o finques on cal resoldre l’espai de forma completa.',
          es: 'Sí, es muy habitual en parcelas o fincas donde hay que resolver el espacio de forma completa.',
        },
      },
      {
        question: { ca: 'Treballeu també en municipis propers?', es: '¿Trabajáis también en municipios próximos?' },
        answer: {
          ca: 'Sí, cobrim Sabadell i municipis del voltant dins la nostra àrea habitual.',
          es: 'Sí, cubrimos Sabadell y municipios del entorno dentro de nuestra área habitual.',
        },
      },
    ],
  },
  [terrassaPath]: {
    eyebrow: { ca: 'Terrassa i entorn', es: 'Terrassa y entorno' },
    title: {
      ca: 'Treballs forestals i manteniment exterior a Terrassa',
      es: 'Trabajos forestales y mantenimiento exterior en Terrassa',
    },
    description: {
      ca: 'Poda, tala, desbrossament, neteja de parcel·les i tancaments a Terrassa amb servei professional i proper.',
      es: 'Poda, tala, desbroce, limpieza de parcelas y cerramientos en Terrassa con servicio profesional y cercano.',
    },
    image: '/trabajos/galeria/tala-pino-altura-bosque.jpg',
    intro: {
      ca: 'Terrassa és una zona molt natural per al nostre servei: hi ha parcel·les, habitatges, franges, entorns amb pendent i molts casos on cal intervenir amb criteri.',
      es: 'Terrassa es una zona muy natural para nuestro servicio: hay parcelas, viviendas, franjas, entornos con pendiente y muchos casos donde hay que intervenir con criterio.',
    },
    paragraphs: [
      {
        ca: 'Fem poda i tala de pins i arbres, desbrossament de terrenys, manteniment exterior i tancaments per resoldre tant finques particulars com espais més amplis.',
        es: 'Hacemos poda y tala de pinos y árboles, desbroce de terrenos, mantenimiento exterior y cerramientos para resolver tanto fincas particulares como espacios más amplios.',
      },
      {
        ca: 'És una zona on la rapidesa i la capacitat de resoldre més d’un servei a la vegada és especialment valuosa.',
        es: 'Es una zona donde la rapidez y la capacidad de resolver más de un servicio a la vez es especialmente valiosa.',
      },
    ],
    bullets: [
      { ca: 'Poda i tala amb seguretat', es: 'Poda y tala con seguridad' },
      { ca: 'Desbrossament de parcel·les i finques', es: 'Desbroce de parcelas y fincas' },
      { ca: 'Manteniment exterior puntual o regular', es: 'Mantenimiento exterior puntual o regular' },
      { ca: 'Tancaments perimetrals i accessos', es: 'Cerramientos perimetrales y accesos' },
    ],
    scenarios: [
      {
        title: { ca: 'Terrenys amb vegetació descontrolada', es: 'Terrenos con vegetación descontrolada' },
        text: {
          ca: 'Quan cal netejar, recuperar ús i reduir càrrega vegetal en una sola actuació.',
          es: 'Cuando hace falta limpiar, recuperar uso y reducir carga vegetal en una sola actuación.',
        },
      },
      {
        title: { ca: 'Arbres que comprometen l’espai', es: 'Árboles que comprometen el espacio' },
        text: {
          ca: 'Poda o tala en arbres que afecten construccions, pas, tancaments o seguretat general.',
          es: 'Poda o tala en árboles que afectan construcciones, paso, cerramientos o seguridad general.',
        },
      },
      {
        title: { ca: 'Necessitat de delimitar la finca', es: 'Necesidad de delimitar la finca' },
        text: {
          ca: 'Projectes on convé combinar neteja del terreny i tancament per deixar l’espai resolt.',
          es: 'Proyectos donde conviene combinar limpieza del terreno y cerramiento para dejar el espacio resuelto.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Enfocament pràctic', es: 'Enfoque práctico' },
        text: {
          ca: 'Busquem que el client resolgui el problema real de la finca, no només una part del treball.',
          es: 'Buscamos que el cliente resuelva el problema real de la finca, no solo una parte del trabajo.',
        },
      },
      {
        title: { ca: 'Servei proper', es: 'Servicio cercano' },
        text: {
          ca: 'Terrassa entra de ple dins la nostra zona forta i això ajuda a donar resposta ràpida.',
          es: 'Terrassa entra de lleno dentro de nuestra zona fuerte y eso ayuda a dar respuesta rápida.',
        },
      },
      {
        title: { ca: 'Capacitat d’execució completa', es: 'Capacidad de ejecución completa' },
        text: {
          ca: 'Podem combinar maniobra forestal, neteja i tancament quan el projecte ho demana.',
          es: 'Podemos combinar maniobra forestal, limpieza y cerramiento cuando el proyecto lo pide.',
        },
      },
    ],
    areas: {
      ca: 'Terrassa, Matadepera, Viladecavalls i zona propera.',
      es: 'Terrassa, Matadepera, Viladecavalls y zona próxima.',
    },
    relatedLinks: [
      { to: desbroceBarcelonaPath, label: { ca: 'Veure desbrossament', es: 'Ver desbroce' } },
      { to: cerramientosRuralesPath, label: { ca: 'Veure tancaments rurals', es: 'Ver cerramientos rurales' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Podeu actuar en terrenys grans?', es: '¿Podéis actuar en terrenos grandes?' },
        answer: {
          ca: 'Sí, tant en finques particulars com en terrenys amb més extensió o diferents punts d’actuació.',
          es: 'Sí, tanto en fincas particulares como en terrenos de mayor extensión o con distintos puntos de actuación.',
        },
      },
      {
        question: { ca: 'Feu pressupost segons visita?', es: '¿Hacéis presupuesto según visita?' },
        answer: {
          ca: 'Sí, especialment quan cal valorar accessos, volum de vegetació, arbres o perímetres.',
          es: 'Sí, especialmente cuando hay que valorar accesos, volumen de vegetación, árboles o perímetros.',
        },
      },
      {
        question: { ca: 'Treballeu també en municipis veïns?', es: '¿Trabajáis también en municipios vecinos?' },
        answer: {
          ca: 'Sí, Terrassa i l’entorn immediat formen part de la nostra cobertura habitual.',
          es: 'Sí, Terrassa y el entorno inmediato forman parte de nuestra cobertura habitual.',
        },
      },
    ],
  },
  [baixLlobregatPath]: {
    eyebrow: { ca: 'Baix Llobregat', es: 'Baix Llobregat' },
    title: {
      ca: 'Serveis forestals al Baix Llobregat per a finques, parcel·les i habitatges',
      es: 'Servicios forestales en Baix Llobregat para fincas, parcelas y viviendas',
    },
    description: {
      ca: 'Cobertura forta a Martorell, Abrera, Vallirana, Cervelló, Corbera i Sant Vicenç dels Horts amb poda, tala, desbrossament i tancaments.',
      es: 'Cobertura fuerte en Martorell, Abrera, Vallirana, Cervelló, Corbera y Sant Vicenç dels Horts con poda, tala, desbroce y cerramientos.',
    },
    image: '/trabajos/servicios/cerramiento-murete-portillon.jpg',
    intro: {
      ca: 'El Baix Llobregat és una de les zones que més ens interessa treballar per proximitat real. Aquí fem tot tipus de serveis per a parcel·les, finques, habitatges i terrenys amb vegetació o necessitat de tancament.',
      es: 'Baix Llobregat es una de las zonas que más nos interesa trabajar por proximidad real. Aquí hacemos todo tipo de servicios para parcelas, fincas, viviendas y terrenos con vegetación o necesidad de cerramiento.',
    },
    paragraphs: [
      {
        ca: 'És una àrea molt variada: hi ha cases amb jardí, finques rústiques, terrenys amb pendent, parcel·les que necessiten sanejament i perímetres que cal protegir millor.',
        es: 'Es un área muy variada: hay viviendas con jardín, fincas rústicas, terrenos con pendiente, parcelas que necesitan saneamiento y perímetros que hay que proteger mejor.',
      },
      {
        ca: 'Per això treballem amb una oferta completa: tala, poda, desbrossament, neteja de terrenys, manteniment exterior i tancaments rurals o residencials.',
        es: 'Por eso trabajamos con una oferta completa: tala, poda, desbroce, limpieza de terrenos, mantenimiento exterior y cerramientos rurales o residenciales.',
      },
    ],
    bullets: [
      { ca: 'Poda i tala d’arbres i pins', es: 'Poda y tala de árboles y pinos' },
      { ca: 'Desbrossament i neteja de parcel·les', es: 'Desbroce y limpieza de parcelas' },
      { ca: 'Manteniment exterior de finca', es: 'Mantenimiento exterior de finca' },
      { ca: 'Tancaments i vallats perimetrals', es: 'Cerramientos y vallados perimetrales' },
    ],
    scenarios: [
      {
        title: { ca: 'Parcel·les a recuperar', es: 'Parcelas que recuperar' },
        text: {
          ca: 'Terrenys amb vegetació acumulada, restes seques o necessitat de posar ordre abans d’estiu o de venda.',
          es: 'Terrenos con vegetación acumulada, restos secos o necesidad de poner orden antes del verano o de una venta.',
        },
      },
      {
        title: { ca: 'Finques amb arbres grans o risc', es: 'Fincas con árboles grandes o riesgo' },
        text: {
          ca: 'Poda o tala quan hi ha pins, arbres descompensats o exemplars massa pròxims a habitatges i accessos.',
          es: 'Poda o tala cuando hay pinos, árboles descompensados o ejemplares demasiado próximos a viviendas y accesos.',
        },
      },
      {
        title: { ca: 'Perímetres que cal resoldre bé', es: 'Perímetros que hay que resolver bien' },
        text: {
          ca: 'Tancaments per protegir finca, millorar accés o delimitar el terreny amb una solució més ferma.',
          es: 'Cerramientos para proteger finca, mejorar acceso o delimitar el terreno con una solución más firme.',
        },
      },
    ],
    valueProps: [
      {
        title: { ca: 'Zona estratègica per nosaltres', es: 'Zona estratégica para nosotros' },
        text: {
          ca: 'La proximitat real ens permet donar millor resposta, més seguiment i més facilitat per visitar.',
          es: 'La proximidad real nos permite dar mejor respuesta, más seguimiento y más facilidad para visitar.',
        },
      },
      {
        title: { ca: 'Tot tipus de serveis', es: 'Todo tipo de servicios' },
        text: {
          ca: 'No ens limitem a un sol tipus de feina. Podem entrar en manteniment, bosc, jardí, finca o tancament.',
          es: 'No nos limitamos a un solo tipo de trabajo. Podemos entrar en mantenimiento, bosque, jardín, finca o cerramiento.',
        },
      },
      {
        title: { ca: 'Enfocament resolutiu', es: 'Enfoque resolutivo' },
        text: {
          ca: 'L’objectiu és que la finca quedi millor, més segura i més usable després de la intervenció.',
          es: 'El objetivo es que la finca quede mejor, más segura y más utilizable después de la intervención.',
        },
      },
    ],
    areas: {
      ca: 'Martorell, Abrera, Vallirana, Cervelló, Corbera de Llobregat, Sant Vicenç dels Horts i municipis propers.',
      es: 'Martorell, Abrera, Vallirana, Cervelló, Corbera de Llobregat, Sant Vicenç dels Horts y municipios próximos.',
    },
    relatedLinks: [
      { to: cerramientosRuralesPath, label: { ca: 'Veure tancaments rurals', es: 'Ver cerramientos rurales' } },
      { to: worksPath, label: { ca: 'Veure treballs reals', es: 'Ver trabajos reales' } },
      { to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } },
    ],
    faqs: [
      {
        question: { ca: 'Treballeu en Martorell i Abrera?', es: '¿Trabajáis en Martorell y Abrera?' },
        answer: {
          ca: 'Sí, igual que a Vallirana, Cervelló, Corbera o Sant Vicenç dels Horts. Són municipis dins la nostra zona forta.',
          es: 'Sí, igual que en Vallirana, Cervelló, Corbera o Sant Vicenç dels Horts. Son municipios dentro de nuestra zona fuerte.',
        },
      },
      {
        question: { ca: 'Podeu fer servei complet de finca?', es: '¿Podéis hacer servicio completo de finca?' },
        answer: {
          ca: 'Sí, podem combinar tala, poda, desbrossament, neteja i tancament segons el que necessiti la finca.',
          es: 'Sí, podemos combinar tala, poda, desbroce, limpieza y cerramiento según lo que necesite la finca.',
        },
      },
      {
        question: { ca: 'Només feu una zona concreta del Baix Llobregat?', es: '¿Solo hacéis una zona concreta de Baix Llobregat?' },
        answer: {
          ca: 'No, cobrim diversos municipis i ens adaptem segons el tipus de feina i la distància.',
          es: 'No, cubrimos varios municipios y nos adaptamos según el tipo de trabajo y la distancia.',
        },
      },
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
        ca: 'Ens van resoldre una poda en altura complicada al jardí i van deixar tota la zona neta. Molt bona sensació de control i serietat durant la feina.',
        es: 'Nos resolvieron una poda en altura complicada en el jardín y dejaron toda la zona limpia. Muy buena sensación de control y seriedad durante el trabajo.',
      },
      author: 'Marta G.',
      location: 'Sant Cugat del Vallès',
      badge: { ca: 'Poda en habitatge', es: 'Poda en vivienda' },
    },
    {
      text: {
        ca: 'La parcel·la estava molt carregada i en una sola intervenció la van deixar transitable i preparada. Van ser ràpids amb el pressupost i molt solvents a l’obra.',
        es: 'La parcela estaba muy cargada y en una sola intervención la dejaron transitable y preparada. Fueron rápidos con el presupuesto y muy solventes en obra.',
      },
      author: 'David R.',
      location: 'Terrassa',
      badge: { ca: 'Desbrossament de parcel·la', es: 'Desbroce de parcela' },
    },
    {
      text: {
        ca: 'Necessitàvem tancar la finca amb un accés ben resolt i ho van fer amb molt bon acabat. Es nota que estan acostumats a treballar sobre terreny real.',
        es: 'Necesitábamos cerrar la finca con un acceso bien resuelto y lo hicieron con muy buen acabado. Se nota que están acostumbrados a trabajar sobre terreno real.',
      },
      author: 'Anna P.',
      location: 'Baix Llobregat',
      badge: { ca: 'Tancament de finca', es: 'Cerramiento de finca' },
    },
  ],
};

export const contact = {
  label: { ca: 'Contacte', es: 'Contacto' },
  title: {
    ca: 'Explica’ns què necessites i et preparem pressupost',
    es: 'Cuéntanos qué necesitas y te preparamos presupuesto',
  },
  description: {
    ca: "Deixa'ns el teu telèfon o correu i t'atenem en menys de 24 hores. Pressupost gratuït per a tala, poda, desbrossament, manteniment o tancaments.",
    es: 'Déjanos tu teléfono o correo y te atendemos en menos de 24 horas. Presupuesto gratuito para tala, poda, desbroce, mantenimiento o cerramientos.',
  },
  notePrefix: {
    ca: 'També ens pots contactar directament:',
    es: 'También puedes contactarnos directamente:',
  },
};

export const footer = {
  brand: {
    ca: 'Professionals en tala, poda, desbrossament, manteniment exterior i tancaments a Barcelona i Catalunya. Treballs reals, resposta clara i bona execució.',
    es: 'Profesionales en tala, poda, desbroce, mantenimiento exterior y cerramientos en Barcelona y Cataluña. Trabajos reales, respuesta clara y buena ejecución.',
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
