import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from '../../actions/utilities';
import { setLoginMessage } from '../../actions/action';

import Infos from '../Infos';
import './style.scss';

function Home() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(redirect(''))
    dispatch(setLoginMessage(''))
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

