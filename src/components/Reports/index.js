// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Button, Icon, Label, Dropdown } from 'semantic-ui-react'
import { setActiveIndex } from '../../actions/reports';

import Reporting from '../Reporting';


import './style.scss';

function Reports() {
  const dispatch = useDispatch();
  const { activeIndex, isReporting } = useSelector((state) => state.reports);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    dispatch(setActiveIndex(newIndex))
  }

  const categoriesOptions = [
    {
      key: 'Catégories',
      text: 'Catégories',
      value: 'Catégories',
    },
    {
      key: 'Route',
      text: 'Route',
      value: 'Route',
      icon: 'road'
    },
    {
      key: 'Voisinage',
      text: 'Voisinage',
      value: 'Voisinage',
      icon: 'users'
    },
  ]
  const monthOptions = [
    {
      key: 'Mois',
      text: 'Mois',
      value: 'Mois',
    },
    {
      key: 'Janvier',
      text: 'Janvier',
      value: 'Janvier',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Février',
      text: 'Février',
      value: 'Février',
      // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
  ]
  const yearOptions = [
    {
      key: 'Année',
      text: 'Année',
      value: 'Année',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: '2021',
      text: '2021',
      value: '2021',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: '2022',
      text: '2022',
      value: '2022',
      // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
  ]

    return (
      <>
        {/*Section for reporting action*/}
        {isReporting && (<Reporting />)}

        {/*Section for reporting button*/}
        {!isReporting && (
          <section className='reporting-container'>
          <Button className='reporting-button'>
            <Icon name='warning sign' />
            <p>Signaler</p>
          </Button>
        </section>
        )}

        {/*Section to filter reports list*/}
        {!isReporting && (
          <section className='filter-section'>
          <Dropdown
            className='filter-dropdown categories'
            placeholder='Catégories'
            fluid
            selection
            options={categoriesOptions}
          />
          <Dropdown
            className='filter-dropdown'
            placeholder='Mois'
            fluid
            selection
            options={monthOptions}
          />
          <Dropdown
            className='filter-dropdown'
            placeholder='Année'
            fluid
            selection
            options={yearOptions}
          />
        </section>
        )}
        
        {/*Section for reports list*/}
        {!isReporting && (
          <section className='reports-container'>

            {/* Accordion list of reports */}
            <Accordion fluid styled className='accordion'>

              {/* Accordion modele */}
              <Accordion.Title
                className='accordion-title'
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
              >
                <div className='accordion-title-container'>
                  <h1>Le chien du voisin s'est enfui</h1>
                  <h2>22/06/2022</h2>
                  <Label color='blue'>
                  Catégorie: Route
                  </Label>
                  <Label color='green'>
                  Statut: Résolu
                  </Label>
                  <div>
                    <Icon name='caret square down outline' />
                      Description
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world. A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                </p>
              </Accordion.Content>
              {/* Accordion modele */}

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={handleClick}
                className='accordion-title'
              >
                <div className='accordion-title-container'>
                  <h1>La voisine s'est enfuie</h1>
                  <h2>23/06/2022</h2>
                  <Label color='yellow'>
                  Catégorie: Voisinage
                  </Label>
                  <Label color='orange'>
                  Statut: En cours
                  </Label>
                  <div>
                    <Icon name='caret square down outline' />
                      Description
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={handleClick}
                className='accordion-title'
              >
                <div className='accordion-title-container'>
                  <h1>Le voisin est tout seul</h1>
                  <h2>24/06/2022</h2>
                  <Label color='yellow'>
                  Catégorie: Voisinage
                  </Label>
                  <Label color='red'>
                  Statut: Refusé
                  </Label>
                  <div>
                    <Icon name='caret square down outline' />
                      Description
                  </div>
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                  A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world. A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world. A dog is a type of domesticated animal. Known for its loyalty and
                  faithfulness, it can be found as a welcome guest in many households
                  across the world.
                </p>
              </Accordion.Content>
            </Accordion>
          </section>
        )}
      </>
  );
}

// Reports.propTypes = {

// };

export default Reports;
