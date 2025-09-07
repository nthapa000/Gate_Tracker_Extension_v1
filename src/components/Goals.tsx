import React, { useState } from 'react';
import { Plus, Target, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Goal } from '../types';
import { generateId, formatDate } from '../utils/helpers';

interface GoalsProps {
  goals: Goal[];
  updateAppState: (updates: Partial<any>) => void;
}

const Goals: React.FC<GoalsProps> = ({ goals, updateAppState }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Daily' as 'Daily' | 'Weekly' | 'Monthly' | 'Exam',
    targetValue: 1,
    unit: 'hours',
    deadline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'targetValue' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newGoal: Goal = {
      id: generateId(),
      title: formData.title,
      description: formData.description,
      type: formData.type,
      targetValue: formData.targetValue,
      currentValue: 0,
      unit: formData.unit,
      deadline: formData.deadline ? new Date(formData.deadline) : undefined,
      completed: false,
      createdAt: new Date(),
      targetDate: formData.deadline ? new Date(formData.deadline) : new Date(),
      priority: 'Medium',
      category: 'General'
    };

    updateAppState({
      goals: [...goals, newGoal]
    });

    setFormData({
      title: '',
      description: '',
      type: 'Daily',
      targetValue: 1,
      unit: 'hours',
      deadline: ''
    });
    setShowForm(false);
  };

  const updateGoalProgress = (goalId: string, increment: number) => {
    const updatedGoals = goals.map(goal => {
      if (goal.id === goalId) {
        const newValue = Math.min((goal.currentValue || 0) + increment, goal.targetValue || 0);
        return {
          ...goal,
          currentValue: newValue,
          completed: newValue >= (goal.targetValue || 0)
        };
      }
      return goal;
    });

    updateAppState({ goals: updatedGoals });
  };

  const deleteGoal = (goalId: string) => {
    updateAppState({
      goals: goals.filter(goal => goal.id !== goalId)
    });
  };

  const activeGoals = goals.filter(goal => !goal.completed);
  const completedGoals = goals.filter(goal => goal.completed);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Goals</h1>
          <p className="mt-2 text-gray-600">Set and track your study goals</p>
        </div>
        
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>New Goal</span>
        </button>
      </div>

      {/* Add Goal Form */}
      {showForm && (
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Goal</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Goal Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="e.g., Complete 5 topics this week"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Goal Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Exam">Exam</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="input h-20 resize-none"
                placeholder="Describe your goal..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Value
                </label>
                <input
                  type="number"
                  name="targetValue"
                  value={formData.targetValue}
                  onChange={handleInputChange}
                  className="input"
                  min="1"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unit
                </label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="hours">Hours</option>
                  <option value="topics">Topics</option>
                  <option value="questions">Questions</option>
                  <option value="sessions">Sessions</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deadline (Optional)
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Goal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Active Goals */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Active Goals</h2>
        
        {activeGoals.length === 0 ? (
          <div className="card text-center py-8">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No active goals</h3>
            <p className="text-gray-500">Create your first goal to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activeGoals.map((goal) => (
              <div key={goal.id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                      <span className="badge bg-blue-100 text-blue-800">{goal.type}</span>
                    </div>
                    
                    {goal.description && (
                      <p className="text-gray-600 mb-3">{goal.description}</p>
                    )}
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Created {goal.createdAt ? formatDate(goal.createdAt) : 'Unknown'}</span>
                      </div>
                      {goal.deadline && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Due {formatDate(goal.deadline)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {goal.currentValue || 0}/{goal.targetValue || 0} {goal.unit || ''}
                      </div>
                      <div className="w-24 progress-bar mt-1">
                        <div 
                          className="progress-fill bg-primary-600"
                          style={{ width: `${((goal.currentValue || 0) / (goal.targetValue || 1)) * 100}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex space-x-1">
                      <button
                        onClick={() => updateGoalProgress(goal.id, 1)}
                        className="btn btn-success text-xs px-2 py-1"
                      >
                        +1
                      </button>
                      <button
                        onClick={() => deleteGoal(goal.id)}
                        className="btn btn-danger text-xs px-2 py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Completed Goals */}
      {completedGoals.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Completed Goals</h2>
          
          <div className="space-y-4">
            {completedGoals.map((goal) => (
              <div key={goal.id} className="card bg-green-50 border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                      <p className="text-sm text-gray-600">
                        Completed {goal.createdAt ? formatDate(goal.createdAt) : 'Unknown'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">
                      {goal.targetValue || 0} {goal.unit || ''} achieved!
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

export default Goals;
