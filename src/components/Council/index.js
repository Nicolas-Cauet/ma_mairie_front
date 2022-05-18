// import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Image, Icon } from 'semantic-ui-react';

import photo from '../../assets/images/council/maire.jpg';
import photo2 from '../../assets/images/council/firstCouncil.jpg';
import photo3 from '../../assets/images/council/secondCouncil.jpg';
import photo4 from '../../assets/images/council/thirdCouncil.jpg';
import whiteImage from '../../assets/images/council/whiteImage.png';
import CardModel from './CardModel';

import { addCouncilMembers, createEditingMember, deleteCouncilMembers, getCouncilMembers, patchCouncilMembers, /* , postCouncilMembers */ 
postCouncilMembers} from '../../actions/council';

import './style.scss';

function Council() {
  const dispatch = useDispatch();

  const adminLogged = useSelector((state) => state.login.logged);
  const { councilMembers } = useSelector((state) => state.council);
  
  //Click on Plus button
  const handleClick = () => {
    // dispatch(postCouncilMembers());
    console.log('coucou');
  };

 // GET council members
  useEffect(() => {
    dispatch(getCouncilMembers());
  }, []);



  return (
    <section className="card-container">
      <h1>Présentation du conseil Municipal</h1>
      {councilMembers.map((card) => (
        <CardModel key={card.town_hall_staff_id} imageName={card.photo} name={`${card.first_name} ${card.last_name}`} role={card.role} {...card} />
      ))}
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
