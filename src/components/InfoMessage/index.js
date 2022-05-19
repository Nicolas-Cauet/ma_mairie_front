import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const InfoMessage = ({ type }) => (
  <Message type={type} />
);

InfoMessage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default InfoMessage;
