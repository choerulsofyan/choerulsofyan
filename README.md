# Choerul Sofyan — Portfolio Website

A modern, responsive portfolio website built with React (via CDN) and vanilla CSS.

## 🚀 Deployment to GitHub Pages

This is a static site that requires no build process. Deploy directly to GitHub Pages:

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

## 📁 Project Structure

- `index.html` - Main HTML file with React CDN links
- `app.jsx` - Main React application component
- `styles.css` - All styling
- `data.js` - Portfolio data and content
- `*.jsx` - React components (icons, thumbs, case-study, tweaks-panel)
- `404.html` - SPA routing support for GitHub Pages

## 🛠️ Local Development

Simply open `index.html` in a browser, or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## 🎨 Customization

- Edit `data.js` to update portfolio content
- Modify `styles.css` for styling changes
- Update React components in the `*.jsx` files

## 📝 Notes

- React is loaded via CDN with in-browser JSX compilation (Babel standalone)
- No build step required - perfect for simple static deployments
- The 404.html file enables client-side routing on GitHub Pages
