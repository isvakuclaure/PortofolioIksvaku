// Datos de proyectos. La prosa admite **negrita** con dobles asteriscos.
// Los valores marcados como `pending` se pintan en ámbar: son huecos por confirmar.

const BASE = '/PortofolioIksvaku';

export interface Spec {
  label: string;
  value: string;
  pending?: boolean;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  company: string;
  /** Muestra la placa con el logo de Liftel junto al nombre de la empresa */
  withLogo?: boolean;
  specs: Spec[];
  stack: string[];
  status: string;
  /** true = lámpara verde "en producción" */
  live: boolean;
  paragraphs: string[];
  shots?: { src: string; caption: string }[];
  video?: string;
  /** vertical = va enmarcado como pantalla de móvil junto a las capturas */
  videoOrientation?: 'portrait' | 'landscape';
  videoPoster?: string;
  turningPoint?: {
    beforeLabel: string;
    before: string;
    afterLabel: string;
    after: string;
  };
  quote?: { text: string; source: string };
  links?: { label: string; href: string }[];
}

export interface OtherProject {
  company: string;
  title: string;
  stack: string;
  years: string;
  /** Sin valor = sigue en pie. true = ya no está en servicio */
  retired?: boolean;
  video?: string;
  poster?: string;
  href?: string;
  hrefLabel?: string;
}

export const featured: FeaturedProject[] = [
  {
    slug: 'netel-app',
    title: 'Netel App',
    company: 'Liftel · Servicios conectados IoT',
    withLogo: true,
    specs: [
      { label: 'Año', value: '2025 — hoy' },
      { label: 'Plataforma', value: 'Android · iOS' },
      { label: 'Mi rol', value: 'Frontend móvil' },
      { label: 'En Google Play', value: '1.000+ descargas\n4,7 ★ · 25 reseñas' },
      { label: 'Uso', value: 'Cientos de usuarios activos al día' },
    ],
    stack: ['React Native', 'TypeScript', 'Axios', 'APIs IoT'],
    status: 'En producción',
    live: true,
    paragraphs: [
      'Un portero automático no perdona. Si la app tarda, si el token caduca, si la petición se pierde: hay alguien en el portal, en la calle, esperando que se abra la puerta. **Ese es el contexto en el que trabajo cada día.**',
      'Y no se partía de cero. La app ya estaba instalada en comunidades reales, así que rediseñar la interfaz significaba cambiársela por debajo a gente que la usaba esa misma mañana.',
      'Netel App es el mando a distancia de un edificio: abre puertas, avisa del buzón y gestiona varios inmuebles desde una cuenta. Yo llevo el frontend móvil en React Native — pantallas, navegación, estado y la capa de Axios contra los servicios IoT del equipo de backend, que son los que hablan con el hardware del portal.',
    ],
    shots: [
      { src: `${BASE}/netel-login.jpg`, caption: 'Acceso por teléfono' },
      { src: `${BASE}/netel-puertas.jpg`, caption: 'Tus puertas · modo oscuro' },
    ],
    video: `${BASE}/netel-app.mp4`,
    videoOrientation: 'portrait',
    turningPoint: {
      beforeLabel: 'El punto de partida',
      before: 'Una app que ya funcionaba, con una interfaz que no acompañaba.',
      afterLabel: 'Lo que hice',
      after: 'Rediseñar la interfaz sin romper a quien ya la usaba a diario.',
    },
    quote: {
      text: 'No falla y te da la libertad de no tener que usar el mando.',
      source: 'Reseña en Google Play · abril 2026',
    },
    links: [
      { label: 'Ficha en Google Play', href: 'https://play.google.com/store/apps/details?id=com.netelIoT' },
    ],
  },
  {
    slug: 'liftplay',
    title: 'Liftplay',
    company: 'Liftel · Pantallas digitales en cabina',
    withLogo: true,
    specs: [
      { label: 'Año', value: '2024 — hoy' },
      { label: 'Plataforma', value: 'Web' },
      { label: 'Mi rol', value: 'Frontend' },
      { label: 'Escala', value: 'Toda la flota de pantallas de la compañía' },
    ],
    stack: ['React · Next.js', 'TypeScript', 'gRPC', 'Zustand', 'Tailwind CSS', 'Driver.js', 'Leaflet'],
    status: 'En producción',
    live: true,
    paragraphs: [
      'Dentro de muchos ascensores hay una pantalla. Liftplay es desde donde se decide qué sale en ella: contenido multimedia, modos de visualización y la configuración de cada pantalla instalada.',
      'El reto no era dibujar el panel: era que **los datos llegan solos y las acciones ocurren a la vez**. Con gRPC el operador no pregunta, escucha — y puede lanzar cambios sobre varias pantallas simultáneamente. Hay que decidir qué se repinta, qué se descarta, y qué pasa cuando la conexión se cae a mitad de una operación.',
      'Monté también los tutoriales interactivos con Driver.js y los mapas de flota con Leaflet, porque quien configura esto no tiene tiempo de leerse un manual.',
    ],
    video: `${BASE}/lifplay.mp4`,
    videoOrientation: 'landscape',
    videoPoster: `${BASE}/poster-liftplay.jpg`,
  },
  {
    slug: 'aplicaciones-internas',
    title: 'Aplicaciones internas de gestión',
    company: 'Liftel · Uso interno',
    withLogo: true,
    specs: [
      { label: 'Año', value: '2024 — hoy' },
      { label: 'Plataforma', value: 'Web' },
      { label: 'Mi rol', value: 'Frontend — todas las pantallas' },
      { label: 'Uso', value: 'Equipos internos, a diario' },
      { label: 'Acceso', value: 'Interno · sin material público' },
    ],
    stack: ['React · Next.js', 'TypeScript', 'gRPC', 'Zustand', 'Tailwind CSS'],
    status: 'En producción',
    live: true,
    paragraphs: [
      'Conjunto de aplicaciones internas de gestión para el control de las tareas diarias del equipo. Por ser de uso interno no puedo mostrar capturas ni entrar en detalle del producto.',
      'Desarrollé **todas las pantallas** sobre el mismo stack que Liftplay, con componentes reutilizables pensados para que las aplicaciones internas puedan crecer sin rehacerlas.',
      'Es también el proyecto donde más de cerca trabajo con el equipo de backend: **defino con ellos qué datos necesita la interfaz** y en qué forma le llegan.',
    ],
  },
  {
    slug: 'jona-nutricion',
    title: 'Jona Nutrición',
    company: 'Proyecto propio · de principio a fin',
    specs: [
      { label: 'Año', value: '2024' },
      { label: 'Plataforma', value: 'Web' },
      { label: 'Mi rol', value: 'Todo' },
      { label: 'Cliente', value: 'Encargo propio' },
    ],
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Magic link'],
    status: 'jonanutricion.com',
    live: true,
    paragraphs: [
      'Plataforma de consultas de nutrición online para un nutricionista, con portal de paciente y gestión de citas.',
      'Se maneja información de salud, así que la decisión de fondo fue de seguridad: **no almacenar contraseñas**. El acceso va por enlace mágico al correo, de modo que la base de datos nunca guarda credenciales. Menos superficie de ataque y menos exposición legal ante una filtración.',
      'Es el único proyecto donde tomé **todas** las decisiones: modelo de datos, autenticación, diseño y despliegue. Las citas se sincronizan en tiempo real con Supabase. Sigue en producción.',
    ],
    video: `${BASE}/jonanutricion.mp4`,
    videoOrientation: 'landscape',
    videoPoster: `${BASE}/poster-jona.jpg`,
    links: [{ label: 'Abrir jonanutricion.com', href: 'https://jonanutricion.com' }],
  },
];

