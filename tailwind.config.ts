import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        upndown: 'upndown 5s ease-in-out infinite',
      },
      keyframes:{
        upndown: {
          '0%, 90%, 100%': { transform: 'translateY(-2rem)' },
          '50%, 75%, 80%': { transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'button-shadow': 'inset 0 0 12px #bf97ff3d',
        'button-shadow-hover': 'inset 0 0 50px rgba(180, 100, 255, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
