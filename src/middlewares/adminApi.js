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
      console.log('GET Admin Reports');
      instance.get('/admin/reporting/1')
        .then((response) => {
          console.log(response);
          store.dispatch(saveAdminReports(response.data));
          console.log(response.data);
        })

        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(loading(false));
        });
      break;
    case DELETE_SELECTED_REPORT: {
      instance.delete(`/admin/reporting/1/${action.id}`)

        .then((response) => {
          store.dispatch(deleteReport(action.id));
          console.log(response.data);
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
          console.log(error);
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
          console.log(response.data);
          store.dispatch(setMessage(`Le signalement "${action.title}" a bien été mis à jour`, true));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessage(error.response.data.error.message, false));
        });
      break;
    }
    default:
      next(action);
  }
};

export default adminApi;
