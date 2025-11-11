# 🚀 Deployment Guide - PancitoGames Website

This guide will help you deploy your PancitoGames website to Vercel and connect it to your custom domain from IONOS.

---

## ✅ Prerequisites

- [x] Node.js 18+ installed
- [x] Website tested locally (`npm run dev`)
- [x] GitHub account
- [x] Vercel account (free tier is fine)
- [x] Domain registered at IONOS (pancitogames.com)

---

## 📋 Step 1: Push to GitHub

### 1.1 Initialize Git Repository

```bash
# Navigate to your project
cd C:\Users\TechP\MemoryHistory\pancitogames-web

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: PancitoGames website"
```

### 1.2 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository"
3. Name: `pancitogames-web`
4. Description: "Official website for PancitoGames"
5. Keep it **Public** or **Private** (your choice)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### 1.3 Push to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/pancitogames-web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Vercel

### 2.1 Sign Up/Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Authorize Vercel to access your repositories

### 2.2 Import Project

1. Click "Add New..." → "Project"
2. Find and select `pancitogames-web` repository
3. Click "Import"

### 2.3 Configure Project

#### Framework Preset
- **Framework:** Next.js (auto-detected)

#### Build Settings
- **Build Command:** `npm run build` (auto-filled)
- **Output Directory:** `.next` (auto-filled)
- **Install Command:** `npm install` (auto-filled)

#### Root Directory
- Leave as `.` (root)

#### Environment Variables
- **None required** for now

### 2.4 Deploy!

1. Click "Deploy"
2. Wait 2-3 minutes for build
3. ✅ Your site will be live at: `https://pancitogames-web.vercel.app`

---

## 🔗 Step 3: Connect Custom Domain (pancitogames.com)

### 3.1 Add Domain in Vercel

1. Go to your project dashboard in Vercel
2. Click "Settings" tab
3. Click "Domains" in the left sidebar
4. Type: `pancitogames.com`
5. Click "Add"
6. Also add `www.pancitogames.com`

### 3.2 Configure DNS at IONOS

Vercel will show you DNS records to add. You need to add these records in IONOS:

#### For `pancitogames.com`:

1. Log in to [IONOS](https://www.ionos.com)
2. Go to "Domains & SSL"
3. Click on `pancitogames.com`
4. Click "DNS Settings" or "DNS Management"

#### Add these records:

**A Record:**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21 (Vercel's IP)
TTL: 3600
```

**CNAME Record for www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### For SSL Certificate (Recommended):

Vercel will automatically generate a free SSL certificate once DNS is configured.

### 3.3 Wait for DNS Propagation

- DNS changes can take **24-48 hours** to propagate worldwide
- Usually takes **15-30 minutes** to start working
- Check status at: [whatsmydns.net](https://www.whatsmydns.net/)

### 3.4 Verify in Vercel

1. Go back to Vercel → Settings → Domains
2. Wait until you see ✅ checkmarks next to your domains
3. Test your site: [https://pancitogames.com](https://pancitogames.com)

---

## 🔄 Step 4: Set Up Automatic Deployments

Good news! **This is already done!** ✅

Every time you push changes to GitHub `main` branch, Vercel will automatically:
1. Build your site
2. Run tests
3. Deploy if successful
4. Update your live site

### To Deploy Updates:

```bash
# Make changes to your code
# Test locally: npm run dev

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Vercel will auto-deploy in ~2 minutes!
```

---

## 📊 Step 5: Configure Analytics (Optional)

### Vercel Analytics (Free)

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Vercel Analytics
4. Add this to your `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

// ... in your layout component:
<body>
  {children}
  <Analytics />
</body>
```

---

## 🔒 Step 6: SSL & Security

Vercel automatically provides:
- ✅ **Free SSL certificate** (Let's Encrypt)
- ✅ **HTTPS** enforced by default
- ✅ **HTTP/2** support
- ✅ **DDoS protection**
- ✅ **Edge caching** (CDN)

No additional configuration needed!

---

## 📧 Step 7: Set Up Contact Form (Future)

Your contact form currently logs to console. To make it functional:

### Option A: EmailJS (Free tier available)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get API keys
3. Update `app/contact/page.tsx`

### Option B: Resend (Modern, developer-friendly)
1. Sign up at [resend.com](https://resend.com/)
2. Verify your domain
3. Create API route in Next.js

### Option C: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io/)
2. Create form endpoint
3. Update form action URL

---

## ✅ Post-Deployment Checklist

- [ ] Website loads at `https://pancitogames.com`
- [ ] All pages work correctly
- [ ] Images and logos display properly
- [ ] Navbar navigation works
- [ ] Footer links work
- [ ] Mobile responsive design looks good
- [ ] SSL certificate is active (🔒 padlock in browser)
- [ ] `www.pancitogames.com` redirects to main domain
- [ ] Contact form displays (even if not functional yet)

---

## 🐛 Troubleshooting

### Site Not Loading After DNS Change
- **Wait:** DNS can take up to 48 hours
- **Clear Cache:** Try incognito/private mode
- **Check DNS:** Use [whatsmydns.net](https://www.whatsmydns.net/)

### Build Fails in Vercel
- **Check Logs:** Vercel dashboard → Deployments → Failed build
- **Test Locally:** Run `npm run build` to catch errors
- **Check Dependencies:** Ensure all packages are in `package.json`

### Images Not Loading
- **Verify Path:** Images should be in `/public/` directory
- **Check Imports:** Use `/filename.png` not `./public/filename.png`
- **Case Sensitive:** Linux servers are case-sensitive for filenames

### Domain Not Connecting
- **Verify DNS Records:** Double-check A and CNAME records in IONOS
- **Remove Conflicting Records:** Delete any old A/CNAME records for `@` and `www`
- **Wait:** Give it at least 1-2 hours

---

## 📱 Mobile Testing

Test your site on:
- iPhone Safari
- Android Chrome
- Tablet (iPad)

Use browser dev tools (F12) → Device mode to simulate different devices.

---

## 🎯 Next Steps

1. **Set up email for contact form**
2. **Add social media links** when accounts are created
3. **Implement beta signup** for Memory History
4. **Add Google Analytics** or privacy-friendly alternative
5. **Create blog section** for game updates
6. **Add screenshots** to Memory History page when available

---

## 🆘 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **IONOS Support:** [ionos.com/help](https://www.ionos.com/help)

---

**🎉 Congratulations! Your website is now live!**

Visit: [https://pancitogames.com](https://pancitogames.com)

---

*Last Updated: November 2024*



