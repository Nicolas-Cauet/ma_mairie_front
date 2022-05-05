import { CHANGE_CURRENT_FIELD } from "../actions/action";

export const initialState = {
    email: '',
    password: '',
    inseeCode: '',
    logged: false,
    isOpenSignup: false,
    isOpenLogin: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_FIELD:
      console.log('coucou', action.value);
      console.log(action.key);
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state; 
  }
};

export default reducer;