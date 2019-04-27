const { src, dest } = require(`gulp`);
const CSSCompiler = require(`gulp-sass`);

module.exports = compileCSSForDev = () => {
    return src([
        `./app/uncompressed/styles/*.scss`,
        `./app/uncompressed/styles/**/*.scss`])
        .pipe(CSSCompiler({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, CSSCompiler.logError))
        .pipe(dest([`app/uncompressed/css`]));

};

exports.compileCSSForDev;
