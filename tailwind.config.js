const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      red: '#EE204D',
      yellow: '#FFFF9F',
      orange: '#ED9121',
      purple: '#512888',
      blue: '#00009C',
      black: '#100C08',
      floral: '#FFFAF0',
      white: '#FFFFFF',
      rose: '#A42469',
      metal: '#1B252D',
      glass: 'rgba(255, 250, 240, 0.1)',
      gray: colors.gray,
      social: {
        discord: '#5865F2'
      },
      layout: {
        DEFAULT: "#2F2B39",
        100: "#2F2B39",
        200: "#1B252D",
      },
      filter: {
        DEFAULT: "rgba(255, 250, 240, 0.1)",
        100: "rgba(255, 250, 240, 0.1)",
        200: "rgba(16, 12, 8, 0.34)",
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'base': ['var(--font-base)']
    },
    fontSize: {
      DEFAULT: ['16px', '19.36px'],
      "btn-small": ['12px', '14.52px'],
      "btn-medium": ['16px', '19.36px'],
      "btn-large": ['20px', '24px'],
      h1: ['61.04px', '73.87px'],
      h2: ['48.83px', '59.1px'],
      h3: ['39.06px', '47.27px'],
      h4: ['31.25px', '37.82px'],
      h5: ['25px', '30.26px'],
      h6: ['20px', '24.2px'],
      subtitle: ['14px', '16.94px'],
      caption: ['10px', '10px'],
      paragraph: ['16px', '19.36px'],
      body: ['16px', '19.36px'],
      breadcrumbs: ['14px', '16.94px'],
      'table-body': ['14px', '19.36px'],
      'table-head': ['14px', '16.94px'],
    },
    extend: {
      spacing: {
        DEFAULT: '8px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
        xxl: '128px',
        "btn-small": '4px 8px',
        "btn-medium": '6px 10px',
        "btn-large": '8px 12px',
      },
      borderRadius: {
        DEFAULT: '8px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
        xxl: '128px',
        full: '9999px',
      },
      boxShadow: {
        base: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 5px 16px rgba(0, 0, 156, 0.5)',
        complex: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 5px 16px rgba(0, 0, 156, 0.5), inset 0px 3px 12px #A42469, inset -2px 1px 2px #A42469, inset 0px -1px 2px #A42469, inset 2px 2px 6px #A42469',
      },
      backgroundImage: {
        "red-blue": 'linear-gradient(96.79deg, rgba(238, 32, 77, 0.7) 6.36%, #512888 121.55%)',
        'discord-pattern': "url('/public/discord-server.jpeg')"
      },
    },
  },
  plugins: [],
}
