// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Button, Icon, } from 'semantic-ui-react'

import './style.scss';
import { toggleMenu } from '../../actions/menu';

function Menu() {

  const { isOpen } = useSelector((state) => state.menu);

  const dispatch= useDispatch();

  //After redirect, hide menu on click
  const hideMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='menu'>
    { isOpen && (
      <nav className='menu-list'>
        <NavLink className='menu-item' to="/articles/:mairie_id" onClick={hideMenu}>
          <Button className='article'>
            <section className='buttonMenu-container'>
              <Icon name='newspaper outline' />
              <p>Articles</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/reports" onClick={hideMenu}>
          <Button className='warning'>
            <section className="buttonMenu-container">
              <Icon name='warning sign' />
              <p>Signaler</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/council/:mairie_id" onClick={hideMenu}>
          <Button className='council'>
            <section className="buttonMenu-container">
              <Icon className='council' name='building outline' />
              <p>Conseil Municipal</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/school/:mairie_id" onClick={hideMenu}>
          <Button className='school'>
            <section className="buttonMenu-container">
              <Icon name='student' />
              <p>Ecole</p>
            </section>
          </Button>
        </NavLink> 
        <NavLink className='menu-item' to="/admin" onClick={hideMenu}>
          <Button className='admin'>
            <section className="buttonMenu-container">
              <Icon name='sign-in' />
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
