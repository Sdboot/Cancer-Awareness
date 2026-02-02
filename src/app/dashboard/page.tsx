'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DailyInsight } from '@/components/DailyInsight';
import { getUserFromStorage, getDailyInsightIndex } from '@/lib/utils';
import { HEALTH_INSIGHTS } from '@/data/insights';
import { LEARNING_CARDS } from '@/data/lessons';
import type { User } from '@/types';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [insight, setInsight] = useState<any>(null);

  useEffect(() => {
    const currentUser = getUserFromStorage();
    if (!currentUser) {
      router.push('/signup');
      return;
    }
    setUser(currentUser);

    // Get personalized insights based on sex
    const personalizedInsights = HEALTH_INSIGHTS.filter(
      (i) => i.targetAudience === 'all' || i.targetAudience === currentUser.sex
    );

    const index = getDailyInsightIndex(personalizedInsights.length);
    setInsight(personalizedInsights[index]);
  }, [router]);

  if (!user) return <div className="container-safe py-8">Loading...</div>;

  return (
    <div className="container-safe py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Welcome back, <span className="text-primary">{user.name.split(' ')[0]}</span>!
      </h1>
      <p className="text-lg text-gray-600 mb-8">Here's your personalized health education.</p>

      {insight && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Today's Insight</h2>
          <DailyInsight insight={insight} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="text-3xl mb-2">📚</div>
          <h3 className="font-bold text-gray-900">Lessons Available</h3>
          <p className="text-2xl text-primary font-bold">{LEARNING_CARDS.length}</p>
        </div>
        <div className="card">
          <div className="text-3xl mb-2">💡</div>
          <h3 className="font-bold text-gray-900">Daily Insights</h3>
          <p className="text-2xl text-secondary font-bold">{HEALTH_INSIGHTS.length}</p>
        </div>
        <div className="card">
          <div className="text-3xl mb-2">🔥</div>
          <h3 className="font-bold text-gray-900">Streak</h3>
          <p className="text-2xl text-warning font-bold">1 day</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <a href="/learn" className="btn btn-primary">
          Start Learning
        </a>
        <a href="/profile" className="btn btn-outline">
          View Profile
        </a>
      </div>
    </div>
  );
}
