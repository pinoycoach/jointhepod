# Join the POD - Website Deployment Guide

## 🚀 Quick Start

This is your Join the POD website built with React + Vite, ready to deploy to Netlify!

## 📋 What's Included

- ✅ Complete React website with routing
- ✅ Your origin story and brand messaging
- ✅ Newsletter signup form
- ✅ Contact form
- ✅ POD experiments showcase
- ✅ Events section
- ✅ Privacy Policy & Terms of Service
- ✅ Mobile responsive design
- ✅ Brand colors (Electric Blue #007BFF & Neon Mint #00F5A0)
- ✅ Netlify deployment configuration

## 🌐 Deploying to Netlify (Using GitHub)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Follow the registration process

### Step 2: Create a New GitHub Repository
1. Log in to GitHub
2. Click the "+" icon in the top right → "New repository"
3. Repository settings:
   - Repository name: `jointhepod`
   - Description: "Join the POD - AI workflows for creators"
   - Choose "Public" or "Private"
   - **DO NOT** initialize with README, .gitignore, or license
4. Click "Create repository"

### Step 3: Upload Your Code to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Navigate to your `jointhepod` folder
5. Click "Publish repository"
6. Make sure "Keep this code private" is unchecked (unless you want it private)
7. Click "Publish Repository"

**Option B: Using Command Line**
```bash
cd jointhepod
git init
git add .
git commit -m "Initial commit - Join the POD website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jointhepod.git
git push -u origin main
```
(Replace YOUR_USERNAME with your actual GitHub username)

### Step 4: Deploy to Netlify
1. Go to https://netlify.com
2. Click "Sign up" and choose "Sign up with GitHub"
3. Authorize Netlify to access your GitHub account
4. Once logged in, click "Add new site" → "Import an existing project"
5. Click "Deploy with GitHub"
6. Authorize Netlify to access your repositories (if asked)
7. Find and select your `jointhepod` repository
8. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

### Step 5: Configure Your Domain
1. Wait for the initial deployment to complete (~2 minutes)
2. Your site will be live at a random URL like: `random-name-123456.netlify.app`
3. To use your custom domain `jointhepod.xyz`:
   - In Netlify, click "Domain settings"
   - Click "Add custom domain"
   - Enter: `jointhepod.xyz`
   - Follow Netlify's instructions to update your domain's DNS settings

### Step 6: Update DNS Settings (For jointhepod.xyz)
Go to where you registered your domain and add these DNS records:

**For Netlify:**
- Type: `A` Record
- Name: `@`
- Value: `75.2.60.5`

- Type: `CNAME` Record
- Name: `www`
- Value: `your-site-name.netlify.app`

## 🔄 Making Updates

After your initial deployment, whenever you want to update your website:

**Using GitHub Desktop:**
1. Make your changes to the code
2. Open GitHub Desktop
3. Write a summary of changes (e.g., "Updated newsletter form")
4. Click "Commit to main"
5. Click "Push origin"
6. Netlify will automatically rebuild and deploy! (takes 1-2 minutes)

**Using Command Line:**
```bash
git add .
git commit -m "Description of your changes"
git push
```

## 🛠️ Local Development

To test the website on your computer before deploying:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

To build and test production version:
```bash
npm run build
npm run preview
```

## 📝 Customization Guide

### Update Content
- **Hero section:** Edit `src/pages/Home.jsx` (lines 20-40)
- **Origin story:** Edit `src/pages/Home.jsx` (lines 45-75)
- **Experiments:** Edit `src/pages/Home.jsx` (lines 80-115)
- **Events:** Edit `src/pages/Home.jsx` (lines 120-150)

### Update Colors
- Edit `src/index.css` (lines 3-6)
- Current colors:
  - Electric Blue: `#007BFF`
  - Neon Mint: `#00F5A0`

### Add Newsletter/Contact Form Integration
To connect real forms (later):
1. Sign up for a service like:
   - ConvertKit (for newsletter)
   - Formspree or Netlify Forms (for contact form)
2. Update the form submission handlers in `src/pages/Home.jsx`

## 🆘 Troubleshooting

**Build fails on Netlify:**
- Check the build log in Netlify dashboard
- Make sure all files were uploaded to GitHub
- Verify `package.json` has all dependencies

**Pages show 404 error:**
- Make sure `netlify.toml` file exists in your repository
- Check that React Router is properly configured

**Site not updating:**
- Check if your GitHub push was successful
- Check Netlify dashboard for deployment status
- Try triggering a manual deploy in Netlify

## 📞 Support

Questions about deployment? Check:
- Netlify Docs: https://docs.netlify.com
- GitHub Docs: https://docs.github.com
- React Router Docs: https://reactrouter.com

---

Built with ❤️ for the POD community
