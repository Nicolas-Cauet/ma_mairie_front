import {
  ERROR_REPORTING_CATEGORY,
  ERROR_REPORTING_DESCRIPTION,
  ERROR_REPORTING_EMAIL,
  ERROR_REPORTING_FIRSTNAME,
  ERROR_REPORTING_LASTNAME,
  ERROR_REPORTING_TITLE,
  RESET_ERROR_REPORTING,
} from '../actions/reporting';

export const initialState = {
  isReporting_categoryError: false,
  isReporting_titleError: false,
  isReporting_descriptionError: false,
  isReporting_emailError: false,
  isReporting_firstnameError: false,
  isReporting_lastnameError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_ERROR_REPORTING:
      return {
        ...state,
        isReporting_categoryError: false,
        isReporting_titleError: false,
        isReporting_descriptionError: false,
        isReporting_emailError: false,
        isReporting_firstnameError: false,
        isReporting_lastnameError: false,
      };
    case ERROR_REPORTING_CATEGORY:
      return {
        ...state,
        isReporting_categoryError: !state.isReporting_categoryError,
      };
    case ERROR_REPORTING_TITLE:
      return {
        ...state,
        isReporting_titleError: !state.isReporting_titleError,
      };
    case ERROR_REPORTING_DESCRIPTION:
      return {
        ...state,
        isReporting_descriptionError: !state.isReporting_descriptionError,
      };
    case ERROR_REPORTING_EMAIL:
      return {
        ...state,
        isReporting_emailError: !state.isReporting_emailError,
      };
    case ERROR_REPORTING_FIRSTNAME:
      return {
        ...state,
        isReporting_firstnameError: !state.isReporting_firstnameError,
      };
    case ERROR_REPORTING_LASTNAME:
      return {
        ...state,
        isReporting_lastnameError: !state.isReporting_lastnameError,
      };
    default:
      return state;
  }
};

export default reducer;
