// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Accordion, Icon, Message } from 'semantic-ui-react'
import { setActiveIndexTerms } from '../../actions/reports';

import Field from '../Field';



import './style.scss';

function Reporting() {
  const dispatch = useDispatch();
  const { isReporting, activeIndexTerms } = useSelector((state) => state.reports);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndexTerms === index ? -1 : index
    dispatch(setActiveIndexTerms(newIndex));
  }



  return (
    <>
    {isReporting && (
      <section className="reporting-form">
        <h1>Signaler un événement</h1>
        <Form className='reporting-form'> 
          <Form.TextArea
            className='reporting-form-textarea'
            placeholder='Description : Que souhaitez vous signaler ?'
          />
          <Field
          type="email"
          className="reporting-email"
          placeholder="Email"
          // value={Email}
          title="Email"
          icon="at"
          />
          <Field
          type="text"
          className="reporting-firstname"
          placeholder="Nom"
          // value={firstname}
          title="Nom"
          icon="user"
          />
          <Field
          type="text"
          className="reporting-lastname"
          placeholder="Prénom"
          // value={lastname}
          title="Prénom"
          icon="user"
          />
          <Field
          type="tel"
          className="reporting-phone"
          placeholder="Téléphone"
          // value={phone}
          title="Téléphone"
          icon="phone"
          />
          <Form.Field className='reporting-form-checkbox'>
            <Checkbox label="J'accepte les termes et conditions" />
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
            <Button type='submit'>Envoyer</Button>
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
