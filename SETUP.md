#!/bin/bash
# HealthAware Platform - Setup & Deployment Commands
# Run these commands to get the platform up and running

echo "🚀 HealthAware Platform - Setup Guide"
echo "======================================"
echo ""

# Step 1: Navigate to project directory
echo "Step 1: Navigate to project directory..."
cd "c:\Users\User\Desktop\Cancer Awareness"
echo "✓ In project directory"
echo ""

# Step 2: Install dependencies
echo "Step 2: Installing dependencies..."
echo "Command: npm install"
echo ""
echo "This will install all required packages:"
echo "  - next (React framework)"
echo "  - react & react-dom (UI library)"
echo "  - tailwindcss (Styling)"
echo "  - typescript (Type safety)"
echo ""

# Step 3: Run development server
echo "Step 3: Start development server..."
echo "Command: npm run dev"
echo ""
echo "This will:"
echo "  ✓ Start the development server"
echo "  ✓ Enable hot module reloading"
echo "  ✓ Run on http://localhost:3000"
echo "  ✓ Watch for file changes"
echo ""

# Step 4: Open in browser
echo "Step 4: Open in browser..."
echo "URL: http://localhost:3000"
echo ""

# Production build
echo "========== PRODUCTION BUILD =========="
echo ""
echo "When ready to deploy:"
echo ""
echo "Build the application:"
echo "  Command: npm run build"
echo ""
echo "Start production server:"
echo "  Command: npm start"
echo ""

# Deployment options
echo "========== DEPLOYMENT OPTIONS =========="
echo ""
echo "Option 1: Vercel (Recommended for Next.js)"
echo "  1. Sign up at vercel.com"
echo "  2. Install vercel CLI: npm i -g vercel"
echo "  3. Deploy: vercel"
echo "  4. Follow prompts"
echo ""

echo "Option 2: Netlify"
echo "  1. Sign up at netlify.com"
echo "  2. Install netlify CLI: npm i -g netlify-cli"
echo "  3. Build: npm run build"
echo "  4. Deploy: netlify deploy --prod"
echo ""

echo "Option 3: Traditional Hosting"
echo "  1. Build: npm run build"
echo "  2. Upload .next, public, package.json, node_modules to server"
echo "  3. Run: npm start"
echo "  4. Configure web server (nginx, Apache) to proxy to Node.js"
echo ""

# Useful commands
echo "========== USEFUL COMMANDS =========="
echo ""
echo "Development:"
echo "  npm run dev          - Start dev server"
echo "  npm run build        - Create production build"
echo "  npm start            - Start production server"
echo "  npm run lint         - Check code quality"
echo ""

echo "Troubleshooting:"
echo "  npm cache clean --force   - Clear npm cache"
echo "  rm -r node_modules        - Delete node_modules"
echo "  npm install               - Reinstall dependencies"
echo ""

echo "Testing:"
echo "  - Create account with signup form"
echo "  - Check localStorage in DevTools (F12)"
echo "  - Test personalization by selecting different sex values"
echo "  - Verify daily insight rotates"
echo "  - Test all navigation links"
echo ""

echo "========== FILE LOCATIONS =========="
echo ""
echo "Source Code:"
echo "  src/app/              - Page components"
echo "  src/components/       - Reusable components"
echo "  src/lib/utils.ts      - Helper functions"
echo "  src/data/             - Content (insights, lessons, resources)"
echo ""

echo "Configuration:"
echo "  package.json          - Dependencies"
echo "  tsconfig.json         - TypeScript config"
echo "  tailwind.config.ts    - Tailwind theme"
echo "  next.config.js        - Next.js config"
echo ""

echo "Documentation:"
echo "  README.md             - Full documentation"
echo "  QUICKSTART.md         - Quick start guide"
echo "  DEVELOPER_GUIDE.md    - Developer guide"
echo "  BUILD_SUMMARY.md      - Build summary"
echo ""

echo "========== QUICK START =========="
echo ""
echo "1. Open PowerShell"
echo "2. Run: cd \"c:\Users\User\Desktop\Cancer Awareness\""
echo "3. Run: npm install"
echo "4. Run: npm run dev"
echo "5. Open: http://localhost:3000"
echo ""

echo "Done! Follow the steps above to get started. 🚀"
