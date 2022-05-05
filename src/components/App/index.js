// import PropTypes from 'prop-types';
import Login from '../Login';
import Header from '../Header';
import logo from '../../assets/images/logo.png';
import { Route, Routes } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';


function App() {
  console.log(logo);
  return (
    <div className='app'>
      <Header />
      <Login />
      <Routes>
        <Route path="/" element={<p>Bienvenue sur le route accueil</p>} />
        <Route path="*" element={<p>route inconnue</p>} />
      </Routes>
    </div>
  );
}

// App.propTypes = {

// };

export default App;

