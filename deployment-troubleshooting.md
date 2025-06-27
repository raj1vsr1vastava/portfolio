# Portfolio Website Deployment Troubleshooting Guide

## Issue: Blank Page at https://raj1vsr1vastava.github.io/portfolio/

If your portfolio website is showing a blank page, please try these troubleshooting steps:

## Step 1: Check Browser Console for Errors

1. Visit your site: https://raj1vsr1vastava.github.io/portfolio/
2. Open browser developer tools (F12 or right-click → Inspect)
3. Go to the Console tab
4. Look for any error messages related to:
   - Failed to load resources
   - JavaScript errors
   - CORS issues

## Step 2: Clear Browser Cache and Cookies

1. Press Ctrl+Shift+Delete (Windows/Linux) or Cmd+Shift+Delete (Mac)
2. Check "Cached images and files" and "Cookies"
3. Click "Clear data"
4. Try your site again in a fresh browser tab

## Step 3: Try Different Browsers or Incognito Mode

1. Open an incognito/private window (Ctrl+Shift+N in Chrome)
2. Try your site in a different browser (Firefox, Edge, Safari)

## Step 4: Verify Path Issues

The site might have path issues. Try these direct URLs to see if they work:
- https://raj1vsr1vastava.github.io/portfolio/index.html
- https://raj1vsr1vastava.github.io/portfolio/static/js/main.57623b33.js

## Step 5: GitHub Pages Settings Check

1. Go to your GitHub repository
2. Click Settings → Pages
3. Make sure:
   - Source is set to "Deploy from a branch"
   - Branch is set to "gh-pages" and folder is "/ (root)"
   - Custom domain is either empty or correctly set

## Step 6: Force Redeployment

Run the following commands in your project directory:
```
npm run build
npx gh-pages -d build -t true
```

## Step 7: Check for CORS or Content Security Policy Issues

If you see CORS errors in the console, you may need to update your `public/index.html` with:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https://fonts.googleapis.com https://kit.fontawesome.com https://raj1vsr1vastava.github.io 'unsafe-inline'; img-src 'self' data:;">
```

## Step 8: Debug with a Simple Test Page

Create a simple test page in your gh-pages branch to verify GitHub Pages is working correctly.

## Contact for Help

If you've tried all these steps and still have issues, please reach out for further assistance.
