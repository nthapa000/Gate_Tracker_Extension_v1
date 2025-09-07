import React from 'react';
import { FileText, Clock, Award, Play } from 'lucide-react';
import { PracticeTest, Subject } from '../types';
import { formatDuration } from '../utils/helpers';

interface PracticeTestsProps {
  practiceTests: PracticeTest[];
  subjects: Subject[];
  updateAppState: (updates: Partial<any>) => void;
}

const PracticeTests: React.FC<PracticeTestsProps> = ({ practiceTests, subjects }) => {
  const getSubjectName = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject ? subject.name : 'Unknown';
  };

  const getSubjectColor = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject ? subject.color : '#6b7280';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Practice Tests</h1>
        <p className="mt-2 text-gray-600">Take practice tests to assess your preparation</p>
      </div>

      {/* Coming Soon Card */}
      <div className="card text-center py-12">
        <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice Tests Coming Soon</h3>
        <p className="text-gray-600 mb-6">
          We're working on adding practice tests for GATE DA and GATE CS. 
          This feature will include mock exams, topic-wise tests, and detailed analytics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="p-4 bg-gray-50 rounded-lg">
            <Clock className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Timed Tests</h4>
            <p className="text-sm text-gray-600">Full-length practice tests with time limits</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <Award className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Detailed Analysis</h4>
            <p className="text-sm text-gray-600">Comprehensive performance analysis and insights</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <Play className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Topic-wise Tests</h4>
            <p className="text-sm text-gray-600">Practice specific topics and subjects</p>
          </div>
        </div>
      </div>

      {/* Placeholder for future tests */}
      {practiceTests.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Available Tests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceTests.map((test) => (
              <div key={test.id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${getSubjectColor(test.subjectId)}20` }}
                    >
                      <FileText 
                        className="h-5 w-5" 
                        style={{ color: getSubjectColor(test.subjectId) }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{test.name}</h3>
                      <p className="text-sm text-gray-500">{getSubjectName(test.subjectId)}</p>
                    </div>
                  </div>
                  
                  {test.completed && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">{test.score}%</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Questions</span>
                    <span>{test.totalQuestions}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Duration</span>
                    <span>{formatDuration(test.duration)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Difficulty</span>
                    <span className="capitalize">{test.difficulty}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <button 
                    className={`w-full btn ${test.completed ? 'btn-secondary' : 'btn-primary'} flex items-center justify-center space-x-2`}
                    disabled={test.completed}
                  >
                    <Play className="h-4 w-4" />
                    <span>{test.completed ? 'Completed' : 'Start Test'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeTests;
