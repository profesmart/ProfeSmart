const SECUENCIAS = [

  // =====================================================
  // 1.º DE SECUNDARIA
  // =====================================================

  {
    id: "CN-1-001",
    curso: "1.º A",
    grado: 1,
    asignatura: "Ciencias Naturales",
    titulo: "Los seres vivos y su organización",
    descripcion: "Secuencia para estudiar las características de los seres vivos y los niveles de organización biológica.",

    competencias: [
      "Comunicativa",
      "Pensamiento Lógico, Creativo y Crítico",
      "Resolución de Problemas",
      "Científica y Tecnológica",
      "Ambiental y de la Salud"
    ],

    indicadores: [
      "Identifica las características fundamentales de los seres vivos.",
      "Diferencia los niveles de organización biológica.",
      "Explica la importancia de las células como unidad básica de los seres vivos."
    ],

    actividades: [

      {
        id: "ACT-1",
        nombre: "Exploramos los seres vivos",
        descripcion: "Observación y clasificación de elementos del entorno.",
        competencias: [
          "Científica y Tecnológica",
          "Comunicativa"
        ],
        indicadores: [
          "Identifica características de los seres vivos."
        ],
        instrumentoSugerido: "Lista de cotejo"
      },

      {
        id: "ACT-2",
        nombre: "La célula como unidad de vida",
        descripcion: "Actividad para reconocer la importancia de la célula.",
        competencias: [
          "Científica y Tecnológica",
          "Pensamiento Lógico, Creativo y Crítico"
        ],
        indicadores: [
          "Explica la importancia de la célula."
        ],
        instrumentoSugerido: "Rúbrica"
      }

    ]
  },


  // =====================================================
  // 2.º DE SECUNDARIA
  // =====================================================

  {
    id: "CN-2-001",
    curso: "2.º A",
    grado: 2,
    asignatura: "Ciencias Naturales",
    titulo: "Materia y sus propiedades",
    descripcion: "Secuencia para estudiar las propiedades y transformaciones de la materia.",

    competencias: [
      "Comunicativa",
      "Pensamiento Lógico, Creativo y Crítico",
      "Resolución de Problemas",
      "Científica y Tecnológica"
    ],

    indicadores: [
      "Reconoce las propiedades físicas de la materia.",
      "Diferencia los estados de la materia.",
      "Explica cambios físicos y químicos."
    ],

    actividades: [

      {
        id: "ACT-1",
        nombre: "Clasificamos materiales",
        descripcion: "Clasificación de objetos según sus propiedades.",
        competencias: [
          "Científica y Tecnológica"
        ],
        indicadores: [
          "Reconoce propiedades físicas de la materia."
        ],
        instrumentoSugerido: "Lista de cotejo"
      },

      {
        id: "ACT-2",
        nombre: "Cambios de la materia",
        descripcion: "Análisis de diferentes transformaciones de la materia.",
        competencias: [
          "Pensamiento Lógico, Creativo y Crítico",
          "Científica y Tecnológica"
        ],
        indicadores: [
          "Diferencia cambios físicos y químicos."
        ],
        instrumentoSugerido: "Rúbrica"
      }

    ]
  },


  // =====================================================
  // 3.º DE SECUNDARIA
  // =====================================================

  {
    id: "CN-3-001",
    curso: "3.º A",
    grado: 3,
    asignatura: "Ciencias Naturales",
    titulo: "Ecosistemas y medio ambiente",
    descripcion: "Secuencia para comprender las relaciones entre los seres vivos y su ambiente.",

    competencias: [
      "Comunicativa",
      "Pensamiento Lógico, Creativo y Crítico",
      "Resolución de Problemas",
      "Científica y Tecnológica",
      "Ambiental y de la Salud"
    ],

    indicadores: [
      "Describe los componentes de un ecosistema.",
      "Explica las relaciones entre los seres vivos.",
      "Propone acciones para proteger el medio ambiente."
    ],

    actividades: [

      {
        id: "ACT-1",
        nombre: "Investigamos un ecosistema",
        descripcion: "Observación y análisis de un ecosistema.",
        competencias: [
          "Científica y Tecnológica",
          "Ambiental y de la Salud"
        ],
        indicadores: [
          "Describe los componentes de un ecosistema."
        ],
        instrumentoSugerido: "Guía de observación"
      },

      {
        id: "ACT-2",
        nombre: "Problemas ambientales",
        descripcion: "Análisis de situaciones relacionadas con el medio ambiente.",
        competencias: [
          "Resolución de Problemas",
          "Ambiental y de la Salud"
        ],
        indicadores: [
          "Propone acciones para proteger el medio ambiente."
        ],
        instrumentoSugerido: "Rúbrica"
      }

    ]
  },


  // =====================================================
  // BIBLIOTECA DE INSTRUMENTOS
  // =====================================================

];

const INSTRUMENTOS_SISTEMA = [

  {
    nombre: "Lista de cotejo",
    descripcion: "Permite verificar si el estudiante demuestra o no determinados indicadores."
  },

  {
    nombre: "Rúbrica",
    descripcion: "Permite valorar diferentes niveles de desempeño."
  },

  {
    nombre: "Escala de valoración",
    descripcion: "Permite asignar niveles o puntuaciones al desempeño."
  },

  {
    nombre: "Guía de observación",
    descripcion: "Permite registrar comportamientos, habilidades y desempeños."
  }

];
