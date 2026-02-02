# 🚀 HealthAware - Quick Start Guide

Welcome to **HealthAware**, a modern telemedicine and health-education platform!

## ✨ What You've Got

A fully functional, production-ready Next.js application with:
- ✅ User authentication & personalization
- ✅ Daily rotating health insights
- ✅ Interactive learning cards
- ✅ Healthcare resources & screening guides
- ✅ Medical disclaimers & safety warnings
- ✅ Mobile-first responsive design
- ✅ Accessibility features (ARIA, WCAG AA)
- ✅ Local data storage (no external servers)

## 🎯 Getting Started (3 Steps)

### Step 1: Install Dependencies
```bash
cd "c:\Users\User\Desktop\Cancer Awareness"
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:3000`

## 📱 Test the Platform

### User Flow:
1. **Landing Page** (`/`) - Explore features and learn about the platform
2. **Signup** (`/signup`) - Create account with name and sex
3. **Dashboard** (`/dashboard`) - Personalized welcome, today's insight
4. **Learn** (`/learn`) - Interactive lessons with filtering
5. **Healthcare** (`/healthcare-access`) - Resources and screening guidelines
6. **Profile** (`/profile`) - Manage account and view privacy info

### Test Accounts:
You can create test accounts with any name and sex. Data is stored locally in your browser.

## 📂 Project Structure

```
Cancer Awareness/
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── signup/page.tsx    # Signup page
│   │   ├── dashboard/page.tsx # Dashboard
│   │   ├── learn/page.tsx     # Learning section
│   │   ├── healthcare-access/ # Healthcare page
│   │   └── profile/page.tsx   # Profile page
│   │
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer
│   │   ├── SignupForm.tsx     # Signup form
│   │   ├── DailyInsight.tsx   # Daily insight display
│   │   ├── LearningCard.tsx   # Learning card component
│   │   ├── ProgressTracker.tsx # Progress visualization
│   │   ├── ResourceCard.tsx   # Healthcare resource card
│   │   ├── MedicalDisclaimer.tsx # Medical disclaimer
│   │   └── index.ts           # Component exports
│   │
│   ├── lib/
│   │   └── utils.ts           # Utility functions & helpers
│   │
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   │
│   ├── data/
│   │   ├── insights.ts        # 10 health insights
│   │   ├── lessons.ts         # 10 learning lessons
│   │   └── resources.ts       # 10 healthcare resources
│   │
│   └── globals.css            # Global styles & Tailwind
│
├── public/                    # Static files (if needed)
├── .github/                   # GitHub directory
│   └── copilot-instructions.md # Development guide
├── package.json              # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind theme
├── next.config.js           # Next.js config
├── README.md                # Full documentation
├── DEVELOPER_GUIDE.md       # Comprehensive dev guide
└── .env.example             # Environment variables example
```

## 🎨 Key Features Explained

### 1. **Personalization Algorithm**
The app personalizes content based on user sex:

**Female Users:**
- Breast cancer awareness & self-exams
- Cervical cancer & HPV testing
- Women's health screening guidelines

**Male Users:**
- Prostate cancer awareness
- Testicular cancer self-exams
- Men's health screening guidelines

**All Users:**
- Prevention tips, lifestyle advice
- General health education

### 2. **Daily Insight System**
- One new insight shown each day (based on calendar date)
- Automatically rotates through 10 curated insights
- Gender-specific and general topics

### 3. **Learning Cards**
- 10 structured lessons covering cancer awareness
- Filtered by difficulty: Beginner → Intermediate → Advanced
- Gender-specific content based on user profile

### 4. **Healthcare Resources**
- 10+ trusted organizations and hotlines
- Screening guidelines by age and sex
- When to see a doctor (emergency vs routine)
- NHS-style information layout

### 5. **Data Privacy**
- All data stored locally in browser localStorage
- No external servers or APIs
- No data sharing with third parties
- Users control when data is deleted

## 🔑 Key Files to Edit

