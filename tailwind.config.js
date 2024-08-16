/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Very_Light_Grayish_Blue: "hsl(240, 78%, 98%)",
                c_Light_Grayish_Blue: "hsl(234, 14%, 74%)",
                c_Grayish_Blue: "hsl(233, 13%, 49%)",
                c_Dark_Grayish_Blue: "hsl(232, 13%, 33%)",
                c_blue_1: "hsl(236, 72%, 79%)",
                c_blue_2: "hsl(237, 63%, 64%)"
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"]
            }
        },
    },
    plugins: [],
}

