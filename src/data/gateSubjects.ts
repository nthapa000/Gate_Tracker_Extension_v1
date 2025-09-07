import { Subject, Topic } from '../types';

export const GATE_DA_SUBJECTS: Subject[] = [
  {
    id: 'da-math',
    name: 'Mathematics',
    code: 'GATE DA',
    description: 'Linear Algebra, Calculus, Probability, Statistics',
    totalTopics: 12,
    completedTopics: 0,
    color: '#3b82f6'
  },
  {
    id: 'da-programming',
    name: 'Programming & Data Structures',
    code: 'GATE DA',
    description: 'C/C++, Data Structures, Algorithms',
    totalTopics: 15,
    completedTopics: 0,
    color: '#10b981'
  },
  {
    id: 'da-dbms',
    name: 'Database Management System',
    code: 'GATE DA',
    description: 'ER Model, Normalization, SQL, Transactions',
    totalTopics: 10,
    completedTopics: 0,
    color: '#f59e0b'
  },
  {
    id: 'da-ml',
    name: 'Machine Learning',
    code: 'GATE DA',
    description: 'Supervised Learning, Unsupervised Learning, Neural Networks',
    totalTopics: 18,
    completedTopics: 0,
    color: '#ef4444'
  },
  {
    id: 'da-ds',
    name: 'Data Science',
    code: 'GATE DA',
    description: 'Data Preprocessing, Visualization, Big Data',
    totalTopics: 14,
    completedTopics: 0,
    color: '#8b5cf6'
  }
];

export const GATE_CS_SUBJECTS: Subject[] = [
  {
    id: 'cs-math',
    name: 'Engineering Mathematics',
    code: 'GATE CS',
    description: 'Discrete Mathematics, Linear Algebra, Calculus',
    totalTopics: 15,
    completedTopics: 0,
    color: '#3b82f6'
  },
  {
    id: 'cs-ds-algo',
    name: 'Data Structures & Algorithms',
    code: 'GATE CS',
    description: 'Arrays, Trees, Graphs, Sorting, Searching',
    totalTopics: 20,
    completedTopics: 0,
    color: '#10b981'
  },
  {
    id: 'cs-oop',
    name: 'Programming & OOP',
    code: 'GATE CS',
    description: 'C/C++, Object-Oriented Programming',
    totalTopics: 12,
    completedTopics: 0,
    color: '#f59e0b'
  },
  {
    id: 'cs-dbms',
    name: 'Database Management System',
    code: 'GATE CS',
    description: 'ER Model, Normalization, SQL, Transactions',
    totalTopics: 10,
    completedTopics: 0,
    color: '#ef4444'
  },
  {
    id: 'cs-os',
    name: 'Operating System',
    code: 'GATE CS',
    description: 'Process Management, Memory Management, File Systems',
    totalTopics: 16,
    completedTopics: 0,
    color: '#8b5cf6'
  },
  {
    id: 'cs-networks',
    name: 'Computer Networks',
    code: 'GATE CS',
    description: 'OSI Model, TCP/IP, Routing, Security',
    totalTopics: 14,
    completedTopics: 0,
    color: '#06b6d4'
  },
  {
    id: 'cs-compiler',
    name: 'Compiler Design',
    code: 'GATE CS',
    description: 'Lexical Analysis, Parsing, Code Generation',
    totalTopics: 12,
    completedTopics: 0,
    color: '#84cc16'
  },
  {
    id: 'cs-architecture',
    name: 'Computer Organization & Architecture',
    code: 'GATE CS',
    description: 'Processor Design, Memory Hierarchy, I/O Systems',
    totalTopics: 18,
    completedTopics: 0,
    color: '#f97316'
  }
];

