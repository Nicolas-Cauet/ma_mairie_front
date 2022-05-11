import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleMenu } from '../../actions/menu';
import { redirect } from '../../actions/utilities';
import { setLoginMessage } from '../../actions/action';

import Infos from '../Infos';
import './style.scss';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleMenu());
  },);
  
  useEffect(()=> {
    dispatch(redirect(''))
    dispatch(setLoginMessage(''))
  });

  return (
    <div className='home'>
        <Infos />
    </div>
  );
}

// App.propTypes = {

// };

export default Home;

