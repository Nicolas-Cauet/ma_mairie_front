import axios from 'axios';

import { DELETE_SELECTED_REPORT, GET_ADMIN_REPORTS, saveAdminReports } from '../actions/reports';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
});

// if (localStorage.getItem('accessToken')) {
//   const accessToken = localStorage.getItem('accessToken');
//   instance.defaults.headers.common.Authorization = `bearer ${accessToken}`;
// }

const adminApi = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ADMIN_REPORTS:
      console.log('GET Admin Reports');
      instance.get('/admin/reporting/1', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })

        .then((response) => {
          console.log(response);
          store.dispatch(saveAdminReports(response.data));
          console.log(response.data);
        })

        .catch((error) => {
          // message d'erreur à faire
          // store.dispatch(setLoginMessage('Email et/ou Mot de passe incorrect', false));
          console.log(error);
        });
      break;
    case DELETE_SELECTED_REPORT: {
      const { id } = store.getState();
      console.log(id);
      console.log('DELETE Report');
      instance.delete(`/admin/reporting/1/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })

        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // message d'erreur à faire
          // store.dispatch(setLoginMessage('Email et/ou Mot de passe incorrect', false));
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default adminApi;
