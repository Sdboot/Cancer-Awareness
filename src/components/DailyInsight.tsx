'use client';

import React from 'react';
import type { HealthInsight } from '@/types';

interface DailyInsightProps {
  insight: HealthInsight;
}

export const DailyInsight: React.FC<DailyInsightProps> = ({ insight }) => {
  return (
    <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-primary/20">
      <div className="flex gap-4">
        <div className="text-5xl">{insight.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{insight.title}</h3>
          <p className="text-gray-700 mb-2">{insight.content}</p>
          <p className="text-sm text-gray-600 italic">{insight.description}</p>
        </div>
      </div>
    </div>
  );
};
