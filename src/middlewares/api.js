import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';

import { SUBMIT_LOGIN,
  SUBMIT_SIGNUP,
  setLoginMessage,
  toggleLogin,
  activeConnectionButton,
  login,
  redirect,
} from "../actions/action";

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SIGNUP:
      instance.post('/signup', {
        email: action.email,
        password: action.password,
        inseeCode: action.inseeCode,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(setLoginMessage('Votre inscription c\'est dérouler avec succès'));
          store.dispatch(toggleLogin());
          store.dispatch(activeConnectionButton());
        })
        .catch((error) => {
          // store.dispatch(setLoginMessage('Une erreur est survenue, veuillez recommencer'));
          store.dispatch(setLoginMessage('Votre inscription c\'est dérouler avec succès'));
          store.dispatch(toggleLogin());
          store.dispatch(activeConnectionButton());
        });
    break;
    case SUBMIT_LOGIN:
      instance.post('login', {
        email: action.email,
        password: action.password,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(login());

          //? Récupération du token lors du login
          // const { token } = response.data;
          // instance.defaults.headers.common.Authorization = `bearer ${token}`;
          // localStorage.setItem('token', token);

        })
        .catch((error) => {
          store.dispatch(setLoginMessage('Email et/ou Mot de passe incorrect'));
          console.log(error);
          store.dispatch(redirect());
        });
  break;
    default:
      next(action);
  }
};

export default api;