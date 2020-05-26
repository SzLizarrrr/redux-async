import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './rootReducer';
import root from './actions';
import { rootEpic } from './actions';

const middleware = [thunk];
middleware.push(createSagaMiddleware());
middleware.push(createEpicMiddleware());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

middleware[1].run(root)
middleware[2].run(rootEpic)

export default store;