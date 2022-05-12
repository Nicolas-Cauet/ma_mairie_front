import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Input } from 'semantic-ui-react'

import { changeCurrentField } from '../../actions/utilities';

import './style.scss';

function Field({ type, value, name, placeholder, icon }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCurrentField(event.target.value, name));
  };

  const inputId = `field-${name}`
  return (
      <Input
        id={inputId}
        value={value}
        type={type}
        className="field-input"
        icon={icon}
        iconPosition='left'
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
  );
}

Field.propTypes = {
type: PropTypes.string,
value: PropTypes.string,
title: PropTypes.string,
placeholder: PropTypes.string,
icon: PropTypes.string,
};

export default Field;
