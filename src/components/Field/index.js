import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Input } from 'semantic-ui-react'

import { changeCurrentField } from '../../actions/action';

import './style.scss';
/***
 * JS Docs
 */
function Field({ type, value, title, placeholder, icon }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCurrentField(event.target.value, title));
  };

  const inputId = `field-${title}`
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
