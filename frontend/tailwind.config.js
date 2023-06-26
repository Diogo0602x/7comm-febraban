/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1266e3',
        'primary-hover': '#000c20e6',
        secondary: '#0a2846',
        'secondary-hover': '#acc6b626',
        tertiary: '#000000',
        'tertiary-hover': '#00000026',
        white: '#FFFFFF',
        'slate-1': '#151B26',
        'slate-2': '#273240',
        'slate-3': '#9C9C9C',
        'slate-4': '#C5C5C5',
        'slate-5': '#E6E6E6',
        'slate-6': '#F5F5F5',
        'slate-7': '#EDEDED',
        'slate-8': '#E7E7E7',
        'slate-9': '#f3f3f3',
      },
    },
  },
  plugins: [],
}
