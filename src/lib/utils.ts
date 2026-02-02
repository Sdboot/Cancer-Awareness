import type { User } from '@/types';

export const getUserFromStorage = (): User | null => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('cancer_awareness_user');
  return user ? JSON.parse(user) : null;
};

export const saveUserToStorage = (user: User): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cancer_awareness_user', JSON.stringify(user));
};

export const validateUserSignup = (name: string, sex: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!name || name.trim().length < 2) {
    errors.push('Full name must be at least 2 characters');
  }

  if (!['male', 'female', 'prefer-not-to-say'].includes(sex)) {
    errors.push('Please select a valid sex option');
  }

  return { valid: errors.length === 0, errors };
};

export const getDailyInsightIndex = (totalInsights: number): number => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return dayOfYear % totalInsights;
};
