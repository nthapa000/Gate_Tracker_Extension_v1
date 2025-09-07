import { useState, useEffect } from 'react';
import { AppState } from './types';
import { storage } from './utils/storage';
import { GATE_DA, GATE_CS } from './data/gateTopics';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import ExamSelector from './components/ExamSelector';
import SubjectList from './components/SubjectList';
import TopicList from './components/TopicList';

function App() {
  const [appState, setAppState] = useState<AppState | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  useEffect(() => {
    // Check if we need to refresh data (for new structure)
    const dataVersion = localStorage.getItem('gate_tracker_version');
    const currentVersion = '2.3'; // Updated version for simplified revision tracking
    
    if (dataVersion !== currentVersion) {
      // Clear old data and load new structure
      storage.clearAllData();
      localStorage.setItem('gate_tracker_version', currentVersion);
    }
    
    // Load app state from localStorage
    const savedState = storage.getAppState();
    
    if (savedState) {
      setAppState(savedState);
    } else {
      // Initialize with default data
              const initialState: AppState = {
                gateDA: GATE_DA,
                gateCS: GATE_CS,
                currentExam: 'GATE CS'
              };
      setAppState(initialState);
      storage.saveAppState(initialState);
    }
    
    setLoading(false);
  }, []);

  const updateAppState = (updates: Partial<AppState>) => {
    if (!appState) return;
    
    const newState = { ...appState, ...updates };
    setAppState(newState);
    storage.saveAppState(newState);
  };

  const toggleTopicCompletion = (examId: 'gateDA' | 'gateCS', subjectId: string, topicId: string) => {
    if (!appState) return;

    const exam = appState[examId];
    const updatedSubjects = exam.subjects.map(subject => {
      if (subject.id === subjectId) {
        const updatedTopics = subject.topics.map(topic => {
          if (topic.id === topicId) {
            return {
              ...topic,
              completed: !topic.completed,
              completedDate: !topic.completed ? new Date() : undefined
            };
          }
          return topic;
        });
        
        const totalTopics = updatedTopics.length;
        const completedTopics = updatedTopics.filter(topic => topic.completed).length;
        const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
        
        return {
          ...subject,
          topics: updatedTopics,
          totalTopics,
          completedTopics,
          progress
        };
      }
      return subject;
    });

    const totalTopics = updatedSubjects.reduce((sum, subject) => sum + subject.totalTopics, 0);
    const completedTopics = updatedSubjects.reduce((sum, subject) => sum + subject.completedTopics, 0);
    const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    const updatedExam = {
      ...exam,
      subjects: updatedSubjects,
      totalTopics,
      completedTopics,
      progress
    };

    updateAppState({
      [examId]: updatedExam
    });
  };

  const toggleRevision = (examId: 'gateDA' | 'gateCS', subjectId: string, topicId: string) => {
    if (!appState) return;

    const exam = appState[examId];
    const updatedSubjects = exam.subjects.map(subject => {
      if (subject.id === subjectId) {
        const updatedTopics = subject.topics.map(topic => {
          if (topic.id === topicId) {
            return {
              ...topic,
              revised: !topic.revised
            };
          }
          return topic;
        });
        
        return {
          ...subject,
          topics: updatedTopics
        };
      }
      return subject;
    });

    const updatedExam = {
      ...exam,
      subjects: updatedSubjects
    };

    updateAppState({
      [examId]: updatedExam
    });
  };

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(selectedSubject === subjectId ? null : subjectId);
  };

  const switchExam = (exam: 'GATE DA' | 'GATE CS') => {
    updateAppState({ currentExam: exam });
    setSelectedSubject(null); // Clear selected subject when switching exams
  };

  if (loading) {
    return (
      <DarkModeProvider>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 dark:border-blue-400"></div>
        </div>
      </DarkModeProvider>
    );
  }

  if (!appState) {
    return (
      <DarkModeProvider>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Error Loading App</h1>
            <p className="text-gray-600 dark:text-gray-400">Please refresh the page and try again.</p>
          </div>
        </div>
      </DarkModeProvider>
    );
  }

  const currentExam = appState.currentExam === 'GATE DA' ? appState.gateDA : appState.gateCS;
  
  // Filter subjects based on selection
  const filteredSubjects = selectedSubject 
    ? currentExam.subjects.filter(subject => subject.id === selectedSubject)
    : currentExam.subjects;

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header 
          currentExam={appState.currentExam}
          onSwitchExam={switchExam}
          examData={currentExam}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ExamSelector 
                currentExam={appState.currentExam}
                onSwitchExam={switchExam}
                gateDA={appState.gateDA}
                gateCS={appState.gateCS}
              />
              <SubjectList 
                subjects={currentExam.subjects}
                examId={appState.currentExam === 'GATE DA' ? 'gateDA' : 'gateCS'}
                selectedSubject={selectedSubject}
                onSubjectClick={handleSubjectClick}
              />
            </div>
            
            <div className="lg:col-span-2">
              <TopicList 
                subjects={filteredSubjects}
                examId={appState.currentExam === 'GATE DA' ? 'gateDA' : 'gateCS'}
                onToggleTopic={toggleTopicCompletion}
                onToggleRevision={toggleRevision}
              />
            </div>
          </div>
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;