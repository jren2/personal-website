/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      'xs': '1px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mlg': { 'max': '1024px' },
    },
    plugins: [
      require('tw-elements/dist/plugin'),
    ],
  }
}
