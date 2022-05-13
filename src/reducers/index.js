import { combineReducers } from 'redux';

import loginReducer from './login';
import menuReducer from './menu';
import infosReducer from './infos';
import reportsReducer from './reports';
import reportingReducer from './reporting';
import utilitiesReducer from './utilities';

const rootReducer = combineReducers({
  utilities: utilitiesReducer,
  reporting: reportingReducer,
  reports: reportsReducer,
  login: loginReducer,
  menu: menuReducer,
  infos: infosReducer,
});

export default rootReducer;
