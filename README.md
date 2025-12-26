# AI-Folio 🎨

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- ✨ Clean and modern design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Smooth scrolling navigation
- 💫 Animated sections and transitions
- 🎨 Customizable color scheme
- 📧 Contact form
- 🔗 Social media links
- ⚡ Fast and lightweight

## 🛠️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sobiswriter/AI-Folio.git
   cd AI-Folio
   ```

2. **Open the portfolio**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **View in browser**
   - Navigate to `http://localhost:8000`

## 🎨 Customization

### Update Your Information

1. **Personal Details** - Edit `index.html`:
   - Name and title in the hero section
   - About section content
   - Contact information
   - Social media links
   - Project details

2. **Colors** - Edit `styles.css` (CSS Variables):
   ```css
   :root {
       --primary-color: #6366f1;    /* Main brand color */
       --secondary-color: #8b5cf6;  /* Accent color */
       --text-color: #333;          /* Main text color */
   }
   ```

3. **Skills & Projects**
   - Update the skills section with your expertise
   - Add your actual projects with descriptions and links
   - Replace placeholder icons with real project images

### Adding Your Photo

Replace the placeholder icon in the About section:
```html
<!-- In index.html, find: -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- Replace with: -->
<img src="your-photo.jpg" alt="Your Name">
```

## 📂 File Structure

```
AI-Folio/
│
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 🌟 Sections

- **Home/Hero** - Eye-catching introduction with typing animation
- **About** - Personal introduction and contact details
- **Skills** - Showcase your expertise and technologies
- **Projects** - Featured work with descriptions and links
- **Contact** - Contact form and social media links

## 🔧 Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla ES6+)
- Font Awesome Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages"
3. Select your branch (main/master)
4. Your site will be live at: `https://yourusername.github.io/AI-Folio`

### Other Platforms

This portfolio can be deployed to:
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## 📝 License

MIT License - Feel free to use this portfolio for your own purposes!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 💡 Tips

- Keep your content concise and impactful
- Use high-quality images for projects
- Update your projects regularly
- Test on different devices and browsers
- Optimize images for faster loading

---

Built with ❤️ and AI
