export const languages = [
  {
    title: 'ES'
  },
  {
    title: 'EN'
  },
  {
    title: 'FR'
  }
]

export const menu = [
  {
    id: 1,
    ES: {
      title: 'Salta Set'
    },
    EN: {
      title: 'Salta Set'
    },
    FR: {
      title: 'Salta Set'
    },
    url: '/'
  },
  {
    id: 2,
    ES: {
      title: 'Filmar en Salta',
      categories: [
        { title: 'Permisos', url: '/filmar-en-salta/permisos' },
        { title: 'Sostenibilidad ', url: '/filmar-en-salta/sostenibilidad' }
      ]
    },
    EN: {
      title: 'Filming in Salta',
      categories: [
        { title: 'Permissions', url: '/filmar-en-salta/permisos' },
        { title: 'Sustainability', url: '/filmar-en-salta/sostenibilidad' }
      ]
    },
    FR: {
      title: 'Filming in Salta',
      categories: [
        { title: 'Permis', url: '/filmar-en-salta/permisos' },
        { title: 'Durabilité', url: '/filmar-en-salta/sostenibilidad  ' }
      ]
    },
    url: '/filmar-en-salta/permisos'
  },
  {
    id: 3,
    ES: {
      title: 'Locaciones',
      categories: [
        { title: 'Regiones', url: '/locaciones/regiones', id: 2 },
        { title: 'Categorías ', url: '/locaciones/categorias', id: 1 },
        { title: 'Rutas turisticas', url: '/locaciones/rutas-turisticas', id: 3 }
      ]
    },
    EN: {
      title: 'Locations',
      categories: [
        { title: 'Regions', url: '/locaciones/regiones', id: 2 },
        { title: 'Categories', url: '/locaciones/categorias', id: 1 },
        { title: 'Tourist routes', url: '/locaciones/rutas-turisticas', id: 3 }
      ]
    },
    FR: {
      title: 'Locations',
      categories: [
        { title: 'Regions', url: '/locaciones/regiones', id: 2 },
        { title: 'Catégories', url: '/locaciones/categorias', id: 1 },
        { title: 'Routes touristiques', url: '/locaciones/rutas-turisticas', id: 3 }
      ]
    },
    url: '/locaciones/regiones'
  },
  {
    id: 4,
    ES: {
      title: 'Directorio',
      categories: [
        { title: 'Empresas', url: '/directorio/empresas' },
        { title: 'Profesionales', url: '/directorio/profesionales' }
      ]
    },
    EN: {
      title: 'Directory',
      categories: [
        { title: 'Companies', url: '/directorio/empresas' },
        { title: 'Professionals', url: '/directorio/profesionales' }
      ]
    },
    FR: {
      title: 'Directory',
      categories: [
        { title: 'Entreprises', url: '/directorio/empresas' },
        { title: 'Professionnels', url: '/directorio/profesionales' }
      ]
    },
    url: '/directorio/empresas'
  },
  {
    id: 5,
    ES: {
      title: 'Filmografía',
      categories: [
        { title: 'Largometrajes', id: 4 },
        { title: 'Series', id: 5 },
        { title: 'Otros', id: 6 }
      ]
    },
    EN: {
      title: 'Filmography',
      categories: [
        { title: 'Feature Films', id: 4 },
        { title: 'TV Serie', id: 5 },
        { title: 'Other', id: 6 }
      ]
    },
    FR: {
      title: 'Filmography',
      categories: [
        { title: 'Longs métrages', id: 4 },
        { title: 'Série', id: 5 },
        { title: 'Autres', id: 6 }
      ]
    },
    url: '/filmografia'
  },
  {
    id: 6,
    ES: {
      title: 'Beneficios'
    },
    EN: {
      title: 'Benefits'
    },
    FR: {
      title: 'Benefits'
    },
    url: '/beneficios'
  },
  {
    id: 7,
    ES: {
      title: 'Novedades'
    },
    EN: {
      title: 'News'
    },
    FR: {
      title: 'News'
    },
    url: '/novedades'
  }
]

export const activities = [
  'Productor/a ejecutivo',
  'Coordinador/a de producción',
  'Jefe de producción',
  'Asistente de producción',
  'Ayudante de producción',
  'Jefe/a de locaciones',
  'Asistente de locaciones',
  'Meritorio de producción',
  'Director/a',
  'Asistente de dirección',
  'Ayudante de dirección',
  'Continuista/Script',
  'Director/a de casting',
  'Asistente de casting',
  'Realizador de TV',
  'Realizador de videos comerciales',
  'Realizador de institucionales',
  'Realizador de video clips',
  'Realizador Making off',
  'Guionista',
  'Director/a de fotografía',
  'Técnico/a HD',
  'Camarógrafo/a',
  'Ayudante de cámara',
  'Key Grip / Grip',
  'Asistente de grip',
  'Video assist / DIT',
  'Fotógrafo/a de filmación',
  'Gaffer',
  'Jefe/a reflectorista',
  'Reflectorista',
  'Operador de steadycam',
  'Piloto de drone',
  'Meritorio de fotografía',
  'Director/a de arte',
  'Escenógrafo/a',
  'Ambientador/a',
  'Ayudante de escenografía',
  'Vestuarista',
  'Ayudante de vestuario',
  'Utilero/a - Carpintero/a',
  'Asistente de utilero',
  'Realizador/a escenográfico',
  'Jefe/a de maquillaje',
  'Peinador/a',
  'Ayudante de Maquillaje/Peinado',
  'Meritorio de arte',
  'Director/a de sonido',
  'Ayudante de sonido',
  'Director/a de sonido post /mezclador/a',
  'Editor/a de díalogos, ambientes y efectos',
  'Compositor musical',
  'Meritorio de sonido',
  'Director de orquesta/bandas',
  'Artista de foley',
  'Arreglista/orquestador',
  'Editor/a',
  'Ayudante de editor/a',
  'Meritorio de edición',
  'Corrección de color / Etalonaje',
  'Coordinador/a de postproducción',
  'Locutor/a',
  'Contable/administrativo',
  'Entrenador/a de animales',
  'Abogado/a especialista en audiovisuales',
  'Traductor / intérpreté',
  'Coreógrafo/a',
  'Dibujante Storyboad',
  'Asesor/a / Coach de actuación'
]

export const iva = ['Ninguna', 'Monotributista', 'Responsable Inscripto', 'Consumidor Final', 'Exento']
