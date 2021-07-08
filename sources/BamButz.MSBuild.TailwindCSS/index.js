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
            // File tailwind.config.js will be created or overwritten by default.
            fs.copyFile(configPath, 'tailwind.config.js', (err) => {
                if (err) throw err;
                console.log('config exists and was copied to build folder');
            });
            tailwindcss = tailwindcss("tailwind.config.js");
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