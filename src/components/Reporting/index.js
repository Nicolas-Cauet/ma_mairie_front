import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react'


import './style.scss';

function Reporting() {
  return (
    <Button>
      <Icon name='facebook' /> Signaler
    </Button>
  );
}

Reporting.propTypes = {

};

export default Reporting;
