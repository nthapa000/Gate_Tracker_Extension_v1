import { format, differenceInDays, differenceInHours, differenceInMinutes, startOfDay, endOfDay } from 'date-fns';

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

export const formatDate = (date: Date): string => {
  return format(date, 'MMM dd, yyyy');
};

export const formatDateTime = (date: Date): string => {
  return format(date, 'MMM dd, yyyy HH:mm');
};

export const formatTime = (date: Date): string => {
  return format(date, 'HH:mm');
};

export const getDaysSince = (date: Date): number => {
  return differenceInDays(new Date(), date);
};

export const getHoursSince = (date: Date): number => {
  return differenceInHours(new Date(), date);
};

export const getMinutesSince = (date: Date): number => {
  return differenceInMinutes(new Date(), date);
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return startOfDay(date).getTime() === startOfDay(today).getTime();
};

export const isThisWeek = (date: Date): boolean => {
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  return date >= weekAgo && date <= today;
};

export const getProgressPercentage = (completed: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-600 bg-green-100';
    case 'Medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'Hard':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Not Started':
      return 'text-gray-600 bg-gray-100';
    case 'In Progress':
      return 'text-blue-600 bg-blue-100';
    case 'Completed':
      return 'text-green-600 bg-green-100';
    case 'Review':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const calculateStreak = (studySessions: any[]): number => {
  if (studySessions.length === 0) return 0;
  
  const sortedSessions = studySessions
    .map(session => new Date(session.startTime))
    .sort((a, b) => b.getTime() - a.getTime());
  
  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  
  for (const sessionDate of sortedSessions) {
    const sessionDay = new Date(sessionDate);
    sessionDay.setHours(0, 0, 0, 0);
    
    const dayDiff = Math.floor((currentDate.getTime() - sessionDay.getTime()) / (1000 * 60 * 60 * 24));
    
    if (dayDiff === streak) {
      streak++;
      currentDate = new Date(sessionDay);
    } else if (dayDiff === streak + 1) {
      // Allow for one day gap
      streak++;
      currentDate = new Date(sessionDay);
    } else {
      break;
    }
  }
  
  return streak;
};

export const getTotalStudyTime = (studySessions: any[]): number => {
  return studySessions.reduce((total, session) => total + session.duration, 0);
};

export const getAverageScore = (practiceTests: any[]): number => {
  const completedTests = practiceTests.filter(test => test.completed && test.score !== undefined);
  if (completedTests.length === 0) return 0;
  
  const totalScore = completedTests.reduce((sum, test) => sum + test.score, 0);
  return Math.round(totalScore / completedTests.length);
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
