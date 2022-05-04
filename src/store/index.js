import { configStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import api from '../midllewares/api';

const middlewares = applyMiddleware(
  api,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = configStore(reducer, enhancers);

export default store;