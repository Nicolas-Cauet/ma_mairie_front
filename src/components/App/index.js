// import PropTypes from 'prop-types';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Menu from '../Menu';
import Home from '../Home';
import Footer from '../Footer';
import Admin from '../Admin';
import Reporting from '../Reporting';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={(<Admin />)} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="*" element={<p>route inconnue</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

// App.propTypes = {

// };

export default App;

