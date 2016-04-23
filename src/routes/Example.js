import { injectReducer } from 'reducers'

export default (store) => ({
    path: 'example-view',
    getComponent (nextState, next) {
        require.ensure([
            'views/ExampleView',
            'reducers/example'
        ], (require) => {
            const Example = require('views/ExampleView').default;
            const reducer = require('reducers/example');

            injectReducer(store, {key: 'example', reducer});
            next(null,  Example);
        })
    }
})