import { LOGIN, SET_LOGOUT } from "../actions/action";
import { CHANGE_CURRENT_CHECKBOX_REPORTING, ERASE_REPORTING_FIELDS } from "../actions/reporting";
import { CHANGE_CURRENT_CATEGORY, CHANGE_CURRENT_FIELD } from "../actions/utilities";

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  inseeCode: '',
  reporting_category: '',
  reporting_title: '',
  reporting_description: '',
  reporting_email: '',
  reporting_firstName: '',
  reporting_lastName: '',
  reporting_phone: '',
  reporting_checkBox: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_CURRENT_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
      case CHANGE_CURRENT_CATEGORY:
        return {
          ...state,
          reporting_category: action.reporting_category,
        }
      case SET_LOGOUT:
        return {
        ...state,
        pseudo: '',
        inseeCode: '',
        };
      case LOGIN:
        return {
        ...state,
        email: '',
        password: '',
        confirmPassword: '',
        };
      case ERASE_REPORTING_FIELDS:
        return {
          ...state,
          reporting_category: '',
          reporting_title: '',
          reporting_description: '',
          reporting_email: '',
          reporting_firstName: '',
          reporting_lastName: '',
          reporting_phone: '',
          reporting_checkBox: false,
        }
      case CHANGE_CURRENT_CHECKBOX_REPORTING:
        return {
          ...state,
          reporting_checkBox: !state.reporting_checkBox,
        }
      default:
        return state; 
    }
  };
  
  export default reducer; 