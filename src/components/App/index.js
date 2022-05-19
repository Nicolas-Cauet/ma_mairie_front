// import PropTypes from 'prop-types';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Menu from '../Menu';
import Home from '../Home';
import Footer from '../Footer';
import Admin from '../Admin';
import Reports from '../Reports';
import ReportAdmin from '../ReportAdmin';
import InProgress from '../InProgress';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import Council from '../Council';

function App() {
  const adminlogged = useSelector((state) => state.login.logged);

  return (
    <div className="app">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={(<Admin />)} />
        <Route path="/reports/1" element={<Reports />} />
        <Route path="/council/1" element={<Council />} />
        <Route path="/articles/1" element={<InProgress />} />
        <Route path="/school/1" element={<InProgress />} />

        { adminlogged && (
          <>
            <Route path="/admin/reports/1" element={<Reports />} />
            <Route path="/admin/reports/1/:reporting_id" element={<ReportAdmin />} />
            <Route path="/admin/council/1" element={<Council />} />

          </>
        )};
        <Route path="*" element={<p>route inconnue</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

// App.propTypes = {

// };

export default App;
