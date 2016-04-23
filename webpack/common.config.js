const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');
const development = require('./dev.config.js');
const production = require('./prod.config.js');
const config = require('../config');
require('babel-polyfill').default;


const PATHS = {
    app: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../dist')
};

const common = {
    entry: [
        PATHS.app
    ],

    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.scss'],
        modulesDirectories: ['node_modules', PATHS.app]
    },

    module: {
        loaders: [{
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff2'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-otf'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file',
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.png$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.jpg$/,
            loader: 'file?name=[name].[ext]'
        }],
    },

    postcss: (webpack) => {
        return [
            autoprefixer({
                browsers: ['last 2 versions']
            }),
            postcssImport({
                addDependencyTo: webpack
            })
        ];
    }
};

if (config.globals['__DEV__']) {
    module.exports = merge(development, common);
}

if (config.globals['__PROD__']) {
    module.exports = merge(production, common);
}
