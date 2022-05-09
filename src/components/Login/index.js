import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import Field from '../Field'

import { logout, submitSignup, submitLogin, toggleLogin, toggleSignup } from '../../actions/action';

import { Button } from 'semantic-ui-react'
import './style.scss';
import { redirect } from '../../actions/utilities';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email,
    password,
    inseeCode,
    logged,
    isOpenSignup,
    isOpenLogin,
    loginMessage,
    loginMessageColor,
    activeConnectionButton,
    redirectTo,
  } = useSelector((state) => state.login);
  
  
  const handleToggleLogin = () => {
    dispatch(toggleLogin());
  };
  
  const handleToggleSignup = () => {
    dispatch(toggleSignup());
  };
  
  const handleLogout = () => {
    console.log(redirectTo);
    dispatch(logout());
  };

  const handleSubmitSignup = (event) => {
    event.preventDefault();
    dispatch(submitSignup(email, password, inseeCode))
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(submitLogin(email, password))
  };
  useEffect (()=> {
    if (redirectTo !== '') {
      navigate(redirectTo);
    };
  })
  
  return (
    <div className='login'>
      {logged && (
        <Button
          type="button"
          className='login-button'
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
        <Button.Or text="Ou"/>
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
      
      {isOpenSignup && (
        <form className="login-form" onSubmit={handleSubmitSignup}>
          <Field
          type="text"
          className="login-input"
          placeholder="Pseudonyme"
          value={email}
          title="email"
          icon="envelope"
          />
          <Field
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          title="email"
          icon="envelope"
          />
          <Field
          type="password"
          className="login-input"
          placeholder="Mot de passe"
          value={password}
          title="password"
          icon="key"
          />
          <Field
          type="insee-code"
          className="login-input"
          placeholder="Code INSEE"
          value={inseeCode}
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
      {isOpenLogin && (
        <form className="login-form" onSubmit={handleSubmitLogin}>
          <Field
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          title="email"
          icon="envelope"
          />
          <Field
          type="password"
          className="login-input"
          placeholder="Mot de passe"
          value={password}
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
        <h2 className={loginMessageColor ? 'login-message green' : 'login-message red'}>{loginMessage}</h2>
    </div>
  );
}
Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  inseeCode: PropTypes.number,
  logged: PropTypes.bool,
  isOpenSignup: PropTypes.bool,
  isOpenLogin: PropTypes.bool,
  loginMessage: PropTypes.string,
  activeConnectionButton: PropTypes.bool,
};

export default Login;
