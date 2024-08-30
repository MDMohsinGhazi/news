/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: '#dc2626',
        border: '#D1D5DB',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, rgba(101,125,141,1) 0%, rgba(216,217,208,1) 100%)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      // Add your custom breakpoints here
      custom: '1600px',
    },
  },
  plugins: [],
};
