// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Accordion, Button, Icon, Label, Dropdown } from 'semantic-ui-react'
import { getReports, setActiveIndex, toggleReporting } from '../../actions/reports';

import Reporting from '../Reporting';


import './style.scss';
import Report from './Report';

function Reports() {
  const dispatch = useDispatch();
  const { activeIndex, isReporting, categoriesOptions, monthOptions, yearOptions } = useSelector((state) => state.reports);

  useEffect (() =>{
    dispatch(getReports());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // const handleClickAccordion = (e, titleProps) => {
  //   const { index } = titleProps
  //   const newIndex = activeIndex === index ? -1 : index
  //   dispatch(setActiveIndex(newIndex))
  // }

  const handleClick = () => {
    dispatch((toggleReporting()))
  }

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
            <Report />
          </section>
        )}
      </>
  );
}

// Reports.propTypes = {

// };

export default Reports;
