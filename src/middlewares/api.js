import axios from 'axios';

import { SUBMIT_LOGIN,
  SUBMIT_SIGNUP,
  setLoginMessage,
  toggleLogin,
  activeConnectionButton,
  login,
} from '../actions/action';
import { redirect } from '../actions/utilities';

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
          store.dispatch(setLoginMessage('Votre inscription c\'est déroulée avec succès, vous pouvez vous connecter', true));
          store.dispatch(toggleLogin());
          store.dispatch(activeConnectionButton());
        })
        .catch((error) => {
          store.dispatch(setLoginMessage('Une erreur est survenue, veuillez recommencer', false));
        });
    break;
    case SUBMIT_LOGIN:
      instance.post('/login', {
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
          store.dispatch(setLoginMessage('Email et/ou Mot de passe incorrect', false));
          store.dispatch(redirect('/'));
          console.log(error);
        });
  break;
    default:
      next(action);
  }
};

export default api;