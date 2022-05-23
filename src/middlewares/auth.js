import axios from 'axios';

import {
  SUBMIT_LOGIN,
  SUBMIT_SIGNUP,
  toggleLogin,
  activeConnectionButton,
  login,
  LOGOUT,
  setLogout,
} from '../actions/login';
import { redirect, setMessage } from '../actions/utilities';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
});

// if (localStorage.getItem('accessToken')) {
//   const accessToken = localStorage.getItem('accessToken');
//   instance.defaults.headers.common.Authorization = `bearer ${accessToken}`;
// }

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SIGNUP:
      instance.post('/signup', {
        pseudo: action.pseudo,
        email: action.email,
        password: action.password,
        insee: action.inseeCode,
      })
        .then((response) => {
          store.dispatch(toggleLogin());
          store.dispatch(activeConnectionButton());
          store.dispatch(setMessage(response.data, true));
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
        });
      break;
    case SUBMIT_LOGIN:
      instance.post('/login', {
        email: action.email,
        password: action.password,
      })
        .then((response) => {
          store.dispatch(login());
          store.dispatch(redirect('/'));

          // Récupération du token lors du login
          const { accessToken } = response.data;
          instance.defaults.headers.common.Authorization = `bearer ${accessToken}`;
          localStorage.setItem('accessToken', accessToken);
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
        });
      break;
    case LOGOUT: {
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem('token');
      store.dispatch(setLogout());
      store.dispatch(setMessage('Vous êtes déconnecté', true));
      break;
    }
    default:
      next(action);
  }
};

export default auth;
