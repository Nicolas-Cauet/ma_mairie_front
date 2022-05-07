import { combineReducers } from 'redux';

import loginReducer from './login';
import menuReducer from './menu';
import infosReducer from './infos';


const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
    infos: infosReducer,
});

export default rootReducer;