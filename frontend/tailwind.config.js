/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swiper/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(220deg, rgb(110, 22, 182) 0%, hsl(265deg 66% 44%) 6%, hsl(257deg 55% 48%) 12%, hsl(249deg 50% 52%) 18%, hsl(241deg 49% 57%) 24%, hsl(235deg 50% 59%) 29%, hsl(230deg 52% 59%) 35%, hsl(224deg 54% 60%) 41%, hsl(219deg 56% 61%) 47%, hsl(213deg 57% 62%) 53%, hsl(207, 58%, 63%) 59%, hsl(201deg 59% 65%) 65%, hsl(195deg 60% 67%) 71%, hsl(190deg 61% 68%) 76%, hsl(185deg 63% 70%) 82%, hsl(180deg 65% 72%) 88%, hsl(176deg 67% 74%) 94%, hsl(171deg 69% 76%) 100%)',
      },
      colors: {
        'custom-1': '#6e16b6',
        'custom-2': '#6426ba',
        'custom-3': '#5d37be',
        'custom-4': '#5a47c2',
        'custom-5': '#5d5cc7',
        'custom-6': '#626bcb',
        'custom-7': '#6072cd',
        'custom-8': '#627fd0',
        'custom-9': '#648bd3',
        'custom-10': '#6799d5',
        'custom-11': '#6aa6d7',
        'custom-12': '#71b6da',
        'custom-13': '#78c4dd',
        'custom-14': '#7ccfdf',
        'custom-15': '#82dbe3',
        'custom-16': '#89e6e6',
        'custom-17': '#90e9e3',
        'custom-18': '#98ecdf',
      },
      animation: {
        'spin-x': 'spin-x 10s linear infinite',
      },
      keyframes: {
       'spin-x': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
