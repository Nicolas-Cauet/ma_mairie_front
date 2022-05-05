import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { changeCurrentField } from '../../actions/action';

import './style.scss';
/***
 * JS Docs
 */
function Field({ type, value, title, placeholder }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCurrentField(event.target.value, title));
    console.log(event.target.value);
    console.log(title);
  };

  const inputId = `field-${title}`
  return (
    <div className="ui left icon input">
      <input 
        id={inputId}
        value={value}
        type={type}
        className="input-input"
        placeholder={placeholder}
        onChange={handleChange}
        title={title}
      />
      <i className="users icon"></i>
    </div>  
  );
}

Field.propTypes = {

};

export default Field;
