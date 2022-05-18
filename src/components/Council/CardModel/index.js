// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Image,Icon, Button } from 'semantic-ui-react';

import { createEditingMember, toggleEditingMember } from '../../../actions/council';
import { setValueEditingMember } from '../../../actions/utilities';

import Field from '../../Field'


function CardModel({ imageName, name, role, ...card }) {
  const dispatch = useDispatch();
  const adminLogged = useSelector((state) => state.login.logged);
  const { isOpenEditingMember } = useSelector((state) => state.council);
  const { editingMemberName, editingMemberRole } = useSelector((state) => state.utilities);
  
  // dispatch(createEditingMember(card.last_name))

  const handleClick = (event) => {
    console.log(event.target.getAttribute('name_id'));
    dispatch(toggleEditingMember(card.last_name));
    // console.log('coucou');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editingMemberName);
    console.log(editingMemberRole);
  }

  // useEffect(() => {
  //   dispatch(setValueEditingMember(name, role))
  // }, [])

  return (
    <Card className={`card-${card.town_hall_staff_id}`} name={card.first_name}>

      {isOpenEditingMember && (
        <form className='memberEditing-form' onSubmit={handleSubmit}>
          <Button className="memberEditing-button">Charger une photo</Button>
          <Field 
            error
            type="text"
            className="memberEditing-input"
            placeholder="Nom et prénom"
            value={editingMemberName}
            name="editingMemberName"
            title="Nom et prénom"
            icon=""
          />
          <Field 
            error
            type="text"
            className="memberEditing-input"
            placeholder="Fonction"
            value={editingMemberRole}
            name="editingMemberRole"
            title="Fonction"
            icon=""
          />
          <Button
            className="memberEditing-button"
          >Valider</Button>
        </form>
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
            <Icon name='pencil alternate' onClick={handleClick} name_id={card.first_name} />
          </div>
        </>
      )}
    </Card>
  );
}

CardModel.propTypes = {

};

export default CardModel;
