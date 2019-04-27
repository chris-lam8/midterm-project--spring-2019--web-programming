const { series } = require(`gulp`);

exports.compileCSSForDev = require(`./tasks/css-compiler--dev`);


exports.build = series(
    require(`./tasks/css-compiler--prod`),
  
);

exports.default = series(
    require(`./tasks/css-compiler--dev`),
    require(`./tasks/serve`)
);
