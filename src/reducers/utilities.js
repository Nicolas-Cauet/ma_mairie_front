import { LOGIN, SET_LOGOUT } from '../actions/action';
import { CHANGE_CURRENT_CHECKBOX_REPORTING, ERASE_REPORTING_FIELDS } from '../actions/reporting';
import { SET_REPORTING_ERROR } from '../actions/reports';
import { CHANGE_CURRENT_CATEGORY, CHANGE_CURRENT_FIELD, SET_VALUE_EDITING_MEMBER } from '../actions/utilities';

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
  editingMemberName: '',
  editingMemberRole: '',
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
    default:
    case SET_VALUE_EDITING_MEMBER:
      return {
        ...state,
        editingMemberName: action.editingMemberName,
        editingMemberRole: action.editingMemberRole,
      }
      return state;
  }
};

export default reducer;
