/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    mode: 'jit',
    darkMode: false, // Disabled permanently for theming approach.
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                textMain: 'var(--text-main-color)',
                textSecondary: 'var(--text-secondary-color)',
                borderColor: 'var(--border-color)',
                topBarBackground: 'var(--top-bar-bg-color)',
                topBarHover: 'var(--top-bar-hover-color)',
                topBarSearchBox: 'var(--top-bar-search-box-color)',
                sideBarMain: 'var(--side-bar-main-color)',
                explorerMain: 'var(--explorer-main-color)',
                explorerSelected: 'var(--explorer-selected-color)',
                explorerHover: 'var(--explorer-hover-color)',
                mainBackground: 'var(--main-bg-color)',
                mainIndentColor: 'var(--main-indent-color)',
                selectedAccent: 'var(--selected-accent-color)',
                bottomBarBackground: 'var(--bottom-bar-bg-color)',
                iconBarBackground: 'var(--icon-bar-bg-color)',
                tabBackground: 'var(--tab-bg-color)',
                tabHover: 'var(--tab-hover-color)',
                tabCloseHover: 'var(--tab-close-hover-color)',
                linkColor: 'var(--link-color)',
                lineNumberColor: 'var(--line-number-color)',
                dropdownBackground: 'var(--dropdown-background-color)',
                tunnelColor: 'var(--tunnel-background-color)',
                tunnelIconColor: 'var(--tunnel-icon-color)',
                buttonHover: 'var(--button-hover-color)',
                
            },
            fontFamily: {
                sans: ['Arial', 'sans-serif'],
                mono: ['Consolas', 'Courier New', 'monospace'],

            },
            screens: {
                xs: '300px',
                sm: '640px',
                md: '768px',
                mlg: '900px',
                xxl: '1260px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
});
