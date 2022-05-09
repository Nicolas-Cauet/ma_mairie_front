// import './style.scss';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Login from '../Login';
import './style.scss';

function Admin() {

    const { logged } = useSelector((state) => state.login);

  return (
    <div className='admin'>
        <Login />

        { logged && (
            <>
            <h2>Votre espace administration</h2>
            <div className='admin-articles admin-content'>
                <h3>Articles</h3>
                <Button>Créer</Button>
                <Button>Editer</Button>
            </div>

            <div className='admin-reports admin-content'>
                <h3>Signalements</h3>
                <Button>Traiter</Button>
            </div>

            <div className='admin-services admin-content'>
                <h3>Services</h3>
                <Button>Créer</Button>
                <Button>Editer</Button>
            </div>
        
            <div className='admin-recycling admin-content'>
                <h3>Ramassage des ordures</h3>
                <Button>Ajouter calendrier</Button>
                <Button>Ajouter un guide</Button>
            </div>

            <div className='admin-waste admin-content'>
                <h3>Déchetterie</h3>
                <Button>Ajouter plan d'accès</Button>
                <Button>Editer les horaires</Button>
            </div>
        
            <div className='admin-council admin-content'>
                <h3>Conseil municipal</h3>
                <Button>Editer le conseil</Button>
            </div>

            <div className='admin-socialNetwork admin-content'>
                <h3>Réseaux sociaux</h3>
            </div>
            </>
        )} 
    </div>
  );
}

// App.propTypes = {

// };

export default Admin;

