const { series, watch } = require(`gulp`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

module.exports = serve = () => {
    browserSync({
        notify: true,
        port: 9000,
        reloadDelay: 100,
        server: {
            baseDir: [`./app/uncompressed`]
        }
    });

    watch([
        `./**/*.html`,
        `./**/*.scss`,
        `./**/*.js`
    ],
    series(`compileCSSForDev`)
    ).on(`change`, reload);
};

exports.serve;
