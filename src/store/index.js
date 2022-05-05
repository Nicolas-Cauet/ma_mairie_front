import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import api from '../middlewares/api';

const middlewares = applyMiddleware(
  api,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;