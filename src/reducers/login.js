import { CHANGE_CURRENT_FIELD, TOGGLE_LOGIN, TOGGLE_SIGNUP, LOGIN, LOGOUT, SET_LOGIN_MESSAGE, ACTIVE_CONNECTION_BUTTON, REDIRECT } from "../actions/action";

export const initialState = {
    email: '',
    password: '',
    inseeCode: '',
    logged: false,
    isOpenSignup: false,
    isOpenLogin: false,
    loginMessage: '',
    loginMessageColor:false,
    activeConnectionButton: false,
    redirectTo: '',
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
        activeConnectionButton: !state.activeConnectionButton,
        loginMessage: '',
      };
    }
    case TOGGLE_SIGNUP: {
      return {
        ...state,
        isOpenSignup: !state.isOpenSignup,
        isOpenLogin: false,
        activeConnectionButton: false,
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
        loginMessageColor: action.loginMessageColor,
      };
    }
    case ACTIVE_CONNECTION_BUTTON: {
      return {
        ...state,
        activeConnectionButton: true,
      };
    }
    case REDIRECT: {
      return {
        ...state,
        redirectTo: action.redirectTo,
      };
    }
    default:
      return state; 
  }
};

export default reducer;