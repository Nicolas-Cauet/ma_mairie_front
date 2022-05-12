// import PropTypes from 'prop-types';
// import Menu from './Menu'
import { Button } from 'semantic-ui-react';
import { toggleMenu } from '../../actions/menu';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import './style.scss';



function Header() {

  const { isOpen } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const HandleToggle = () => {
    dispatch(toggleMenu());
  }

  return (
    <header className='header'>
      <Link to="/">
        <img src={logo} className="header-logo" alt="Mairie"/>
      </Link>
      <div className='header-content'>
        <Link to="/">
          <h1 className="header-title">mamairie.fr</h1>
        </Link>
        <Button className= {isOpen ? 'header-button header-button--open' : 'header-button'} icon='sidebar' onClick={HandleToggle}/>
      </div>
    </header>
  );
}

// Header.propTypes = {
// };

export default Header;
