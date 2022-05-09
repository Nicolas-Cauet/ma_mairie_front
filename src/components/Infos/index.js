// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Icon } from 'semantic-ui-react';
import { toggleRecycling, toggleWaste } from '../../actions/infos';
import schedule from '../../assets/images/waste/schedule.jpg';
import guide from '../../assets/images/waste/guide.png';

import './style.scss';

function Infos() {
  const dispatch = useDispatch();

  const { isOpenWaste, isOpenRecycling } = useSelector((state) => state.infos);

  const handleClickWaste = () => {
    dispatch(toggleWaste())
  };

  const handleClickRecycling = () => {
    dispatch(toggleRecycling())
  };

  return (
    <div className='infos-container'>
      <h2>Infos pratiques</h2>
      <Button color='violet' onClick={handleClickWaste} icon='trash' content='Ramassage des déchets'/>
      {isOpenWaste && (
        <div className='button-toPDF'>
          <a href={schedule} target="_blank" rel="noopener noreferrer">
            <Button icon='file' content='Calendrier 2022'/> 
          </a>

          <a href={guide} target="_blank" rel="noopener noreferrer">
            <Button icon='file' content='Guide de tri'/>
          </a>
        </div>
      )}

      <Button color='violet' onClick={handleClickRecycling} icon='factory' content='Déchetterie'/>
      {isOpenRecycling && (
        <div className='button-toPDF'>
        <a href={schedule} target="_blank" rel="noopener noreferrer">
          <Button icon='file' content="Plan d'accès"/> 
        </a>
      </div>
      )}

    </div>
  );
}

// Infos.propTypes = {

// };

export default Infos;
