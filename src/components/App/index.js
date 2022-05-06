// import PropTypes from 'prop-types';

import { Routes, Route } from 'react-router-dom';

import Login from '../Login';
import Header from '../Header';
import logo from '../../assets/images/logo.png';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/admin" element={(<div>Coucou</div>)} />
        <Route path="/" element={(<Login />)} /> 
      </Routes>
    </div>
  );
}

// App.propTypes = {

// };

export default App;