export const GATE_DA_TOPICS: Topic[] = [
  // Mathematics topics
  {
    id: 'da-math-linear-algebra',
    subjectId: 'da-math',
    name: 'Linear Algebra',
    description: 'Vectors, Matrices, Eigenvalues, Eigenvectors',
    difficulty: 'Medium',
    estimatedHours: 8,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '1', name: 'Linear Algebra Basics', type: 'Video', completed: false },
      { id: '2', name: 'Matrix Operations', type: 'Practice', completed: false }
    ]
  },
  {
    id: 'da-math-calculus',
    subjectId: 'da-math',
    name: 'Calculus',
    description: 'Limits, Derivatives, Integrals, Multivariable Calculus',
    difficulty: 'Hard',
    estimatedHours: 10,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '3', name: 'Calculus Fundamentals', type: 'Video', completed: false },
      { id: '4', name: 'Integration Techniques', type: 'Practice', completed: false }
    ]
  },
  {
    id: 'da-math-probability',
    subjectId: 'da-math',
    name: 'Probability & Statistics',
    description: 'Probability Theory, Distributions, Hypothesis Testing',
    difficulty: 'Medium',
    estimatedHours: 12,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '5', name: 'Probability Basics', type: 'Video', completed: false },
      { id: '6', name: 'Statistical Methods', type: 'Book', completed: false }
    ]
  },
  // Programming topics
  {
    id: 'da-programming-c',
    subjectId: 'da-programming',
    name: 'C Programming',
    description: 'Data Types, Control Structures, Functions, Pointers',
    difficulty: 'Easy',
    estimatedHours: 6,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '7', name: 'C Programming Basics', type: 'Video', completed: false },
      { id: '8', name: 'C Practice Problems', type: 'Practice', completed: false }
    ]
  },
  {
    id: 'da-programming-ds',
    subjectId: 'da-programming',
    name: 'Data Structures',
    description: 'Arrays, Linked Lists, Stacks, Queues, Trees',
    difficulty: 'Medium',
    estimatedHours: 15,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '9', name: 'Data Structures Course', type: 'Video', completed: false },
      { id: '10', name: 'DS Implementation', type: 'Practice', completed: false }
    ]
  },
  // Machine Learning topics
  {
    id: 'da-ml-supervised',
    subjectId: 'da-ml',
    name: 'Supervised Learning',
    description: 'Linear Regression, Logistic Regression, Decision Trees',
    difficulty: 'Hard',
    estimatedHours: 20,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '11', name: 'ML Fundamentals', type: 'Video', completed: false },
      { id: '12', name: 'Regression Models', type: 'Practice', completed: false }
    ]
  },
  {
    id: 'da-ml-unsupervised',
    subjectId: 'da-ml',
    name: 'Unsupervised Learning',
    description: 'Clustering, Dimensionality Reduction, PCA',
    difficulty: 'Hard',
    estimatedHours: 18,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '13', name: 'Clustering Algorithms', type: 'Video', completed: false },
      { id: '14', name: 'PCA Implementation', type: 'Practice', completed: false }
    ]
  }
];

export const GATE_CS_TOPICS: Topic[] = [
  // Engineering Mathematics topics
  {
    id: 'cs-math-discrete',
    subjectId: 'cs-math',
    name: 'Discrete Mathematics',
    description: 'Set Theory, Logic, Combinatorics, Graph Theory',
    difficulty: 'Medium',
    estimatedHours: 12,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '15', name: 'Discrete Math Basics', type: 'Video', completed: false },
      { id: '16', name: 'Graph Theory', type: 'Book', completed: false }
    ]
  },
  // Data Structures & Algorithms topics
  {
    id: 'cs-ds-arrays',
    subjectId: 'cs-ds-algo',
    name: 'Arrays and Strings',
    description: 'Array Operations, String Manipulation, Two Pointers',
    difficulty: 'Easy',
    estimatedHours: 8,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '17', name: 'Array Fundamentals', type: 'Video', completed: false },
      { id: '18', name: 'Array Problems', type: 'Practice', completed: false }
    ]
  },
  {
    id: 'cs-ds-trees',
    subjectId: 'cs-ds-algo',
    name: 'Trees and Graphs',
    description: 'Binary Trees, BST, Graph Traversal, Shortest Path',
    difficulty: 'Hard',
    estimatedHours: 20,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '19', name: 'Tree Data Structures', type: 'Video', completed: false },
      { id: '20', name: 'Graph Algorithms', type: 'Practice', completed: false }
    ]
  },
  // Operating System topics
  {
    id: 'cs-os-processes',
    subjectId: 'cs-os',
    name: 'Process Management',
    description: 'Process Scheduling, Synchronization, Deadlocks',
    difficulty: 'Hard',
    estimatedHours: 15,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '21', name: 'Process Concepts', type: 'Video', completed: false },
      { id: '22', name: 'Scheduling Algorithms', type: 'Practice', completed: false }
    ]
  },
  {
    id: 'cs-os-memory',
    subjectId: 'cs-os',
    name: 'Memory Management',
    description: 'Paging, Segmentation, Virtual Memory',
    difficulty: 'Hard',
    estimatedHours: 12,
    status: 'Not Started',
    progress: 0,
    resources: [
      { id: '23', name: 'Memory Concepts', type: 'Video', completed: false },
      { id: '24', name: 'Virtual Memory', type: 'Book', completed: false }
    ]
  }
];
