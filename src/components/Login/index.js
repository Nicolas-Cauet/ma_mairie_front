import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Field from '../Field'

import { Button } from 'semantic-ui-react'

import './style.scss';
import { logout, submitSignup, submitLogin } from '../../actions/action';

function Login() {
  const dispatch = useDispatch();

  const { email, password, inseeCode, logged, isOpenSignup, isOpenLogin } = useSelector((state) => state.login);
  
  const toggleLogin = () => {
    dispatch(toggleLogin());
  };
  
  const toggleSignup = () => {
    dispatch(toggleSignup());
  };
  
  const handleLogout = () => {
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
          onClick={toggleSignup}
        >
          Inscription
        </Button>
        <Button.Or text="Ou"/>
          <Button
            type="button"
            className="login-button"
            onClick={toggleLogin}
          >
            Connexion
          </Button>
      </Button.Group>
      )}
      
      {isOpenSignup && (
        <form className="login-form" onSubmit={handleSubmitSignup}>
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
        {/* <div>CEci est un mesage d'erreur</div> */}
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
};

export default Login;
