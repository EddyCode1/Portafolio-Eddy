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
    deployWeb: 'https://bank-frontend-lyart.vercel.app/',
    deployMovil: 'https://expo.dev/artifacts/eas/Mmj--sUgk3xDq54pIL9zrEzm2FxmLCtqGwfVh4e23JI.apk',
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
    title: 'Gestión de Restaurantes',
    description:
      'Sistema integral para la gestión de restaurantes, diseñado para centralizar la administración de múltiples establecimientos en una sola plataforma.',
    longDescription:
      'Sistema integral para la gestión de restaurantes, diseñado para centralizar la administración de múltiples establecimientos en una sola plataforma. La aplicación permite a los clientes realizar reservas, realizar pedidos, consultar el menú de cada restaurante y acceder a información detallada como la ubicación de las mesas, eventos y facturación. Además, integra servicios de mapas para visualizar la ubicación de los restaurantes y redirigir al usuario a aplicaciones de navegación como Waze.\n\nEl proyecto fue desarrollado tanto para plataforma web como móvil, ofreciendo a los clientes una experiencia consistente y las mismas funcionalidades principales en ambas versiones. Asimismo, implementa un sistema de gestión basado en roles, diferenciando entre administradores y gerentes. Mientras el administrador posee control sobre toda la plataforma, cada gerente administra exclusivamente su restaurante, con acceso a funciones como la actualización de menús y recetas, gestión de inventario, administración de productos y consulta de reportes de ventas, garantizando un control eficiente de las operaciones de su establecimiento.',
    skills: ['React', 'React Native', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'JWT'],
    repo: 'https://github.com/EddyCode1/Restaurant-Manager.git',
    demo: '',
    deployWeb: 'https://restaurante-frontend-blond.vercel.app/',
    deployMovil: 'https://expo.dev/artifacts/eas/AZxGFOc4aZwjIYU00_MNAhUpyqhWyEdsPGuVxEol774.apk',
    images: [
      { src: '/assets/img/RWEB-1.png', alt: 'Dashboard web del sistema de restaurantes', type: 'web' },
      { src: '/assets/img/RWEB-2.png', alt: 'Gestión de menús web', type: 'web' },
      { src: '/assets/img/RWEB-3.png', alt: 'Reservas y pedidos web', type: 'web' },
      { src: '/assets/img/RWEB-4.png', alt: 'Administración de mesas web', type: 'web' },
      { src: '/assets/img/RWEB-5.png', alt: 'Reportes de ventas web', type: 'web' },
      { src: '/assets/img/RWEB-6.png', alt: 'Gestión de inventario web', type: 'web' },
      { src: '/assets/img/RWEB-7.png', alt: 'Perfil de restaurante web', type: 'web' },
      { src: '/assets/img/RWEB-8.png', alt: 'Facturación web', type: 'web' },
      { src: '/assets/img/RWEB-9.png', alt: 'Mapa y ubicaciones web', type: 'web' },
      { src: '/assets/img/RMOVIL-1.jpeg', alt: 'Dashboard móvil del sistema de restaurantes', type: 'movil' },
      { src: '/assets/img/RMOVIL-2.jpeg', alt: 'Menú digital móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-3.jpeg', alt: 'Reservas móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-4.jpeg', alt: 'Pedidos móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-5.jpeg', alt: 'Historial de pedidos móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-6.jpeg', alt: 'Notificaciones móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-7.jpeg', alt: 'Perfil de usuario móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-8.jpeg', alt: 'Mapa y navegación móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-9.jpeg', alt: 'Facturación móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-10.jpeg', alt: 'Gestión de inventario móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-11.jpeg', alt: 'Reportes móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-12.jpeg', alt: 'Eventos y promociones móvil', type: 'movil' },
      { src: '/assets/img/RMOVIL-13.jpeg', alt: 'Configuración del restaurante móvil', type: 'movil' },
    ],
  },
  {
    id: 3,
    title: 'Gestión de Car Wash',
    description:
      'Sistema de gestión para Car Wash desarrollado para optimizar la administración de las operaciones del negocio y mejorar la experiencia de los clientes.',
    longDescription:
      'Sistema de gestión para Car Wash desarrollado con el objetivo de optimizar la administración de las operaciones del negocio y mejorar la experiencia de los clientes. La plataforma permite gestionar la información de empleados, clientes y administradores, así como controlar las reservas y el seguimiento de los servicios ofrecidos.\n\nDesde el lado del cliente, el sistema facilita la consulta de horarios disponibles, el catálogo de servicios y la realización de reservas en línea. Además, incorpora un temporizador en tiempo real que permite monitorear el progreso del servicio y conocer el tiempo transcurrido desde su inicio. Como complemento, el sistema incluye un historial de servicios y un módulo de facturación, proporcionando un registro detallado de cada atención realizada y una administración más eficiente del negocio.',
    skills: ['HTML', 'Java', 'JavaScript', 'SQL', 'Spring Boot'],
    repo: 'https://github.com/EddyCode1/proyecto_final.git',
    demo: '',
    images: [
      { src: '/assets/img/CAR-1.png', alt: 'Panel principal del Car Wash' },
      { src: '/assets/img/CAR-2.png', alt: 'Gestión de reservas' },
      { src: '/assets/img/CAR-3.png', alt: 'Catálogo de servicios' },
      { src: '/assets/img/CAR-4.png', alt: 'Temporizador en tiempo real' },
      { src: '/assets/img/CAR5.png', alt: 'Historial de servicios' },
      { src: '/assets/img/CAR-6.png', alt: 'Módulo de facturación' },
      { src: '/assets/img/CAR-7.png', alt: 'Administración de empleados' },
    ],
  },
]
