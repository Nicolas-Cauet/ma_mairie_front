import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleMenu } from '../../actions/menu';
import { setMessage } from '../../actions/utilities';
import { resetErrorReporting } from '../../actions/reporting';
import { eraseValueActiveIndex } from '../../actions/reports';

import photo from '../../assets/images/logo2.png';
// import logo from '../../assets/images/favicon-64.png';

import './style.scss';

function Header() {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.menu);

  /** Clicking menu button
   * @toggleMenu open menu
   * @setMessage reset error message
   * @resetErrorReporting reset errors on reporting field
   * @eraseValueActiveIndex close every report accordion
   */
  const handleToggle = () => {
    dispatch(toggleMenu());
    dispatch(setMessage(''));
    dispatch(resetErrorReporting());
    dispatch(eraseValueActiveIndex());
  };

  return (
    <header className="header">
      {/* <Link className="header-head" to="/">
        <img src={logo} className="header-logo" alt="Mairie" />
        <h1 className="header-title">mamairie.fr</h1>
        <h2>Votre mairie vous ressemble  et vous rassemble</h2>
      </Link> */}
      <Link to="/">
        <img src={photo} className="header-photo" alt="Mairie" />
      </Link>
      <div className="header-content">
        <Link to="/">
          <h1 className="header-title">Mairie d'Apothéose sur O'Clock</h1>
        </Link>
        <Button className={isOpen ? 'header-button header-button--open' : 'header-button'} icon="sidebar" onClick={handleToggle} />
      </div>
    </header>
  );
}

export default Header;
