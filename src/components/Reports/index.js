import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Icon, Dropdown,
} from 'semantic-ui-react';
import { getReports, toggleReporting } from '../../actions/reports';

import Reporting from '../Reporting';

import './style.scss';
import Report from './Report';

function Reports() {
  const dispatch = useDispatch();
  const {
    isReporting, categoriesOptions, monthOptions, yearOptions,
  } = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(getReports());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleClickAccordion = (e, titleProps) => {
  //   const { index } = titleProps
  //   const newIndex = activeIndex === index ? -1 : index
  //   dispatch(setActiveIndex(newIndex))
  // }

  const handleClick = () => {
    dispatch((toggleReporting()));
  };

  const reports = useSelector((state) => state.reports.reportsList);
  console.log(reports);

  return (
    <>
      {/* Section for reporting action */}
      {isReporting && (<Reporting />)}

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

      {/* Section to filter reports list */}
      {!isReporting && (
      <section className="filter-section">
        <Dropdown
          className="filter-dropdown categories"
          placeholder="Catégories"
          fluid
          selection
          options={categoriesOptions}
        />
        <Dropdown
          className="filter-dropdown"
          placeholder="Mois"
          fluid
          selection
          options={monthOptions}
        />
        <Dropdown
          className="filter-dropdown"
          placeholder="Année"
          fluid
          selection
          options={yearOptions}
        />
      </section>
      )}

      {/* Section for reports list */}
      {!isReporting && (
      <section className="reports-container">
        {reports.map((report) => <Report key={report.reporting_id} {...report} />)}
      </section>
      )}
    </>
  );
}

Reports.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      reporting_id: PropTypes.number.isRequired,
    }),
  ),
};

Reports.defaultProps = {
  reports: null,
};

export default Reports;
