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
      default:
        return state; 
    }
  };
  
  export default reducer; 