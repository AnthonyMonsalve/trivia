// Definición de la interfaz para una pregunta de trivia
export interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
}

// Array de objetos que implementan la interfaz TriviaQuestion
export const easyQuestions: TriviaQuestion[] = [
  {
    question:
      '¿Cuál es la unidad de medida utilizada para la altitud en aviación?',
    options: ['Pies', 'Metros', 'Millas', 'Kilómetros'],
    correctAnswer: 'Pies',
    difficulty: 'Fácil',
  },
  {
    question: '¿Qué tipo de avión es el Boeing 787?',
    options: [
      'Avión de Carga',
      'Avión comercial de pasajeros',
      'Avión militar',
      'Avión de exhibición',
    ],
    correctAnswer: 'Avión comercial de pasajeros',
    difficulty: 'Fácil',
  },
  {
    question: '¿Qué es un "airshow"?',
    options: [
      'Exposición de aviones',
      'Exhibición aérea de acrobacias y maniobras',
      'Presentación de pilotos',
      'Revisión de aeronaves',
    ],
    correctAnswer: 'Exhibición aérea de acrobacias y maniobras',
    difficulty: 'Fácil',
  },
  {
    question: '¿Qué es un "vuelo charter"?',
    options: [
      'Vuelo regular de una aerolínea',
      'Vuelo programado por una aerolínea',
      'Vuelo privado sin horarios fijos',
      'Vuelo militar',
    ],
    correctAnswer: 'Vuelo privado sin horarios fijos',
    difficulty: 'Fácil',
  },
  {
    question:
      '¿Cuál es el nombre del sistema que permite a los pilotos navegar?',
    options: ['GPS', 'RADAR', 'VOR', 'RVR'],
    correctAnswer: 'GPS',
    difficulty: 'Fácil',
  },
  {
    question: '¿Cuál es una característica importante de los aviones privados?',
    options: [
      'Pueden volar viajes largos sin escalas',
      'Proporcionan servicios de lujo y personalizados',
      'Solo pueden transportar carga',
      'No requieren tripulación',
    ],
    correctAnswer: 'Proporcionan servicios de lujo y personalizados',
    difficulty: 'Fácil',
  },
  {
    question:
      '¿Cuál es la principal fuente de tráfico aéreo en los aeropuertos?',
    options: [
      'Vuelos privados',
      'Vuelos comerciales',
      'Vuelos de carga',
      'Vuelos militares',
    ],
    correctAnswer: 'Vuelos comerciales',
    difficulty: 'Fácil',
  },
  {
    question: '¿Cuál es el destino turístico más visitado en el Caribe?',
    options: ['Puerto Rico', 'República Dominicana', 'Barbados', 'Bahamas'],
    correctAnswer: 'República Dominicana',
    difficulty: 'Fácil',
  },
  {
    question: '¿Qué hace un controlador de tráfico aéreo?',
    options: [
      'Revisa la carga de los aviones',
      'Coordina el movimiento de aeronaves en el aire y en tierra',
      'Pilota aviones',
      'Maneja la venta de boletos',
    ],
    correctAnswer: 'Coordina el movimiento de aeronaves en el aire y en tierra',
    difficulty: 'Fácil',
  },
  {
    question: '¿Cuál es la ventaja principal de volar en un jet privado?',
    options: [
      'Menor costo',
      'Mayor comodidad y privacidad',
      'Más capacidad de pasajeros',
      'Mayor cantidad de equipaje',
    ],
    correctAnswer: 'Mayor comodidad y privacidad',
    difficulty: 'Fácil',
  },
  {
    question: '¿Qué significa la sigla "ATC"?',
    options: [
      'Air Travel Company',
      'Air Traffic Control',
      'Aircraft Training Command',
      'Aviation Technical Center',
    ],
    correctAnswer: 'Air Traffic Control',
    difficulty: 'Fácil',
  },
  {
    question: '¿Cuál es la función principal de un copiloto?',
    options: [
      'Supervisar pasajeros',
      'Asistir al piloto en la operación de la aeronave',
      'Navegar solo',
      'Realizar el mantenimiento del avión',
    ],
    correctAnswer: 'Asistir al piloto en la operación de la aeronave',
    difficulty: 'Fácil',
  },
  {
    question: '¿Cuál es la capital de República Checa?',
    options: ['Amán', 'Karlovy Vary', 'Praga', 'Budapest'],
    correctAnswer: 'Praga',
    difficulty: 'Fácil',
  },
  {
    question: '¿Qué país tiene la mayor cantidad de aeropuertos del mundo?',
    options: ['Estados Unidos', 'China', 'Brasil', 'Rusia'],
    correctAnswer: 'Estados Unidos',
    difficulty: 'Fácil',
  },
];

