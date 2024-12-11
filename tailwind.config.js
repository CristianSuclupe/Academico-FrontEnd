/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0A8592",
        secondary: "#002C38",
      },
      backgroundImage: {
        login: "url(/images/login-fondo.webp)",
        degraded: "radial-gradient(var(--main), var(--secondary))",
      },
    },
    screens: {
      mobil: "576px",
      tablet: "768px",
      monitor: "992px",
      // XLMonitor: "1280",
    },
  },
  plugins: [],
};
