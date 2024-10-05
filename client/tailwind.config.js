/** @type {import('tailwindcss').Config} */
export default {

  darkMode : 'class' , 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: '#4A90E2',  // Soft Blue (for light mode)
        secondary: '#7ED321',  // Light Green (for light mode)
        neutral: '#F5F5F5',  // Light Gray (for light mode)
        textPrimary: '#333333',  // Dark Gray for light mode text
        textSecondary: '#7D7D7D',  // Lighter Gray for light mode text
        accent: '#FFCC00',  // Bright Yellow accent for light mode

        // Dark mode colors
        darkPrimary: '#669CFF',  // Dark Blue (for dark mode)
        darkSecondary: '#16A34A',  // Dark Green (for dark mode)
        darkNeutral: '#405572',  // Dark Gray (background in dark mode)
        darkTextPrimary: '#E5E7EB',  // Light Gray text in dark mode
        darkTextSecondary: '#9CA3AF',  // Dimmed gray text in dark mode
        darkAccent: '#FFD700',  // Accent color for dark mode
      },
    },

    extend: {},

  },
  plugins: [],
}