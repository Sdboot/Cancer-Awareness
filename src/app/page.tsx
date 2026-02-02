'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container-safe py-16">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Comprehensive <span className="text-primary">Cancer</span> Education
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn about 10+ cancer types, prevention strategies, screening guidelines, and how to recognize warning signs early. Knowledge saves lives.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup" className="btn btn-primary px-8 py-3 text-lg">
            Get Started
          </Link>
          <Link href="/learn" className="btn btn-outline px-8 py-3 text-lg">
            Explore Lessons
          </Link>
        </div>
      </div>

      {/* Cancer Types Overview */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cancer Types We Cover</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { emoji: '🎗️', name: 'Breast' },
            { emoji: '🏥', name: 'Prostate' },
            { emoji: '☀️', name: 'Skin' },
            { emoji: '🫁', name: 'Lung' },
            { emoji: '🔍', name: 'Colorectal' },
            { emoji: '💚', name: 'Cervical' },
            { emoji: '⚠️', name: 'Ovarian' },
            { emoji: '⚡', name: 'Pancreatic' },
            { emoji: '🩸', name: 'Leukemia' },
            { emoji: '👨', name: 'Testicular' },
          ].map((cancer) => (
            <div key={cancer.name} className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-3xl mb-2">{cancer.emoji}</div>
              <p className="font-bold text-gray-900">{cancer.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {[
          { icon: '📚', title: 'Detailed Lessons', desc: 'Learn cancer types, stages, symptoms, and treatments' },
          { icon: '🎯', title: 'Personalized', desc: 'Content tailored to your gender and risk profile' },
          { icon: '🏥', title: 'Screening Info', desc: 'Age-appropriate screening guidelines for all cancers' },
          { icon: '💡', title: 'Daily Tips', desc: 'Rotating insights about different cancer types' },
        ].map((item) => (
          <div key={item.title} className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Key Statistics */}
      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Cancer Awareness Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-l-purple-600">
            <p className="text-3xl font-bold text-purple-600 mb-2">20 Million</p>
            <p className="text-gray-700">New cancer cases diagnosed annually worldwide</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-l-pink-600">
            <p className="text-3xl font-bold text-pink-600 mb-2">90%+</p>
            <p className="text-gray-700">5-year survival rate for early-detected cancers</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-l-purple-600">
            <p className="text-3xl font-bold text-purple-600 mb-2">30-40%</p>
            <p className="text-gray-700">Risk reduction through lifestyle changes</p>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="mt-16 bg-red-100 border border-red-400 p-6 rounded-lg">
        <strong className="text-red-900 text-lg">⚠️ Important Medical Disclaimer:</strong>
        <p className="text-red-800 mt-2">
          This platform provides <strong>educational information only</strong> and is not a substitute for professional medical advice, diagnosis, or treatment. It does not provide medical diagnoses or replace professional medical care. Always consult a qualified healthcare provider for any health concerns, symptoms, or treatment decisions.
        </p>
      </div>
    </div>
  );
}
