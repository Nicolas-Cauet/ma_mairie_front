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

// Set value of editing member to state
export const SET_VALUE_EDITING_MEMBER = 'SET_VALUE_EDITING_MEMBER';
export const setValueEditingMember = (name, role) => ({
  type: SET_VALUE_EDITING_MEMBER,
  editingMemberName: name,
  editingMemberRole: role,
});
