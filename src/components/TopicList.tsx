import React, { useState } from 'react';
import { CheckCircle, Circle, Search, RotateCcw } from 'lucide-react';
import { Subject } from '../types';

interface TopicListProps {
  subjects: Subject[];
  examId: 'gateDA' | 'gateCS';
  onToggleTopic: (examId: 'gateDA' | 'gateCS', subjectId: string, topicId: string) => void;
  onToggleRevision: (examId: 'gateDA' | 'gateCS', subjectId: string, topicId: string) => void;
}

const TopicList: React.FC<TopicListProps> = ({ subjects, examId, onToggleTopic, onToggleRevision }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [showCompleted, setShowCompleted] = useState(true);

  // Flatten all topics from all subjects
  const allTopics = subjects.flatMap(subject => 
    subject.topics.map(topic => ({ ...topic, subjectId: subject.id, subjectName: subject.name }))
  );

  // Filter topics based on search and filters
  const filteredTopics = allTopics.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || topic.subjectId === selectedSubject;
    const matchesCompleted = showCompleted || !topic.completed;
    
    return matchesSearch && matchesSubject && matchesCompleted;
  });

  const handleTopicToggle = (subjectId: string, topicId: string) => {
    onToggleTopic(examId, subjectId, topicId);
  };

  const handleToggleRevision = (subjectId: string, topicId: string) => {
    onToggleRevision(examId, subjectId, topicId);
  };

  const completedCount = allTopics.filter(topic => topic.completed).length;
  const totalCount = allTopics.length;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {subjects.length === 1 ? `${subjects[0].name} Topics` : 'Topics'}
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>{completedCount}/{totalCount} completed</span>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Subjects</option>
            {subjects.map(subject => (
              <option key={subject.id} value={subject.id}>{subject.name}</option>
            ))}
          </select>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Show completed</span>
          </label>
        </div>
      </div>

      <div className="p-6">
        {filteredTopics.length === 0 ? (
          <div className="text-center py-8">
            <Circle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No topics found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                  topic.completed
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3 flex-1">
                  <button
                    onClick={() => handleTopicToggle(topic.subjectId, topic.id)}
                    className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      topic.completed
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {topic.completed && <CheckCircle className="h-3 w-3" />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium ${
                      topic.completed ? 'text-green-900 line-through' : 'text-gray-900'
                    }`}>
                      {topic.name}
                    </h3>
                    <p className="text-sm text-gray-500">{topic.subjectName}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {topic.completed && topic.completedDate && (
                    <div className="text-xs text-green-600">
                      Completed {new Date(topic.completedDate).toLocaleDateString()}
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleToggleRevision(topic.subjectId, topic.id)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded text-xs transition-colors ${
                      topic.revised
                        ? 'bg-green-800 text-white border border-green-900'
                        : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                    }`}
                    title={topic.revised ? 'Mark as not revised' : 'Mark as revised'}
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>{topic.revised ? 'Revised' : 'Not Revised'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicList;
