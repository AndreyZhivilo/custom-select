/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
      },
		},
    extend: {},
  },
  plugins: [],
}