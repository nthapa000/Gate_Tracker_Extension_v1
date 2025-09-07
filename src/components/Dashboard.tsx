import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp, 
  Calendar,
  Award,
  BarChart3
} from 'lucide-react';
import { AppState } from '../types';
import { formatDuration, getProgressPercentage, calculateStreak, getTotalStudyTime } from '../utils/helpers';

interface DashboardProps {
  appState: AppState;
  updateAppState: (updates: Partial<AppState>) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ appState }) => {
  const { user, subjects, topics, studySessions, goals, progressStats } = appState;

  const totalTopics = topics.length;
  const completedTopics = topics.filter(topic => topic.status === 'Completed').length;
  const inProgressTopics = topics.filter(topic => topic.status === 'In Progress').length;
  
  const totalStudyTime = getTotalStudyTime(studySessions);
  const currentStreak = calculateStreak(studySessions);
  
  const todaySessions = studySessions.filter(session => {
    const sessionDate = new Date(session.startTime);
    const today = new Date();
    return sessionDate.toDateString() === today.toDateString();
  });
  
  const todayStudyTime = todaySessions.reduce((total, session) => total + session.duration, 0);
  
  const activeGoals = goals.filter(goal => !goal.completed);
  const completedGoals = goals.filter(goal => goal.completed);

  const stats = [
    {
      name: 'Total Study Time',
      value: formatDuration(totalStudyTime),
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Topics Completed',
      value: `${completedTopics}/${totalTopics}`,
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Current Streak',
      value: `${currentStreak} days`,
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      name: 'Active Goals',
      value: activeGoals.length.toString(),
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const recentSubjects = subjects
    .map(subject => {
      const subjectTopics = topics.filter(topic => topic.subjectId === subject.id);
      const completed = subjectTopics.filter(topic => topic.status === 'Completed').length;
      const progress = getProgressPercentage(completed, subjectTopics.length);
      
      return { ...subject, progress, completed, total: subjectTopics.length };
    })
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back, {user.name}! Here's your GATE preparation overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Progress */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Progress</h3>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Study Time</span>
                <span>{formatDuration(todayStudyTime)} / {user.studyGoal}h</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill bg-primary-600"
                  style={{ 
                    width: `${Math.min((todayStudyTime / (user.studyGoal * 60)) * 100, 100)}%` 
                  }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Topics in Progress</span>
                <span>{inProgressTopics}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Goals */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Goals</h3>
            <Award className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-3">
            {activeGoals.slice(0, 3).map((goal) => (
              <div key={goal.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{goal.title}</p>
                  <p className="text-xs text-gray-500">{goal.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {goal.currentValue}/{goal.targetValue} {goal.unit}
                  </p>
                  <div className="w-16 progress-bar mt-1">
                    <div 
                      className="progress-fill bg-primary-600"
                      style={{ width: `${(goal.currentValue / goal.targetValue) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {activeGoals.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">
                No active goals. Create one to get started!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Subject Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Subject Progress</h3>
          <BarChart3 className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="space-y-4">
          {recentSubjects.map((subject) => (
            <div key={subject.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: subject.color }}
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{subject.name}</p>
                  <p className="text-xs text-gray-500">
                    {subject.completed}/{subject.total} topics completed
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-24 progress-bar">
                  <div 
                    className="progress-fill bg-primary-600"
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">
                  {subject.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn btn-primary flex items-center justify-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Start Study Session</span>
          </button>
          <button className="btn btn-secondary flex items-center justify-center space-x-2">
            <Target className="h-4 w-4" />
            <span>Set New Goal</span>
          </button>
          <button className="btn btn-secondary flex items-center justify-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Take Practice Test</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
