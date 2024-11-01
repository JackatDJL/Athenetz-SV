 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './src/ux/ui/**/*.{js,jsx,ts,tsx,mdx}',
    './src/ux/layout/**/*.{js,jsx,ts,tsx,mdx}',
    './src/ux/effects/**/*.{js,jsx,ts,tsx,mdx}',
    './src/ux/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/ux/util/**/*.{js,jsx,ts,tsx,mdx}',
    './src/ux/functions/**/*.{js,jsx,ts,tsx,mdx}',
    './src/ux/api/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          'text': {
            DEFAULT: '#16371b',
            50: '#071209',
            100: '#0f2412',
            200: '#1d4924',
            300: '#2c6d35',
            400: '#3a9247',
            500: '#49b659',
            600: '#6dc57a',
            700: '#92d39b',
            800: '#b6e2bd',
            900: '#dbf0de',
            950: '#edf8ee',
          },
          'background': {
            DEFAULT: '#f6f9f6',
            50: '#0a0f0a',
            100: '#141f14',
            200: '#293d29',
            300: '#3d5c3d',
            400: '#527a52',
            500: '#669966',
            600: '#85ad85',
            700: '#a3c2a3',
            800: '#c2d6c2',
            900: '#e0ebe0',
            950: '#f0f5f0',
          },
          'primary': {
            DEFAULT: '#4bc355',
            50: '#061307',
            100: '#0d260f',
            200: '#194d1e',
            300: '#26732d',
            400: '#33993b',
            500: '#40bf4a',
            600: '#66cc6e',
            700: '#8cd993',
            800: '#b3e6b7',
            900: '#d9f2db',
            950: '#ecf9ed',
          },
          'secondary': {
            DEFAULT: '#8ce393',
            50: '#051506',
            100: '#0a290d',
            200: '#145219',
            300: '#1e7b26',
            400: '#28a432',
            500: '#32cd3f',
            600: '#5bd765',
            700: '#84e18c',
            800: '#adebb2',
            900: '#d6f5d9',
            950: '#eafaec',
          },
          'accent': {
            DEFAULT: '#5add65',
            50: '#041506',
            100: '#092a0b',
            200: '#115517',
            300: '#1a7f22',
            400: '#23a92e',
            500: '#2bd439',
            600: '#56dc61',
            700: '#80e588',
            800: '#aaeeb0',
            900: '#d5f6d7',
            950: '#eafbeb',
          }
         },
         l: {
          'txt': {
            DEFAULT: '#16371b',
            50: '#071209',
            100: '#0f2412',
            200: '#1d4924',
            300: '#2c6d35',
            400: '#3a9247',
            500: '#49b659',
            600: '#6dc57a',
            700: '#92d39b',
            800: '#b6e2bd',
            900: '#dbf0de',
            950: '#edf8ee',
          },
          'bg': {
            DEFAULT: '#f6f9f6',
            50: '#0a0f0a',
            100: '#141f14',
            200: '#293d29',
            300: '#3d5c3d',
            400: '#527a52',
            500: '#669966',
            600: '#85ad85',
            700: '#a3c2a3',
            800: '#c2d6c2',
            900: '#e0ebe0',
            950: '#f0f5f0',
          },
          'prim': {
            DEFAULT: '#4bc355',
            50: '#061307',
            100: '#0d260f',
            200: '#194d1e',
            300: '#26732d',
            400: '#33993b',
            500: '#40bf4a',
            600: '#66cc6e',
            700: '#8cd993',
            800: '#b3e6b7',
            900: '#d9f2db',
            950: '#ecf9ed',
          },
          'sec': {
            DEFAULT: '#8ce393',
            50: '#051506',
            100: '#0a290d',
            200: '#145219',
            300: '#1e7b26',
            400: '#28a432',
            500: '#32cd3f',
            600: '#5bd765',
            700: '#84e18c',
            800: '#adebb2',
            900: '#d6f5d9',
            950: '#eafaec',
          },
          'acc': {
            DEFAULT: '#5add65',
            50: '#041506',
            100: '#092a0b',
            200: '#115517',
            300: '#1a7f22',
            400: '#23a92e',
            500: '#2bd439',
            600: '#56dc61',
            700: '#80e588',
            800: '#aaeeb0',
            900: '#d5f6d7',
            950: '#eafbeb',
          }
         },
         dark: {
          'text': {
            DEFAULT: '#c8e9cd',
            50: '#edf8ee',
            100: '#dbf0de',
            200: '#b6e2bd',
            300: '#92d39b',
            400: '#6dc57a',
            500: '#49b659',
            600: '#3a9247',
            700: '#2c6d35',
            800: '#1d4924',
            900: '#0f2412',
            950: '#071209',
          },
          'background': {
            DEFAULT: '#060906',
            50: '#f0f5f0',
            100: '#e0ebe0',
            200: '#c2d6c2',
            300: '#a3c2a3',
            400: '#85ad85',
            500: '#669966',
            600: '#527a52',
            700: '#3d5c3d',
            800: '#293d29',
            900: '#141f14',
            950: '#0a0f0a',
          },
          'primary': {
            DEFAULT: '#3cb446',
            50: '#ecf9ed',
            100: '#d9f2db',
            200: '#b3e6b7',
            300: '#8cd993',
            400: '#66cc6e',
            500: '#40bf4a',
            600: '#33993b',
            700: '#26732d',
            800: '#194d1e',
            900: '#0d260f',
            950: '#061307',
          },
          'secondary': {
            DEFAULT: '#1c7323',
            50: '#eafaec',
            100: '#d6f5d9',
            200: '#adebb2',
            300: '#84e18c',
            400: '#5bd765',
            500: '#32cd3f',
            600: '#28a432',
            700: '#1e7b26',
            800: '#145219',
            900: '#0a290d',
            950: '#051506',
          },
          'accent': {
            DEFAULT: '#22a52d',
            50: '#eafbeb',
            100: '#d5f6d7',
            200: '#aaeeb0',
            300: '#80e588',
            400: '#56dc61',
            500: '#2bd439',
            600: '#23a92e',
            700: '#1a7f22',
            800: '#115517',
            900: '#092a0b',
            950: '#041506',
          },
         },
         d: {
          'txt': {
            DEFAULT: '#c8e9cd',
            50: '#edf8ee',
            100: '#dbf0de',
            200: '#b6e2bd',
            300: '#92d39b',
            400: '#6dc57a',
            500: '#49b659',
            600: '#3a9247',
            700: '#2c6d35',
            800: '#1d4924',
            900: '#0f2412',
            950: '#071209',
          },
          'bg': {
            DEFAULT: '#060906',
            50: '#f0f5f0',
            100: '#e0ebe0',
            200: '#c2d6c2',
            300: '#a3c2a3',
            400: '#85ad85',
            500: '#669966',
            600: '#527a52',
            700: '#3d5c3d',
            800: '#293d29',
            900: '#141f14',
            950: '#0a0f0a',
          },
          'prim': {
            DEFAULT: '#3cb446',
            50: '#ecf9ed',
            100: '#d9f2db',
            200: '#b3e6b7',
            300: '#8cd993',
            400: '#66cc6e',
            500: '#40bf4a',
            600: '#33993b',
            700: '#26732d',
            800: '#194d1e',
            900: '#0d260f',
            950: '#061307',
          },
          'sec': {
            DEFAULT: '#1c7323',
            50: '#eafaec',
            100: '#d6f5d9',
            200: '#adebb2',
            300: '#84e18c',
            400: '#5bd765',
            500: '#32cd3f',
            600: '#28a432',
            700: '#1e7b26',
            800: '#145219',
            900: '#0a290d',
            950: '#051506',
          },
          'acc': {
            DEFAULT: '#22a52d',
            50: '#eafbeb',
            100: '#d5f6d7',
            200: '#aaeeb0',
            300: '#80e588',
            400: '#56dc61',
            500: '#2bd439',
            600: '#23a92e',
            700: '#1a7f22',
            800: '#115517',
            900: '#092a0b',
            950: '#041506',
          },
         },
         system: {
          'error': {
            DEFAULT: 'red',
            dark: '#e60000',
            light: '#f33',
            bright: '#f7d4d6',
          },
          'component': {
            'ui': {
              'customizationerror': '#780024',
            },
          },
          'success': {
            DEFAULT: '#0070f3',
            dark: '#0761d1',
            light: '#3291ff',
            bright: '#d3e5ff',
          },
          'warning': {
            DEFAULT: '#f5a623',
            dark: '#ab570a',
            light: '#3291ff',
            bright: '#ffefcf',
          },
          'highlight': {
            'light': {
              DEFAULT: '#eeff70',
              purple: '#f81ce5',
              violet: '#7928ca',
              cyan: '#79ffe1',
            },
            'dark': {
              DEFAULT: '#dcbd32',
              purple: '#f81ce5',
              violet: '#4c2889',
              cyan: '#50e3c2',
            }

          }
         }
         
        
         
      },
      fontFamily: {
        oxanium: ['var(--font-family-oxanium)'],
        bungeeSpice: ['var(--font-family-bungee-spice)'],
      },
      keyframes: {
        "collapse-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "collapse-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "overlayShow": {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        "contentShow": {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        "slideUpAndFade": {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        "slideRightAndFade": {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        "slideDownAndFade": {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        "slideLeftAndFade": {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        "shine": {
            "0%": { backgroundPosition: '200% 0', opacity: '0.5' },
            "50%": { backgroundPosition: '-200% 0', opacity: '1' },
            "100%": { backgroundPosition: '200% 0', opacity: '0.5' },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "collapse-down": "collapse-down 0.2s ease-out",
        "collapse-up": "collapse-up 0.2s ease-out",
        "overlayShow": 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        "contentShow": 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideUpAndFade": 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideRightAndFade": 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideDownAndFade": 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideLeftAndFade": 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "shine": "shine 8s ease-in-out infinite",
        "skeleton": "shine 2.5s cubic-bezier(.55,.35,.29,.9) infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: ["tailwindcss-animate"],
}