import { CHANGE_CURRENT_FIELD } from '../actions/utilities';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  inseeCode: '',
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
    default:
      return state;
  }
};

export default reducer;
