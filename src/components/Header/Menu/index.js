import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Grid, Button, Icon, Image } from 'semantic-ui-react'

import './style.scss';

function Menu() {

  const { isOpen } = useSelector((state) => state.menu);

  return (
    <div className='menu'>
    { isOpen && (
      <nav className='menu-list'>
        <NavLink className='menu-item' to="/articles/:mairie_id">
          <Button color='blue'>
            <section className='button-container'>
              <Icon name='newspaper outline' />
              <p>Articles</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/reports/:mairie_id">
          <Button color='orange'>
            <section className="button-container">
              <Icon name='warning sign' />
              <p>Signaler</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/council/:mairie_id">
          <Button color='red' className='council'>
            <section className="button-container">
              <Icon name='building outline' />
              <p>Conseil Municipal</p>
            </section>
          </Button>
        </NavLink>
        <NavLink className='menu-item' to="/school/:mairie_id">
          <Button color='violet'>
            <section className="button-container">
              <Icon name='student' />
              <p>Ecole</p>
            </section>
          </Button>
        </NavLink>

          {/* <Button color='linkedin'>
            <section className="button-container">
              <Icon name='sign-in' />
              <p>LinkedIn</p>
            </section>
          </Button>
          <Button color='instagram'>
            <section className="button-container">
              <Icon name='instagram' />
              <p>Instagram</p>
            </section>
          </Button>
          <Button color='youtube'>
              <section className="button-container">
                <Icon name='youtube' />
                <p>YouTube</p>
              </section>
          </Button> */}
        
      </nav>
    )}
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
