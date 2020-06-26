const postcss = require('postcss');
let tailwindcss = require('tailwindcss');
const nesting = require('postcss-nesting');
const cssnano = require('cssnano');
const fs = require('fs');
const path = require('path');

async function main() {
    try {
        const cmdArgs = process.argv.slice(2);
        
        const projectDir = cmdArgs[2];
        const configPath = path.join(projectDir, "tailwind.config.js");
        if (fs.existsSync(configPath)) {
            console.log("config exists")
            tailwindcss = tailwindcss(configPath);
        }
        
        const input = fs.readFileSync(cmdArgs[0]);
        const output = await postcss()
            .use(tailwindcss)
            .use(nesting)
            .use(cssnano)
            .process(input, {from: cmdArgs[0], to: cmdArgs[1]});

        fs.writeFileSync(cmdArgs[1], output.toString());
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

main();