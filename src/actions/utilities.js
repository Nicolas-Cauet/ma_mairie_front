export const REDIRECT = 'REDIRECT';
export const redirect = (route) => ({
  type: REDIRECT,
  redirectTo: route,
});