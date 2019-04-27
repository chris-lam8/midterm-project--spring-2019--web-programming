const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`./app/uncompressed/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`./app/compressed/`));
}

exports.compressHTML = compressHTML;