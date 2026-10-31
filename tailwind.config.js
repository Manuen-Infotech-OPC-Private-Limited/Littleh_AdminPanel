/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rust: {
                    50: '#FDF6F3',
                    100: '#FBEAE2',
                    200: '#F7D5C5',
                    300: '#F0B49B',
                    400: '#E48762',
                    500: '#D15E2D',
                    600: '#B7410E', // Brand Rust
                    700: '#943209',
                    800: '#742709',
                    900: '#4B1905',
                    950: '#2C0C02',
                    DEFAULT: '#B7410E',
                },
                bakery: {
                    primary: "#B7410E", // Primary Rust Brand Color
                    dark: "#742709",    // Dark Rust Text / Icons
                    hover: "#943209",   // Rust Hover State
                    bg: "#FAF2EE",      // Soft Rust Warm Background
                    light: "#FDF6F3",   // Light Rust Tint for Cards & Badges
                    accent: "#D15E2D",  // Accent Rust
                    border: "#F3DDD3",  // Warm Rust Border
                }
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
            }
        },
    },
    plugins: [],
}
