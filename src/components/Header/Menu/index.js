import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

import './style.scss';

function Menu() {

  const { isOpen } = useSelector((state) => state.menu);

  return (
    <div className='menu'>
    { isOpen && (
      <nav>
      <div className='menu-list'>

        <NavLink className='menu-item' to="/articles/:mairie_id">
            <Icon name='newspaper outline' size='huge'/>
            <p className='menu-label'>Articles</p>
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

        <NavLink className='menu-item' to="/admin">
            <Icon name='sign-in' size='huge'/>
            <p className='menu-label'>Espace administration</p>
        </NavLink>

      </div>
      </nav>
    )}
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
