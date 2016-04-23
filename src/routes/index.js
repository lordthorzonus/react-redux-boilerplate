import { App } from 'views/App';
import Home  from './Home';

export const createRoutes = (store) => {

    const routes = {
        path: '/',
        component: App,
        indexRoute: Home,
        getChildRoutes (location, next) {
            console.log(location);
            require.ensure([], (require) => {
                next(null, [
                    // Provide store for async reducers and middleware
                   require('./Example').default(store)
                ])
            })
        }
    };

    return routes
};

export default createRoutes