// import PropTypes from 'prop-types';

import logo from '../../assets/images/logo.png';

import './style.scss';

function Header() {
  return (
    <header className='header'>
      <img src={logo} className="header-logo" alt="Mairie" />
      <h1 className="header-title">mamairie.fr</h1>
    </header>
  );
}

// Header.propTypes = {

// };

export default Header;
