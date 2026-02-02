'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container-safe py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Learn About <span className="text-primary">Cancer</span> Prevention
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          HealthAware helps you understand cancer awareness, prevention strategies, and access healthcare resources.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup" className="btn btn-primary px-8 py-3 text-lg">
            Get Started
          </Link>
          <Link href="/learn" className="btn btn-outline px-8 py-3 text-lg">
            Learn More
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        {[
          { icon: '📚', title: 'Educational Content', desc: 'Learn cancer prevention' },
          { icon: '📊', title: 'Risk Assessment', desc: 'Understand your health' },
          { icon: '🏥', title: 'Healthcare Access', desc: 'Find care near you' },
          { icon: '💡', title: 'Daily Insights', desc: 'Stay informed' },
        ].map((item) => (
          <div key={item.title} className="card text-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-red-100 border border-red-400 p-6 rounded-lg">
        <strong className="text-red-900">⚠️ Medical Disclaimer:</strong>
        <p className="text-red-800 mt-2">
          This platform provides educational information only and is not a substitute for professional medical advice. Always consult a healthcare provider.
        </p>
      </div>
    </div>
  );
}
