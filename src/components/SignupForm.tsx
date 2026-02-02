'use client';

import React, { useState } from 'react';
import type { User } from '@/types';
import { validateUserSignup } from '@/lib/utils';

interface SignupFormProps {
  onSuccess: (user: User) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const [form, setForm] = useState({ name: '', sex: '' });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateUserSignup(form.name, form.sex);
    
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const newUser: User = {
      id: `user_${Date.now()}`,
      name: form.name,
      sex: form.sex as 'male' | 'female' | 'prefer-not-to-say',
      joinedDate: new Date().toISOString(),
    };

    onSuccess(newUser);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2">Full Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Sex</label>
        <select
          value={form.sex}
          onChange={(e) => setForm({ ...form, sex: e.target.value })}
          className="input"
        >
          <option value="">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>

      {errors.length > 0 && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errors.map((err, i) => (
            <div key={i}>• {err}</div>
          ))}
        </div>
      )}

      <button type="submit" className="btn btn-primary w-full">
        Create Account
      </button>
    </form>
  );
};
