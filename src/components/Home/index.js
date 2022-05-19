import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleMenu } from '../../actions/menu';
import { redirect, setMessage } from '../../actions/utilities';

import Infos from '../Infos';
import './style.scss';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleMenu());
  });

  useEffect(() => {
    dispatch(redirect(''));
    dispatch(setMessage(''));
  });

  return (
    <div className="home">
      <Infos />
    </div>
  );
}

// App.propTypes = {

// };

export default Home;
