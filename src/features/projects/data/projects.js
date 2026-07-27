/**
 * Proyectos del portafolio.
 * TODO: Reemplaza con tus proyectos reales (título, descripción, skills, repo y capturas).
 */
export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
