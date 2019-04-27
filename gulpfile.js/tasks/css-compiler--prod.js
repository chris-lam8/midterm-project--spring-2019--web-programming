const { src, dest } = require(`gulp`);
const CSSCompiler = require(`gulp-sass`);

module.exports = compileCSSForProd = () => {
    return src([
        `./app/uncompressed/styles/*.scss`,
        `./app/uncompressed/styles/**/*.scss`])
        .pipe(CSSCompiler({
            outputStyle: `compressed`,
            precision: 10
        }).on(`error`, CSSCompiler.logError))
        .pipe(dest(`./app/compressed/css`));
};

exports.compileCSSForProd;
