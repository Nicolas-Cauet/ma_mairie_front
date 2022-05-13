// import PropTypes from 'prop-types';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Menu from '../Menu';
import Home from '../Home';
import Footer from '../Footer';
import Admin from '../Admin';
import Reports from '../Reports';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={(<Admin />)} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin/reports/1" element={<Reports />} />
        <Route path="*" element={<p>route inconnue</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

// App.propTypes = {

// };

export default App;
