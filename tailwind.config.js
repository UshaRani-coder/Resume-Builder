//  @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "custom-orange": "rgba(222, 133, 53, 0.5)",
      },
    },
  },
  plugins: [],
};
