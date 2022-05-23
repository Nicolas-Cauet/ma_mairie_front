import {
  TOGGLE_LOGIN,
  TOGGLE_SIGNUP,
  LOGIN,
  SET_LOGOUT,
  ACTIVE_CONNECTION_BUTTON,
  SET_TOWNHALL_ID,
} from '../actions/login';

import { REDIRECT } from '../actions/utilities';

export const initialState = {
  logged: true,
  isOpenSignup: false,
  isOpenLogin: false,
  activeConnectionButton: false,
  redirectTo: '',
  townHallId: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN: {
      return {
        ...state,
        isOpenLogin: !state.isOpenLogin,
        isOpenSignup: false,
        activeConnectionButton: !state.activeConnectionButton,
        // loginMessage: '',
      };
    }
    case TOGGLE_SIGNUP: {
      return {
        ...state,
        isOpenSignup: !state.isOpenSignup,
        isOpenLogin: false,
        activeConnectionButton: false,
        // loginMessage: '',
      };
    }
    case LOGIN: {
      return {
        ...state,
        logged: true,
        // loginMessage: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    }
    case SET_LOGOUT: {
      return {
        ...state,
        logged: false,
        pseudo: '',
        inseeCode: '',
        // loginMessage: '',
        // loginMessageColor: false,
        activeConnectionButton: false,
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
    case SET_TOWNHALL_ID:
      return {
        ...state,
        townHallId: action.townHallId,
      };
    default:
      return state;
  }
};

export default reducer;
