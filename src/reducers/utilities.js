import { LOGIN, SET_LOGOUT } from '../actions/action';
import {
  CREATE_EDITING_MEMBER_FIRSTNAME,
  CREATE_EDITING_MEMBER_LASTNAME,
  CREATE_EDITING_MEMBER_PHOTO,
  CREATE_EDITING_MEMBER_ROLE,
} from '../actions/council';
import { CHANGE_CURRENT_CHECKBOX_REPORTING, ERASE_REPORTING_FIELDS } from '../actions/reporting';
import { SET_REPORTING_ERROR } from '../actions/reports';
import {
  CHANGE_CURRENT_CATEGORY,
  CHANGE_CURRENT_FIELD,
  LOADING,
  RETURN_MESSAGE_ERROR,
  RETURN_MESSAGE_SUCCESS,
  SET_MESSAGE,
} from '../actions/utilities';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  inseeCode: '',
  reporting_category: '',
  reporting_title: '',
  reporting_description: '',
  reporting_email: '',
  reporting_firstName: '',
  reporting_lastName: '',
  reporting_phone: '',
  reporting_checkBox: false,
  reporting_error: false,
  admin_text: '',
  reporting_statut: '',
  loading: false,
  errorMessage: false,
  successMessage: false,
  councilEditingName: '',
  councilEditingRole: '',
  message: '',
  messageColor: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CHANGE_CURRENT_CATEGORY:
      return {
        ...state,
        reporting_category: action.reporting_category,
      };
    case SET_LOGOUT:
      return {
        ...state,
        pseudo: '',
        inseeCode: '',
      };
    case LOGIN:
      return {
        ...state,
        email: '',
        password: '',
        confirmPassword: '',
      };
    case ERASE_REPORTING_FIELDS:
      return {
        ...state,
        reporting_category: '',
        reporting_title: '',
        reporting_description: '',
        reporting_email: '',
        reporting_firstName: '',
        reporting_lastName: '',
        reporting_phone: '',
        reporting_checkBox: false,
        reporting_error: false,

      };
    case CHANGE_CURRENT_CHECKBOX_REPORTING:
      return {
        ...state,
        reporting_checkBox: !state.reporting_checkBox,
      };
    case SET_REPORTING_ERROR:
      return {
        ...state,
        reporting_error: action.reporting_error,
      };
    case LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case RETURN_MESSAGE_ERROR:
      return {
        ...state,
        errorMessage: action.value,
      };
    case RETURN_MESSAGE_SUCCESS:
      return {
        ...state,
        successMessage: action.value,
      };
    case CREATE_EDITING_MEMBER_LASTNAME:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CREATE_EDITING_MEMBER_FIRSTNAME:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CREATE_EDITING_MEMBER_ROLE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CREATE_EDITING_MEMBER_PHOTO:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.message,
        messageColor: action.messageColor,
      };
    }
    default:
      return state;
  }
};

export default reducer;