export const mediumTriviaQuestions: TriviaQuestion[] = [
  {
    question: '¿Qué significa la sigla "FBO" en la aviación?',
    options: [
      'Fixed Base Operator',
      'Federal Bureau of Operations',
      'Flight Boarding Office',
      'Fuel Base Operations',
    ],
    correctAnswer: 'Fixed Base Operator',
    difficulty: 'Medio',
  },
  {
    question:
      '¿Cuál es el país de origen del fabricante de aviones Bombardier?',
    options: ['Estados Unidos', 'Reino Unido', 'Canadá', 'Francia'],
    correctAnswer: 'Canadá',
    difficulty: 'Medio',
  },
  {
    question:
      '¿Qué tipo de avión es conocido por ser utilizado principalmente en vuelos privados de lujo?',
    options: [
      'Boeing 747',
      'Gulfstream G700',
      'Airbus A380',
      'McDonnell Douglas MD-80',
    ],
    correctAnswer: 'Gulfstream G700',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué avión es popularmente conocido como "el jumbo"?',
    options: [
      'Airbus A320',
      'Boeing 737',
      'Boeing 747',
      'McDonnell Douglas MD-11',
    ],
    correctAnswer: 'Boeing 747',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué organización regula la aviación civil internacional?',
    options: ['FAA', 'ICAO', 'IATA', 'EASA'],
    correctAnswer: 'ICAO',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué es la "turbulencia" en un vuelo?',
    options: [
      'Fallas mecánicas en el avión',
      'Modificación en la velocidad y dirección de las corrientes del aire',
      'Condiciones climáticas desfavorables',
      'Una señal que emite el avión antes de entrar en pérdida',
    ],
    correctAnswer:
      'Modificación en la velocidad y dirección de las corrientes del aire',
    difficulty: 'Medio',
  },
  {
    question: '¿Cuál es el principal objetivo de un aeródromo?',
    options: [
      'Almacenaje de combustible',
      'Despegue, aterrizaje y movimiento en superficie de aeronaves',
      'Inspección de aeronaves',
      'Despachar o recibir carga o correo',
    ],
    correctAnswer:
      'Despegue, aterrizaje y movimiento en superficie de aeronaves',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué tipo de avión es el Cessna Citation Sovereign?',
    options: [
      'Avión de carga',
      'Avión de combate',
      'Avión comercial de pasajeros',
      'Avión corporativo',
    ],
    correctAnswer: 'Avión corporativo',
    difficulty: 'Medio',
  },
  {
    question: '¿Cuál es la función de un Despachador de Vuelos?',
    options: [
      'Guiar a los pasajeros hasta la aeronave',
      'Elaborar el Plan de Vuelo',
      'Revisar la aeronave antes del despegue',
      'Controla el tráfico aéreo',
    ],
    correctAnswer: 'Elaborar el Plan de Vuelo',
    difficulty: 'Medio',
  },
  {
    question: '¿Cuál es la principal característica de un avión "supersónico"?',
    options: [
      'Vuela a velocidades por debajo del sonido',
      'Vuela a velocidades superiores a la del sonido',
      'Tiene múltiples alas',
      'Puede aterrizar verticalmente',
    ],
    correctAnswer: 'Vuela a velocidades superiores a la del sonido',
    difficulty: 'Medio',
  },
  {
    question:
      '¿Qué tipo de mantenimiento es necesario realizar en las aeronaves antes de cada vuelo?',
    options: [
      'Inspección previa al vuelo',
      'Mantenimiento anual',
      'Mantenimiento de emergencia',
      'Mantenimiento de motor',
    ],
    correctAnswer: 'Inspección previa al vuelo',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué significa "MSN" en la industria de la aviación?',
    options: [
      'Número de vuelo',
      'Número de serial de manufactura',
      'Número de pasajeros',
      'Número de matrícula',
    ],
    correctAnswer: 'Número de serial de manufactura',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué es un "viento de cola"?',
    options: [
      'Viento que sopla en contra del vuelo',
      'Viento que sopla a favor del vuelo',
      'Viento que se presenta en el suelo',
      'Viento moderado',
    ],
    correctAnswer: 'Viento que sopla a favor del vuelo',
    difficulty: 'Medio',
  },
  {
    question: '¿Cuál es la altura de crucero típica para aviones comerciales?',
    options: [
      '5,000 pies',
      '30,000 a 40,000 pies',
      '10,000 pies',
      '50,000 pies',
    ],
    correctAnswer: '30,000 a 40,000 pies',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué es el “overbooking"?',
    options: [
      'Un billete de avión confirmado',
      'Cuando existen más reservas que asientos disponibles',
      'Un vuelo cancelado',
      'Un upgrade de clase',
    ],
    correctAnswer: 'Cuando existen más reservas que asientos disponibles',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué es un "punto de referencia" en aviación?',
    options: [
      'Señal de tráfico',
      'Lugar con coordenadas geográficas específicas',
      'Indicación de seguridad',
      'Tiempo de vuelo',
    ],
    correctAnswer: 'Lugar con coordenadas geográficas específicas',
    difficulty: 'Medio',
  },
  {
    question: '¿Qué es un "tiempo de vuelo" en aviación?',
    options: [
      'Tiempo que transcurre desde que los pasajeros embarcan y desembarcan la aeronave',
      'Tiempo que el avión está en el aire',
      'Tiempo para desembarcar',
      'Tiempo de despegue',
    ],
    correctAnswer: 'Tiempo que el avión está en el aire',
    difficulty: 'Medio',
  },
];

