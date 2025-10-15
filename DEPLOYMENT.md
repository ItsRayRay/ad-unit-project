# Deployment Guide - GitHub Pages

## 🚀 Quick Start

Your site will automatically deploy to GitHub Pages when you push to the `main` branch.

**Live URL:** https://itsrayray.github.io/ad-unit-project/

---

## ⚙️ One-Time Setup (Required)

### 1. Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/ItsRayRay/ad-unit-project
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source:** Select "GitHub Actions"
5. Save (if needed)

That's it! The site will deploy automatically.

---

## 📤 How to Deploy

### Automatic Deployment (Recommended)

Every time you push to `main`, GitHub Actions automatically:
1. Builds the site
2. Deploys to GitHub Pages
3. Updates your live site

**Command:**
```bash
git add .
git commit -m "Your commit message"
git push
```

Wait 1-2 minutes, then visit: https://itsrayray.github.io/ad-unit-project/

### Manual Deployment

You can also trigger deployment manually:

1. Go to: https://github.com/ItsRayRay/ad-unit-project/actions
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Click green "Run workflow" button

---

## 🔄 Workflow Status

Check deployment status:
- **GitHub Actions**: https://github.com/ItsRayRay/ad-unit-project/actions
- Look for green ✅ checkmark = successful deployment
- Look for red ❌ = failed deployment (check logs)

---

## 📝 Update Configuration

### Change Your Demo URL

After first deployment, update the QR code URL:

1. Open `src/config.js`
2. Change this line:
   ```javascript
   demoUrl: 'http://localhost:4322',
   ```
   To:
   ```javascript
   demoUrl: 'https://itsrayray.github.io/ad-unit-project/',
   ```
3. Commit and push:
   ```bash
   git add src/config.js
   git commit -m "Update QR code to production URL"
   git push
   ```

Now the QR code will link to your live site!

---

## 🖼️ Add Creative Assets

### Local Development
1. Add images to `/public/creatives/`
2. Update paths in `src/config.js` if needed
3. Test locally: `npm run dev`

### Deploy to Production
```bash
git add public/creatives/
git add src/config.js  # if you changed paths
git commit -m "Add creative assets"
git push
```

Wait 1-2 minutes for deployment to complete.

---

## 🐛 Troubleshooting

### Site Not Loading
- Check GitHub Actions: https://github.com/ItsRayRay/ad-unit-project/actions
- Make sure GitHub Pages is set to "GitHub Actions" source
- Wait 2-3 minutes after first deployment

### Images Not Showing
- Make sure images are in `/public/creatives/`
- Check file names match `src/config.js` exactly
- Image paths are case-sensitive

### QR Code Not Working
- Update `demoUrl` in `src/config.js` to production URL
- Commit and push changes

### 404 Page Not Found
- Check `astro.config.mjs` has correct base path: `/ad-unit-project`
- Clear browser cache and refresh

---

## 📊 Build Commands

```bash
# Local development
npm run dev

# Build for production (test locally)
npm run build
npm run preview

# Deploy to GitHub Pages
git push  # Automatic deployment
```

---

## 🔗 Important URLs

- **Live Site:** https://itsrayray.github.io/ad-unit-project/
- **GitHub Repo:** https://github.com/ItsRayRay/ad-unit-project
- **GitHub Actions:** https://github.com/ItsRayRay/ad-unit-project/actions
- **GitHub Pages Settings:** https://github.com/ItsRayRay/ad-unit-project/settings/pages

---

## ✅ Deployment Checklist

Before sharing with clients/team:

- [ ] GitHub Pages enabled (Source: "GitHub Actions")
- [ ] Site deployed successfully (check GitHub Actions)
- [ ] Live URL works: https://itsrayray.github.io/ad-unit-project/
- [ ] QR code updated to production URL in `src/config.js`
- [ ] Creative assets uploaded and displaying correctly
- [ ] Mobile view tested on actual device
- [ ] Desktop iPhone mockup tested
- [ ] Parallax animations working

---

**First deployment takes 2-3 minutes. Subsequent deployments take 1-2 minutes.**

**Questions?** Check GitHub Actions logs for detailed error messages.
