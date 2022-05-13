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

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    logged,
    isOpenSignup,
    isOpenLogin,
    loginMessage,
    loginMessageColor,
    activeConnectionButton,
    redirectTo,
  } = useSelector((state) => state.login);

  const {
    pseudo,
    email,
    password,
    confirmPassword,
    inseeCode,
  } = useSelector((state) => state.utilities);

  const [samePassword, setSamePassword] = useState();

  useEffect(() => {
    setSamePassword(true);
  }, []);

  const handleToggleLogin = () => {
    dispatch(toggleLogin());
  };

  const handleToggleSignup = () => {
    dispatch(toggleSignup());
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
<<<<<<< HEAD
      dispatch(submitSignup(pseudo, email, password, inseeCode));
    } 
=======
      dispatch(submitSignup(pseudo, email, password, confirmPassword, inseeCode));
    }
>>>>>>> origin/reports
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
            // active="true"
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

      { loginMessage && (
        loginMessageColor
          ? <Message positive>  <p>{loginMessage}</p> </Message>
          : <Message negative>  <p>{loginMessage}</p> </Message>
      )}

    </div>
  );
}

Login.propTypes = {
  // email: PropTypes.string.is,
  // password: PropTypes.string,
  // inseeCode: PropTypes.number,
  // logged: PropTypes.bool,
  // isOpenSignup: PropTypes.bool,
  // isOpenLogin: PropTypes.bool,
  // loginMessage: PropTypes.string,
  // activeConnectionButton: PropTypes.bool,
};

export default Login;
