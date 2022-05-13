import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Input } from 'semantic-ui-react';

import { changeCurrentField } from '../../actions/utilities';

import './style.scss';

function Field({
  type, value, title, placeholder, icon, inputError, name,
}) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCurrentField(event.target.value, name));
  };

  const inputId = `field-${name}`;
  return (
    <Input
      error={inputError}
      id={inputId}
      value={value}
      type={type}
      className="field-input"
      icon={icon}
      iconPosition="left"
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      title={title}
    />
  );
}

Field.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  inputError: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Field;
