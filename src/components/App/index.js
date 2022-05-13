// import PropTypes from 'prop-types';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Menu from '../Menu';
import Home from '../Home';
import Footer from '../Footer';
import Admin from '../Admin';
import Reports from '../Reports';
import ReportAdmin from '../ReportAdmin';

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
        <Route path="/admin/reporting/1" element={<Reports />} />
        <Route path="/admin/reporting/1/:reporting_id" element={<ReportAdmin />} />
        <Route path="*" element={<p>route inconnue</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

// App.propTypes = {

// };

export default App;
