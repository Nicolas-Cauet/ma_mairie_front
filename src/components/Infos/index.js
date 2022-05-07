// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Icon } from 'semantic-ui-react';
import { toggleRecycling, toggleWaste } from '../../actions/infos';

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
      <h1>Infos pratiques</h1>
      <Button color='violet' onClick={handleClickWaste}>
        <section className="button-container">
          <p>Ramassage des déchets</p>
          <Icon name='trash alternate' />
        </section>
      </Button>
      {isOpenWaste && (
        <div>coucou</div>
      )}
      <Button color='violet' onClick={handleClickRecycling}>
        <section className="button-container">
          <p>Déchetterie</p>
          <Icon name='factory' />
        </section>
      </Button>
      {isOpenRecycling && (
        <div>coucou</div>
      )}
    </div>
  );
}

// Infos.propTypes = {

// };

export default Infos;
