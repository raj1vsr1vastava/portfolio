# Rajiv Srivastava - Professional Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. This website is designed to showcase professional experience, skills, and projects in an elegant and user-friendly manner.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and animated counters
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Semantic HTML structure for better search engine visibility

## File Structure

```
Profile/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:

**Hero Section (Lines 35-60)**:
- Update name, title, and description
- Modify hero buttons links and text

**About Section (Lines 75-105)**:
- Replace the about text with your personal information
- Update statistics (years of experience, projects, etc.)

**Experience Section (Lines 110-150)**:
- Add your work experience
- Update job titles, companies, dates, and descriptions
- Add or remove timeline items as needed

**Skills Section (Lines 155-190)**:
- Update skill categories and technologies
- Add or remove skill tags based on your expertise

**Projects Section (Lines 195-240)**:
- Replace with your actual projects
- Update project descriptions and technologies used
- Add project links if available

**Contact Section (Lines 245-290)**:
- Update contact information (email, phone, social links)
- Modify contact form action if connecting to a backend

### 2. Styling Customization

**Color Scheme (in `styles.css`)**:
- Primary color: `#0078d4` (Microsoft Blue)
- Update CSS custom properties to change the color scheme

**Fonts**:
- Currently using Inter font from Google Fonts
- Change font-family in the CSS to use different fonts

**Layout**:
- Modify grid layouts, spacing, and component sizes in CSS
- Adjust responsive breakpoints as needed

### 3. Adding Your Photo
Replace the placeholder icon in the hero section:
1. Add your photo to the project folder
2. Update the `.hero-image` section in HTML to use an `<img>` tag
3. Style the image in CSS

### 4. Social Media Links
Update social media links in the footer and contact sections:
- LinkedIn
- GitHub
- Twitter
- Add additional platforms as needed

## Deployment Options

### 1. GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `username.github.io/repository-name`

### 2. Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be deployed instantly
3. Optional: Connect to GitHub for continuous deployment

### 3. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the deployment prompts

### 4. Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be accessible via your domain

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The website is already optimized for performance:
- Minified CSS and JavaScript (can be further optimized)
- Optimized images (when you add them)
- Efficient CSS animations
- Lazy loading for better performance

## Customization Tips

1. **Images**: Optimize images before adding them (use WebP format for better performance)
2. **Content**: Keep content concise and impactful
3. **SEO**: Update meta tags, title, and descriptions
4. **Analytics**: Add Google Analytics or similar tracking
5. **Contact Form**: Consider integrating with services like Formspree or Netlify Forms

## Technical Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **Intersection Observer API**: Smooth scroll animations
- **CSS Custom Properties**: Easy theming
- **Mobile-First Design**: Responsive breakpoints
- **Accessibility**: Semantic HTML and ARIA labels

## Support

If you need help customizing the website:
1. Check the comments in the code files
2. Refer to MDN Web Docs for HTML, CSS, and JavaScript
3. Use browser developer tools for debugging

## License

This project is open source and available under the MIT License.

---

**Note**: Remember to update all placeholder content with your actual information before deploying the website.
