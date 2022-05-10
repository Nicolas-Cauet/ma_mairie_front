// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Button, Icon, } from 'semantic-ui-react'

import './style.scss';

function Menu() {

  const { isOpen } = useSelector((state) => state.menu);

  return (
    <div className='menu'>
    { isOpen && (
      <nav className='menu-list'>
        <NavLink className='menu-item' to="/articles/:mairie_id">
          <Button className='article'>
            <section className='button-container'>
              <Icon name='newspaper outline' />
              <p>Articles</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/reports/:mairie_id">
          <Button className='warning'>
            <section className="button-container">
              <Icon name='warning sign' />
              <p>Signaler</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/council/:mairie_id">
          <Button className='council'>
            <section className="button-container">
              <Icon name='building outline' />
              <p>Conseil Municipal</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/school/:mairie_id">
          <Button className='school'>
            <section className="button-container">
              <Icon name='student' />
              <p>Ecole</p>
            </section>
          </Button>
        </NavLink> 
        <NavLink className='menu-item' to="/admin">
          <Button className='admin'>
            <section className="button-container">
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
