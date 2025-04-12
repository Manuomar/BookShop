module.exports = {
  darkMode: 'class', // or 'media' for system preference
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  }
,plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ... other plugins
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave"], // Add your themes here
  },
}