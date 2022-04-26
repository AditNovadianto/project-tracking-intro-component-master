module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        red: "hsl(0, 100%, 68%)",
        "Very-Dark-Blue": "hsl(230, 29%, 20%)",
        "Dark-Grayrish-Blue": "hsl(230, 11%, 40%)",
        "Grayrish-Blue": "hsl(231, 7%, 65%)",
        "Light-Grayrish-Blue": "hsl(207, 33%, 95%)",
      },
      fontFamily: {
        barlow: "'Barlow', sans-serif",
        "Barlow-Condensed": "'Barlow Condensed', sans-serif",
      },
      boxShadow: {
        shadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
        shadow2: "inset 0px 20px 200px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
