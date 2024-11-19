module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Warna utama hijau
        secondary: '#FFC107', // Warna kuning cerah
        accent: '#FF5722',   // Warna oranye
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Merriweather', 'serif'], // Font khusus untuk judul
      },
    },
  },
  plugins: [],
}
