const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          // xs: '400px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1300px',
          "2xl": '1400px'
        },
      },
      screens: {
        // 'xs': '300px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1300px',
        '2xl': '1500px',
      },
      fontFamily: {
        'sans': ["var(--font-primary)", "sans-serif"],
        'megat': ["var(--font-integralCF)", "sans-serif"],
        'pacifico': ['var(--font-pacifico)'], "poppins": ["var(--font-poppins)", "sans-serif"], "roboto": ["var(--font-roboto)", "sans-serif"], "raleway": ["var(--font-raleway)", "sans-serif"]
      },
      colors: {
        "black": "#222222",
        "purple-blue": "#5750E4",
        'red': '#CA4140',
        "light-yellow": "#cab99a"
      }
    }
  },
  plugins: [],
})