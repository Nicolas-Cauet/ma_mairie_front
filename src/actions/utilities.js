//Management to redirect route
export const REDIRECT = 'REDIRECT';
export const redirect = (route) => ({
  type: REDIRECT,
  redirectTo: route,
});

//Controlled field for Field component
export const CHANGE_CURRENT_FIELD = 'CHANGE_CURRENT_FIELD';
export const changeCurrentField = (value, key) => ({
  type: CHANGE_CURRENT_FIELD,
  value: value,
  key: key,
});
