import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Icon,
} from 'semantic-ui-react';
import { eraseValueActiveIndex, toggleReporting } from '../../../actions/reports';
import { setMessage } from '../../../actions/utilities';

function ReportButton() {
  const dispatch = useDispatch();
  const { isReporting } = useSelector((state) => state.reports);

  const handleClick = () => {
    dispatch((toggleReporting(true)));
    dispatch((setMessage('')));
    dispatch(eraseValueActiveIndex());
  };

  // const reports = useSelector((state) => state.reports.reportsList);

  return (
    <>
      {/* Section for reporting button */}
      {!isReporting && (
      <section className="reporting-container">
        <Button
          className="reporting-button"
          onClick={handleClick}
        >
          <Icon name="warning sign" />
          <p>Signaler</p>
        </Button>
      </section>
      )}
    </>
  );
}

export default ReportButton;
