import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dropdown,
} from 'semantic-ui-react';
import { getAdminReports, getReports } from '../../actions/reports';
import Reporting from '../Reporting';
import Report from './Report';
import ReportButton from './ReportButton';

import './style.scss';

function Reports() {
  const dispatch = useDispatch();
  const {
    isReporting, categoriesOptions, monthOptions, yearOptions,
  } = useSelector((state) => state.reports);

  const { logged } = useSelector((state) => state.login);

  // GET with Axios in visitor Reports or admin
  useEffect(() => {
    if (window.location.pathname.includes('admin') && logged) {
      dispatch(getAdminReports());
    } else {
      dispatch(getReports());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleClickAccordion = (e, titleProps) => {
  //   const { index } = titleProps
  //   const newIndex = activeIndex === index ? -1 : index
  //   dispatch(setActiveIndex(newIndex))
  // }

  // View admin or visitor reports
  const reports = useSelector((state) => {
    if (window.location.pathname.includes('admin') && logged) {
      return state.reports.reportsAdminList;
    }
    return state.reports.reportsList;
  });

  return (
    <>
      {/* Section for reporting action */}
      {isReporting && (<Reporting />)}

      {logged && (
        <ReportButton />
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
