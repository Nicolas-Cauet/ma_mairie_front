// import './style.scss';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Field from '../Field';
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
                
                <div className='admin-button'>
                    <h3>Articles</h3>
                    <Button className='create' icon='plus' content='Créer'/>
                    <Button className='edit' icon='edit' content='Editer'/>
                </div>
            </div>

            <div className='admin-reports admin-content'>
                <h3>Signalements</h3>
                <div className='admin-button'>
                    <Button className='process' icon='pencil alternate' content='Traiter'/>
                </div>
            </div>

            <div className='admin-services admin-content'>
                <h3>Services</h3>
                <Button className='create' icon='plus' content='Créer'/>
                <Button className='edit' icon='edit' content='Editer'/>
            </div>
        
            <div className='admin-recycling admin-content'>
                <h3>Ramassage des ordures</h3>
                <Button className='create' icon='plus' content='Ajouter calendrier'/>
                <Button className='create' icon='plus' content='Ajouter un guide'/>
            </div>

            <div className='admin-waste admin-content'>
                <h3>Déchetterie</h3>
                <Button className='create' icon='plus' content="Ajouter plan d'accès"/>
                <Button className='edit' icon='edit' content='Editer les horaires'/>
            </div>
        
            <div className='admin-council admin-content'>
                <h3>Conseil municipal</h3>
                <Button className='create' icon='plus' content='Créer'/>
                <Button className='edit' icon='edit' content='Editer'/>
            </div>

            <div className='admin-socialNetwork admin-content'>
                <h3>Réseaux sociaux</h3>
                <form>
                    <Field 
                    type="text"
                    className="admin-form-input"
                    placeholder="URL facebook"
                    // value={facebook}
                    title="facebook"
                    icon="facebook"/>
                    <Button
                    type="submit"
                    className="admin-form-button"
                    >
                    Enregistrer
                    </Button>
                    <Field 
                    type="text"
                    className="admin-form-input"
                    placeholder="URL twitter"
                    // value={facebook}
                    title="twitter"
                    icon="twitter"/>
                    <Button
                    type="submit"
                    className="admin-form-button"
                    >
                    Enregistrer
                    </Button>
                </form>
            </div>
            </>
        )} 
    </div>
  );
}

// App.propTypes = {

// };

export default Admin;

