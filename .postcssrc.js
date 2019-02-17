// https://github.com/michael-ciniawsky/postcss-load-config
// vw配置请参考：https://www.w3cplus.com/mobile/vw-layout-in-vue.html

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,       // (Number) the width of the viewport
      viewportHeight: 1334,     // (Number) the height of the viewport
      unitPrecision: 3,         // (Number) the decimal numbers to allow the REM units to grow to
      viewportUnit: 'vw',       // (String) expected units
      selectotBlackList: ['.ignore', '.hairlines'], // (Array) the selectors to ignore and leave as px.
      minPixelValue: 1,         // (Number) set the minimum pixel value to replace.
      mediaQuery: false,        // (Boolean) allow px to be converted in media queries
      // "postcss-viewport-units": {}, deleted
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      }
    }
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {}
  }
}