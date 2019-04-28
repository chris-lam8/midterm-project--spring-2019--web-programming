const { src, dest } = require('gulp')
const HTMLCompressor = require(`gulp-htmlmin`)


const compileHTMLForProd = () => {

    return src([
        `./app/uncompressed/*.html`,
        `./app/uncompressed/**/*.html`])
        .pipe(HTMLCompressor({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(dest(`./app/compressed/html`))
}

exports.compileHTMLForProd;