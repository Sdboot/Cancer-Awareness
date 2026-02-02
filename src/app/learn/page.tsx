'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromStorage, getPersonalizedLessons } from '@/lib/utils';
import { LEARNING_CARDS } from '@/data/lessons';
import type { User, LearningCard } from '@/types';

export default function LearnPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [difficulty, setDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [lessons, setLessons] = useState<LearningCard[]>([]);

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
  }, [router]);

  const filtered = difficulty === 'all' ? lessons : lessons.filter((l) => l.difficulty === difficulty);

  if (!user) return <div className="container-safe py-8">Loading...</div>;

  return (
    <div className="container-safe py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">📚 Learning Path</h1>
      <p className="text-lg text-gray-600 mb-8">Progress through bite-sized lessons about cancer awareness and prevention.</p>

      <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">Filter by Difficulty</h3>
        <div className="flex flex-wrap gap-2">
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-4 py-2 rounded ${
                difficulty === level
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((lesson) => (
          <div key={lesson.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{lesson.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
            <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded mb-3 line-clamp-2">{lesson.content}</div>
            <span className={`text-xs font-bold px-3 py-1 rounded ${
              lesson.difficulty === 'beginner'
                ? 'bg-green-100 text-green-800'
                : lesson.difficulty === 'intermediate'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
            }`}>
              {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getPersonalizedLessons(cards: LearningCard[], sex: string): LearningCard[] {
  return cards.filter((c) => c.targetAudience === 'all' || c.targetAudience === sex);
}
