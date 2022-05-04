import { combineReducers } from 'redux';

import exempleReducer from './exemple'
import login from './login';

const rootReducer = combineReducers({
    exemple: exempleReducer,
    login: login,
});

export default rootReducer;