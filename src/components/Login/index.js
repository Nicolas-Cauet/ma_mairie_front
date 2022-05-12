import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import Field from '../Field'

import { logout, submitSignup, submitLogin, toggleLogin, toggleSignup } from '../../actions/action';

import { Button, Message } from 'semantic-ui-react'
import './style.scss';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { 
    pseudo,
    email,
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
    console.log('User logout');
    dispatch(logout());
  };

  const handleSubmitSignup = (event) => {
    event.preventDefault();
    dispatch(submitSignup(pseudo, email, password, inseeCode))
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
          className='logout-button'
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
      
      {(isOpenSignup && !logged) && (
        <form className="login-form" onSubmit={handleSubmitSignup}>
          <Field
          type="text"
          className="login-input"
          placeholder="Pseudonyme"
          value={pseudo}
          title="pseudo"
          icon="user"
          />
          <Field
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          title="email"
          icon="at"
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

      {(isOpenLogin && !logged) && (
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

      { loginMessage && (
        loginMessageColor ? 
        <Message positive>  <p>{loginMessage}</p> </Message>
        :
        <Message negative>  <p>{loginMessage}</p> </Message>
      )}

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
