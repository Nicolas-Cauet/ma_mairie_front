import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import { Button, Message } from 'semantic-ui-react';
import Field from '../Field';

import {
  logout, submitSignup, submitLogin, toggleLogin, toggleSignup,
} from '../../actions/action';

import './style.scss';
import { setMessage } from '../../actions/utilities';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    logged,
    isOpenSignup,
    isOpenLogin,
    activeConnectionButton,
    redirectTo,
  } = useSelector((state) => state.login);

  const {
    pseudo,
    email,
    password,
    confirmPassword,
    inseeCode,
    message,
    messageColor,
  } = useSelector((state) => state.utilities);

  const [samePassword, setSamePassword] = useState();

  useEffect(() => {
    setSamePassword(true);
  }, []);

  const handleToggleLogin = () => {
    dispatch(toggleLogin());
    dispatch(setMessage(''));
  };

  const handleToggleSignup = () => {
    dispatch(toggleSignup());
    dispatch(setMessage(''));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleSubmitSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setSamePassword(false);
    } else {
      setSamePassword(true);
      dispatch(submitSignup(pseudo, email, password, inseeCode));
    }
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(submitLogin(email, password));
  };
  useEffect(() => {
    if (redirectTo !== '') {
      navigate(redirectTo);
    }
  });

  return (
    <div className="login">
      <h1>Accèder à votre espace d'administration</h1>
      {logged && (
        <Button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      )}
      {!logged && (
        <Button.Group>
          <Button
            type="button"
            className="login-button"
            onClick={handleToggleSignup}
          >
            Inscription
          </Button>
          <Button.Or text="Ou" />
          <Button
            active={activeConnectionButton}
            type="button"
            className="login-button"
            onClick={handleToggleLogin}
          >
            Connexion
          </Button>
        </Button.Group>
      )}

      {(isOpenSignup && !logged) && (
        <form className="login-form" onSubmit={handleSubmitSignup}>
          <Field
            type="text"
            className="login-input"
            placeholder="Pseudonyme"
            value={pseudo}
            name="pseudo"
            title="pseudo"
            icon="user"

          />
          <Field
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            name="email"
            title="email"
            icon="at"
          />
          <p className="login-info">exemple : john.doe@gmail.com</p>
          <Field
            type="password"
            className="login-input"
            placeholder="Mot de passe"
            value={password}
            name="password"
            title="password"
            icon="key"
            inputError={!samePassword}
          />
          <p className="login-info">Doit contenir 8 caractères minimum, une majuscule et un caractère spécial (-@?!)</p>
          <Field
            error
            type="password"
            className="login-input"
            placeholder="Confirmation mot de passe"
            value={confirmPassword}
            name="confirmPassword"
            title="Confirmer password"
            icon="key"
            inputError={!samePassword}
          />
          {samePassword ? '' : <p className="red">Les mots de passe sont différents</p>}

          <Field
            type="tel"
            className="login-input"
            placeholder="Code INSEE"
            value={inseeCode}
            name="inseeCode"
            title="inseeCode"
            icon="building"
          />
          <Button
            type="submit"
            className="login-form-button"
          >
            S'inscrire
          </Button>
        </form>
      )}

      {(isOpenLogin && !logged) && (
        <form className="login-form" onSubmit={handleSubmitLogin}>
          <Field
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            name="email"
            title="email"
            icon="at"
          />
          <Field
            type="password"
            className="login-input"
            placeholder="Mot de passe"
            value={password}
            name="password"
            title="password"
            icon="key"
          />
          <Button
            type="submit"
            className="login-form-button"
          >
            Se connecter
          </Button>
        </form>
      )}

      { message && (
        messageColor
          ? <Message positive>  <p>{message}</p> </Message>
          : <Message negative>  <p>{message}</p> </Message>
      )}

    </div>
  );
}

Login.propTypes = {
  // email: PropTypes.string,
  // password: PropTypes.string,
  // inseeCode: PropTypes.number,
  // logged: PropTypes.bool,
  // isOpenSignup: PropTypes.bool,
  // isOpenLogin: PropTypes.bool,
  // message: PropTypes.string,
  // activeConnectionButton: PropTypes.bool,
};

export default Login;
