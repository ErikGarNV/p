// index.js
export const servicesData = [
  {
    title: "Desarrollo FullStack",
    description:
      "Tu negocio merece una base digital rápida, segura y preparada para el futuro. Desarrollo aplicaciones web personalizadas con arquitectura limpia, bases de datos optimizadas e integraciones perfectas—garantizando confiabilidad en cada capa.",
    items: [
      {
        title: "Ingeniería Backend",
        description: "(APIs REST/GraphQL, Microservicios, Sistemas de Autenticación)",
      },
      {
        title: "Excelencia Frontend",
        description: "(React, Vue, TypeScript, UI/UX Interactiva)",
      },
      {
        title: "Diseño de Bases de Datos",
        description: "(Optimización SQL/NoSQL, Estructuras Escalables)",
      },
    ],
  },
  {
    title: "DevOps y Soluciones en la Nube",
    description:
      "Desplegar software no debería ser un riesgo. Automatizo infraestructura, refuerzo seguridad y aprovecho plataformas en la nube (AWS/Azure) para mantener tu aplicación funcionando sin problemas—24/7, a cualquier escala.",
    items: [
      {
        title: "Pipelines CI/CD",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Gestión de Servidores",
        description: "(Linux, Nginx, Balanceo de Carga)",
      },
      {
        title: "Optimización de Rendimiento",
        description: "(Caché, Compresión, Puntajes Lighthouse 90+)",
      },
    ],
  },
  {
    title: "Seguridad y Optimización",
    description:
      "Aplicaciones lentas o hackeadas destruyen la confianza. Refuerzo la seguridad (protección XSS/SQLI, OAuth) y optimizo cuellos de botella para que tu aplicación se mantenga rápida, segura y escalable a medida que creces.",
    items: [
      {
        title: "Auditorías de Código",
        description: "(Refactorización, Limpieza de Deuda Técnica)",
      },
      {
        title: "Pruebas de Penetración",
        description: "(Evaluaciones de Vulnerabilidades)",
      },
      {
        title: "Stack Técnico SEO",
        description: "(SSR, Metadatos, Datos Estructurados)",
      },
    ],
  },
  {
    title: "Aplicaciones Web y Móviles",
    description:
      "Una interfaz torpe puede hundir incluso las mejores ideas. Creo aplicaciones web y móviles responsivas, pixel perfect (React Native/Flutter) que los usuarios aman—uniendo diseño y funcionalidad sin problemas.",
    items: [
      {
        title: "Aplicaciones Multiplataforma",
        description: "(Código único para iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Modo offline, Notificaciones Push)",
      },
      {
        title: "E-Commerce",
        description: "(Flujos de Checkout, Pasarelas de Pago, APIs de Inventario)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "LAEQ & Asociados",
    description:
      "Consultora especializada en mercados energéticos y regulación de gas natural con más de 11 años de trayectoria en el sector.",
    href: "https://laeqasociados.com",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/architecture.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Framer Motion" },
      { id: 4, name: "Three.js" },
    ],
  },
  {
    id: 2,
    name: "Acomacasa",
    description:
      "Prendas de alta costura confeccionadas con fibra de vicuña, la fibra más fina del mundo, uniendo herencia andina y elegancia atemporal",
    href: "https://acomacasa.pe",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/couch.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Stripe" },
      { id: 3, name: "Prisma" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Gestión de Marca de Alimentos",
    description:
      "Una web de gestión de marca visualmente impactante para una empresa de alimentos, diseñada para atraer y retener usuarios.",
    href: "https://olayafoods.netlify.app",
    image: "/assets/projects/food-brand.jpg",
    bgImage: "/assets/backgrounds/food.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Nuxt.js" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Sass" },
    ],
  },
  {
    id: 4,
    name: "Plataforma de Roblox Lua",
    description:
      "Aporte a desarrollo de juegos en Roblox utilizando el lenguaje Lua.",
    href: "#privado",
    image: "/assets/projects/roblox.jpg",
    bgImage: "/assets/backgrounds/medical.jpg",
    frameworks: [
      { id: 1, name: "Lua" },
      { id: 2, name: "Blender" },
      { id: 3, name: "C+" },
      { id: 4, name: "VFX" },
    ],
  },
  {
    id: 5,
    name: "Mercado de Decoración del Hogar",
    description:
      "Curaduría ultra-exclusiva de mobiliario FF&E y piezas statement. Estética 'quiet luxury' con acabados high-end diseñados para espacios de élite. El nuevo estándar 'old money' que define la vanguardia y el lujo silencioso.",
    href: "https://terrene-ff-e.netlify.app",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Software Redes Eléctricas",
    description:
      "Desarrollo de software de ingeniería e interfaces gráficas. Implementación de cálculos matemáticos (Newton-Raphson) y automatización para AutoCAD y software de diseño avanzado.",
    href: "#privado",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Matlab" },
      { id: 3, name: "C# / C++" },
      { id: 4, name: "Figma" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/duval_dubai/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/duval-rojas-05a5b0372/" },
  { name: "GitHub", href: "https://github.com/DuvalAdrian" },
];

export const userDetails = {
  name: "Duval Adrian",
  tagline: "Arquitectura de Software & Diseño Sensorial",
  email: "duvaladrian@gmail.com"
};

export const name = "Duval Adrian";
export const role = "Desarrollador Full Stack";
