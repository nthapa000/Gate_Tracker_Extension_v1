import React from 'react';
import { CheckCircle, BookOpen, ChevronRight } from 'lucide-react';
import { Subject } from '../types';

interface SubjectListProps {
  subjects: Subject[];
  examId: 'gateDA' | 'gateCS';
  selectedSubject: string | null;
  onSubjectClick: (subjectId: string) => void;
}

const SubjectList: React.FC<SubjectListProps> = ({ subjects, selectedSubject, onSubjectClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Subjects</h2>
      
      <div className="space-y-2">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSubjectClick(subject.id)}
            className={`w-full text-left border rounded-lg p-4 transition-colors ${
              selectedSubject === subject.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-gray-400" />
                <h3 className="font-medium text-gray-900">{subject.name}</h3>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{subject.completedTopics}/{subject.totalTopics}</span>
                </div>
                <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${
                  selectedSubject === subject.id ? 'rotate-90' : ''
                }`} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progress</span>
                <span>{subject.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
