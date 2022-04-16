import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/js/main.js',
    output: {
        file: 'main.min.js',
        format: 'es',
        plugins: [terser()], // for minify file js
        watch: { // for auto update rollup when change files
            include: 'src/**'
        }
    },
    plugins: [
        scss({
            output: "styles.min.css",
            failOnError: true,
            runtime: require("sass"),
            outputStyle: "compressed", // for minify file css
        }),
    ],
};