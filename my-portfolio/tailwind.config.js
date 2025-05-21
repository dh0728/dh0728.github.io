module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                  '-apple-system',
                  'BlinkMacSystemFont',
                  'Segoe UI',
                  'Roboto',
                  'Helvetica Neue',
                  'Arial',
                  'sans-serif',
                ],
            },
            keyframes: {
                'slide-in-left': {
                  '0%': {
                    transform: 'translateX(-100%)',
                    opacity: '0',
                  },
                  '100%': {
                    transform: 'translateX(0)',
                    opacity: '0.05',
                  },
                },
            },
            animation: {
              'slide-in-left': 'slide-in-left 1s ease-out forwards',
            },
        },

    },
    plugins: [],
};