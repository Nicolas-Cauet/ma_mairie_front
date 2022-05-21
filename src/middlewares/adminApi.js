import axios from 'axios';

import {
  deleteReport,
  DELETE_SELECTED_REPORT,
  GET_ADMIN_REPORTS,
  saveAdminReports,
  SUBMIT_MODERATE_REPORTING,
} from '../actions/reports';
import { loading, setMessage } from '../actions/utilities';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

const adminApi = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ADMIN_REPORTS:
      store.dispatch(loading(true));
      instance.get('/admin/reporting/1')
        .then((response) => {
          store.dispatch(saveAdminReports(response.data));
          console.log(response.data);
        })

        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
        })
        .finally(() => {
          store.dispatch(loading(false));
        });
      break;
    case DELETE_SELECTED_REPORT: {
      instance.delete(`/admin/reporting/1/${action.id}`)

        .then((response) => {
          store.dispatch(deleteReport(action.id));
          store.dispatch(setMessage(response.data, true));
        })
        .catch((error) => {
          store.dispatch(setMessage(error.data, false));
        });
      break;
    }
    case SUBMIT_MODERATE_REPORTING: {
      instance.patch(`/admin/reporting/1/${action.id}`, {
        title: action.title,
        admin_text: action.admin_text,
        reporting_statut: action.reporting_statut,
      })
        .then((response) => {
          store.dispatch(setMessage(response.data, true));
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
        });
      break;
    }
    default:
      next(action);
  }
};

export default adminApi;
