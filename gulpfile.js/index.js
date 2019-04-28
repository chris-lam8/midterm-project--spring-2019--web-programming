const { series } = require(`gulp`);

exports.compileCSSForDev = require(`./tasks/css-compiler--dev`);
exports.compileHTMLForProd = require(`./tasks/html-compiler--prod`);


exports.build = series(
    require(`./tasks/css-compiler--prod`),
    require(`./tasks/html-compiler--prod`)
  
);

exports.default = series(
    require(`./tasks/css-compiler--dev`),
    require(`./tasks/serve`)
);
