/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // шукає у файлі index.html
    "./src/**/*.{js,jsx,ts,tsx}", // шукає у всіх js/ts файлах в src
  ],
  theme: {
    extend: {}, // тут ти можеш додавати свої власні налаштування теми
  },
  plugins: [], // якщо ти хочеш використовувати додаткові плагіни, додаєш сюди
};
