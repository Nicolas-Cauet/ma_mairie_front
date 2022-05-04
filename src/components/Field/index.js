import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './style.scss';
/***
 * JS Docs
 */
function Field({ type, value, title, placeholder }) {
  const dispatch = useDispatch();
  const handleChange = () => {
  };
  const inputId = `field-${title}`
  return (
    <div className='input-container'>
      <input
        id={inputId}
        value={value}
        type={type}
        className="input-input"
        placeholder={placeholder}
        onChange={handleChange}
        title={title}
                />
    </div>
  );
}

Field.propTypes = {

};

export default Field;
