// import PropTypes from 'prop-types';
import {
  Label,
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';

// import './style.scss';

function ReportAdmin() {
  const params = useParams();
  const report = useSelector((state) => state.reports.reportsAdminList
    // eslint-disable-next-line eqeqeq
    .find((p) => p.reporting_id == params.reporting_id));

  return (
    <div>
      <h2>{report.statut}</h2>
      <h3>{report.title}</h3>
      <div>
        <Label color="yellow">Catégorie:
          {report.reporting_category}
        </Label>
        <Moment format="DD/MM/YYYY">{report.created_at}</Moment>
      </div>
      <div>
        <h4>Coordonnées du signalant</h4>
        <p>Prénom : {report.first_name}</p>
        <p>Nom : {report.last_name}</p>
        <p>Numéro de téléphone : {report.phonenumber}</p>
        <p>Adresse mail : {report.email}</p>
      </div>
      <p>Description : {report.user_text}</p>
      <img
        src={report.user_image}
        alt={report.title}
      />
      <form>
        <input />
      </form>
    </div>
  );
}

// ReportAdmin.propTypes = {
// };

export default ReportAdmin;
