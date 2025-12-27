# Haresh D - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS. Features smooth animations, dark/light mode, and Docker support for easy deployment.

![Portfolio Preview](./preview.png)

## 🚀 Features

- **Modern Stack**: React 18 + Vite 5 + TailwindCSS 3
- **Smooth Animations**: Framer Motion for beautiful page transitions and interactions
- **Dark/Light Mode**: System preference detection with manual toggle
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Fast Performance**: Optimized for high Lighthouse scores
- **Docker Ready**: Production-ready Docker setup with Nginx
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | TailwindCSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Container | Docker + Nginx |

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hareshd/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Production Build

```bash
npm run build
npm run preview
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker compose up --build

# Run in detached mode
docker compose up --build -d

# Stop the container
docker compose down
```

The site will be available at `http://localhost:3000`

### Manual Docker Build

```bash
# Build the image
docker build -t haresh-portfolio .

# Run the container
docker run -p 3000:80 haresh-portfolio
```

## 📁 Project Structure

```
my_portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── index.js
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── index.js
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Badge.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── ThemeToggle.jsx
│   │       └── index.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── personal.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── achievements.js
│   │   ├── navigation.js
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Updating Content

All portfolio content is stored in the `/src/data/` directory:

- `personal.js` - Name, title, bio, social links
- `experience.js` - Work experience timeline
- `projects.js` - Featured and other projects
- `skills.js` - Technical skills by category
- `achievements.js` - Awards and education

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },  // Main brand color
      accent: { ... },   // Secondary accent
      dark: { ... },     // Dark mode backgrounds
    }
  }
}
```

### Adding New Sections

1. Create a new component in `/src/components/sections/`
2. Export it from `/src/components/sections/index.js`
3. Import and add to `App.jsx`
4. Add navigation link in `/src/data/navigation.js`

## 🚀 Deployment

### Vercel

1. Connect your GitHub repository
2. Vercel auto-detects Vite projects
3. Deploy with default settings

### Cloudflare Pages

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Build output directory: `dist`

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Self-Hosted (Docker)

```bash
docker compose up --build -d
```

## 📊 Performance

The portfolio is optimized for:
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+ on all metrics

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- **Email**: hareshdinakar@gmail.com
- **LinkedIn**: [linkedin.com/in/hareshd](https://linkedin.com/in/hareshd)
- **GitHub**: [github.com/hareshd](https://github.com/hareshd)

---

Built with ❤️ by Haresh D
