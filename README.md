# K.R. Arumugam General Merchant - Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://landing-page-kappa-tawny-64.vercel.app/)

A modern, visually stunning, and mobile-responsive landing page built for K.R. Arumugam General Merchant, a wholesale business. Meticulously crafted using React, Vite, and Tailwind CSS, the application boasts a premium user experience featuring subtle animations, component-based architecture, and a mobile-first design philosophy.

**Live Website:** [https://landing-page-kappa-tawny-64.vercel.app/](https://landing-page-kappa-tawny-64.vercel.app/)

## ✨ Features

- **Mobile-First Responsive Design:** Looks and works flawlessly on devices of all screen sizes, from mobile phones to 4K desktop monitors.
- **Component-Based Architecture:** Built with reusable and maintainable React components.
- **Modern UI & Aesthetics:** Premium styling with Tailwind CSS, including elegant hover effects, beautiful gradients, and a sleek color palette.
- **Smooth Animations:** Powered by `framer-motion` for fluid page transitions, scrolling effects, and interactive UI micro-animations.
- **Dynamic Brand Logos:** Infinite scrolling brand section utilizing the `logo.dev` API to dynamically fetch up-to-date logos.
- **Optimized Performance:** Fast build times and hot module replacement (HMR) powered by Vite.

## 🛠️ Technology Stack

- **Frontend Framework:** [React](https://react.dev/) (v19)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Hosting:** [Vercel](https://vercel.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Logo API:** [Logo.dev](https://www.logo.dev/)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v16.0.0 or higher is recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yuvaraj007A/Landing-page.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd Landing-page
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` by default.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate a `dist` folder containing the minified and optimized production-ready files.

## 📂 Project Structure

```
├── public/                 # Static assets (images, icons, etc.)
├── src/                    # Application source code
│   ├── assets/             # Images and other media
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Main hero section
│   │   ├── About.jsx       # About us section
│   │   ├── Brands.jsx      # Dynamic brand slider
│   │   ├── Location.jsx    # Store address/location
│   │   └── ...             # Other modular components
│   ├── App.jsx             # Main application wrapper
│   ├── index.css           # Global Tailwind CSS configurations
│   └── main.jsx            # React application entry point
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration options
└── vite.config.js          # Vite configuration
```

## 📄 License

This project is intended for the private use of K.R. Arumugam General Merchant.
