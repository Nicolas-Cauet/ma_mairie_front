// import PropTypes from 'prop-types';
// import Menu from './Menu'
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../../actions/menu';
import { setMessage } from '../../actions/utilities';

import photo from '../../assets/images/logo2.png';
import logo from '../../assets/images/favicon-64.png';

import './style.scss';

function Header() {
  const { isOpen } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const HandleToggle = () => {
    dispatch(toggleMenu());
    dispatch(setMessage(''));
  };

  return (
    <header className="header">
      <Link className="header-head" to="/">
        <img src={logo} className="header-logo" alt="Mairie" />
        <h1 className="header-title">mamairie.fr</h1>
        <h2>Votre mairie vous ressemble  et vous rassemble</h2>
      </Link>
      <Link to="/">
        <img src={photo} className="header-photo" alt="Mairie" />
      </Link>
      <div className="header-content">
        <Link to="/">
          <h1 className="header-title">Mairie d'Apothéose sur O'Clock</h1>
        </Link>
        <Button className={isOpen ? 'header-button header-button--open' : 'header-button'} icon="sidebar" onClick={HandleToggle} />
      </div>
    </header>
  );
}

// Header.propTypes = {
// };

export default Header;
