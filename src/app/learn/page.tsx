'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromStorage } from '@/lib/utils';
import { LEARNING_CARDS } from '@/data/lessons';
import type { User, LearningCard } from '@/types';

export default function LearnPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [difficulty, setDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [lessons, setLessons] = useState<LearningCard[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    const currentUser = getUserFromStorage();
    if (!currentUser) {
      router.push('/signup');
      return;
    }
    setUser(currentUser);

    const personalized = LEARNING_CARDS.filter(
      (l) => l.targetAudience === 'all' || l.targetAudience === currentUser.sex
    );
    setLessons(personalized);

    // Load completed lessons from localStorage
    const completed = localStorage.getItem('completedLessons');
    if (completed) {
      setCompletedLessons(new Set(JSON.parse(completed)));
    }
  }, [router]);

  const toggleComplete = (id: string) => {
    const updated = new Set(completedLessons);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setCompletedLessons(updated);
    localStorage.setItem('completedLessons', JSON.stringify([...updated]));
  };

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filtered = difficulty === 'all' ? lessons : lessons.filter((l) => l.difficulty === difficulty);
  const completionPercentage = lessons.length > 0 ? Math.round((completedLessons.size / lessons.length) * 100) : 0;

  if (!user) return <div className="container-safe py-8">Loading...</div>;

  return (
    <div className="container-safe py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">📚 Learning Path</h1>
        <p className="text-lg text-gray-600 mb-6">Progress through bite-sized lessons about cancer awareness and prevention.</p>
        
        {/* Progress Card */}
        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Your Progress</h3>
              <p className="text-gray-600">{completedLessons.size} of {lessons.length} lessons completed</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-600">{completionPercentage}%</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: `${completionPercentage}%` }}></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">📊 Filter by Difficulty</h3>
        <div className="flex flex-wrap gap-2">
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-4 py-2 rounded font-medium transition-all ${
                difficulty === level
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((lesson) => (
          <div
            key={lesson.id}
            className={`card transition-all duration-200 cursor-pointer ${
              expandedId === lesson.id ? 'shadow-xl ring-2 ring-purple-400' : 'hover:shadow-lg'
            } ${
              completedLessons.has(lesson.id) ? 'border-l-4 border-l-green-500 bg-green-50' : ''
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1" onClick={() => toggleExpanded(lesson.id)}>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{lesson.title}</h3>
                <p className="text-sm text-gray-600">{lesson.description}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleComplete(lesson.id);
                }}
                className="ml-2 text-xl"
              >
                {completedLessons.has(lesson.id) ? '✅' : '⭕'}
              </button>
            </div>

            {/* Expandable Content */}
            {expandedId === lesson.id && (
              <div className="mb-4 pb-4 border-t border-gray-200">
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">{lesson.content}</p>
              </div>
            )}

            {/* Footer with difficulty badge */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold px-3 py-1 rounded ${
                lesson.difficulty === 'beginner'
                  ? 'bg-green-100 text-green-800'
                  : lesson.difficulty === 'intermediate'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
              }`}>
                {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
              </span>
              <span className="text-xs text-gray-500">
                {lesson.targetAudience === 'all' ? '👥 Everyone' : lesson.targetAudience === 'male' ? '👨 For Men' : '👩 For Women'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No lessons found for this difficulty level.</p>
        </div>
      )}
    </div>
  );
}
