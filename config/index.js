var fs = require('fs');
var config = require('./common');

const envSpecificFilename = `${config.env}`;
var hasEnvSpecificFile;

try {
    fs.lstatSync(`${__dirname}/${envSpecificFilename}.js`);
    hasEnvSpecificFile = true
} catch (e) {
}

var overrides;

if (hasEnvSpecificFile) {
    overrides = require(`./${envSpecificFilename}`).default(config)
} else {
}

module.exports = Object.assign({}, config, overrides);