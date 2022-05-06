import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react'

import './style.scss';

function Menu() {

  const { isOpen } = useSelector((state) => state.menu);

  return (
    <div className='menu'>
    { isOpen && (
      <div className='menu-list'>
        <div className='menu-item'>
          <Icon name='newspaper outline' size='huge'/>
          <p className='menu-label'>Articles</p>
        </div>
        <div className='menu-item'>
          <Icon name='warning sign' size='huge'/>
          <p className='menu-label'>Signaler</p>
        </div>
        <div className='menu-item'>
          <Icon name='building outline' size='huge'/>
          <p className='menu-label'>Conseil municipal</p>
        </div>
        <div className='menu-item'>
          <Icon name='student' size='huge'/>
          <p className='menu-label'>Ecoles</p>
        </div>
        <div className='menu-item'>
          <Icon name='sign-in' size='huge'/>
          <p className='menu-label'>Espace administration</p>
        </div>
      </div>
    )}
    </div>
    // <Dropdown direction='left' icon='sidebar' className='menu-icon'>
    //   <Dropdown.Menu>
    //   <Icon name='newspaper outline'/>Articles
    //   <Dropdown.Item icon='warning sign' text='Signaler' />
    //   <Dropdown.Item icon='building outline' text='Conseil municipal' />
    //   <Dropdown.Item icon='student' text='Ecoles' />
    //   <Dropdown.Item icon='sign-in' text='Espace administration' />
    //   </Dropdown.Menu>
    // </Dropdown>

    // <Dropdown direction='left' icon='sidebar' className='menu-icon'>
      
    //   <Dropdown.Menu className='menu-list'>
    //     <Icon name='newspaper outline' size='big'/>Articles
    //     <Icon name='warning sign' size='big'/>Signaler
    //     <Icon name='building outline' size='big'/>Conseil municipal
    //     <Icon name='student' size='big'/>Ecoles
    //     <Icon name='sign-in' size='big'/>Espace administration
    //   </Dropdown.Menu>
    // </Dropdown>
  );
}

Menu.propTypes = {

};

export default Menu;
