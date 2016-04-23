const config = {
    env : process.env.NODE_ENV || 'development'
};

config.globals = {
    'process.env'  : {
        'NODE_ENV' : JSON.stringify(config.env)
    },
    'NODE_ENV'     : config.env,
    '__DEV__'      : config.env === 'development',
    '__PROD__'     : config.env === 'production',
    '__TEST__'     : config.env === 'test',
    '__DEBUG__'    : config.env === 'development',
    '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
};

module.exports = config;