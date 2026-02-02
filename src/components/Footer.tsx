'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 mt-16">
      <div className="container-safe text-center text-sm">
        <p>© {new Date().getFullYear()} HealthAware. Educational platform for cancer awareness.</p>
        <p className="text-gray-400 mt-2">This platform is for educational purposes only. Always consult a healthcare provider.</p>
      </div>
    </footer>
  );
};
