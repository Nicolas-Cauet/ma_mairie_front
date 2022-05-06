import PropTypes from 'prop-types';
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

import './style.scss';

function Menu() {
  return (
    <Dropdown direction='left' icon='sidebar' className='menu-icon'>
    <Menu.Item>
      <Icon name='newspaper outline'/>Articles
      {/* <Dropdown.Item icon='warning sign' text='Signaler' />
      <Dropdown.Item icon='building outline' text='Conseil municipal' />
      <Dropdown.Item icon='student' text='Ecoles' />
      <Dropdown.Item icon='sign-in' text='Espace administration' /> */}
    </Dropdown.Menu>
  </Dropdown>
  );
}

Menu.propTypes = {

};

export default Menu;