// Array de objetos para preguntas de nivel difícil
export const hardTriviaQuestions: TriviaQuestion[] = [
  {
    question: '¿Qué es "Apron" en el contexto de un aeropuerto?',
    options: [
      'Un tipo de avión',
      'Área de estacionamiento de aviones',
      'Un sistema de navegación',
      'Un certificado de piloto',
    ],
    correctAnswer: 'Área de estacionamiento de aviones',
    difficulty: 'Difícil',
  },
  {
    question:
      '¿Qué tipo de combustible utilizan las aeronaves con motores de pistón?',
    options: ['Gasóleo', 'AV-GAS', 'Gas natural', 'Jet-A1'],
    correctAnswer: 'AV-GAS',
    difficulty: 'Difícil',
  },
  {
    question: '¿Qué es un “vuelo directo"?',
    options: [
      'Un vuelo que hace múltiples paradas',
      'Un vuelo que va de origen a destino y puede tener paradas intermedias',
      'Un vuelo que es muy corto',
      'Un vuelo sin escalas',
    ],
    correctAnswer:
      'Un vuelo que va de origen a destino y puede tener paradas intermedias',
    difficulty: 'Difícil',
  },
  {
    question:
      '¿Qué tecnología se utiliza para aterrizar aviones con dificultad visual?',
    options: ['VOR', 'ILS', 'GPS', 'RADAR'],
    correctAnswer: 'ILS',
    difficulty: 'Difícil',
  },
  {
    question: '¿Cuál es el significado de la expresión "altitud de crucero"?',
    options: [
      'Altura mínima para volar',
      'Altura a la que vuela un avión en ritmo constante',
      'Altura máxima que puede alcanzar una aeronave',
      'Altura al aterrizar',
    ],
    correctAnswer: 'Altura a la que vuela un avión en ritmo constante',
    difficulty: 'Difícil',
  },
  {
    question: '¿Qué significa "MRO" en términos de aviación?',
    options: [
      'Mantenimiento, Reparación y Overhaul',
      'Monitoreo, Registro y Observaciones',
      'Movimiento, Rutas y Operaciones',
      'Mantenimiento, Revisión y Optimización',
    ],
    correctAnswer: 'Mantenimiento, Reparación y Overhaul',
    difficulty: 'Difícil',
  },
];
