import { CHANGE_CURRENT_FIELD, TOGGLE_LOGIN, TOGGLE_SIGNUP, LOGIN, LOGOUT } from "../actions/action";

export const initialState = {
    email: '',
    password: '',
    inseeCode: '',
    logged: true,
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
      case TOGGLE_LOGIN: {
        return {
          ...state,
          isOpenLogin: !state.isOpenLogin,
          isOpenSignup: false,
        };
      }
      case TOGGLE_SIGNUP: {
        return {
          ...state,
          isOpenSignup: !state.isOpenSignup,
          isOpenLogin: false,
        };
      }
      case LOGIN: {
        return {
        ...state,
        logged: false,
        };
      }
      case LOGOUT: {
        return {
        ...state,
        logged: false,
        };
      }
    default:
      return state; 
  }
};

export default reducer;