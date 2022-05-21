import axios from 'axios';

import {
  deleteReport,
  DELETE_SELECTED_REPORT,
  getAdminReports,
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
  const { townHallId } = store.getState().login;
  switch (action.type) {
    case GET_ADMIN_REPORTS:
      store.dispatch(loading(true));
      console.log('GET Admin Reports');
      instance.get(`/admin/reporting/${townHallId}`)
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
      instance.delete(`/admin/reporting/${townHallId}/${action.id}`)

        .then((response) => {
          store.dispatch(deleteReport(action.id));
          store.dispatch(setMessage(response.data, true));
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
          console.log(error);
        });
      break;
    }
    case SUBMIT_MODERATE_REPORTING: {
      instance.patch(`/admin/reporting/${townHallId}/${action.id}`, {
        title: action.title,
        admin_text: action.admin_text,
        reporting_statut: action.reporting_statut,
      })
        .then((response) => {
          store.dispatch(setMessage(response.data, true));
          store.dispatch(getAdminReports());
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
