/** Management to redirect route */
export const REDIRECT = 'REDIRECT';
export const redirect = (route) => ({
  type: REDIRECT,
  redirectTo: route,
});

/** Controlled field for Field component */
export const CHANGE_CURRENT_FIELD = 'CHANGE_CURRENT_FIELD';
export const changeCurrentField = (value, key) => ({
  type: CHANGE_CURRENT_FIELD,
  value: value,
  key: key,
});

/** Controlled dropdown for category of reporting */
export const CHANGE_CURRENT_CATEGORY = 'CHANGE_CURRENT_CATEGORY';
export const changeCurrentCategory = (value) => ({
  type: CHANGE_CURRENT_CATEGORY,
  reporting_category: value,
});

/** Loading waitind data from API */
export const LOADING = 'LOADING';
export const loading = (value) => ({
  type: LOADING,
  value: value,
});

// /** Return a error message */
// export const RETURN_MESSAGE_ERROR = 'RETURN_MESSAGE_ERROR';
// export const returnMessageError = (value) => ({
//   type: RETURN_MESSAGE_ERROR,
//   value,
// });

// /** Return a succes message */
// export const RETURN_MESSAGE_SUCCESS = 'RETURN_MESSAGE_SUCCESS';
// export const returnMessageSuccess = (value) => ({
//   type: RETURN_MESSAGE_SUCCESS,
//   value,
// });

// Set value of editing member to state
// export const SET_VALUE_EDITING_MEMBER = 'SET_VALUE_EDITING_MEMBER';
// export const setValueEditingMember = (name, role) => ({
//   type: SET_VALUE_EDITING_MEMBER,
//   editingMemberName: name,
//   editingMemberRole: role,
// });

/** Return a error or success message */
export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessage = (message, color) => ({
  type: SET_MESSAGE,
  message: message,
  messageColor: color,
});
