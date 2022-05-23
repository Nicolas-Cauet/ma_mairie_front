import axios from 'axios';

// import { toggleMenu } from '../actions/menu';
import { eraseReportingFields, SUBMIT_REPORTING } from '../actions/reporting';
import {
  GET_REPORTS,
  saveReports,
} from '../actions/reports';
import { loading, setMessage } from '../actions/utilities';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
});

// if (localStorage.getItem('accessToken')) {
// const accessToken = localStorage.getItem('accessToken');
//   instance.defaults.headers.common.Authorization = `bearer ${accessToken}`;
// }

const api = (store) => (next) => (action) => {
  const { townHallId } = store.getState().login;
  switch (action.type) {
    case GET_REPORTS:
      store.dispatch(loading(true));
      instance.get(`/reporting/${townHallId}`)
        .then((response) => {
          store.dispatch(saveReports(response.data));
        })
        .catch(() => {
          store.dispatch(setMessage('Les données concernant les signalements ne sont pas disponible pour le moment', false));
        })
        .finally(() => {
          store.dispatch(loading(false));
        });
      break;
    case SUBMIT_REPORTING:
      instance.post(`/reporting/${townHallId}`, {
        reporting_category: action.reporting_category,
        title: action.reporting_title,
        user_text: action.reporting_description,
        email: action.reporting_email,
        first_name: action.reporting_firstName,
        last_name: action.reporting_lastName,
        phonenumber: action.reporting_phone,
        town_hall_id: townHallId,
      })
        .then(() => {
          store.dispatch(eraseReportingFields());
          // store.dispatch(saveAdminReports());
          store.dispatch(setMessage('Votre signalement a été envoyé à l\'équipe municipale, il sera traité dès que possible', true));
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
        });
      break;
    default:
      next(action);
  }
};

export default api;
