import axios from 'axios';

// import { toggleMenu } from '../actions/menu';
import { eraseReportingFields, SUBMIT_REPORTING } from '../actions/reporting';
import {
  GET_REPORTS,
  saveAdminReports,
  saveReports,
  toggleReporting,
} from '../actions/reports';
import { loading } from '../actions/utilities';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
});

// if (localStorage.getItem('accessToken')) {
// const accessToken = localStorage.getItem('accessToken');
//   instance.defaults.headers.common.Authorization = `bearer ${accessToken}`;
// }

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_REPORTS:
      store.dispatch(loading(true));
      console.log('GET Reports');
      instance.get('/reporting/1')
        .then((response) => {
          console.log(response);
          store.dispatch(saveReports(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(loading(false));
        });
      break;
    case SUBMIT_REPORTING:
      console.log('POST Reporting');
      instance.post('/reporting/1', {
        reporting_category: action.reporting_category,
        title: action.reporting_title,
        user_text: action.reporting_description,
        email: action.reporting_email,
        first_name: action.reporting_firstName,
        last_name: action.reporting_lastName,
        phonenumber: action.reporting_phone,
        town_hall_id: 1,
      })
        .then((response) => {
          console.log('POST Reporting OK');
          console.log(response);
          store.dispatch(toggleReporting());
          store.dispatch(eraseReportingFields());
          store.dispatch(saveAdminReports());
          // store.dispatch(toggleMenu());
          // message de succ_s pour le user

          // message de succès
        })
        .catch((error) => {
          console.log(error);
          // message d'echec
          // store.dispatch(setLoginMessage
          // ('Une erreur est survenue, veuillez recommencer', false));
        });
      break;
    default:
      next(action);
  }
};

export default api;
