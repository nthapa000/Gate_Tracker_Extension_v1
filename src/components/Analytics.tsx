import React from 'react';
import { BarChart3, TrendingUp, Clock, BookOpen, Target } from 'lucide-react';
import { AppState } from '../types';
import { formatDuration, calculateStreak, getTotalStudyTime } from '../utils/helpers';

interface AnalyticsProps {
  appState: AppState;
}

const Analytics: React.FC<AnalyticsProps> = ({ appState }) => {
  const { subjects, topics, studySessions, goals } = appState;

  const totalStudyTime = getTotalStudyTime(studySessions || []);
  const currentStreak = calculateStreak(studySessions || []);
  
  const completedTopics = (topics || []).filter(topic => topic.status === 'Completed').length;
  
  const completedGoals = (goals || []).filter(goal => goal.completed);

  // Calculate study time by subject
  const studyTimeBySubject = (subjects || []).map(subject => {
    const subjectSessions = (studySessions || []).filter(session => session.subjectId === subject.id);
    const totalTime = subjectSessions.reduce((total, session) => total + session.duration, 0);
    return {
      name: subject.name,
      time: totalTime,
      color: subject.color
    };
  }).filter(item => item.time > 0);

  // Calculate study time by day (last 7 days)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date;
  }).reverse();

  const studyTimeByDay = last7Days.map(date => {
    const daySessions = (studySessions || []).filter(session => {
      const sessionDate = new Date(session.startTime);
      return sessionDate.toDateString() === date.toDateString();
    });
    const totalTime = daySessions.reduce((total, session) => total + session.duration, 0);
    return {
      date: date.toLocaleDateString('en-US', { weekday: 'short' }),
      time: totalTime
    };
  });

  const maxDailyTime = Math.max(...studyTimeByDay.map(day => day.time));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">Track your study progress and performance</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Study Time</p>
              <p className="text-2xl font-bold text-gray-900">{formatDuration(totalStudyTime)}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Topics Completed</p>
              <p className="text-2xl font-bold text-gray-900">{completedTopics}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-orange-100">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-gray-900">{currentStreak} days</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Goals Completed</p>
              <p className="text-2xl font-bold text-gray-900">{completedGoals.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Study Time by Subject */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Time by Subject</h3>
          
          {studyTimeBySubject.length > 0 ? (
            <div className="space-y-4">
              {studyTimeBySubject.map((subject, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: subject.color }}
                    />
                    <span className="text-sm font-medium text-gray-900">{subject.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${(subject.time / Math.max(...studyTimeBySubject.map(s => s.time))) * 100}%`,
                          backgroundColor: subject.color
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-16 text-right">
                      {formatDuration(subject.time)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No study data available yet</p>
            </div>
          )}
        </div>

        {/* Study Time by Day */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Time (Last 7 Days)</h3>
          
          <div className="space-y-4">
            {studyTimeByDay.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 w-12">{day.date}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full progress-bar">
                    <div 
                      className="progress-fill bg-primary-600"
                      style={{ 
                        width: `${maxDailyTime > 0 ? (day.time / maxDailyTime) * 100 : 0}%`
                      }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-16 text-right">
                  {formatDuration(day.time)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topic Progress */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Topic Progress Overview</h3>
        
        <div className="space-y-4">
          {(subjects || []).map(subject => {
            const subjectTopics = (topics || []).filter(topic => topic.subjectId === subject.id);
            const completed = subjectTopics.filter(topic => topic.status === 'Completed').length;
            const inProgress = subjectTopics.filter(topic => topic.status === 'In Progress').length;
            const notStarted = subjectTopics.filter(topic => topic.status === 'Not Started').length;
            const total = subjectTopics.length;
            
            if (total === 0) return null;
            
            return (
              <div key={subject.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: subject.color }}
                    />
                    <h4 className="font-medium text-gray-900">{subject.name}</h4>
                  </div>
                  <span className="text-sm text-gray-500">{completed}/{total} completed</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{completed}</div>
                    <div className="text-xs text-gray-500">Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{inProgress}</div>
                    <div className="text-xs text-gray-500">In Progress</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-400">{notStarted}</div>
                    <div className="text-xs text-gray-500">Not Started</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Goals Progress */}
      {(goals || []).length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Goals Progress</h3>
          
          <div className="space-y-4">
            {(goals || []).map(goal => (
              <div key={goal.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                    <span className="badge bg-blue-100 text-blue-800 text-xs">{goal.type}</span>
                    {goal.completed && (
                      <span className="badge bg-green-100 text-green-800 text-xs">Completed</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {goal.currentValue}/{goal.targetValue} {goal.unit}
                    </div>
                    <div className="w-24 progress-bar mt-1">
                      <div 
                        className={`progress-fill ${goal.completed ? 'bg-green-600' : 'bg-primary-600'}`}
                        style={{ width: `${((goal.currentValue || 0) / (goal.targetValue || 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
