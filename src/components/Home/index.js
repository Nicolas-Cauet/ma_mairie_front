import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from '../../actions/utilities';

import Infos from '../Infos';
import './style.scss';

function Home() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(redirect(''))
  });

  return (
    <div className='home'>
        <p>Bienvenue sur la home page</p>
        <Infos />
    </div>
  );
}

// App.propTypes = {

// };

export default Home;

