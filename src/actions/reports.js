// State for accordion reports list
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';
export const setActiveIndex = (newIndex) => ({
  type: SET_ACTIVE_INDEX,
  activeIndex: newIndex,
});

// State for accordion terms and conditions
export const SET_ACTIVE_INDEX_TERMS = 'SET_ACTIVE_INDEX_TERMS';
export const setActiveIndexTerms = (newIndex) => ({
  type: SET_ACTIVE_INDEX_TERMS,
  activeIndexTerms: newIndex,
});

// Receive all reports from back
export const GET_REPORTS = 'GET_REPORTS';
export const getReports = () => ({
  type: GET_REPORTS,
});

// Receive all admin reports from back
export const GET_ADMIN_REPORTS = 'GET_ADMIN_REPORTS';
export const getAdminReports = () => ({
  type: GET_ADMIN_REPORTS,
});

// Switch reports/reporting component
export const TOGGLE_REPORTING = 'TOGGLE_REPORTING';
export const toggleReporting = (value) => ({
  type: TOGGLE_REPORTING,
  value,
});

export const SAVE_REPORTS = 'SAVE_REPORTS';
export const saveReports = (reports) => ({
  type: SAVE_REPORTS,
  payload: reports,
});

export const SAVE_ADMIN_REPORTS = 'SAVE_ADMIN_REPORTS';
export const saveAdminReports = (reports) => ({
  type: SAVE_ADMIN_REPORTS,
  payload: reports,
});

export const DELETE_SELECTED_REPORT = 'DELETE_SELECTED_REPORT';
export const deleteSelectedReport = (id) => ({
  type: DELETE_SELECTED_REPORT,
  id: id,
});

export const DELETE_REPORT = 'DELETE_REPORT';
export const deleteReport = () => ({
  type: DELETE_REPORT,
});

export const CHANGE_REPORTS_FILTER = 'CHANGE_REPORTS_FILTER';
export const changeReportsFilter = (value, key) => ({
  type: CHANGE_REPORTS_FILTER,
  value,
  key,
});

export const RESET_REPORTS_FILTER = 'RESET_REPORTS_FILTER';
export const resetReportsFilter = () => ({
  type: RESET_REPORTS_FILTER,
});

export const UPDATE_FILTERED_REPORTS = 'UPDATE_FILTERED_REPORTS';
export const updateFilteredReports = (filteredReports) => ({
  type: UPDATE_FILTERED_REPORTS,
  filteredReports,
});

export const SUBMIT_MODERATE_REPORTING = 'SUBMIT_MODERATE_REPORTING';
export const submitModerateReporting = (id, title, admin_text, reporting_statut, email) => ({
  type: SUBMIT_MODERATE_REPORTING,
  id,
  title,
  admin_text,
  reporting_statut,
  email,
});

export const CHANGE_CHECKBOX_ADMIN_REPORTING = 'CHANGE_CHECKBOX_ADMIN_REPORTING';
export const changeCheckboxAdminReporting = (value) => ({
  type: CHANGE_CHECKBOX_ADMIN_REPORTING,
  reporting_statut: value,
});

// Create dynamic state for text area of AdminReport component
export const CREATE_STATE_TEXTAREA_ADMINREPORT = 'CREATE_STATE_TEXTAREA_ADMINREPORT';
export const createStateTextAreaAdminReport = (value, key) => ({
  type: CREATE_STATE_TEXTAREA_ADMINREPORT,
  value,
  key,
});

/**  Controlled field for text area of AdminReport component */
export const CHANGE_CURRENT_TEXTAREA_ADMINREPORT = 'CHANGE_CURRENT_TEXTAREA_ADMINREPORT';
export const changeCurrentTextAreaAdminReport = (value, key) => ({
  type: CHANGE_CURRENT_TEXTAREA_ADMINREPORT,
  value,
  key,
});

/**  Erase state value of activeIndex for accordion */
export const ERASE_VALUE_ACTIVE_INDEX = 'ERASE_VALUE_ACTIVE_INDEX';
export const eraseValueActiveIndex = () => ({
  type: ERASE_VALUE_ACTIVE_INDEX,
});
