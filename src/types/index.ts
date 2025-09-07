export interface Topic {
  id: string;
  name: string;
  completed: boolean;
  completedDate?: Date;
  revised: boolean;
}

export interface Subject {
  id: string;
  name: string;
  topics: Topic[];
  totalTopics: number;
  completedTopics: number;
  progress: number; // 0-100
}

export interface Exam {
  id: string;
  name: string;
  code: string;
  subjects: Subject[];
  totalTopics: number;
  completedTopics: number;
  progress: number; // 0-100
}

export interface AppState {
  gateDA: Exam;
  gateCS: Exam;
  currentExam: 'GATE DA' | 'GATE CS';
}