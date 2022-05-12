import { CHANGE_CURRENT_FIELD } from "../actions/utilities";

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  inseeCode: '',
  reporting_description:'rerer',
  reporting_email:'er',
  reporting_firstName:'er',
  reporting_lastName:'er',
  reporting_phone:'06265',
  reporting_checkBox: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_CURRENT_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
      default:
        return state; 
    }
  };
  
  export default reducer; 