import axios from 'axios';

import { SUBMIT_REPORTING } from '../actions/reporting';
import { GET_REPORTS, saveReports } from '../actions/reports';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
});

// if (localStorage.getItem('accessToken')) {
//   const accessToken = localStorage.getItem('accessToken');
//   instance.defaults.headers.common.Authorization = `bearer ${accessToken}`;
// }

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_REPORTS:
      console.log('GET Reports');
      instance.get('/reporting/1')
        .then((response) => {
          console.log(response);
          store.dispatch(saveReports(response.data));
          // store.dispatch(login());
          // store.dispatch(redirect('/'));
        })
        .catch((error) => {
          // message d'erreur à faire
          // store.dispatch(setLoginMessage('Email et/ou Mot de passe incorrect', false));
          console.log(error);
        });
      break;
    case SUBMIT_REPORTING:
      console.log('POST Reporting');
      instance.post('/admin/reporting/1', {
        pseudo: action.pseudo,
        email: action.email,
        password: action.password,
        insee: action.inseeCode,
      })
        .then((response) => {
          console.log('POST Reporting OK');
          console.log(response);

          // message de succès
          // store.dispatch(setLoginMessage
          // ('Votre inscription c\'est déroulée avec succès, vous pouvez vous connecter', true));
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
