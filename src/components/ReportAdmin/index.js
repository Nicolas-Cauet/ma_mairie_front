// import PropTypes from 'prop-types';
import {
  Button,
  Checkbox,
  Form,
  Label,
  Message,
} from 'semantic-ui-react';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Moment from 'react-moment';

import './style.scss';
import Field from '../Field';
import { changeCheckboxAdminReporting, submitModerateReporting } from '../../actions/reports';
import { returnMessageError, returnMessageSuccess } from '../../actions/utilities';

function ReportAdmin() {
  const params = useParams();
  const report = useSelector((state) => state.reports.reportsAdminList
    // eslint-disable-next-line eqeqeq
    .find((p) => p.reporting_id == params.reporting_id));

  const dispatch = useDispatch();

  const { admin_text, successMessage, errorMessage } = useSelector((state) => state.utilities);
  const { reporting_statut } = useSelector((state) => state.reports);

  // useEffect(() => {
  // dispatch(returnMessageSuccess(false));
  // dispatch(returnMessageError(false));
  // });

  const handleCheckbox = (event) => {
    dispatch(changeCheckboxAdminReporting(event.target.textContent));
    console.log(event.target.textContent);
  };

  const handleSubmit = () => {
    dispatch(submitModerateReporting(
      report.reporting_id,
      report.title,
      admin_text,
      reporting_statut,
    ));
  };

  const navigate = useNavigate();

  const backToReportList = () => {
    dispatch(returnMessageSuccess(false));
    dispatch(returnMessageError(false));
    navigate('/admin/reports/1');
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
            value={admin_text}
            title="Réponse"
            name="admin_text"
          />
          <div className="report-checkbox">
            <Checkbox option="statut" name="reporting_statut" value="En cours" label="En cours" onChange={handleCheckbox} />
            <Checkbox option="statut" name="reporting_statut" value="Terminé" label="Terminé" onChange={handleCheckbox} />
          </div>
          <Button
            type="submit"
            className="report-submit"
            onClick={handleSubmit}
          >Envoyer
          </Button>
        </Form>
      </div>
      { successMessage && (
      <Message positive>
        <p>Le signalement "{report.title}" a bien été mis à jour</p>
        <Button content="Retour au signalements" onClick={backToReportList} />
      </Message>
      )}
      { errorMessage && (
      <Message negative>
        <p>Erreur lors de l'enregistrement</p>
        <Button content="Retour au signalements" onClick={backToReportList} />
      </Message>
      )}
    </div>
  );
}

// ReportAdmin.propTypes = {
// };

export default ReportAdmin;
