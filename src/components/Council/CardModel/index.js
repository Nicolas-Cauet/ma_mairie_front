// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Image,Icon } from 'semantic-ui-react';
import { toggleEditingMember } from '../../../actions/council';


function CardModel({ imageName, name, role }) {
  const dispatch = useDispatch();
  const adminLogged = useSelector((state) => state.login.logged);
  const { isOpenEditingMember } = useSelector((state) => state.council);

  const handleClick = () => {
    dispatch(toggleEditingMember())
    console.log('coucou');
  }
  return (
    <Card className="card">

      {isOpenEditingMember && (
        <div>Coucou</div>
      )}

      {!isOpenEditingMember && (
        <>
          <Image src={imageName} wrapped ui={false} />
          <Card.Content>
            <Card.Header className="card-header">{name}</Card.Header>
            <Card.Meta>
              <span className="fonction">{role}</span>
            </Card.Meta>
          </Card.Content>
        </> 
      )}

      {adminLogged && (
        <>
          <div className="editingSection">
            <Icon name='pencil alternate' onClick={handleClick} />
          </div>
        </>
      )}
    </Card>
  );
}

CardModel.propTypes = {

};

export default CardModel;
