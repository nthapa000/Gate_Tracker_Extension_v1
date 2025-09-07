import React from 'react';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';
import { Subject, Topic } from '../types';
import { getProgressPercentage } from '../utils/helpers';

interface SubjectsProps {
  subjects: Subject[];
  topics: Topic[];
  updateAppState: (updates: Partial<any>) => void;
}

const Subjects: React.FC<SubjectsProps> = ({ subjects, topics }) => {
  const subjectsWithProgress = subjects.map(subject => {
    const subjectTopics = topics.filter(topic => topic.subjectId === subject.id);
    const completed = subjectTopics.filter(topic => topic.status === 'Completed').length;
    const inProgress = subjectTopics.filter(topic => topic.status === 'In Progress').length;
    const progress = getProgressPercentage(completed, subjectTopics.length);
    
    return { ...subject, progress, completed, inProgress, total: subjectTopics.length };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Subjects</h1>
        <p className="mt-2 text-gray-600">Track your progress across all GATE subjects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectsWithProgress.map((subject) => (
          <div key={subject.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${subject.color}20` }}
                >
                  <BookOpen className="h-6 w-6" style={{ color: subject.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                  <p className="text-sm text-gray-500">{subject.code}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{subject.description}</p>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{subject.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${subject.progress}%`,
                      backgroundColor: subject.color
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <div className="flex items-center space-x-1 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>{subject.completed} completed</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>{subject.inProgress} in progress</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  {subject.completed} of {subject.total} topics completed
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
