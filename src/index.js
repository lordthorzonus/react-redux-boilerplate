import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from 'store/configureStore';

const MOUNT_ELEMENT = document.getElementById('root');

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: __BASENAME__
});

const store = configureStore(window.__INITIAL_STATE__, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router
});

let render = (key = null) => {
    const routes = require('routes/index').default(store);
    const App = (
        <Provider store={store}>
            <div style={{ height: '100%' }}>
                <Router history={history} children={routes} key={key} />
            </div>
        </Provider>
    );

    ReactDOM.render(App, MOUNT_ELEMENT);
};

// Use Redux DevTools chrome extension
if (__DEBUG__) {
    if (window.devToolsExtension) window.devToolsExtension.open()
}

// Enable HMR and catch runtime errors in RedBox
if (__DEV__ && module.hot) {
    const renderApp = render;
    const renderError = (error) => {
        const RedBox = require('redbox-react');
        ReactDOM.render(<RedBox error={error}/>, MOUNT_ELEMENT)
    };
    render = () => {
        try {
            renderApp(Math.random())
        } catch (error) {
            renderError(error)
        }
    };
    module.hot.accept(['routes/index'], () => render())
}

render();