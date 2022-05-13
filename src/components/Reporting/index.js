/* eslint-disable react/jsx-no-useless-fragment */
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { Button, Checkbox, Form, Accordion, Icon, Message, Dropdown } from 'semantic-ui-react'
import { submitReporting, changeCurrentCheckBoxReporting } from '../../actions/reporting';
import { changeCurrentCategory, changeCurrentField } from '../../actions/utilities';
=======
import {
  Button, Checkbox, Form, Accordion, Icon, Message, Dropdown,
} from 'semantic-ui-react';
import { submitReporting } from '../../actions/reporting';
>>>>>>> origin/reports
import { setActiveIndexTerms, toggleReporting } from '../../actions/reports';
import { setLoginMessage } from '../../actions/login';

import Field from '../Field';

import './style.scss';

function Reporting() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { isReporting, activeIndexTerms, categoriesOptions } = useSelector((state) => state.reports);
  const { loginMessage, loginMessageColor } = useSelector((state) => state.login)
=======
  const {
    isReporting,
    activeIndexTerms,
    categoriesOptions,
  } = useSelector((state) => state.reports);
>>>>>>> origin/reports
  const {
    reporting_category,
    reporting_title,
    reporting_description,
    reporting_email,
    reporting_firstName,
    reporting_lastName,
    reporting_phone,
    reporting_checkBox,
<<<<<<< HEAD
  } = useSelector((state) => state.utilities);
=======
  } = useSelector((state) => state.reporting);
>>>>>>> origin/reports
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndexTerms === index ? -1 : index;
    dispatch(setActiveIndexTerms(newIndex));
  };


  const handleSubmit = () => {
<<<<<<< HEAD
    if (reporting_checkBox
      && reporting_category !== ''
      && reporting_title !== ''
      && reporting_description !== ''
      && reporting_email !== ''
      && reporting_firstName !== ''
      && reporting_lastName !== ''
    ) {
      dispatch(submitReporting(reporting_category, reporting_title, reporting_description, reporting_email,reporting_firstName, reporting_lastName, reporting_phone));
    } else if ( !reporting_checkBox) {
      dispatch(setLoginMessage('Vous devez accepter les termes et conditions pour pouvoir signaler un événement', false));
    } else {
      dispatch(setLoginMessage('Vous devez décrire votre événement, lui donner un titre, renseignez votre prénom et votre nom, ainsi que votre email. Le numéros de téléphone est facultatif', false));
    }
  }
=======
    dispatch(submitReporting());
  };
>>>>>>> origin/reports

  const handleClickBack = () => {
    dispatch(toggleReporting());
  };

  const handleChangeCategory = (event) => {
    dispatch(changeCurrentCategory(event.target.textContent));
  }

  const handleChangeDescription = (event) => {
    dispatch(changeCurrentField(event.target.value, event.target.name));
  }

  const handleCheckBox = () => {
    dispatch(changeCurrentCheckBoxReporting());
  }

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
          <Field
          type="text"
          className="reporting-title ddd"
          placeholder='Titre'
          value={reporting_title}
          title="Titre"
          name="reporting_title"
          icon="comment alternate"
          />
          <Form.TextArea
            value={reporting_description}
            title="Description"
            name="reporting_description"
<<<<<<< HEAD
            className='reporting-form-textarea'
            placeholder='Description : Que souhaitez vous signaler ?'
            onChange={handleChangeDescription}
          />
          <Field
          type="email"
          className="reporting-email"
          placeholder="Email"
          value={reporting_email}
          title="Email"
          name="reporting_email"
          icon="at"
          />
          <Field
          type="text"
          className="reporting-firstname"
          placeholder="Prénom"
          value={reporting_firstName}
          name="reporting_firstName"
          title="Prénom"
          icon="user"
          />
          <Field
          type="text"
          className="reporting-lastname"
          placeholder="Nom"
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
=======
            className="reporting-form-textarea"
            placeholder="Description : Que souhaitez vous signaler ?"
          />
          <Field
            type="email"
            className="reporting-email"
            placeholder="Email"
            value={reporting_email}
            title="email"
            name="reporting_email"
            icon="at"
          />
          <Field
            type="text"
            className="reporting-firstname"
            placeholder="Nom"
            value={reporting_firstName}
            name="reporting_firstname"
            title="firstName"
            icon="user"
          />
          <Field
            type="text"
            className="reporting-lastname"
            placeholder="Prénom"
            value={reporting_lastName}
            name="reporting_lastName"
            title="lastName"
            icon="user"
          />
          <Field
            type="tel"
            className="reporting-phone"
            placeholder="Téléphone"
            value={reporting_phone}
            title="phone"
            name="reporting_phone"
            icon="phone"
>>>>>>> origin/reports
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
<<<<<<< HEAD
              
              <Message
                content="En acceptant les termes et les conditions de ce formualire, j'autorise
=======

                <Message
                // as={'p'}
                // warning
                // header='You must register before you can do that!'
                  content="En acceptant les termes et les conditions de ce formualire, j'autorise
>>>>>>> origin/reports
                mamairie.fr à stocker mon addresse IP durant 30j, afin de ...."
                />
              </Accordion.Content>
            </Accordion>
          </Form.Field>
          <Form.Field>
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
<<<<<<< HEAD
        </Form> 
        {loginMessage && (
          loginMessageColor ? 
          <Message positive>  <p>{loginMessage}</p> </Message>
          :
          <Message negative>  <p>{loginMessage}</p> </Message>  
        )}

=======
        </Form>
>>>>>>> origin/reports
      </section>
      )}
    </>
  );
}

// Reporting.propTypes = {

// };

export default Reporting;
