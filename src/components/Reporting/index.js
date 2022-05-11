// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './style.scss';

function Reporting() {
  const { isReporting } = useSelector((state) => state.reports);

  return (
    <>
    {isReporting && (
      <div>Reporting section</div>
    )}
    </>
  );
}

// Reporting.propTypes = {

// };

export default Reporting;
