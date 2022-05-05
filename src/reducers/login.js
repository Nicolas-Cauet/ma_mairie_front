import { CHANGE_CURRENT_FIELD, TOGGLE_LOGIN, TOGGLE_SIGNUP, LOGIN, LOGOUT, SET_LOGIN_MESSAGE } from "../actions/action";

export const initialState = {
    email: '',
    password: '',
    inseeCode: '',
    logged: false,
    isOpenSignup: false,
    isOpenLogin: false,
    loginMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case TOGGLE_LOGIN: {
      return {
        ...state,
        isOpenLogin: !state.isOpenLogin,
        isOpenSignup: false,
        loginMessage: '',
      };
    }
    case TOGGLE_SIGNUP: {
      return {
        ...state,
        isOpenSignup: !state.isOpenSignup,
        isOpenLogin: false,
        loginMessage: '',
      };
    }
    case LOGIN: {
      return {
      ...state,
      logged: true,
      loginMessage: '',
      };
    }
    case LOGOUT: {
      return {
      ...state,
      logged: false,
      };
    }
    case SET_LOGIN_MESSAGE: {
      return {
        ...state,
        loginMessage: action.loginMessage,
      };
    }
    default:
      return state; 
  }
};

export default reducer;