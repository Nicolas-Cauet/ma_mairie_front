import PropTypes from 'prop-types';
import Menu from './Menu'
import { Button } from 'semantic-ui-react';
import { toggleMenu } from '../../actions/action';
import { useDispatch } from 'react-redux';

import logo from '../../assets/images/logo.png';

import './style.scss';


function Header() {

  const dispatch = useDispatch();

  const HandleToggle = () => {
    dispatch(toggleMenu());
  }

  return (
    <header className='header'>
      <img src={logo} className="header-logo" alt="Mairie" />
      <div className='header-content'>
        <h1 className="header-title">mamairie.fr</h1>
        <div className='header-button'>
        <Button icon='sidebar' size='big' onClick={HandleToggle}/>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
