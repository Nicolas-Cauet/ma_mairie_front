// import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Image, Icon } from 'semantic-ui-react';

import photo from '../../assets/images/council/maire.jpg';
import photo2 from '../../assets/images/council/firstCouncil.jpg';
import photo3 from '../../assets/images/council/secondCouncil.jpg';
import photo4 from '../../assets/images/council/thirdCouncil.jpg';
import whiteImage from '../../assets/images/council/whiteImage.png';

import { getCouncilMembers } from '../../actions/council';

import './style.scss';

function Council() {
  const dispatch = useDispatch();

  const adminLogged = useSelector((state) => state.login.logged);

  // Click on Plus button
  const handleClick = () => {
    // dispatch(());
    console.log('coucou');
  };

  // GET council members
  useEffect(() => {
    dispatch(getCouncilMembers());
  }, []);

  return (
    <section className="card-container">
      <h1>Présentation du conseil Municipal</h1>
      <Card className="card">
        <Image src={photo} wrapped ui={false} />
        <Card.Content>
          <Card.Header className="card-header">Marie Mairie</Card.Header>
          <Card.Meta>
            <span className="fonction">Mairesse</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Card className="card">
        <Image src={photo2} wrapped ui={false} />
        <Card.Content>
          <Card.Header className="card-header">Marc Mairie</Card.Header>
          <Card.Meta>
            <span className="fonction">1er Conseiller</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Card className="card">
        <Image src={photo3} wrapped ui={false} />
        <Card.Content>
          <Card.Header className="card-header">Marie-Jeanne Mairie</Card.Header>
          <Card.Meta>
            <span className="fonction">2ème Conseillière</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Card className="card">
        <Image src={photo4} wrapped ui={false} />
        <Card.Content>
          <Card.Header className="card-header">Mathilde Mairie</Card.Header>
          <Card.Meta>
            <span className="fonction">3éme Conseillière</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      {adminLogged && (
        <Card className="card">
          <Image src={whiteImage} wrapped ui={false} />
          <Card.Content as="button" className="content-circle" onClick={handleClick}>
            <div>
              <Icon size="big" name="plus circle" />
            </div>
            <h2>Ajouter un membre</h2>
          </Card.Content>
        </Card>
      )}
    </section>
  );
}

Council.propTypes = {

};

export default Council;
