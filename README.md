# Valentines Card Website

A simple, fun, and romantic React-based Valentine’s Day card website to share with your special someone.  
Built with love 💖 and designed to be easy to deploy on GitHub Pages.

---

## Features

- Beautiful, responsive design with soft pink and red themes  
- Heart and confetti animations to add some fun flair  
- Simple user flow: landing page → reveal card → heartfelt message  
- Fully static and lightweight — no backend needed  
- Easy to customize with your own text and styles  
- Uses React and optionally React Router with `HashRouter` for clean routing  
- Hosted easily on GitHub Pages

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repository:

   git clone https://github.com/your-username/valentines-card.git  
   cd valentines-card

2. Install dependencies:

   npm install  
   or  
   yarn install

3. Start the development server:

   npm run dev  
   or  
   yarn dev

4. Open your browser at http://localhost:3000 (or the URL provided in the terminal).

---

## Deployment

This project is designed for **GitHub Pages**. To deploy:

1. Build the production-ready site:

   npm run build  
   or  
   yarn build

2. Deploy the /dist or /build folder to GitHub Pages, for example using the gh-pages package or manual upload.

---

## Customization

- Edit the components inside src/components/ to update text, animations, and visuals.  
- Modify styles in src/styles/ or use your favorite CSS framework.  
- Add or replace SVG graphics inside public/.

---

## License

This project is open source under the MIT License (LICENSE).

---

## Contact

Made with ❤️ by [Your Name]  
Feel free to reach out or customize as you like!


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
