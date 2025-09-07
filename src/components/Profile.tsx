import React, { useState } from 'react';
import { User, Save, Edit3, Calendar, Target, Clock } from 'lucide-react';
import { UserProfile } from '../types';
import { formatDate } from '../utils/helpers';

interface ProfileProps {
  user: UserProfile;
  updateAppState: (updates: Partial<any>) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, updateAppState }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    targetExam: user.targetExam,
    examDate: user.examDate ? user.examDate.toISOString().split('T')[0] : '',
    studyGoal: user.studyGoal
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'studyGoal' ? parseInt(value) : value
    }));
  };

  const handleSave = () => {
    const updatedUser: UserProfile = {
      ...user,
      name: formData.name,
      email: formData.email,
      targetExam: formData.targetExam as 'GATE DA' | 'GATE CS' | 'Both',
      examDate: formData.examDate ? new Date(formData.examDate) : undefined,
      studyGoal: formData.studyGoal
    };

    updateAppState({ user: updatedUser });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      targetExam: user.targetExam,
      examDate: user.examDate ? user.examDate.toISOString().split('T')[0] : '',
      studyGoal: user.studyGoal
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn btn-secondary flex items-center space-x-2"
              >
                <Edit3 className="h-4 w-4" />
                <span>{isEditing ? 'Cancel' : 'Edit'}</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input"
                    />
                  ) : (
                    <p className="text-gray-900">{user.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                    />
                  ) : (
                    <p className="text-gray-900">{user.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Exam
                  </label>
                  {isEditing ? (
                    <select
                      name="targetExam"
                      value={formData.targetExam}
                      onChange={handleInputChange}
                      className="input"
                    >
                      <option value="GATE DA">GATE Data Science & AI</option>
                      <option value="GATE CS">GATE Computer Science</option>
                      <option value="Both">Both Exams</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">{user.targetExam}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Exam Date
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="examDate"
                      value={formData.examDate}
                      onChange={handleInputChange}
                      className="input"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {user.examDate ? formatDate(user.examDate) : 'Not set'}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Study Goal
                </label>
                {isEditing ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="studyGoal"
                      value={formData.studyGoal}
                      onChange={handleInputChange}
                      min="1"
                      max="12"
                      className="input w-24"
                    />
                    <span className="text-sm text-gray-500">hours per day</span>
                  </div>
                ) : (
                  <p className="text-gray-900">{user.studyGoal} hours per day</p>
                )}
              </div>

              {isEditing && (
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <button onClick={handleCancel} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button onClick={handleSave} className="btn btn-primary flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Account Statistics */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Statistics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Member Since</p>
                  <p className="text-sm text-gray-500">{formatDate(user.createdAt)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Study Goal</p>
                  <p className="text-sm text-gray-500">{user.studyGoal} hours/day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="space-y-6">
          <div className="card text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{user.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{user.email}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Target Exam:</span>
                <span className="font-medium">{user.targetExam}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Study Goal:</span>
                <span className="font-medium">{user.studyGoal}h/day</span>
              </div>
              {user.examDate && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Exam Date:</span>
                  <span className="font-medium">{formatDate(user.examDate)}</span>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn btn-primary flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Start Study Session</span>
              </button>
              <button className="w-full btn btn-secondary flex items-center justify-center space-x-2">
                <Target className="h-4 w-4" />
                <span>Set New Goal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
