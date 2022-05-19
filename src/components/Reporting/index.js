/* eslint-disable react/jsx-no-useless-fragment */
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Checkbox,
  Form,
  Accordion,
  Icon,
  Message,
  Dropdown,
  Label,
} from 'semantic-ui-react';
import { submitReporting, changeCurrentCheckBoxReporting } from '../../actions/reporting';
import { changeCurrentCategory, changeCurrentField } from '../../actions/utilities';
import { setActiveIndexTerms, toggleReporting, setReportingError } from '../../actions/reports';
import { setLoginMessage } from '../../actions/login';

import Field from '../Field';

import './style.scss';

function Reporting() {
  const dispatch = useDispatch();
  const {
    isReporting,
    activeIndexTerms,
    categoriesOptions,
  } = useSelector((state) => state.reports);
  const { loginMessage, loginMessageColor } = useSelector((state) => state.login);
  const {
    reporting_category,
    reporting_title,
    reporting_description,
    reporting_email,
    reporting_firstName,
    reporting_lastName,
    reporting_phone,
    reporting_checkBox,
    // eslint-disable-next-line no-unused-vars
    reporting_error,
  } = useSelector((state) => state.utilities);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndexTerms === index ? -1 : index;
    dispatch(setActiveIndexTerms(newIndex));
  };

  switch (reporting_error) {
    case reporting_checkBox:
      console.log('checkbox');
      break;
    case reporting_category !== '':
      console.log('category');
      break;
    default:
  }

  const handleSubmit = () => {
    dispatch(setReportingError(false));
    if (reporting_checkBox
      || reporting_category !== ''
      || reporting_title !== ''
      || reporting_description !== ''
      || reporting_email !== ''
      || reporting_firstName !== ''
      || reporting_lastName !== ''
    ) {
      dispatch(submitReporting(
        reporting_category,
        reporting_title,
        reporting_description,
        reporting_email,
        reporting_firstName,
        reporting_lastName,
        reporting_phone,
      ));
    } else if (!reporting_checkBox) {
      dispatch(setLoginMessage('Vous devez accepter les termes et conditions pour pouvoir signaler un événement', false));
    } else {
      dispatch(setLoginMessage('Vous devez décrire votre événement, lui donner un titre, renseignez votre prénom et votre nom, ainsi que votre email. Le numéros de téléphone est facultatif', false));
      dispatch(setReportingError(true));
    }
  };

  const handleClickBack = () => {
    dispatch(toggleReporting());
  };

  const handleChangeCategory = (event) => {
    dispatch(changeCurrentCategory(event.target.textContent));
  };

  const handleChangeDescription = (event) => {
    dispatch(changeCurrentField(event.target.value, event.target.name));
  };

  const handleCheckBox = () => {
    dispatch(changeCurrentCheckBoxReporting());
  };

  return (
    <>
      {isReporting && (
      <section className="reporting-form">
        <h1>Signaler un événement</h1>
        <Form className="reporting-form">
          <section className="filter-section">
            <Dropdown
              className="filter-dropdown categories"
              placeholder="Catégories *"
              fluid
              selection
              options={categoriesOptions}
              onChange={handleChangeCategory}
            />
          </section>
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
          <Field
            type="text"
            className="reporting-title ddd"
            placeholder="Titre *"
            value={reporting_title}
            title="Titre"
            name="reporting_title"
            icon="comment alternate"
          />
          <Form.TextArea
            value={reporting_description}
            title="Description"
            name="reporting_description"
            className="reporting-form-textarea"
            placeholder="Description : Que souhaitez vous signaler ? *"
            onChange={handleChangeDescription}
          />
          <Field
            type="email"
            className="reporting-email"
            placeholder="Email *"
            value={reporting_email}
            title="Email"
            name="reporting_email"
            icon="at"
          />
          <Field
            type="text"
            className="reporting-firstname"
            placeholder="Prénom *"
            value={reporting_firstName}
            name="reporting_firstName"
            title="Prénom"
            icon="user"
          />
          <Field
            type="text"
            className="reporting-lastname"
            placeholder="Nom *"
            value={reporting_lastName}
            name="reporting_lastName"
            title="Nom"
            icon="user"
          />
          <Field
            type="tel"
            className="reporting-phone"
            placeholder="Téléphone"
            value={reporting_phone}
            title="Téléphone"
            name="reporting_phone"
            icon="phone"
          />
          <p className="reporting-rule">Les champs suivis d'une étoile sont obligatoires</p>
          <Form.Field className="reporting-form-checkbox">
            <Checkbox
              label="J'accepte les termes et conditions"
              name="reporting_checkBox"
              title="Accepter les conditions"
              checked={reporting_checkBox}
              onChange={handleCheckBox}
            />
            <Accordion>
              <Accordion.Title
                active={activeIndexTerms === 0}
                index={0}
                onClick={handleClick}
              >
                <div className="retail-container">
                  <p>Détails</p>
                  <Icon name="dropdown" />
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeIndexTerms === 0}>

                <Message
                  className="retail-message"
                  content="En acceptant les termes et les conditions de ce formulaire, j'autorise
                mamairie.fr à stocker mon addresse IP durant 30j, afin que mamairie.fr puisse se prém.unir en cas d'événement pouvant compromettre la sécurité du site."
                />
              </Accordion.Content>
            </Accordion>
          </Form.Field>
          <Form.Field className="button-validation">
            <Button
              type="submit"
              className="form-submit"
              onClick={handleSubmit}
            >Envoyer
            </Button>
            <Button
              type="button"
              className="form-back"
              onClick={handleClickBack}
            >Retour
            </Button>
          </Form.Field>
        </Form>
        {loginMessage && (
          loginMessageColor
            ? <Message className="reports-message" positive>  <p>{loginMessage}</p> </Message>
            : <Message className="reports-message" negative>  <p>{loginMessage}</p> </Message>
        )}

      </section>
      )}
    </>
  );
}

// Reporting.propTypes = {

// };

export default Reporting;
