import React, { useState } from 'react';
import { Search, Clock, BookOpen, Play } from 'lucide-react';
import { Subject, Topic } from '../types';
import { getDifficultyColor, getStatusColor } from '../utils/helpers';

interface TopicsProps {
  subjects: Subject[];
  topics: Topic[];
  updateAppState: (updates: Partial<any>) => void;
}

const Topics: React.FC<TopicsProps> = ({ subjects, topics }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (topic.description || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || topic.subjectId === selectedSubject;
    const matchesDifficulty = selectedDifficulty === 'all' || topic.difficulty === selectedDifficulty;
    const matchesStatus = selectedStatus === 'all' || topic.status === selectedStatus;
    
    return matchesSearch && matchesSubject && matchesDifficulty && matchesStatus;
  });

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
        <h1 className="text-3xl font-bold text-gray-900">Topics</h1>
        <p className="mt-2 text-gray-600">Manage and track your study topics</p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10"
            />
          </div>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="input"
          >
            <option value="all">All Subjects</option>
            {subjects.map(subject => (
              <option key={subject.id} value={subject.id}>{subject.name}</option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="input"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="input"
          >
            <option value="all">All Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Review">Review</option>
          </select>
        </div>
      </div>

      {/* Topics List */}
      <div className="space-y-4">
        {filteredTopics.map((topic) => (
          <div key={topic.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getSubjectColor(topic.subjectId || '') }}
                  />
                  <span className="text-sm text-gray-500">{getSubjectName(topic.subjectId || '')}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.name}</h3>
                <p className="text-gray-600 mb-4">{topic.description || ''}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{topic.estimatedHours}h</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{(topic.resources || []).length} resources</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-3">
                <div className="flex space-x-2">
                  <span className={`badge ${getDifficultyColor(topic.difficulty || 'Medium')}`}>
                    {topic.difficulty}
                  </span>
                  <span className={`badge ${getStatusColor(topic.status || 'Not Started')}`}>
                    {topic.status}
                  </span>
                </div>

                <div className="w-32">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{topic.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill bg-primary-600"
                      style={{ width: `${topic.progress}%` }}
                    />
                  </div>
                </div>

                <button className="btn btn-primary flex items-center space-x-1">
                  <Play className="h-4 w-4" />
                  <span>Start</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredTopics.length === 0 && (
          <div className="card text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No topics found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topics;
