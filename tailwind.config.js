/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#eef0fa",
        snow: "#fff",
        steelblue: "#5a5a89",
        "night-blue": "#383874",
        green: "#00b929",
        gray: "#171725",
        lavender: "#dbdff1",
        blue: "#023aff",
        "purple-heart": "#8676ff",
        "fervent-pink": "#ff708b",
        orange: "#ffa63f",
        black: "#000",
        lightslategray: "#8484a0",
        darkslateblue: "#5756b3",
      },
      spacing: {},
      fontFamily: {
        "tips-and-details-overline": "Roboto",
        "headline-h6": "Poppins",
        archivo: "Archivo",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "3xs": "0.63rem",
      xl: "1.25rem",
      base: "1rem",
      "53xl": "4.5rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      sm: "0.88rem",
      "3xl": "1.38rem",
      lg: "1.13rem",
      "xl-5": "1.28rem",
      inherit: "inherit",
    },
    screens: {
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
