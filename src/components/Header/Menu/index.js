import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Grid, Button, Icon, Image } from 'semantic-ui-react'

import './style.scss';

function Menu() {

  const { isOpen } = useSelector((state) => state.menu);

  return (
    <>
    {/* <div className="div-grid">
    <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Button className="grid-button">
        <div className='div-icon'>
          <Icon className="grid-icon" size="huge" name='world' />
          <p>Coucou</p>
        </div>
        </Button>
      </Grid.Column>
      <Grid.Column>
      <Button className="grid-button" primary>Primary
          <Icon name='world' />
        </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <Button className="grid-button" primary>Primary
          <Icon name='world' />
        </Button>
      </Grid.Column>
      <Grid.Column>
      <Button className="grid-button" primary>Primary
          <Icon name='world' />
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </div> */}

    <div className='menu'>
    { isOpen && (
      <nav>
      <div className='menu-list'>
      
        <NavLink className='menu-item' to="/articles/:mairie_id">
            <Button icon color='blue'>
              <Icon name='newspaper outline' size='huge'/>
              <p className='menu-label'>Articles</p>
            </Button>
        </NavLink>
        <NavLink className='menu-item' to="/reports/:mairie_id">
        <Button icon color='green' className='button-signaler'>
              <Icon floated='right' name='warning sign' size='huge'/>
              <p className='menu-label'>Signaler</p>
            </Button>
        </NavLink>
        <NavLink className='menu-item' to="/reports/:mairie_id">
            <Icon name='warning sign' size='huge'/>
            <p className='menu-label'>Signaler</p>
        </NavLink>

        <NavLink className='menu-item' to="/council/:mairie_id">
            <Icon name='building outline' size='huge'/>
            <p className='menu-label'>Conseil municipal</p>
        </NavLink>

        <NavLink className='menu-item' to="/school/:mairie_id">
            <Icon name='student' size='huge'/>
            <p className='menu-label'>Ecoles</p>
        </NavLink>

        <NavLink className='menu-item menu-item--test' to="/admin">
            <Icon name='sign-in' size='huge'/>
            <p className='menu-label'>Espace administration</p>
        </NavLink>

      </div>
      </nav>
    )}
    </div>
    </>
  );
}

Menu.propTypes = {

};

export default Menu;
