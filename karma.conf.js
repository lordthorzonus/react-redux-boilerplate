module.exports = (config) => {
    config.set({
        basePath: 'tests',
        singleRun: true,
        frameworks: ['mocha'],
        reporters: ['dots'],
        browsers: ['Chrome'],
        files: [
            '**/*.spec.js'
        ],
        preprocessors: {
            '**/*.spec.js': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['', '.js', 'jsx', '.ts'],
                modulesDirectories: ['node_modules', 'src']
            },
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        },
        webpackMiddleware: {
            stats: {
                color: true,
                chunkModules: false,
                modules: false
            }
        }
    });
};
