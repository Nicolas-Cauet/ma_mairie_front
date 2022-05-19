export const CHANGE_CURRENT_FIELD = 'CHANGE_CURRENT_FIELD';
export const changeCurrentField = (value, key) => ({
  type: CHANGE_CURRENT_FIELD,
  value: value,
  key: key,
});

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const toggleLogin = (bool) => ({
  type: TOGGLE_LOGIN,
  isOpenLogin: bool,
});

export const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP';
export const toggleSignup = () => ({
  type: TOGGLE_SIGNUP,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const SET_LOGOUT = 'SET_LOGOUT';
export const setLogout = () => ({
  type: SET_LOGOUT,
});

export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const submitSignup = (pseudo, email, password, inseeCode) => ({
  type: SUBMIT_SIGNUP,
  pseudo,
  email,
  password,
  inseeCode,
});

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

export const ACTIVE_CONNECTION_BUTTON = 'ACTIVE_CONNECTION_BUTTON';
export const activeConnectionButton = () => ({
  type: ACTIVE_CONNECTION_BUTTON,
});
