'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignupForm } from '@/components/SignupForm';
import { saveUserToStorage, getUserFromStorage } from '@/lib/utils';
import type { User } from '@/types';

export default function SignupPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (getUserFromStorage()) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSuccess = (user: User) => {
    saveUserToStorage(user);
    router.push('/dashboard');
  };

  if (!isClient) return null;

  return (
    <div className="container-safe py-16 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to HealthAware</h1>
      <p className="text-lg text-gray-600 mb-8">Get personalized health education and cancer awareness content.</p>

      <div className="card">
        <SignupForm onSuccess={handleSuccess} />
      </div>

      <div className="mt-8 bg-blue-100 border border-blue-400 p-4 rounded-lg">
        <p className="text-blue-900 text-sm">
          <strong>Privacy Note:</strong> Your data is stored locally in your browser. No information is sent to external servers.
        </p>
      </div>
    </div>
  );
}
