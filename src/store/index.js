import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import auth from '../middlewares/auth';
import api from '../middlewares/api';
import adminApi from '../middlewares/adminApi';

const middlewares = applyMiddleware(
  auth,
  api,
  adminApi,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
