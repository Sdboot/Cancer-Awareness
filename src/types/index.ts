export interface User {
  id: string;
  name: string;
  sex: 'male' | 'female' | 'prefer-not-to-say';
  joinedDate: string;
}

export interface HealthInsight {
  id: string;
  title: string;
  description: string;
  targetAudience: 'female' | 'male' | 'all';
  content: string;
  icon: string;
}

export interface LearningCard {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetAudience: 'female' | 'male' | 'all';
  content: string;
}
