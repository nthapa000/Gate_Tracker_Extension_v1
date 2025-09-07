import { Exam, Subject } from '../types';

// GATE DA Topics (keeping the same structure)
const gateDASubjects: Subject[] = [
  {
    id: 'da-math',
    name: 'Mathematics',
    topics: [
      { id: 'da-math-1', name: 'Linear Algebra - Vectors and Matrices', completed: false, revised: false, revisionCount: 0, revisionNotes: [] },
      { id: 'da-math-2', name: 'Linear Algebra - Eigenvalues and Eigenvectors', completed: false, revised: false },
      { id: 'da-math-3', name: 'Calculus - Limits and Continuity', completed: false, revised: false },
      { id: 'da-math-4', name: 'Calculus - Differentiation', completed: false, revised: false },
      { id: 'da-math-5', name: 'Calculus - Integration', completed: false, revised: false },
      { id: 'da-math-6', name: 'Calculus - Multivariable Calculus', completed: false, revised: false },
      { id: 'da-math-7', name: 'Probability - Basic Concepts', completed: false, revised: false },
      { id: 'da-math-8', name: 'Probability - Random Variables', completed: false, revised: false },
      { id: 'da-math-9', name: 'Statistics - Descriptive Statistics', completed: false, revised: false },
      { id: 'da-math-10', name: 'Statistics - Inferential Statistics', completed: false, revised: false },
      { id: 'da-math-11', name: 'Statistics - Hypothesis Testing', completed: false, revised: false },
      { id: 'da-math-12', name: 'Optimization - Linear Programming', completed: false, revised: false }
    ],
    totalTopics: 0,
    completedTopics: 0,
    progress: 0
  },
  {
    id: 'da-programming',
    name: 'Programming & Data Structures',
    topics: [
      { id: 'da-prog-1', name: 'C Programming - Basics', completed: false, revised: false },
      { id: 'da-prog-2', name: 'C Programming - Functions and Pointers', completed: false, revised: false },
      { id: 'da-prog-3', name: 'C Programming - Structures and Unions', completed: false, revised: false },
      { id: 'da-prog-4', name: 'Data Structures - Arrays', completed: false, revised: false },
      { id: 'da-prog-5', name: 'Data Structures - Linked Lists', completed: false, revised: false },
      { id: 'da-prog-6', name: 'Data Structures - Stacks and Queues', completed: false, revised: false },
      { id: 'da-prog-7', name: 'Data Structures - Trees', completed: false, revised: false },
      { id: 'da-prog-8', name: 'Data Structures - Graphs', completed: false, revised: false },
      { id: 'da-prog-9', name: 'Algorithms - Sorting Algorithms', completed: false, revised: false },
      { id: 'da-prog-10', name: 'Algorithms - Searching Algorithms', completed: false, revised: false },
      { id: 'da-prog-11', name: 'Algorithms - Dynamic Programming', completed: false, revised: false },
      { id: 'da-prog-12', name: 'Algorithms - Greedy Algorithms', completed: false, revised: false },
      { id: 'da-prog-13', name: 'Algorithms - Graph Algorithms', completed: false, revised: false },
      { id: 'da-prog-14', name: 'Time and Space Complexity', completed: false, revised: false },
      { id: 'da-prog-15', name: 'Object-Oriented Programming', completed: false, revised: false }
    ],
    totalTopics: 0,
    completedTopics: 0,
    progress: 0
  },
  {
    id: 'da-dbms',
    name: 'Database Management System',
    topics: [
      { id: 'da-db-1', name: 'Database Concepts and Architecture', completed: false, revised: false },
      { id: 'da-db-2', name: 'ER Model and ER Diagrams', completed: false, revised: false },
      { id: 'da-db-3', name: 'Relational Model and Algebra', completed: false, revised: false },
      { id: 'da-db-4', name: 'SQL - DDL and DML', completed: false, revised: false },
      { id: 'da-db-5', name: 'SQL - Queries and Joins', completed: false, revised: false },
      { id: 'da-db-6', name: 'SQL - Subqueries and Views', completed: false, revised: false },
      { id: 'da-db-7', name: 'Normalization - 1NF, 2NF, 3NF', completed: false, revised: false },
      { id: 'da-db-8', name: 'Normalization - BCNF and Higher Normal Forms', completed: false, revised: false },
      { id: 'da-db-9', name: 'Transaction Management', completed: false, revised: false },
      { id: 'da-db-10', name: 'Concurrency Control', completed: false, revised: false }
    ],
    totalTopics: 0,
    completedTopics: 0,
    progress: 0
  },
  {
    id: 'da-ml',
    name: 'Machine Learning',
    topics: [
      { id: 'da-ml-1', name: 'Introduction to Machine Learning', completed: false, revised: false },
      { id: 'da-ml-2', name: 'Supervised Learning - Linear Regression', completed: false, revised: false },
      { id: 'da-ml-3', name: 'Supervised Learning - Logistic Regression', completed: false, revised: false },
      { id: 'da-ml-4', name: 'Supervised Learning - Decision Trees', completed: false, revised: false },
      { id: 'da-ml-5', name: 'Supervised Learning - Random Forest', completed: false, revised: false },
      { id: 'da-ml-6', name: 'Supervised Learning - SVM', completed: false, revised: false },
      { id: 'da-ml-7', name: 'Supervised Learning - Naive Bayes', completed: false, revised: false },
      { id: 'da-ml-8', name: 'Unsupervised Learning - Clustering', completed: false, revised: false },
      { id: 'da-ml-9', name: 'Unsupervised Learning - K-Means', completed: false, revised: false },
      { id: 'da-ml-10', name: 'Unsupervised Learning - Hierarchical Clustering', completed: false, revised: false },
      { id: 'da-ml-11', name: 'Dimensionality Reduction - PCA', completed: false, revised: false },
      { id: 'da-ml-12', name: 'Neural Networks - Perceptron', completed: false, revised: false },
      { id: 'da-ml-13', name: 'Neural Networks - Backpropagation', completed: false, revised: false },
      { id: 'da-ml-14', name: 'Deep Learning - CNN', completed: false, revised: false },
      { id: 'da-ml-15', name: 'Deep Learning - RNN', completed: false, revised: false },
      { id: 'da-ml-16', name: 'Model Evaluation and Validation', completed: false, revised: false },
      { id: 'da-ml-17', name: 'Cross-Validation and Hyperparameter Tuning', completed: false, revised: false },
      { id: 'da-ml-18', name: 'Ensemble Methods', completed: false, revised: false }
    ],
    totalTopics: 0,
    completedTopics: 0,
    progress: 0
  },
  {
    id: 'da-ds',
    name: 'Data Science',
    topics: [
      { id: 'da-ds-1', name: 'Data Preprocessing - Cleaning', completed: false, revised: false },
      { id: 'da-ds-2', name: 'Data Preprocessing - Transformation', completed: false, revised: false },
      { id: 'da-ds-3', name: 'Data Preprocessing - Feature Engineering', completed: false, revised: false },
      { id: 'da-ds-4', name: 'Data Visualization - Matplotlib', completed: false, revised: false },
      { id: 'da-ds-5', name: 'Data Visualization - Seaborn', completed: false, revised: false },
      { id: 'da-ds-6', name: 'Data Visualization - Plotly', completed: false, revised: false },
      { id: 'da-ds-7', name: 'Big Data - Hadoop', completed: false, revised: false },
      { id: 'da-ds-8', name: 'Big Data - Spark', completed: false, revised: false },
      { id: 'da-ds-9', name: 'Big Data - NoSQL Databases', completed: false, revised: false },
      { id: 'da-ds-10', name: 'Data Mining - Association Rules', completed: false, revised: false },
      { id: 'da-ds-11', name: 'Data Mining - Classification', completed: false, revised: false },
      { id: 'da-ds-12', name: 'Data Mining - Clustering', completed: false, revised: false },
      { id: 'da-ds-13', name: 'Time Series Analysis', completed: false, revised: false },
      { id: 'da-ds-14', name: 'Text Mining and NLP', completed: false, revised: false }
    ],
    totalTopics: 0,
    completedTopics: 0,
    progress: 0
  }
];

