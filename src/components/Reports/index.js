/* eslint-disable implicit-arrow-linebreak */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Dropdown } from 'semantic-ui-react';
import {
  changeReportsFilter,
  getAdminReports, getReports,
  // updateFilteredReports,
} from '../../actions/reports';
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

  const { selectedCategory, selectedMonth, selectedYear } = useSelector((state) => state.reports);

  // View admin or visitor reports
  const reports = useSelector((state) => {
    if (window.location.pathname.includes('admin') && logged) {
      return state.reports.reportsAdminList;
    }
    return state.reports.reportsList;
  });
  let filteredReports;
  // GET with Axios in visitor Reports or admin
  useEffect(() => {
    if (window.location.pathname.includes('admin') && logged) {
      dispatch(getAdminReports());
    } else {
      dispatch(getReports());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  moment.updateLocale('fr', {
    months: [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
      'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
    ],
  });

  if ((selectedCategory === '' || selectedCategory === 'Catégories')
  && (selectedYear === '' || selectedYear === 'Année')
  && (selectedMonth === '' || selectedMonth === 'Mois')) {
    filteredReports = reports;
  } else if ((selectedCategory === '' || selectedCategory === 'Catégories')
    && (selectedMonth === '' || selectedMonth === 'Mois')) {
    filteredReports = reports.filter((report) =>
      moment(report.created_at).format('YYYY') === selectedYear);
  } else if ((selectedCategory === '' || selectedCategory === 'Catégories')
    && (selectedYear === '' || selectedYear === 'Année')) {
    filteredReports = reports.filter((report) =>
      moment(report.created_at).locale('fr').format('MMMM') === selectedMonth);
  } else if ((selectedMonth === '' || selectedMonth === 'Mois')
    && (selectedYear === '' || selectedYear === 'Année')) {
    filteredReports = reports.filter((report) =>
      report.reporting_category === selectedCategory);
  } else if (selectedMonth === '' || selectedMonth === 'Mois') {
    filteredReports = reports.filter((report) =>
      report.reporting_category === selectedCategory
      && moment(report.created_at).format('YYYY') === selectedYear);
  } else if (selectedYear === '' || selectedYear === 'Année') {
    filteredReports = reports.filter((report) =>
      report.reporting_category === selectedCategory
      && moment(report.created_at).locale('fr').format('MMMM') === selectedMonth);
  } else if (selectedCategory === '' || selectedCategory === 'Catégories') {
    filteredReports = reports.filter((report) =>
      moment(report.created_at).format('YYYY') === selectedYear
      && moment(report.created_at).locale('fr').format('MMMM') === selectedMonth);
  } else {
    filteredReports = reports.filter((report) =>
      report.reporting_category === selectedCategory
      && moment(report.created_at).locale('fr').format('MMMM') === selectedMonth
      && moment(report.created_at).format('YYYY') === selectedYear);
  }

  const handleChangeFilter = (event) => {
    const key = event.target.closest('.filter-dropdown').getAttribute('name');
    dispatch(changeReportsFilter(event.target.textContent, key));
  };

  return (
    <>
      {/* Section for reporting action */}
      {isReporting && (<Reporting />)}

      {/* !logged && */(
        <ReportButton />
      )}

      {/* Section to filter reports list */}
      {!isReporting && (
      <section className="filter-section">
        <Dropdown
          className="filter-dropdown categories"
          placeholder="Catégories"
          name="selectedCategory"
          title="Catégories"
          fluid
          selection
          onChange={handleChangeFilter}
          options={categoriesOptions}
        />
        <Dropdown
          className="filter-dropdown"
          placeholder="Mois"
          name="selectedMonth"
          title="Mois"
          fluid
          selection
          onChange={handleChangeFilter}
          options={monthOptions}
        />
        <Dropdown
          className="filter-dropdown"
          placeholder="Année"
          name="selectedYear"
          title="Année"
          fluid
          selection
          onChange={handleChangeFilter}
          options={yearOptions}
        />
      </section>
      )}

      {/* Section for reports list */}
      {!isReporting && (
      <section className="reports-container">
        {filteredReports.map((report) => (
          <Report key={report.reporting_id} {...report} />
        ))}
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
