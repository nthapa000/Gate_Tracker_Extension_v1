export interface Topic {
  id: string;
  name: string;
  completed: boolean;
  completedDate?: Date;
  revised: boolean;
  subjectId?: string;
  status?: 'Not Started' | 'In Progress' | 'Completed';
  description?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  estimatedHours?: number;
  resources?: string[];
  progress?: number;
  revisionCount?: number;
  revisionNotes?: string[];
}

export interface Subject {
  id: string;
  name: string;
  topics: Topic[];
  totalTopics: number;
  completedTopics: number;
  progress: number; // 0-100
  code?: string;
  color?: string;
  description?: string;
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
  user?: UserProfile;
  subjects?: Subject[];
  topics?: Topic[];
  studySessions?: StudySession[];
  goals?: Goal[];
  progressStats?: any;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  targetExam: 'GATE DA' | 'GATE CS' | 'Both';
  studyGoals: string[];
  dailyGoal: number; // hours
  weeklyGoal: number; // hours
  examDate?: Date;
  studyGoal?: number; // hours per day
  createdAt?: Date;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  completed: boolean;
  completedDate?: Date;
  priority: 'Low' | 'Medium' | 'High';
  category: string;
  type?: string;
  currentValue?: number;
  targetValue?: number;
  unit?: string;
  createdAt?: Date;
  deadline?: Date;
}

export interface PracticeTest {
  id: string;
  name: string;
  subject: Subject;
  duration: number; // minutes
  totalQuestions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
  score?: number;
  completedDate?: Date;
}

export interface StudySession {
  id: string;
  subjectId: string;
  topicId: string;
  startTime: Date;
  endTime?: Date;
  duration: number; // minutes
  notes?: string;
  completed: boolean;
  rating?: number;
}