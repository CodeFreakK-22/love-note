/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                body: ['"Lato"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}