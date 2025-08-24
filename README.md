# Interactive Cards UI Component

A comprehensive, reusable React component showcasing advanced card animations with flip, expand, and layered interactions. Perfect for modern portfolios, dashboards, and showcase websites.

## ✨ Features

- **3D Flip Animation** - Smooth card rotation revealing back content on hover
- **Expand Animation** - Cards grow dynamically to show additional content
- **Layered Effects** - Multiple layers separate with staggered animations
- **Glow Effects** - Customizable hover glow in 6 different colors
- **Icon Integration** - Seamless Lucide React icon support
- **Gradient Backgrounds** - Full Tailwind gradient customization
- **Responsive Design** - Works flawlessly on all screen sizes
- **Performance Optimized** - Pure CSS transforms, no JavaScript animations

## 🚀 Quick Start

### Installation

```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

### Setup CSS

Add to your `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Basic Usage

```jsx
import InteractiveCard from "./components/InteractiveCard";
import { Code } from "lucide-react";

function App() {
  return (
    <InteractiveCard
      frontContent={<h3 className="text-white text-xl">My Project</h3>}
      backContent={<p className="text-white">Built with React</p>}
    />
  );
}
```

## 📦 Dependencies

- `lucide-react`: ^0.263.1 - Modern icon library
- `react`: ^19.0.0 - React framework
- `tailwindcss`: 4.1.12 - Utility-f
- `postcss`: 8.5.6
- `autoprefixer`: 10.4.21

## 📄 License

MIT License - Feel free to use in personal and commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

## 📞 Support

If you have questions or need help implementing:

- Open an issue on GitHub
- Please check Framer Motion documentation
- Review Tailwind CSS documentation

## 🔗 Links

- [Codesandbox.io Link](https://codesandbox.io/p/sandbox/lfldp4)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

Built with ❤️ by Krishna S (Waller)
