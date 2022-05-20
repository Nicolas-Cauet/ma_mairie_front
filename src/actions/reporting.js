// Submit reporting form to back by POST resquest
export const SUBMIT_REPORTING = 'SUBMIT_REPORTING';
export const submitReporting = (
  reporting_category,
  reporting_title,
  reporting_description,
  reporting_email,
  reporting_firstName,
  reporting_lastName,
  reporting_phone,
) => ({
  type: SUBMIT_REPORTING,
  reporting_category,
  reporting_title,
  reporting_description,
  reporting_email,
  reporting_firstName,
  reporting_lastName,
  reporting_phone,
});

// Controlled field for reporting component
export const CHANGE_CURRENT_FIELD_REPORTING = 'CHANGE_CURRENT_FIELD_REPORTING';
export const changeCurrentFieldReporting = () => ({
  type: CHANGE_CURRENT_FIELD_REPORTING,
});

// Erase fields of Reporting on succes submit
export const ERASE_REPORTING_FIELDS = 'ERASE_REPORTING_FIELDS';
export const eraseReportingFields = () => ({
  type: ERASE_REPORTING_FIELDS,
});

// Controlled field for checkbox reporting
export const CHANGE_CURRENT_CHECKBOX_REPORTING = 'CHANGE_CURRENT_CHECKBOX_REPORTING';
export const changeCurrentCheckBoxReporting = () => ({
  type: CHANGE_CURRENT_CHECKBOX_REPORTING,
});

// e
export const RESET_ERROR_REPORTING = 'RESET_ERROR_REPORTING';
export const resetErrorReporting = () => ({
  type: RESET_ERROR_REPORTING,
});

// e
export const ERROR_REPORTING_CATEGORY = 'ERROR_REPORTING_CATEGORY';
export const errorReportingCategory = () => ({
  type: ERROR_REPORTING_CATEGORY,
});

// e
export const ERROR_REPORTING_TITLE = 'ERROR_REPORTING_TITLE';
export const errorReportingTitle = () => ({
  type: ERROR_REPORTING_TITLE,
});

// e
export const ERROR_REPORTING_DESCRIPTION = 'ERROR_REPORTING_DESCRIPTION';
export const errorReportingDescription = () => ({
  type: ERROR_REPORTING_DESCRIPTION,
});

// e
export const ERROR_REPORTING_EMAIL = 'ERROR_REPORTING_EMAIL';
export const errorReportingEmail = () => ({
  type: ERROR_REPORTING_EMAIL,
});

// e
export const ERROR_REPORTING_FIRSTNAME = 'ERROR_REPORTING_FIRSTNAME';
export const errorReportingFirstname = () => ({
  type: ERROR_REPORTING_FIRSTNAME,
});

// e
export const ERROR_REPORTING_LASTNAME = 'ERROR_REPORTING_LASTNAME';
export const errorReportingLastname = () => ({
  type: ERROR_REPORTING_LASTNAME,
});
