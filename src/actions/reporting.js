// Submit reporting form to back by POST resquest
export const SUBMIT_REPORTING = 'SUBMIT_REPORTING';
export const submitReporting = (reporting_category, reporting_title, reporting_description, reporting_email,reporting_firstName, reporting_lastName, reporting_phone) => ({
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

//Erase fields of Reporting on succes submit
export const ERASE_REPORTING_FIELDS = 'ERASE_REPORTING_FIELDS';
export const eraseReportingFields = () => ({
  type: ERASE_REPORTING_FIELDS,
});

//Controlled field for checkbox reporting
export const CHANGE_CURRENT_CHECKBOX_REPORTING = 'CHANGE_CURRENT_CHECKBOX_REPORTING';
export const changeCurrentCheckBoxReporting = () => ({
  type: CHANGE_CURRENT_CHECKBOX_REPORTING,
});



