import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: '#0F172A',
        panel: '#111827',
        border: '#1F2937',
        accent: '#A78BFA'
      }
    }
  },
  plugins: []
} satisfies Config;
