// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Accordion, Button, Icon, Label, Dropdown } from 'semantic-ui-react'
import { setActiveIndex } from '../../../actions/reports';
import Moment from 'react-moment'


// import './style.scss';

function Report() {
  const dispatch = useDispatch();
  const { activeIndex, isReporting, categoriesOptions, monthOptions, yearOptions } = useSelector((state) => state.reports);

//   useEffect (() =>{
//     dispatch((getReports()));
//   })

  const handleClickAccordion = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    dispatch(setActiveIndex(newIndex))
  }


  const reports = useSelector((state) => state.reports.reportsList);
  console.log(reports);



    return (
      <>
        {/*Section for reports list*/}
          <section className='reports-container'>

            {/* Accordion list of reports */}
            <Accordion fluid styled className='accordion'>

              {/* Accordion modele */}
            {reports.map((report) => (
                <>
                <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={handleClickAccordion}
                className='accordion-title'
              >
                  
                <div className='accordion-title-container'>
                  <h1>{report.title}</h1>
                  <h2><Moment format="DD/MM/YYYY">{report.created_at}</Moment></h2>
                  <Label color='yellow'>
                  Catégorie: {report.reporting_category}
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
                  {report.user_text}
                </p>
              </Accordion.Content>
            
        </>                
            ))}
              </Accordion>
          </section>
      </>
  );
}

// Reports.propTypes = {

// };

export default Report;
