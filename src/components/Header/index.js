import PropTypes from 'prop-types';
import Menu from './Menu'

import logo from '../../assets/images/logo.png';

import './style.scss';

function Header() {
  return (
    <header className='header'>
      <img src={logo} className="header-logo" alt="Mairie" />
      <div className='header-content'>
        <h1 className="header-title">mamairie.fr</h1>
        <Menu />
      </div>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
