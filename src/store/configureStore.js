import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from 'reducers';

export default function configureStore(initialState = {}, history) {
    const logger = createLogger({
        collapsed: true,
        predicate: () => __DEV__
    });

    let middleware = applyMiddleware(thunkMiddleware, logger, routerMiddleware(history));

    // Use DevTools chrome extension in development
    if (__DEBUG__) {
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            middleware = compose(middleware, devToolsExtension())
        }
    }

    const store = createStore(reducers(), initialState, middleware);

    store.asyncReducers = {};

    if (__DEV__ && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
