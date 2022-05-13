// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Accordion, Button, Icon, Label, Dropdown } from 'semantic-ui-react'
import { getReports, setActiveIndex, toggleReporting } from '../../actions/reports';

import Reporting from '../Reporting';


import './style.scss';

function Reports() {
  const dispatch = useDispatch();
  const { activeIndex, isReporting, categoriesOptions, monthOptions, yearOptions } = useSelector((state) => state.reports);

  useEffect (() =>{
    dispatch(getReports());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleClickAccordion = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    dispatch(setActiveIndex(newIndex))
  }

  const handleClick = () => {
    dispatch((toggleReporting()))
  }

  const report = useSelector((state) => state.reports.reportsList);
  console.log(report);

    return (
      <>
        {/*Section for reporting action*/}
        {isReporting && (<Reporting />)}

        {/*Section for reporting button*/}
        {!isReporting && (
          <section className='reporting-container'>
          <Button 
            className='reporting-button'
            onClick={handleClick}
          >
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
                onClick={handleClickAccordion}
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
                onClick={handleClickAccordion}
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
                onClick={handleClickAccordion}
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
