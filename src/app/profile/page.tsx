'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromStorage, saveUserToStorage } from '@/lib/utils';
import type { User } from '@/types';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const currentUser = getUserFromStorage();
    if (!currentUser) {
      router.push('/signup');
    } else {
      setUser(currentUser);
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cancer_awareness_user');
      router.push('/');
    }
  };

  if (!user) return <div className="container-safe py-8">Loading...</div>;

  return (
    <div className="container-safe py-12 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Profile</h1>

      <div className="card space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Name</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">{user.name}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Sex</h3>
          <p className="text-lg text-gray-900 mt-2 capitalize">
            {user.sex === 'prefer-not-to-say' ? 'Prefer not to say' : user.sex}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Member Since</h3>
          <p className="text-gray-900 mt-2">
            {new Date(user.joinedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="flex gap-4 pt-6">
          <button className="btn btn-primary" onClick={() => setEditing(!editing)}>
            {editing ? 'Cancel' : 'Edit Profile'}
          </button>
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 bg-blue-100 border border-blue-400 p-4 rounded-lg">
        <h3 className="font-bold text-blue-900">🔒 Privacy</h3>
        <p className="text-blue-900 text-sm mt-2">
          Your data is stored locally in your browser. No data is shared with external servers.
        </p>
      </div>
    </div>
  );
}
