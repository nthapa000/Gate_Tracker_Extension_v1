import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Exam } from '../types';

interface HeaderProps {
  currentExam: 'GATE DA' | 'GATE CS';
  onSwitchExam: (exam: 'GATE DA' | 'GATE CS') => void;
  examData: Exam;
}

const Header: React.FC<HeaderProps> = ({ currentExam, onSwitchExam, examData }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">GATE Tracker</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => onSwitchExam('GATE DA')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentExam === 'GATE DA'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                GATE DA
              </button>
              <button
                onClick={() => onSwitchExam('GATE CS')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentExam === 'GATE CS'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                GATE CS
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-gray-600">Overall Progress</div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${examData.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {examData.progress}%
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>{examData.completedTopics}/{examData.totalTopics} topics</span>
            </div>
            
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
              title="Clear cache and reload"
            >
              Refresh Data
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
