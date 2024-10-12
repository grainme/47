// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's global reset styles
    fontFamily: false, // Disable default fonts
    margin: false, // Disable margin utilities
    padding: false, // Disable padding utilities
    container: false, // Disable container styles
  },
};
