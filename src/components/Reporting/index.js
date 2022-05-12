// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Accordion, Icon, Message, Dropdown } from 'semantic-ui-react'
import { submitReporting } from '../../actions/reporting';
import { setActiveIndexTerms, toggleReporting } from '../../actions/reports';

import Field from '../Field';



import './style.scss';

function Reporting() {
  const dispatch = useDispatch();
  const { isReporting, activeIndexTerms, categoriesOptions } = useSelector((state) => state.reports);
  const { description, email, firstName, lastName, phone, checkBox } = useSelector((state) => state.reporting);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndexTerms === index ? -1 : index
    dispatch(setActiveIndexTerms(newIndex));
  } 

  const handleSubmit = () => {
    dispatch(submitReporting());
  }

  const handleClickBack = () => {
    dispatch(toggleReporting());
  }

  // const handleChange = () => {
  //   console.log('coucou');
  //   dispatch(changeCurrentFieldReporting(event.target.value, title));
  // }

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
            />
          </section>
          <Form.TextArea
            value={description}
            title="description"
            // onChange={handleChange(changeCurrentFieldReporting)}
            className='reporting-form-textarea'
            placeholder='Description : Que souhaitez vous signaler ?'
          />
          <Field
          type="email"
          className="reporting-email"
          placeholder="Email"
          value={email}
          title="email"
          // onChange={handleChange(changeCurrentFieldReporting)}
          icon="at"
          />
          <Field
          type="text"
          className="reporting-firstname"
          placeholder="Nom"
          value={firstName}
          title="firstName"
          icon="user"
          />
          <Field
          type="text"
          className="reporting-lastname"
          placeholder="Prénom"
          value={lastName}
          title="lastName"
          // onChange={changeCurrentFieldReporting}
          icon="user"
          />
          <Field
          type="tel"
          className="reporting-phone"
          placeholder="Téléphone"
          value={phone}
          title="phone"
          // onChange={changeCurrentFieldReporting}
          icon="phone"
          />
          <Form.Field className='reporting-form-checkbox'>
            <Checkbox 
              label="J'accepte les termes et conditions"
              checked={checkBox}
              // onChange={changeCurrentFieldReporting}
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
