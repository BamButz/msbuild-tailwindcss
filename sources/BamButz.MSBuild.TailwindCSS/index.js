const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const nesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

var cmdArgs = process.argv.slice(2);

fs.readFile(cmdArgs[0], (_, css) => {
  postcss()
    .use(tailwindcss)
    .use(nesting)
    .use(autoprefixer)
    .process(css, { from: cmdArgs[0], to: cmdArgs[1] })
    .then(result => {
      fs.writeFile(cmdArgs[1], result.css, () => true)
    })
})