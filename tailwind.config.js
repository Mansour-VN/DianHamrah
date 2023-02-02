/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '960px',
            // => @media (min-width: 960px) { ... }

            'lg': '1140px',
            // => @media (min-width: 1140px) { ... }
        },
        colors: {
            "official": "#f6821f",
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },
    plugins: [],
}
