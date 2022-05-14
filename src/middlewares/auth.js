import axios from 'axios';

import {
  SUBMIT_LOGIN,
  SUBMIT_SIGNUP,
  setLoginMessage,
  toggleLogin,
  activeConnectionButton,
  login,
  LOGOUT,
  setLogout,
} from '../actions/action';
import { redirect } from '../actions/utilities';

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
          console.log('User signup');
          console.log(response);
          store.dispatch(toggleLogin());
          store.dispatch(activeConnectionButton());
          store.dispatch(setLoginMessage('Votre inscription c\'est déroulée avec succès, vous pouvez vous connecter', true));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoginMessage('Une erreur est survenue, veuillez recommencer', false));
        });
      break;
    case SUBMIT_LOGIN:
      instance.post('/login', {
        email: action.email,
        password: action.password,
      })
        .then((response) => {
          console.log('User login');
          console.log(response);
          store.dispatch(login());
          store.dispatch(redirect('/'));

          // Récupération du token lors du login
          const { accessToken } = response.data;
          console.log(accessToken);
          instance.defaults.headers.common.Authorization = `bearer ${accessToken}`;
          localStorage.setItem('accessToken', accessToken);
        })
        .catch((error) => {
          store.dispatch(setLoginMessage('Email et/ou Mot de passe incorrect', false));
          console.log(error);
        });
      break;
    case LOGOUT: {
      console.log('User logout');
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem('token');
      console.log('token deleted');
      store.dispatch(setLogout());
      break;
    }
    default:
      next(action);
  }
};

export default auth;
