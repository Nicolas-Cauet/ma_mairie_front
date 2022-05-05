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
    console.log(event.target.value);
    console.log(title);
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

};

export default Field;
