// import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Image, Icon } from 'semantic-ui-react';

import CardModel from './CardModel';

import { getCouncilMembers, postCouncilMembers } from '../../actions/council';

import './style.scss';

function Council() {
  const dispatch = useDispatch();

  const adminLogged = useSelector((state) => state.login.logged);
  const { councilMembers } = useSelector((state) => state.council);

  // Click on Plus button
  const handleClick = () => {
    dispatch(postCouncilMembers());
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
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" wrapped ui={false} />
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
