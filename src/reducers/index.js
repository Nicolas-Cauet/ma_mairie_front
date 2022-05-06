import { combineReducers } from 'redux';

import loginReducer from './login';
import menuReducer from './menu';

const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
});

export default rootReducer;