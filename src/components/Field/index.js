import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Input } from 'semantic-ui-react'

import { changeCurrentField } from '../../actions/utilities';

import './style.scss';
/***
 * JS Docs
 */
function Field({ type, value, title, placeholder, icon, inputError, name }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCurrentField(event.target.value, name));
  };

  const inputId = `field-${name}`
  return (
      <Input error={inputError}
        id={inputId}
        value={value}
        type={type}
        className={inputId}
        icon={icon}
        iconPosition='left'
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        title={title}
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
