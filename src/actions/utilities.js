// Management to redirect route
export const REDIRECT = 'REDIRECT';
export const redirect = (route) => ({
  type: REDIRECT,
  redirectTo: route,
});

// Controlled field for Field component
export const CHANGE_CURRENT_FIELD = 'CHANGE_CURRENT_FIELD';
export const changeCurrentField = (value, key) => ({
  type: CHANGE_CURRENT_FIELD,
  value: value,
  key: key,
});

// Controlled dropdown for category of reporting
export const CHANGE_CURRENT_CATEGORY = 'CHANGE_CURRENT_CATEGORY';
export const changeCurrentCategory = (value) => ({
  type: CHANGE_CURRENT_CATEGORY,
  reporting_category: value,
});

export const LOADING = 'LOADING';
export const loading = (value) => ({
  type: LOADING,
  value: value,
});

export const RETURN_MESSAGE_ERROR = 'RETURN_MESSAGE_ERROR';
export const returnMessageError = (value) => ({
  type: RETURN_MESSAGE_ERROR,
  value,
});

export const RETURN_MESSAGE_SUCCESS = 'RETURN_MESSAGE_SUCCESS';
export const returnMessageSuccess = (value) => ({
  type: RETURN_MESSAGE_SUCCESS,
  value,
});
