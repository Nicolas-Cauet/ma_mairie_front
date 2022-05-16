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
    <div>
      <h2>{report.reporting_statut}</h2>
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
        <p value={report.email}>Adresse mail : {report.email}</p>
      </div>
      <p>Description : {report.user_text}</p>
      <img
        src={report.user_image}
        alt={report.title}
      />
      <Form>
        <Field
          type="text"
          className="response-text"
          placeholder="Votre réponse..."
          value={report.admin_text}
          title="Réponse"
          name="admin_text"
        />
        <div className="response-checkbox">
          <Checkbox name="reporting_statut" value="En cours" label="En cours" onChange={handleCheckbox} />
          <Checkbox name="reporting_statut" value="Terminé" label="Terminé" onChange={handleCheckbox} />
        </div>
        <Button
          type="submit"
          className="form-submit"
          onClick={handleSubmit}
        >Envoyer
        </Button>
      </Form>
    </div>
  );
}

// ReportAdmin.propTypes = {
// };

export default ReportAdmin;
