// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import { toggleMenu } from '../../actions/menu';
import { eraseValueActiveIndex, toggleReporting } from '../../actions/reports';

import './style.scss';

function Menu() {
  const { isOpen } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  // After redirect, hide menu on click
  const hideMenu = () => {
    dispatch(toggleMenu(false));
    dispatch(toggleReporting(false));
  };

  return (
    <div className="menu">
      { isOpen && (
      <nav className="menu-list">
        <NavLink className="menu-item" to="/articles/1" onClick={hideMenu}>
          <Button className="article">
            <section className="buttonMenu-container">
              <Icon name="newspaper outline" />
              <p>Articles</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className="menu-item" to="/reports/1" onClick={hideMenu}>
          <Button className="warning" onClick={() => dispatch(eraseValueActiveIndex())}>
            <section className="buttonMenu-container">
              <Icon name="warning sign" />
              <p>Signaler</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className="menu-item" to="/council/1" onClick={hideMenu}>
          <Button className="council">
            <section className="buttonMenu-container">
              <Icon className="council" name="building outline" />
              <p>Conseil Municipal</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className="menu-item" to="/school/1" onClick={hideMenu}>
          <Button className="school">
            <section className="buttonMenu-container">
              <Icon name="student" />
              <p>Ecole</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className="menu-item" to="/" onClick={hideMenu}>
          <Button className="homepage">
            <section className="buttonMenu-container">
              <Icon name="home" />
              <p>Accueil</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className="menu-item" to="/admin" onClick={hideMenu}>
          <Button className="admin">
            <section className="buttonMenu-container">
              <Icon name="sign-in" />
              <p>Administration</p>
            </section>
          </Button>
        </NavLink>
      </nav>
      )}
    </div>
  );
}

// Menu.propTypes = {

// };

export default Menu;
