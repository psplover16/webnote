/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // 確保 Tailwind 可以處理 Vue 文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

