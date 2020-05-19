const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const nesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

async function main() {
    try {
        const cmdArgs = process.argv.slice(2);
        const input = fs.readFileSync(cmdArgs[0]);
        const output = await postcss()
            .use(tailwindcss)
            .use(nesting)
            .use(autoprefixer)
            .process(input, {from: cmdArgs[0], to: cmdArgs[1]});

        fs.writeFileSync(cmdArgs[1], output);
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

main();