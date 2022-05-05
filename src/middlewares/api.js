import axios from "axios";

import { SUBMIT_LOGIN, SUBMIT_SIGNUP, setLoginMessage } from "../actions/action";

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
          //! en cas de succès message d'information dans le composant
          //! avec state loginMessage
          //! affichage modale Connexion
          //! avec rendu active du button connexion (créer un state)
        })
        .catch((error) => {
          store.dispatch(setLoginMessage('Une erreur est survenue, veuillez recommencer'));
        });
    break;
    case SUBMIT_LOGIN:
      instance.post('login', {
        email: action.email,
        password: action.password,
      })
        .then((response) => {
          console.log(response);

          //! besoin de mettre des informations dans le state ??
          // store.dispatch(login(response.data.pseudo));
          //! en cas de succès redirect vers la page d'accueil

          //? Récupération du token lors du login
          // const { token } = response.data;
          // instance.defaults.headers.common.Authorization = `bearer ${token}`;
          // localStorage.setItem('token', token);

        })
        .catch((error) => {
          store.dispatch(setLoginMessage('Email et/ou Mot de passe incorrect'));
          console.log(error);
        });
  break;
    default:
      next(action);
  }
};

export default api;