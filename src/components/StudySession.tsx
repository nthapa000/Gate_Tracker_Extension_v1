import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Clock, BookOpen } from 'lucide-react';
import { Subject, Topic, StudySession } from '../types';
import { generateId, formatDuration } from '../utils/helpers';

interface StudySessionProps {
  subjects: Subject[];
  topics: Topic[];
  studySessions: StudySession[];
  updateAppState: (updates: Partial<any>) => void;
}

const StudySessionComponent: React.FC<StudySessionProps> = ({ 
  subjects, 
  topics, 
  studySessions, 
  updateAppState 
}) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState(0);

  const availableTopics = selectedSubject 
    ? topics.filter(topic => topic.subjectId === selectedSubject)
    : [];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime.getTime()) / 1000));
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  const handleStart = () => {
    if (!selectedTopic) return;
    
    setIsActive(true);
    setStartTime(new Date());
    setElapsedTime(0);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleStop = () => {
    if (!selectedTopic || !startTime) return;
    
    const endTime = new Date();
    const duration = Math.floor((endTime.getTime() - startTime.getTime()) / 60000); // in minutes
    
    const newSession: StudySession = {
      id: generateId(),
      topicId: selectedTopic,
      subjectId: selectedSubject,
      startTime,
      endTime,
      duration,
      notes,
      rating: rating || 0
    };
    
    updateAppState({
      studySessions: [...studySessions, newSession]
    });
    
    // Reset form
    setIsActive(false);
    setStartTime(null);
    setElapsedTime(0);
    setNotes('');
    setRating(0);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const selectedTopicData = topics.find(topic => topic.id === selectedTopic);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Study Session</h1>
        <p className="mt-2 text-gray-600">Track your study time and progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Session Controls */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Start New Session</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Subject
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    setSelectedTopic('');
                  }}
                  className="input"
                  disabled={isActive}
                >
                  <option value="">Choose a subject</option>
                  {subjects.map(subject => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Topic
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="input"
                  disabled={isActive || !selectedSubject}
                >
                  <option value="">Choose a topic</option>
                  {availableTopics.map(topic => (
                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                  ))}
                </select>
              </div>

              {selectedTopicData && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">{selectedTopicData.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{selectedTopicData.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Difficulty: {selectedTopicData.difficulty}</span>
                    <span>Est. Time: {selectedTopicData.estimatedHours}h</span>
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                {!isActive ? (
                  <button
                    onClick={handleStart}
                    disabled={!selectedTopic}
                    className="btn btn-primary flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Play className="h-4 w-4" />
                    <span>Start Session</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handlePause}
                      className="btn btn-warning flex items-center space-x-2"
                    >
                      <Pause className="h-4 w-4" />
                      <span>Pause</span>
                    </button>
                    <button
                      onClick={handleStop}
                      className="btn btn-danger flex items-center space-x-2"
                    >
                      <Square className="h-4 w-4" />
                      <span>Stop</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Session Notes */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about what you studied..."
              className="input h-32 resize-none"
              disabled={!isActive}
            />
          </div>
        </div>

        {/* Timer and Stats */}
        <div className="space-y-6">
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Timer</h3>
            
            <div className="text-4xl font-mono font-bold text-primary-600 mb-4">
              {formatTime(elapsedTime)}
            </div>
            
            <div className="text-sm text-gray-500">
              {isActive ? 'Session Active' : 'Session Stopped'}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Rating</h3>
            
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  } hover:text-yellow-400 transition-colors`}
                >
                  ★
                </button>
              ))}
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-2">
              Rate your focus and understanding
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Stats</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Sessions</span>
                <span className="text-sm font-medium">
                  {studySessions.filter(session => {
                    const sessionDate = new Date(session.startTime);
                    const today = new Date();
                    return sessionDate.toDateString() === today.toDateString();
                  }).length}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Time</span>
                <span className="text-sm font-medium">
                  {formatDuration(studySessions
                    .filter(session => {
                      const sessionDate = new Date(session.startTime);
                      const today = new Date();
                      return sessionDate.toDateString() === today.toDateString();
                    })
                    .reduce((total, session) => total + session.duration, 0)
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySessionComponent;
