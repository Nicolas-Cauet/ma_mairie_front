import {
  TOGGLE_LOGIN,
  TOGGLE_SIGNUP,
  LOGIN,
  SET_LOGOUT,
  SET_LOGIN_MESSAGE,
  ACTIVE_CONNECTION_BUTTON,
} from "../actions/action";

import { REDIRECT } from '../actions/utilities';

export const initialState = {
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
      email: '',
      password: '',
      };
    }
    case SET_LOGOUT: {
      return {
      ...state,
      logged: false,
      pseudo: '',
      inseeCode: '',
      loginMessage: '',
      loginMessageColor: false,
      activeConnectionButton: false, 
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