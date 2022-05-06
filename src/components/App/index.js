// import PropTypes from 'prop-types';
import Login from '../Login';
import Header from '../Header';
import Menu from '../Header/Menu';
import logo from '../../assets/images/logo.png';
import Home from '../Home';
import Footer from '../Footer';


import { Route, Routes } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';


function App() {
  console.log(logo);
  return (
    <div className='app'>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>route inconnue</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

// App.propTypes = {

// };

export default App;

