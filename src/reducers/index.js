import { combineReducers } from 'redux';

import loginReducer from './login';
import menuReducer from './menu';
import infosReducer from './infos';
import reportsReducer from './reports';


const rootReducer = combineReducers({
    reports: reportsReducer,
    login: loginReducer,
    menu: menuReducer,
    infos: infosReducer,
});

export default rootReducer;