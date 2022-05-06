// import PropTypes from 'prop-types';

import { Routes, Route } from 'react-router-dom';

import Login from '../Login';
import Header from '../Header';
import Menu from '../Header/Menu';
import logo from '../../assets/images/logo.png';
import Home from '../Home';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';


function App() {
  return (
    <div className='app'>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={(<Login />)} />
        <Route path="*" element={<p>route inconnue</p>} />
      </Routes>
    </div>
  );
}

// App.propTypes = {

// };

export default App;

