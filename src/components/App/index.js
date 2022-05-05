import PropTypes from 'prop-types';

import Login from '../Login';
import Header from '../Header';
import logo from '../../assets/images/logo.png';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';

function App() {
  console.log(logo);
  return (
    <div className='app'>
      <Header />
      <Login />
    </div>
  );
}

App.propTypes = {

};

export default App;

