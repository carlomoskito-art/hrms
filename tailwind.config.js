/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#F59E0B',
        'primary-dark-blue': '#1F2544',
        'sidebar-bg': '#F1F6F9',
        'gray-text': '#717182',
        'dark-text': '#0A0A0A',
        'stat-blue': '#2B7FFF',
        'stat-green': '#00C950',
        'stat-yellow': '#FBBF24',
        'stat-purple': '#AD46FF',
        'action-yellow-bg': '#FFFBEB',
        'action-yellow-border': '#FDE68A',
        'action-blue-bg': '#EFF6FF',
        'action-blue-border': '#BEDBFF',
        'action-purple-bg': '#FAF5FF',
        'action-purple-border': '#E9D4FF',
        'action-green-bg': '#F0FDF4',
        'action-green-border': '#B9F8CF',
      }
    },
  },
  plugins: [],
}