### Adding New Health Insights
📄 **File**: `src/data/insights.ts`
```typescript
{
  id: 'insight_xxx',
  title: 'Your Insight Title',
  targetAudience: 'female' | 'male' | 'all',
  content: 'The full insight content...',
  icon: '💡',
}
```

### Adding New Lessons
📄 **File**: `src/data/lessons.ts`
```typescript
{
  id: 'lesson_xxx',
  title: 'Lesson Title',
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  targetAudience: 'female' | 'male' | 'all',
  content: 'Full lesson content...',
  lessonNumber: 1,
}
```

### Adding Healthcare Resources
📄 **File**: `src/data/resources.ts`
```typescript
{
  id: 'resource_xxx',
  name: 'Organization Name',
  type: 'resource' | 'hotline' | 'clinic' | 'hospital',
  description: 'Description...',
  url?: 'https://...',
  phone?: '1-800-XXX',
}
```

## 🛠️ Common Tasks

### Change Colors
📄 **File**: `tailwind.config.ts`
```typescript
colors: {
  primary: '#7C3AED',      // Purple
  secondary: '#EC4899',    // Pink
  success: '#10B981',      // Green
}
```

### Modify Header/Navigation
📄 **File**: `src/components/Header.tsx`

### Update Landing Page Content
📄 **File**: `src/app/page.tsx`

### Edit Form Validation
📄 **File**: `src/lib/utils.ts`

## 📊 Available Scripts

```bash
# Development
npm run dev        # Start dev server (localhost:3000)

# Production
npm run build      # Create optimized build
npm start         # Start production server

# Quality
npm run lint      # Check for code issues
```

## ✅ Testing Checklist

- [ ] Signup creates user and stores in localStorage
- [ ] Dashboard shows personalized content
- [ ] Daily insight updates daily
- [ ] Learning cards filter correctly
- [ ] Healthcare resources display properly
- [ ] Profile page shows user data
- [ ] Logout clears data
- [ ] Mobile responsive (test on phone)
- [ ] All links work
- [ ] Forms validate input
- [ ] Medical disclaimers visible

## 🚨 Important Notes

### Medical Disclaimer
This platform is **educational only**. It does NOT:
- Provide medical diagnoses
- Replace professional medical advice
- Prescribe treatments
- Guarantee disease prevention

**Always consult a healthcare provider for medical concerns.**

### Data Privacy
- All user data stays on the user's device
- Refreshing a different browser/device requires new signup
- Clearing browser data will delete user accounts
- No cloud sync or external storage

### Accessibility
The platform meets WCAG AA standards:
- Color contrast ratios ≥ 4.5:1
- Keyboard navigation support
- ARIA labels on inputs
- Semantic HTML structure

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Option 3: Traditional Hosting
```bash
npm run build
npm start
```

## 📖 Documentation

**Full Documentation:**
- [README.md](README.md) - Project overview
- [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) - Comprehensive dev guide
- [.github/copilot-instructions.md](.github/copilot-instructions.md) - Development instructions

## 💡 Quick Tips

1. **Adding Content**: Edit the data files in `src/data/` to add insights, lessons, or resources
2. **Styling**: Use Tailwind CSS classes - no separate CSS files needed
3. **Components**: All UI components are in `src/components/` - reuse them!
4. **Types**: TypeScript types are in `src/types/index.ts` - extend as needed
5. **Utilities**: Helper functions are in `src/lib/utils.ts`

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org

## 🆘 Troubleshooting

**Dependencies not installing?**
```bash
npm cache clean --force
npm install
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

**TypeScript errors?**
```bash
npm run build  # Full build check
```

**Styles not loading?**
```bash
# Rebuild Tailwind CSS
npm run dev
```

## 🎉 You're All Set!

The platform is ready to use, customize, and deploy. Start by exploring the landing page, then create a test account to see the personalization in action.

**Happy coding! 🚀**

---

**For detailed development information, see [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)**
