/**
 * Proyectos del portafolio.
 * TODO: Reemplaza con tus proyectos reales (título, descripción, skills, repo y capturas).
 */
export const projects = [
  {
    id: 1,
    title: 'Sistema Bancario',
    description:
      'Aplicación bancaria multiplataforma para la administración de cuentas, transferencias, pago de servicios y gestión de productos financieros.',
    longDescription:
      'Aplicación bancaria multiplataforma desarrollada para la administración de cuentas, transferencias, pago de servicios y gestión de productos financieros. El sistema ofrece una interfaz moderna e intuitiva, incorporando funcionalidades que mejoran la experiencia del usuario, como la administración de favoritos y el acceso rápido a operaciones frecuentes. El proyecto fue implementado tanto en una versión web como en una aplicación móvil, compartiendo la misma lógica de negocio y garantizando una experiencia consistente entre ambas plataformas.',
    skills: ['React', 'React Native', 'Node.js', 'MongoDB', '.NET', 'PostgreSQL', 'Docker', 'JWT'],
    repo: 'https://github.com/EddyCode1/bank-system.git',
    demo: '',
    images: [
      { src: '/assets/img/BWEB-1.png', alt: 'Dashboard web del sistema bancario', type: 'web' },
      { src: '/assets/img/BWEB-2.png', alt: 'Gestión de cuentas web', type: 'web' },
      { src: '/assets/img/BWEB-3.png', alt: 'Transferencias y pagos web', type: 'web' },
      { src: '/assets/img/BWEB-4.png', alt: 'Administración de favoritos web', type: 'web' },
      { src: '/assets/img/BWEB-5.png', alt: 'Seguridad y autenticación web', type: 'web' },
      { src: '/assets/img/BWEB-6.png', alt: 'Productos financieros web', type: 'web' },
      { src: '/assets/img/BWEB-7.png', alt: 'Panel de administración web', type: 'web' },
      { src: '/assets/img/BMOVIL-1.jpeg', alt: 'Dashboard móvil del sistema bancario', type: 'movil' },
      { src: '/assets/img/BMOVIL-2.jpeg', alt: 'Gestión de cuentas móvil', type: 'movil' },
      { src: '/assets/img/BMOVIL-3.jpeg', alt: 'Transferencias y pagos móvil', type: 'movil' },
      { src: '/assets/img/BMOVIL-4.jpeg', alt: 'Operaciones frecuentes móvil', type: 'movil' },
      { src: '/assets/img/BMOVIL-5.jpeg', alt: 'Perfil y configuración móvil', type: 'movil' },
      { src: '/assets/img/BMOVIL-6.jpeg', alt: 'Notificaciones móvil', type: 'movil' },
      { src: '/assets/img/BMOVIL-7.jpeg', alt: 'Productos financieros móvil', type: 'movil' },
    ],
  },
  {
    id: 2,
    title: 'Sistema de Gestión Administrativa',
    description:
      'Aplicación web para la administración de usuarios, roles y reportes, con autenticación y panel de control.',
    longDescription:
      'Sistema completo de gestión administrativa desarrollado para optimizar el control de usuarios, roles y generación de reportes. Incluye autenticación segura con JWT, panel de control interactivo y una interfaz moderna y responsiva. El backend expone una API RESTful con operaciones CRUD completas, mientras que el frontend consume los datos en tiempo real y ofrece una experiencia de usuario fluida.',
    skills: ['React', 'Node.js', 'MongoDB', 'JWT'],
    repo: 'https://github.com/tu-usuario/proyecto-gestion',
    demo: '',
    images: [
      { alt: 'Panel de control del sistema de gestión' },
      { alt: 'Gestión de usuarios y roles' },
      { alt: 'Generación de reportes' },
    ],
  },
  {
    id: 3,
    title: 'Tienda en Línea (E-commerce)',
    description:
      'Plataforma de comercio electrónico con carrito de compras, catálogo de productos y pasarela de pago simulada.',
    longDescription:
      'Plataforma de comercio electrónico completa con navegación de productos por categorías, carrito de compras persistente, proceso de checkout simulado y panel de administración. Implementa búsqueda y filtros avanzados, gestión de inventario y un diseño responsivo optimizado para conversión. La arquitectura modular permite escalar fácilmente añadiendo nuevos módulos de funcionalidad.',
    skills: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    repo: 'https://github.com/tu-usuario/proyecto-ecommerce',
    demo: '',
    images: [
      { alt: 'Catálogo de productos' },
      { alt: 'Carrito de compras' },
      { alt: 'Panel de administración' },
    ],
  },
  {
    id: 4,
    title: 'App de Gestión de Tareas',
    description:
      'Aplicación para organizar tareas por proyecto, con tableros estilo Kanban y notificaciones en tiempo real.',
    longDescription:
      'Aplicación colaborativa de gestión de tareas con tableros Kanban drag & drop, asignación de miembros, fechas límite y notificaciones push en tiempo real mediante WebSockets. Cada proyecto tiene su propio tablero personalizable con columnas configurables. Incluye autenticación de usuarios, roles por proyecto y un historial de actividad para tracking completo.',
    skills: ['React', 'Zustand', 'Socket.io'],
    repo: 'https://github.com/tu-usuario/proyecto-tareas',
    demo: '',
    images: [
      { alt: 'Tablero Kanban con tareas' },
      { alt: 'Vista de proyecto y miembros' },
      { alt: 'Notificaciones en tiempo real' },
    ],
  },
  {
    id: 5,
    title: 'API REST de Inventario',
    description:
      'Backend robusto para el control de inventario con validaciones, documentación y pruebas automatizadas.',
    longDescription:
      'API RESTful para control de inventario empresarial con operaciones CRUD completas, validaciones de datos, paginación, filtros y ordenamiento. Documentada con Swagger/OpenAPI y probada con Jest. Implementa autenticación por API keys, manejo de errores consistente y sigue principios REST y clean code. Ideal como backend para sistemas de gestión de almacenes.',
    skills: ['Node.js', 'Express', 'MySQL', 'Jest'],
    repo: 'https://github.com/tu-usuario/proyecto-inventario-api',
    demo: '',
    images: [
      { alt: 'Documentación Swagger de la API' },
      { alt: 'Ejemplo de endpoints y respuestas' },
      { alt: 'Pruebas automatizadas con Jest' },
    ],
  },
]
