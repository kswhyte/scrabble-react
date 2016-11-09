require('babel-register')({
  presets: ["react", "es2015"]
})

require('babel-polyfill')

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset="utf-8">
    <title>Scrabble - React</title>
  </head>
  <body>
    <div id="application"></div>
    <script src="main.bundle.js"></script>
  </body>
`)

global.window = document.defaultView
global.navigator = window.navigator
