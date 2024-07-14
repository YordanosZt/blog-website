/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FF1E00",
                secondary: "#59CE8F",
                light: "#E8F9FD",
                dark: "#000000",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            screens: {
                xs: "548px",
            },
        },
    },
    plugins: [],
};
