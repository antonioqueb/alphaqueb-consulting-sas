/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{html,js,jsx,ts,tsx}' 
  ],
  theme: {
    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        blueprimary: '#26E1FF',
        bluesecondary: '#91F2F2',
        whiteprimary: '#F2F2F2',
        grayprimary: '#595959',
        darkprimary: '#0D0D0D'

      }
    }
  },
  plugins: []
}
