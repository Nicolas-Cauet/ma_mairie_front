import axios from 'axios';

// import { toggleMenu } from '../actions/menu';
import { eraseReportingFields, SUBMIT_REPORTING } from '../actions/reporting';
import {
  GET_REPORTS,
  saveReports,
} from '../actions/reports';
import { loading, setMessage } from '../actions/utilities';

/** Instance of axios with options */
const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
});

const api = (store) => (next) => (action) => {
  const { townHallId } = store.getState().login;
  switch (action.type) {
    case GET_REPORTS:
      store.dispatch(loading(true));
      console.log('GET Reports');
      console.log(townHallId);
      instance.get(`/reporting/${townHallId}`)
        .then((response) => {
          console.log(response);
          /** success of get request
           * @saveReports save reports to state value
           */
          store.dispatch(saveReports(response.data));
        })
        .catch((error) => {
          console.log(error);
          /** error on request
           * @setMessage set a message error
           */
          store.dispatch(setMessage('Les données concernant les signalements ne sont pas pour le moment disponible', false));
        })
        .finally(() => {
          /** after success action
           * @loading stop the loadng status of the element
           */
          store.dispatch(loading(false));
        });
      break;
    case SUBMIT_REPORTING:
      console.log('POST Reporting');
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
        .then((response) => {
          console.log('POST Reporting OK');
          console.log(response);
          /** success of get request
           * @eraseReportingFields reset field content of reporting component
           * @setMessage set a success message
           */
          store.dispatch(eraseReportingFields());
          store.dispatch(setMessage('Votre signalement a été envoyé à l\'équipe municipale, il sera traité dès que possible', true));
        })
        .catch((error) => {
          console.log(error);
          /** error on request
           * @setMessage set a message error
           */
          store.dispatch(setMessage(error.response.data.error.message, false));
        });
      break;
    default:
      next(action);
  }
};

export default api;
