// import PropTypes from 'prop-types';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Accordion, Icon, Message, Dropdown } from 'semantic-ui-react'
import { submitReporting } from '../../actions/reporting';
import { changeCurrentCategory } from '../../actions/utilities';
import { setActiveIndexTerms, toggleReporting } from '../../actions/reports';

import Field from '../Field';



import './style.scss';

function Reporting() {
  const dispatch = useDispatch();
  const { isReporting, activeIndexTerms, categoriesOptions } = useSelector((state) => state.reports);
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
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndexTerms === index ? -1 : index
    dispatch(setActiveIndexTerms(newIndex));
  } 

  const handleSubmit = () => {
    dispatch(submitReporting(reporting_category, reporting_title, reporting_description, reporting_email,reporting_firstName, reporting_lastName, reporting_phone));
  }

  const handleClickBack = () => {
    dispatch(toggleReporting());
  }

  const handleChangeCategory = (event) => {
    dispatch(changeCurrentCategory(event.target.textContent));
  }

  return (
    <>
    {isReporting && (
      <section className="reporting-form">
        <h1>Signaler un événement</h1>
        <Form className='reporting-form'> 
          <section className='filter-section'>
            <Dropdown
              className='filter-dropdown categories'
              placeholder='Catégories'
              fluid
              selection
              options={categoriesOptions}
              onChange={handleChangeCategory}
            />
          </section>
          <Field
          type="text"
          className="reporting-title"
          placeholder="Titre"
          value={reporting_title}
          title="Titre"
          name="reporting_title"
          icon="comment alternate"
          />
          <Form.TextArea
            value={reporting_description}
            title="Description"
            name="reporting_description"
            className='reporting-form-textarea'
            placeholder='Description : Que souhaitez vous signaler ?'
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
          />
          <Form.Field className='reporting-form-checkbox'>
            <Checkbox 
              label="J'accepte les termes et conditions"
              name="reporting_checkBox"
              title="Accepter les conditions"
              checked={reporting_checkBox}
            />
            <Accordion >
              <Accordion.Title
                active={activeIndexTerms === 0}
                index={0}
                onClick={handleClick}
              >
                <div className='retail-container'>
                  <p>Détails</p>
                  <Icon name='dropdown' />
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeIndexTerms === 0}>
              
              <Message
                // as={'p'}
                // warning
                // header='You must register before you can do that!'
                content="En acceptant les termes et les conditions de ce formualire, j'autorise
                mamairie.fr à stocker mon addresse IP durant 30j, afin de ...."
              />
              </Accordion.Content>
            </Accordion>
          </Form.Field>
          <Form.Field>
            <Button
              type='submit'
              className='form-submit'
              onClick={handleSubmit}
            >Envoyer</Button>
            <Button
              type='button'
              className='form-back'
              onClick={handleClickBack}
            >Retour</Button>
          </Form.Field>
        </Form> 
      </section>
    )}
    </>
  );
}

// Reporting.propTypes = {

// };

export default Reporting;
