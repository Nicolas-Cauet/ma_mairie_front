/* eslint-disable react/jsx-no-useless-fragment */
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Checkbox, Form, Accordion, Icon, Message, Dropdown, Label,
} from 'semantic-ui-react';
import {
  submitReporting,
  changeCurrentCheckBoxReporting,
  errorReportingCategory,
  resetErrorReporting,
  errorReportingTitle,
  errorReportingDescription,
  errorReportingEmail,
  errorReportingLastname,
  errorReportingFirstname,
} from '../../actions/reporting';
import { changeCurrentCategory, changeCurrentField } from '../../actions/utilities';
import { setActiveIndexTerms, toggleReporting } from '../../actions/reports';
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
  } = useSelector((state) => state.utilities);
  const {
    isReporting_categoryError,
    isReporting_titleError,
    isReporting_descriptionError,
    isReporting_emailError,
    isReporting_firstnameError,
    isReporting_lastnameError,
  } = useSelector((state) => state.reporting);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndexTerms === index ? -1 : index;
    dispatch(setActiveIndexTerms(newIndex));
  };

  const handleSubmit = () => {
    dispatch(resetErrorReporting());
    if (reporting_checkBox
      && reporting_category !== ''
      && reporting_title !== ''
      && reporting_description !== ''
      && reporting_email !== ''
      && reporting_firstName !== ''
      && reporting_lastName !== ''
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
      dispatch(setLoginMessage('Vous devez compléter les champs obligatoires', false));

      if (reporting_category === '') {
        dispatch(errorReportingCategory());
      }
      if (reporting_title === '') {
        dispatch(errorReportingTitle());
      }
      if (reporting_description === '') {
        dispatch(errorReportingDescription());
      }
      if (reporting_email === '') {
        dispatch(errorReportingEmail());
      }
      if (reporting_lastName === '') {
        dispatch(errorReportingLastname());
      }
      if (reporting_firstName === '') {
        dispatch(errorReportingFirstname());
      }
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
              placeholder="Catégories"
              fluid
              selection
              options={categoriesOptions}
              onChange={handleChangeCategory}
            />
          </section>
          {isReporting_categoryError && (
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
          )}
          <Field
            type="text"
            className="reporting-title ddd"
            placeholder="Titre"
            value={reporting_title}
            title="Titre"
            name="reporting_title"
            icon="comment alternate"
          />
          {isReporting_titleError && (
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
          )}
          <Form.TextArea
            value={reporting_description}
            title="Description"
            name="reporting_description"
            className="reporting-form-textarea"
            placeholder="Description : Que souhaitez vous signaler ?"
            onChange={handleChangeDescription}
          />
          {isReporting_descriptionError && (
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
          )}
          <Field
            type="email"
            className="reporting-email"
            placeholder="Email"
            value={reporting_email}
            title="Email"
            name="reporting_email"
            icon="at"
          />
          {isReporting_emailError && (
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
          )}
          <Field
            type="text"
            className="reporting-firstname"
            placeholder="Prénom"
            value={reporting_firstName}
            name="reporting_firstName"
            title="Prénom"
            icon="user"
          />
          {isReporting_firstnameError && (
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
          )}
          <Field
            type="text"
            className="reporting-lastname"
            placeholder="Nom"
            value={reporting_lastName}
            name="reporting_lastName"
            title="Nom"
            icon="user"
          />
          {isReporting_lastnameError && (
          <Label basic color="red" pointing>
            Please enter a value
          </Label>
          )}
          <Field
            type="tel"
            className="reporting-phone"
            placeholder="Téléphone"
            value={reporting_phone}
            title="Téléphone"
            name="reporting_phone"
            icon="phone"
          />
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
                  content="En acceptant les termes et les conditions de ce formualire, j'autorise
                mamairie.fr à stocker mon addresse IP durant 30j, afin de ...."
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
