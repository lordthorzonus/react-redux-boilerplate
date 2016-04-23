const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
    config = JSON.parse(babelrc);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}

require('babel-core/register')(config);

app.use(require('morgan')('short'));

(function initWebpack() {
    const webpack = require('webpack');
    const webpackConfig = require('../webpack/common.config');
    const compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath,
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
    }));

    app.use(express.static(__dirname + '/'));
})();

app.get(/.*/, function root(req, res) {
    var basePath = path.resolve(__dirname, '../');
    res.sendFile(basePath + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
    const address = server.address();
    console.log('Listening on: %j', address);
    console.log(' -> http://localhost:%d', address.port);
});

