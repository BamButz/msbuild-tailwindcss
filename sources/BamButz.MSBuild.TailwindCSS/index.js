const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const nesting = require('postcss-nesting');
const cssnano = require('cssnano');
const fs = require('fs');

async function main() {
    try {
        const cmdArgs = process.argv.slice(2);
        const input = fs.readFileSync(cmdArgs[0]);
        const output = await postcss()
            .use(tailwindcss)
            .use(nesting)
            .use(cssnano)
            .process(input, {from: cmdArgs[0], to: cmdArgs[1]});

        fs.writeFileSync(cmdArgs[1], output);
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

main();