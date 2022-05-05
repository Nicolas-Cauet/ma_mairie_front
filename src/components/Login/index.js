import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Field from '../Field'

import './style.scss';

function Login() {
  const { email, password, inseeCode, logged, isOpenSignup, isOpenLogin } = useSelector((state) => state.login);
  const handleLogin = () => {
  }
  const handleSignup = () => {
  }
  const handleChange = (event) => {
  };
  const changeField = () => {
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <button type="button" className="login-signup" onClick={handleSignup} >s'inscrire</button>
        {isOpenSignup && (
            <form className="login-form" onSubmit={handleSubmit}>
                <Field
                type="email"
                className="login-input"
                placeholder="email"
                value={email}
                onChange={changeField}
                title="email"
                />
                <Field
                type="password"
                className="login-input"
                placeholder="Mot de passe"
                value={password}
                onChange={(event) => handleChange(event.target.value, 'password')}
                title="password"
                />
                <Field
                type="insee-code"
                className="login-input"
                placeholder="Code INSEE"
                value={inseeCode}
                onChange={(event) => handleChange(event.target.value, 'insee-code')}
                title="insee-code"
                />
                <button
                type="submit"
                className="login-form-button"
                >
                Envoyer
                </button>
            </form>
            )}
        

      <button type="button" className="login-login" onClick={handleLogin} >se connecter</button>
      {!isOpenLogin && (
        <form className="login-form" onSubmit={handleSubmit}>
                <Field
                type="email"
                className="login-input"
                placeholder="Email"
                value={email}
                title="email"
                />
                <Field
                type="password"
                className="login-input"
                placeholder="Mot de passe"
                value={password}
                title="password"
                />
                <Field
                type="insee-code"
                className="login-input"
                placeholder="Code INSEE"
                value={inseeCode}
                title="inseeCode"
                />
                <button
                type="submit"
                className="settings__submit"
                >
                Envoyer
                </button>
            </form>
      )}
    </>
  );
}

Login.propTypes = {

};

export default Login;