// GATE CS Topics - Updated structure as per your requirements
const gateCSSubjects: Subject[] = [
    {
        "id": "cs-eng-math",
        "name": "Engineering Mathematics",
        "topics": [
          // Linear Algebra
          { "id": "cs-eng-math-1", "name": "Linear Algebra - Cartesian Coordinates", "completed": false, "revised": false },
          { "id": "cs-eng-math-2", "name": "Linear Algebra - Determinant", "completed": false, "revised": false },
          { "id": "cs-eng-math-3", "name": "Linear Algebra - Eigen Value", "completed": false, "revised": false },
          { "id": "cs-eng-math-4", "name": "Linear Algebra - Matrix", "completed": false, "revised": false },
          { "id": "cs-eng-math-5", "name": "Linear Algebra - Rank of Matrix", "completed": false, "revised": false },
          { "id": "cs-eng-math-6", "name": "Linear Algebra - System of Equations", "completed": false, "revised": false },
          { "id": "cs-eng-math-7", "name": "Linear Algebra - Vector Space", "completed": false, "revised": false },
      
          // Probability
          { "id": "cs-eng-math-8", "name": "Probability - Binomial Distribution", "completed": false, "revised": false },
          { "id": "cs-eng-math-9", "name": "Probability - Conditional Probability", "completed": false, "revised": false },
          { "id": "cs-eng-math-10", "name": "Probability - Continuous Distribution", "completed": false, "revised": false },
          { "id": "cs-eng-math-11", "name": "Probability - Expectation", "completed": false, "revised": false },
          { "id": "cs-eng-math-12", "name": "Probability - Exponential Distribution", "completed": false, "revised": false },
          { "id": "cs-eng-math-13", "name": "Probability - Independent Events", "completed": false, "revised": false },
          { "id": "cs-eng-math-14", "name": "Probability - Normal Distribution", "completed": false, "revised": false },
          { "id": "cs-eng-math-15", "name": "Probability - Poisson Distribution", "completed": false, "revised": false },
          { "id": "cs-eng-math-16", "name": "Probability - Probability", "completed": false, "revised": false },
          { "id": "cs-eng-math-17", "name": "Probability - Probability Density Function", "completed": false, "revised": false },
          { "id": "cs-eng-math-18", "name": "Probability - Random Variable", "completed": false, "revised": false },
      
          // Statistics
          { "id": "cs-eng-math-19", "name": "Statistics - Uniform Distribution", "completed": false, "revised": false },
      
          // Calculus
          { "id": "cs-eng-math-20", "name": "Calculus - Continuity", "completed": false, "revised": false },
          { "id": "cs-eng-math-21", "name": "Calculus - Definite Integral", "completed": false, "revised": false },
          { "id": "cs-eng-math-22", "name": "Calculus - Differentiation", "completed": false, "revised": false },
          { "id": "cs-eng-math-23", "name": "Calculus - Integration", "completed": false, "revised": false },
          { "id": "cs-eng-math-24", "name": "Calculus - Limits", "completed": false, "revised": false },
          { "id": "cs-eng-math-25", "name": "Calculus - Maxima Minima", "completed": false, "revised": false },
          { "id": "cs-eng-math-26", "name": "Calculus - Polynomials", "completed": false, "revised": false }
        ],
        "totalTopics": 0,
        "completedTopics": 0,
        "progress": 0
      },
      {
        "id": "cs-discrete-math",
        "name": "Discrete Mathematics",
        "topics": [
          // Combinatory
          { "id": "cs-discrete-1", "name": "Combinatorics - Balls in Bins", "completed": false, "revised": false },
          { "id": "cs-discrete-2", "name": "Combinatorics - Counting", "completed": false, "revised": false },
          { "id": "cs-discrete-3", "name": "Combinatorics - Generating Functions", "completed": false, "revised": false },
          { "id": "cs-discrete-4", "name": "Combinatorics - Modular Arithmetic", "completed": false, "revised": false },
          { "id": "cs-discrete-5", "name": "Combinatorics - Pigeonhole Principle", "completed": false, "revised": false },
          { "id": "cs-discrete-6", "name": "Combinatorics - Recurrence Relation", "completed": false, "revised": false },
          { "id": "cs-discrete-7", "name": "Combinatorics - Summation", "completed": false, "revised": false },
      
          // Graph Theory
          { "id": "cs-discrete-8", "name": "Graph Theory - Counting", "completed": false, "revised": false },
          { "id": "cs-discrete-9", "name": "Graph Theory - Degree of Graph", "completed": false, "revised": false },
          { "id": "cs-discrete-10", "name": "Graph Theory - Graph Coloring", "completed": false, "revised": false },
          { "id": "cs-discrete-11", "name": "Graph Theory - Graph Connectivity", "completed": false, "revised": false },
          { "id": "cs-discrete-12", "name": "Graph Theory - Graph Isomorphism", "completed": false, "revised": false },
          { "id": "cs-discrete-13", "name": "Graph Theory - Graph Matching", "completed": false, "revised": false },
          { "id": "cs-discrete-14", "name": "Graph Theory - Graph Planarity", "completed": false, "revised": false },
      
          // Mathematical Logic
          { "id": "cs-discrete-15", "name": "Mathematical Logic - First Order Logic", "completed": false, "revised": false },
          { "id": "cs-discrete-16", "name": "Mathematical Logic - Logical Reasoning", "completed": false, "revised": false },
          { "id": "cs-discrete-17", "name": "Mathematical Logic - Propositional Logic", "completed": false, "revised": false },
      
          // Set Theory & Algebra
          { "id": "cs-discrete-18", "name": "Set Theory & Algebra - Binary Operation", "completed": false, "revised": false },
          { "id": "cs-discrete-19", "name": "Set Theory & Algebra - Countable & Uncountable Set", "completed": false, "revised": false },
          { "id": "cs-discrete-20", "name": "Set Theory & Algebra - Functions", "completed": false, "revised": false },
          { "id": "cs-discrete-21", "name": "Set Theory & Algebra - Group Theory", "completed": false, "revised": false },
          { "id": "cs-discrete-22", "name": "Set Theory & Algebra - Lattice", "completed": false, "revised": false },
          { "id": "cs-discrete-23", "name": "Set Theory & Algebra - Mathematical Induction", "completed": false, "revised": false },
          { "id": "cs-discrete-24", "name": "Set Theory & Algebra - Number Theory", "completed": false, "revised": false },
          { "id": "cs-discrete-25", "name": "Set Theory & Algebra - Partial Order", "completed": false, "revised": false },
          { "id": "cs-discrete-26", "name": "Set Theory & Algebra - Polynomials", "completed": false, "revised": false },
          { "id": "cs-discrete-27", "name": "Set Theory & Algebra - Relations", "completed": false, "revised": false },
          { "id": "cs-discrete-28", "name": "Set Theory & Algebra - Set Theory", "completed": false, "revised": false }
        ],
        "totalTopics": 0,
        "completedTopics": 0,
        "progress": 0
      },
  {
    "id": "cs-aptitude",
    "name": "Aptitude",
    "topics": [
      { "id": "cs-apt-1", "name": "Analytical Aptitude", "completed": false, "revised": false },
      { "id": "cs-apt-2", "name": "Quantitative Aptitude", "completed": false, "revised": false },
      { "id": "cs-apt-3", "name": "Spatial Aptitude", "completed": false, "revised": false },
      { "id": "cs-apt-4", "name": "Verbal Aptitude", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-os",
    "name": "Operating System",
    "topics": [
      { "id": "cs-os-1", "name": "Context Switch", "completed": false, "revised": false },
      { "id": "cs-os-2", "name": "Deadlock Prevention, Avoidance, Detection", "completed": false, "revised": false },
      { "id": "cs-os-3", "name": "Disk", "completed": false, "revised": false },
      { "id": "cs-os-4", "name": "Disk Scheduling", "completed": false, "revised": false },
      { "id": "cs-os-5", "name": "File System", "completed": false, "revised": false },
      { "id": "cs-os-6", "name": "Fork System Call", "completed": false, "revised": false },
      { "id": "cs-os-7", "name": "IO Handling", "completed": false, "revised": false },
      { "id": "cs-os-8", "name": "Inter Process Communication", "completed": false, "revised": false },
      { "id": "cs-os-9", "name": "Interrupts", "completed": false, "revised": false },
      { "id": "cs-os-10", "name": "Memory Management", "completed": false, "revised": false },
      { "id": "cs-os-11", "name": "OS Protection", "completed": false, "revised": false },
      { "id": "cs-os-12", "name": "Page Replacement", "completed": false, "revised": false },
      { "id": "cs-os-13", "name": "Precedence Graph", "completed": false, "revised": false },
      { "id": "cs-os-14", "name": "Process", "completed": false, "revised": false },
      { "id": "cs-os-15", "name": "Process Scheduling", "completed": false, "revised": false },
      { "id": "cs-os-16", "name": "Process Synchronization", "completed": false, "revised": false },
      { "id": "cs-os-17", "name": "Resource Allocation", "completed": false, "revised": false },
      { "id": "cs-os-18", "name": "Semaphore", "completed": false, "revised": false },
      { "id": "cs-os-19", "name": "System Call", "completed": false, "revised": false },
      { "id": "cs-os-20", "name": "Threads", "completed": false, "revised": false },
      { "id": "cs-os-21", "name": "Virtual Memory", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-dbms",
    "name": "DBMS",
    "topics": [
      { "id": "cs-db-1", "name": "B Tree", "completed": false, "revised": false },
      { "id": "cs-db-2", "name": "Candidate Key", "completed": false, "revised": false },
      { "id": "cs-db-3", "name": "Conflict Serializable", "completed": false, "revised": false },
      { "id": "cs-db-4", "name": "Database Design", "completed": false, "revised": false },
      { "id": "cs-db-5", "name": "Database Normalization", "completed": false, "revised": false },
      { "id": "cs-db-6", "name": "ER Diagram", "completed": false, "revised": false },
      { "id": "cs-db-7", "name": "Indexing", "completed": false, "revised": false },
      { "id": "cs-db-8", "name": "Joins", "completed": false, "revised": false },
      { "id": "cs-db-9", "name": "Multivalued Dependency", "completed": false, "revised": false },
      { "id": "cs-db-10", "name": "Natural Join", "completed": false, "revised": false },
      { "id": "cs-db-11", "name": "Query", "completed": false, "revised": false },
      { "id": "cs-db-12", "name": "Referential Integrity", "completed": false, "revised": false },
      { "id": "cs-db-13", "name": "Relational Algebra", "completed": false, "revised": false },
      { "id": "cs-db-14", "name": "Relational Calculus", "completed": false, "revised": false },
      { "id": "cs-db-15", "name": "Relational Model", "completed": false, "revised": false },
      { "id": "cs-db-16", "name": "SQL", "completed": false, "revised": false },
      { "id": "cs-db-17", "name": "Transaction and Concurrency", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-coa",
    "name": "COA",
    "topics": [
      { "id": "cs-coa-1", "name": "Addressing Modes", "completed": false, "revised": false },
      { "id": "cs-coa-2", "name": "CISC & RISC Architecture", "completed": false, "revised": false },
      { "id": "cs-coa-3", "name": "Cache Memory", "completed": false, "revised": false },
      { "id": "cs-coa-4", "name": "DMA", "completed": false, "revised": false },
      { "id": "cs-coa-5", "name": "Data Dependency", "completed": false, "revised": false },
      { "id": "cs-coa-6", "name": "Data Path", "completed": false, "revised": false },
      { "id": "cs-coa-7", "name": "I/O Handling", "completed": false, "revised": false },
      { "id": "cs-coa-8", "name": "Instruction Execution", "completed": false, "revised": false },
      { "id": "cs-coa-9", "name": "Instruction Format", "completed": false, "revised": false },
      { "id": "cs-coa-10", "name": "Interrupts", "completed": false, "revised": false },
      { "id": "cs-coa-11", "name": "Machine Instruction", "completed": false, "revised": false },
      { "id": "cs-coa-12", "name": "Memory Interfacing", "completed": false, "revised": false },
      { "id": "cs-coa-13", "name": "Microprogramming", "completed": false, "revised": false },
      { "id": "cs-coa-14", "name": "Pipelining", "completed": false, "revised": false },
      { "id": "cs-coa-15", "name": "Runtime Environment", "completed": false, "revised": false },
      { "id": "cs-coa-16", "name": "Speedup", "completed": false, "revised": false },
      { "id": "cs-coa-17", "name": "Virtual Memory", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  }
  ,
  {
    "id": "cs-toc",
    "name": "Theory of Computation",
    "topics": [
      { "id": "cs-toc-1", "name": "Closure Property", "completed": false, "revised": false },
      { "id": "cs-toc-2", "name": "Context Free Language", "completed": false, "revised": false },
      { "id": "cs-toc-3", "name": "Countable & Uncountable Set", "completed": false, "revised": false },
      { "id": "cs-toc-4", "name": "Decidability", "completed": false, "revised": false },
      { "id": "cs-toc-5", "name": "Finite Automata", "completed": false, "revised": false },
      { "id": "cs-toc-6", "name": "Identify Class Language", "completed": false, "revised": false },
      { "id": "cs-toc-7", "name": "Minimal State Automata", "completed": false, "revised": false },
      { "id": "cs-toc-8", "name": "Non Determinism", "completed": false, "revised": false },
      { "id": "cs-toc-9", "name": "Pumping Lemma", "completed": false, "revised": false },
      { "id": "cs-toc-10", "name": "Pushdown Automata", "completed": false, "revised": false },
      { "id": "cs-toc-11", "name": "Recursive & Recursively Enumerable Languages", "completed": false, "revised": false },
      { "id": "cs-toc-12", "name": "Reduction", "completed": false, "revised": false },
      { "id": "cs-toc-13", "name": "Regular Expression", "completed": false, "revised": false },
      { "id": "cs-toc-14", "name": "Regular Grammar", "completed": false, "revised": false },
      { "id": "cs-toc-15", "name": "Regular Language", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-compiler",
    "name": "Compiler Design",
    "topics": [
      { "id": "cs-comp-1", "name": "Assembler", "completed": false, "revised": false },
      { "id": "cs-comp-2", "name": "Code Optimization", "completed": false, "revised": false },
      { "id": "cs-comp-3", "name": "Compilation Phases", "completed": false, "revised": false },
      { "id": "cs-comp-4", "name": "Expression Evaluation", "completed": false, "revised": false },
      { "id": "cs-comp-5", "name": "First and Follow", "completed": false, "revised": false },
      { "id": "cs-comp-6", "name": "Grammar", "completed": false, "revised": false },
      { "id": "cs-comp-7", "name": "Intermediate Code", "completed": false, "revised": false },
      { "id": "cs-comp-8", "name": "LR Parser", "completed": false, "revised": false },
      { "id": "cs-comp-9", "name": "Lexical Analysis", "completed": false, "revised": false },
      { "id": "cs-comp-10", "name": "Linker", "completed": false, "revised": false },
      { "id": "cs-comp-11", "name": "Live Variable Analysis", "completed": false, "revised": false },
      { "id": "cs-comp-12", "name": "Macros", "completed": false, "revised": false },
      { "id": "cs-comp-13", "name": "Operator Precedence", "completed": false, "revised": false },
      { "id": "cs-comp-14", "name": "Parameter Passing", "completed": false, "revised": false },
      { "id": "cs-comp-15", "name": "Parsing", "completed": false, "revised": false },
      { "id": "cs-comp-16", "name": "Register Allocation", "completed": false, "revised": false },
      { "id": "cs-comp-17", "name": "Runtime Environment", "completed": false, "revised": false },
      { "id": "cs-comp-18", "name": "Static Single Assignment", "completed": false, "revised": false },
      { "id": "cs-comp-19", "name": "Syntax Directed Translation", "completed": false, "revised": false },
      { "id": "cs-comp-20", "name": "Variable Scope", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-ds",
    "name": "Data Structure",
    "topics": [
      { "id": "cs-ds-1", "name": "AVL Tree", "completed": false, "revised": false },
      { "id": "cs-ds-2", "name": "Array", "completed": false, "revised": false },
      { "id": "cs-ds-3", "name": "Binary Heap", "completed": false, "revised": false },
      { "id": "cs-ds-4", "name": "Binary Search Tree", "completed": false, "revised": false },
      { "id": "cs-ds-5", "name": "Binary Tree", "completed": false, "revised": false },
      { "id": "cs-ds-6", "name": "Data Structures (General)", "completed": false, "revised": false },
      { "id": "cs-ds-7", "name": "Hashing", "completed": false, "revised": false },
      { "id": "cs-ds-8", "name": "Infix / Prefix", "completed": false, "revised": false },
      { "id": "cs-ds-9", "name": "Linked List", "completed": false, "revised": false },
      { "id": "cs-ds-10", "name": "Priority Queue", "completed": false, "revised": false },
      { "id": "cs-ds-11", "name": "Queue", "completed": false, "revised": false },
      { "id": "cs-ds-12", "name": "Stack", "completed": false, "revised": false },
      { "id": "cs-ds-13", "name": "Tree", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-networks",
    "name": "Computer Networks",
    "topics": [
      { "id": "cs-net-1", "name": "Application Layer Protocols", "completed": false, "revised": false },
      { "id": "cs-net-2", "name": "Bit Stuffing", "completed": false, "revised": false },
      { "id": "cs-net-3", "name": "Bridges", "completed": false, "revised": false },
      { "id": "cs-net-4", "name": "CRC Polynomial", "completed": false, "revised": false },
      { "id": "cs-net-5", "name": "CSMA/CD", "completed": false, "revised": false },
      { "id": "cs-net-6", "name": "Communication", "completed": false, "revised": false },
      { "id": "cs-net-7", "name": "Congestion Control", "completed": false, "revised": false },
      { "id": "cs-net-8", "name": "Distance Vector Routing", "completed": false, "revised": false },
      { "id": "cs-net-9", "name": "Error Detection", "completed": false, "revised": false },
      { "id": "cs-net-10", "name": "Ethernet", "completed": false, "revised": false },
      { "id": "cs-net-11", "name": "IP Addressing", "completed": false, "revised": false },
      { "id": "cs-net-12", "name": "IP Packet", "completed": false, "revised": false },
      { "id": "cs-net-13", "name": "LAN Technologies", "completed": false, "revised": false },
      { "id": "cs-net-14", "name": "MAC Protocol", "completed": false, "revised": false },
      { "id": "cs-net-15", "name": "Network Flow", "completed": false, "revised": false },
      { "id": "cs-net-16", "name": "Network Layering", "completed": false, "revised": false },
      { "id": "cs-net-17", "name": "Network Protocols", "completed": false, "revised": false },
      { "id": "cs-net-18", "name": "Network Switching", "completed": false, "revised": false },
      { "id": "cs-net-19", "name": "Routing", "completed": false, "revised": false },
      { "id": "cs-net-20", "name": "Sliding Window", "completed": false, "revised": false },
      { "id": "cs-net-21", "name": "Sockets", "completed": false, "revised": false },
      { "id": "cs-net-22", "name": "Stop and Wait", "completed": false, "revised": false },
      { "id": "cs-net-23", "name": "Subnetting", "completed": false, "revised": false },
      { "id": "cs-net-24", "name": "TCP", "completed": false, "revised": false },
      { "id": "cs-net-25", "name": "Token Bucket", "completed": false, "revised": false },
      { "id": "cs-net-26", "name": "UDP", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-c",
    "name": "C",
    "topics": [
      { "id": "cs-c-1", "name": "Aliasing", "completed": false, "revised": false },
      { "id": "cs-c-2", "name": "Array", "completed": false, "revised": false },
      { "id": "cs-c-3", "name": "Functions", "completed": false, "revised": false },
      { "id": "cs-c-4", "name": "Goto", "completed": false, "revised": false },
      { "id": "cs-c-5", "name": "Identify Function", "completed": false, "revised": false },
      { "id": "cs-c-6", "name": "Loop Invariants", "completed": false, "revised": false },
      { "id": "cs-c-7", "name": "Output", "completed": false, "revised": false },
      { "id": "cs-c-8", "name": "Parameter Passing", "completed": false, "revised": false },
      { "id": "cs-c-9", "name": "Pointers", "completed": false, "revised": false },
      { "id": "cs-c-10", "name": "Programming Constructs", "completed": false, "revised": false },
      { "id": "cs-c-11", "name": "Programming in C", "completed": false, "revised": false },
      { "id": "cs-c-12", "name": "Programming Paradigms", "completed": false, "revised": false },
      { "id": "cs-c-13", "name": "Recursion", "completed": false, "revised": false },
      { "id": "cs-c-14", "name": "Structure", "completed": false, "revised": false },
      { "id": "cs-c-15", "name": "Switch Case", "completed": false, "revised": false },
      { "id": "cs-c-16", "name": "Type Checking", "completed": false, "revised": false },
      { "id": "cs-c-17", "name": "Union", "completed": false, "revised": false },
      { "id": "cs-c-18", "name": "Variable Binding", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-algorithm",
    "name": "Algorithm",
    "topics": [
      { "id": "cs-algo-1", "name": "Algorithm Design", "completed": false, "revised": false },
      { "id": "cs-algo-2", "name": "Algorithm Design Technique", "completed": false, "revised": false },
      { "id": "cs-algo-3", "name": "Asymptotic Notation", "completed": false, "revised": false },
      { "id": "cs-algo-4", "name": "Bellman-Ford", "completed": false, "revised": false },
      { "id": "cs-algo-5", "name": "Binary Search", "completed": false, "revised": false },
      { "id": "cs-algo-6", "name": "Dijkstra’s Algorithm", "completed": false, "revised": false },
      { "id": "cs-algo-7", "name": "Dynamic Programming", "completed": false, "revised": false },
      { "id": "cs-algo-8", "name": "Graph Algorithms", "completed": false, "revised": false },
      { "id": "cs-algo-9", "name": "Graph Search", "completed": false, "revised": false },
      { "id": "cs-algo-10", "name": "Greedy Algorithm", "completed": false, "revised": false },
      { "id": "cs-algo-11", "name": "Hashing", "completed": false, "revised": false },
      { "id": "cs-algo-12", "name": "Huffman Code", "completed": false, "revised": false },
      { "id": "cs-algo-13", "name": "Identify Function", "completed": false, "revised": false },
      { "id": "cs-algo-14", "name": "Insertion Sort", "completed": false, "revised": false },
      { "id": "cs-algo-15", "name": "Matrix Chain Ordering", "completed": false, "revised": false },
      { "id": "cs-algo-16", "name": "Merge Sort", "completed": false, "revised": false },
      { "id": "cs-algo-17", "name": "Merging", "completed": false, "revised": false },
      { "id": "cs-algo-18", "name": "Minimum Spanning Tree", "completed": false, "revised": false },
      { "id": "cs-algo-19", "name": "Prim’s Algorithm", "completed": false, "revised": false },
      { "id": "cs-algo-20", "name": "Quick Sort", "completed": false, "revised": false },
      { "id": "cs-algo-21", "name": "Recurrence Relation", "completed": false, "revised": false },
      { "id": "cs-algo-22", "name": "Recursion", "completed": false, "revised": false },
      { "id": "cs-algo-23", "name": "Searching", "completed": false, "revised": false },
      { "id": "cs-algo-24", "name": "Shortest Path", "completed": false, "revised": false },
      { "id": "cs-algo-25", "name": "Sorting", "completed": false, "revised": false },
      { "id": "cs-algo-26", "name": "Space Complexity", "completed": false, "revised": false },
      { "id": "cs-algo-27", "name": "Strongly Connected Components", "completed": false, "revised": false },
      { "id": "cs-algo-28", "name": "Time Complexity", "completed": false, "revised": false },
      { "id": "cs-algo-29", "name": "Topological Sort", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  },
  {
    "id": "cs-digital-logic",
    "name": "Digital Logic",
    "topics": [
      { "id": "cs-dl-1", "name": "Adder", "completed": false, "revised": false },
      { "id": "cs-dl-2", "name": "Array Multiplier", "completed": false, "revised": false },
      { "id": "cs-dl-3", "name": "Boolean Algebra", "completed": false, "revised": false },
      { "id": "cs-dl-4", "name": "Booths Algorithm", "completed": false, "revised": false },
      { "id": "cs-dl-5", "name": "Canonical Normal Form", "completed": false, "revised": false },
      { "id": "cs-dl-6", "name": "Carry Generator", "completed": false, "revised": false },
      { "id": "cs-dl-7", "name": "Circuit Output", "completed": false, "revised": false },
      { "id": "cs-dl-8", "name": "Combinational Circuit", "completed": false, "revised": false },
      { "id": "cs-dl-9", "name": "Decoder", "completed": false, "revised": false },
      { "id": "cs-dl-10", "name": "Digital Circuits", "completed": false, "revised": false },
      { "id": "cs-dl-11", "name": "Digital Counter", "completed": false, "revised": false },
      { "id": "cs-dl-12", "name": "Finite State Machines", "completed": false, "revised": false },
      { "id": "cs-dl-13", "name": "Fixed Point Representation", "completed": false, "revised": false },
      { "id": "cs-dl-14", "name": "Flip Flop", "completed": false, "revised": false },
      { "id": "cs-dl-15", "name": "Floating Point Representation", "completed": false, "revised": false },
      { "id": "cs-dl-16", "name": "Functional Completeness", "completed": false, "revised": false },
      { "id": "cs-dl-17", "name": "IEEE Representation", "completed": false, "revised": false },
      { "id": "cs-dl-18", "name": "K Map", "completed": false, "revised": false },
      { "id": "cs-dl-19", "name": "Memory Interfacing", "completed": false, "revised": false },
      { "id": "cs-dl-20", "name": "Min No Gates", "completed": false, "revised": false },
      { "id": "cs-dl-21", "name": "Min Product of Sums", "completed": false, "revised": false },
      { "id": "cs-dl-22", "name": "Min Sum of Products Form", "completed": false, "revised": false },
      { "id": "cs-dl-23", "name": "Multiplexer", "completed": false, "revised": false },
      { "id": "cs-dl-24", "name": "Number Representation", "completed": false, "revised": false },
      { "id": "cs-dl-25", "name": "Prime Implicants", "completed": false, "revised": false },
      { "id": "cs-dl-26", "name": "ROM", "completed": false, "revised": false },
      { "id": "cs-dl-27", "name": "Shift Registers", "completed": false, "revised": false },
      { "id": "cs-dl-28", "name": "Static Hazard", "completed": false, "revised": false },
      { "id": "cs-dl-29", "name": "Synchronous Asynchronous Circuits", "completed": false, "revised": false }
    ],
    "totalTopics": 0,
    "completedTopics": 0,
    "progress": 0
  }
];

// Helper function to ensure all topics have revision field
const ensureRevisionFields = (subjects: Subject[]): Subject[] => {
  return subjects.map(subject => ({
    ...subject,
    topics: subject.topics.map(topic => ({
      id: topic.id,
      name: topic.name,
      completed: topic.completed,
      completedDate: topic.completedDate,
      revised: (topic as any).revised || false
    }))
  }));
};

// Calculate totals and progress for subjects
const calculateSubjectProgress = (subjects: Subject[]): Subject[] => {
  return subjects.map(subject => {
    const totalTopics = subject.topics.length;
    const completedTopics = subject.topics.filter(topic => topic.completed).length;
    const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    return {
      ...subject,
      totalTopics,
      completedTopics,
      progress
    };
  });
};

// Calculate totals and progress for exams
const calculateExamProgress = (subjects: Subject[]): Exam => {
  const totalTopics = subjects.reduce((sum, subject) => sum + subject.topics.length, 0);
  const completedTopics = subjects.reduce((sum, subject) => 
    sum + subject.topics.filter(topic => topic.completed).length, 0);
  const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  return {
    id: subjects[0]?.id.split('-')[0] || 'unknown',
    name: subjects[0]?.id.startsWith('da-') ? 'GATE DA' : 'GATE CS',
    code: subjects[0]?.id.startsWith('da-') ? 'GATE DA' : 'GATE CS',
    subjects: calculateSubjectProgress(subjects),
    totalTopics,
    completedTopics,
    progress
  };
};

export const GATE_DA: Exam = calculateExamProgress(ensureRevisionFields(gateDASubjects));
export const GATE_CS: Exam = calculateExamProgress(ensureRevisionFields(gateCSSubjects));