const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`uncompressed/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed/`));
}

exports.compressHTMLForProd = compressHTMLForProd;

