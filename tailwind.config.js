/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'custom-sidebar-fixed': 'calc(100vh - 64px)',
      },
      width: {
        'custom-navbar-fillter': 'calc(100% - 80px)',
      },
    },
    screens: {
      xs: '420px',
      sm: '640px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
