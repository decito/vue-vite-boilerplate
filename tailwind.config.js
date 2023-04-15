/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)',
        secondary: 'rgb(209 213 219)',
        success: 'rgb(34 197 94)',
        warning: 'rgb(234 179 8)',
        danger: 'rgb(239 68 68)',
        disabled: 'rgb(107 114 128)'
      }
    }
  },
  safelist: [
    'p-1',
    'p-2',
    'p-3',
    'bg-primary',
    'hover:bg-primary',
    'border-primary',
    'text-primary',
    'bg-secondary',
    'hover:bg-secondary',
    'border-secondary',
    'text-secondary',
    'bg-success',
    'hover:bg-success',
    'border-success',
    'text-success',
    'bg-warning',
    'hover:bg-warning',
    'border-warning',
    'text-warning',
    'bg-danger',
    'hover:bg-danger',
    'border-danger',
    'text-danger',
    'bg-disabled',
    'border-disabled',
    'text-disabled',
    'hover:brightness-110',
    'hover:text-white'
  ]
}
