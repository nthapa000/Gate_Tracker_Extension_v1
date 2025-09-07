import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Exam } from '../types';

interface ExamSelectorProps {
  currentExam: 'GATE DA' | 'GATE CS';
  onSwitchExam: (exam: 'GATE DA' | 'GATE CS') => void;
  gateDA: Exam;
  gateCS: Exam;
}

const ExamSelector: React.FC<ExamSelectorProps> = ({ 
  currentExam, 
  onSwitchExam, 
  gateDA, 
  gateCS 
}) => {
  const exams = [
    { id: 'GATE DA', data: gateDA, color: 'bg-purple-500', description: 'Data Science & AI' },
    { id: 'GATE CS', data: gateCS, color: 'bg-blue-500', description: 'Computer Science' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Exam</h2>
      
      <div className="space-y-3">
        {exams.map((exam) => (
          <button
            key={exam.id}
            onClick={() => onSwitchExam(exam.id as 'GATE DA' | 'GATE CS')}
            className={`w-full p-4 rounded-lg border-2 transition-all ${
              currentExam === exam.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${exam.color}`} />
                <div className="text-left">
                  <div className="font-medium text-gray-900">{exam.id}</div>
                  <div className="text-sm text-gray-500">{exam.description}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{exam.data.completedTopics}/{exam.data.totalTopics}</span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {exam.data.progress}%
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamSelector;
