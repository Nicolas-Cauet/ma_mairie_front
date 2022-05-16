// import PropTypes from 'prop-types';
import {
  Button,
  Checkbox,
  Form,
  Label,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';

import './style.scss';
import Field from '../Field';
import { changeCheckboxAdminReporting, submitModerateReporting } from '../../actions/reports';

function ReportAdmin() {
  const params = useParams();
  const report = useSelector((state) => state.reports.reportsAdminList
    // eslint-disable-next-line eqeqeq
    .find((p) => p.reporting_id == params.reporting_id));

  const dispatch = useDispatch();

  const { admin_text } = useSelector((state) => state.utilities);
  const { reporting_statut } = useSelector((state) => state.reports);

  const handleCheckbox = (event) => {
    dispatch(changeCheckboxAdminReporting(event.target.textContent));
    console.log(event.target.textContent);
  };

  // const handleChangeText = (event) => {
  //   dispatch(changeCurrentField(event.target.value, event.target.name));
  // };

  // const handleSubmitModerateReporting = (event) => {
  //   event.preventDefault();
  //   dispatch(submitModerateReporting(text));
  //   dispatch(submitForm());
  // };

  const handleSubmit = () => {
    dispatch(submitModerateReporting(
      // ...report,
      report.reporting_id,
      report.title,
      admin_text,
      reporting_statut,
      // report.email,
      // report.admin_image,
    ));
  };

  return (
    <div className="report">
      <h2 className="report-title">{report.title}</h2>
      {/* <h2 className="report-statut">{report.reporting_statut}</h2> */}
      <div className="report-toto">
        <Label color="yellow" className="report-category">Catégorie:
          {report.reporting_category}
        </Label>
        <Moment format="DD/MM/YYYY" className="report-date">{report.created_at}</Moment>
      </div>
      <div className="report-info">
        <h3>Coordonnées du signalant :</h3>
        {/* <h3 className="report-title">{report.title}</h3> */}
        <p className="report-firstName">Prénom : {report.first_name}</p>
        <p className="report-lastName">Nom : {report.last_name}</p>
        <p className="report-phone">Numéro de téléphone : {report.phonenumber}</p>
        <p value={report.email} className="report-mail">Adresse mail : {report.email}</p>
        <p className="report-description">Description : {report.user_text}</p>
        <img
          className="report-image"
          src={report.user_image}
          alt={report.title}
        />
      </div>
      <div className="report-info">
        <h3>Traitement du signalement :</h3>
        <Form>
          <Field
            type="text"
            className="report-response"
            placeholder="Votre réponse..."
            value={report.admin_text}
            title="Réponse"
            name="admin_text"
          />
          <div className="report-checkbox">
            <Checkbox name="reporting_statut" value="En cours" label="En cours" onChange={handleCheckbox} />
            <Checkbox name="reporting_statut" value="Terminé" label="Terminé" onChange={handleCheckbox} />
          </div>
          <Button
            type="submit"
            className="report-submit"
            onClick={handleSubmit}
          >Envoyer
          </Button>
        </Form>
      </div>
    </div>
  );
}

// ReportAdmin.propTypes = {
// };

export default ReportAdmin;