export const others: OtherProject[] = [
  {
    company: 'GGTech',
    title: 'My Life',
    stack: 'PlayCanvas · Node.js · Snapchat',
    years: '2021—22',
    retired: true,
    video: `${BASE}/projectLife.mp4`,
    poster: `${BASE}/poster-mylife.jpg`,
  },
  {
    company: 'GGTech',
    title: 'Blast Heroes',
    stack: 'PlayCanvas · WebGL',
    years: '2021—22',
    retired: true,
    video: `${BASE}/blastheroes.mp4`,
    poster: `${BASE}/poster-blastheroes.jpg`,
  },
  {
    company: 'Krystaline',
    title: 'VT-Training',
    stack: 'WordPress · SEO',
    years: '2022—23',
    retired: true,
    video: `${BASE}/vttraining.mp4`,
    poster: `${BASE}/poster-vttraining.jpg`,
  },
  {
    company: 'Krystaline',
    title: 'Marbac',
    stack: 'WordPress · SEO',
    years: '2022—23',
    retired: true,
    video: `${BASE}/marbac.mp4`,
    poster: `${BASE}/poster-marbac.jpg`,
  },
  {
    company: 'Game jam',
    title: 'Interview Dualist',
    stack: 'Unity · C#',
    years: '2023',
    retired: true,
    video: `${BASE}/interviewDualist.mp4`,
    poster: `${BASE}/poster-interviewdualist.jpg`,
  },
  {
    company: 'Open source',
    title: 'Sandscripter',
    stack: 'Next.js · IA · colaboración',
    years: '2024',
    video: `${BASE}/sandscripter.mp4`,
    poster: `${BASE}/poster-sandscripter.jpg`,
    href: 'https://github.com/dawalberto/sandscripters-ai',
    hrefLabel: 'Repositorio',
  },
];
