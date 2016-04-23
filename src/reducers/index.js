import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer as router } from 'react-router-redux'


export const reducers = (asyncReducers) => {
    return combineReducers({
        router,
        form: formReducer,
        /* reducers */
        ...asyncReducers
    });
};

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(reducers(store.asyncReducers));
};

export default reducers;
