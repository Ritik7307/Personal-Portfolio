# 🎬 Ritik's Portfolio - Stranger Things Themed

A modern, interactive portfolio website with a **Stranger Things** inspired dark theme, featuring smooth animations, 3D effects, and an animated skills wall.

## ✨ Features

### 🎨 Design & Theme
- **Stranger Things inspired dark theme** with red neon accents
- **Glitch effects** and animated backgrounds
- **3D card animations** with hover effects
- **Glassmorphism** and backdrop blur effects
- **Responsive design** for all screen sizes

### 🛠️ Sections

1. **Hero Section**
   - Animated introduction with gradient text
   - 3D interactive card showing current learning focus
   - Smooth scroll navigation

2. **About Section**
   - Personal introduction and interests
   - Highlighted cards with hover effects

3. **Skills Section** ⭐ NEW!
   - **Animated Skills Wall** - Stranger Things style letter display
   - Rotating highlight effect (cycles every 900ms)
   - Shows skill names below active letters
   - Dark wall background with neon yellow glow effects
   - Features: C++, Python, React & Vite, Node.js, HTML & CSS, JavaScript, Machine Learning

4. **Projects Section**
   - Project cards with 3D hover effects
   - Image overlays and gradient backgrounds
   - Featured project highlighting
   - Particle animations on hover

5. **Experience Section**
   - Timeline layout with animated cards
   - Education and work experience

6. **Contact Section**
   - Contact form with EmailJS integration
   - Social links (GitHub, LinkedIn, Email)
   - Form validation and error handling

## 🚀 Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **EmailJS** - Contact form email service
- **CSS3** - Custom styling with animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ritik-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (optional, for contact form)
   - See `EMAILJS_SETUP.md` for detailed instructions
   - Create a `.env` file in the root directory:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Skills Wall Feature

The Skills section features an **animated wall display** inspired by Stranger Things:

- **Letters A-G** displayed in large, spaced format
- **Rotating highlight** - One letter glows yellow every 900ms
- **Skill labels** appear below the active letter
- **Dark wall background** with texture overlay
- **Neon glow effects** matching the portfolio theme

### Customizing Skills

Edit the `wallSkills` array in `src/App.jsx`:

```jsx
const wallSkills = [
  { letter: "A", skill: "C++" },
  { letter: "B", skill: "Python" },
  { letter: "C", skill: "React & Vite" },
  // Add more skills...
];
```

To change the animation speed, modify the interval in the `useEffect`:

```jsx
setInterval(() => {
  setActiveIndex((prev) => (prev + 1) % wallSkills.length);
}, 900); // Change 900 to your desired milliseconds
```

## 📁 Project Structure

```
ritik-portfolio/
├── src/
│   ├── App.jsx          # Main app component with all sections
│   ├── App.css          # Styles and animations
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── .env                 # Environment variables (create this)
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:

```css
:root {
  --stranger-red: #e50914;
  --stranger-red-dark: #b20710;
  --stranger-bg: #0a0a0a;
  --stranger-text: #ffffff;
  /* ... */
}
```

### Skills Wall Background
Change the background image URL in `App.css`:

```css
.skills-wall-inner {
  background-image: url("your-image-url.jpg");
}
```

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. Follow these steps:

1. **Create EmailJS account** at [emailjs.com](https://www.emailjs.com)
2. **Set up email service** (Gmail recommended)
3. **Create email template**
4. **Get your credentials** and add them to `.env`
5. See `EMAILJS_SETUP.md` for detailed instructions

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify settings

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Ritik Prajapati**
- Email: 24mc3040@rgipt.ac.in
- GitHub: [@Ritik7307](https://github.com/Ritik7307)
- LinkedIn: [Ritik Prajapati](https://www.linkedin.com/in/ritik-prajapati-942799316/)

## 🙏 Acknowledgments

- Design inspired by Stranger Things
- Built with React and Vite
- Animations powered by Framer Motion

---

**"Friends don't lie. Neither does clean code."** 🎬
