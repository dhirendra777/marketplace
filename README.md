# E-commerce Dashboard

A modern e-commerce dashboard built with React, TypeScript, and Vite. Features a responsive design with a collapsible sidebar, product catalog, and cart functionality.

## Features

- Modern UI with responsive design
- Mobile-friendly with collapsible sidebar
- Product catalog with ratings and cart
- Orders
- Settings
- SCSS Modules for styling
- TypeScript for type safety

## Tech Stack

- React 19
- TypeScript
- Vite
- SCSS Modules
- React Icons
- Context API for state management

## Project Structure

```
src/
├── assets/         # Static assets and SVGs
├── component/      # Reusable components
│   ├── Button/
│   ├── Header/
│   ├── ProductCard/
│   └── Sidenav/
├── context/       # Context providers
├── hooks/         # Custom hooks
├── pages/         # Page components
│   ├── Products/
│   ├── Orders/
│   └── Settings/
├── styles/        # Global styles
└── utils/         # Utility functions
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Development

- Uses Vite for fast development and building
- SCSS Modules for component-scoped styling
- SVG support with vite-plugin-svgr
- Mobile-responsive design with media queries

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
