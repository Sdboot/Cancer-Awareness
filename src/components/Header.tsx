'use client';

import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-safe py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">♥️ HealthAware</div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/dashboard" className="text-gray-700 hover:text-primary font-medium">
            Dashboard
          </Link>
          <Link href="/learn" className="text-gray-700 hover:text-primary font-medium">
            Learn
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-primary font-medium">
            Profile
          </Link>
        </nav>
        <Link href="/signup" className="btn btn-primary">
          Signup
        </Link>
      </div>
    </header>
  );
};
