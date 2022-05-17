// import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

// import whiteImage from '../../assets/images/council/whiteImage.png';
// import './style.scss';

function CardModel({ imageName, name, role }) {
  return (
    <Card className="card">
        <Image src={imageName} wrapped ui={false} />
        <Card.Content>
          <Card.Header className="card-header">{name}</Card.Header>
          <Card.Meta>
            <span className="fonction">{role}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
  );
}

CardModel.propTypes = {

};

export default CardModel;
