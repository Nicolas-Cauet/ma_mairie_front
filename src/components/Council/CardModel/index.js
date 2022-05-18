// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Image,Icon, Button } from 'semantic-ui-react';
import { changeCurrentField } from '../../../actions/action';

import { createEditingMember, createEditingMemberName, createEditingMemberRole, deleteCouncilMembers, toggleEditingMember } from '../../../actions/council';
import Field from '../../Field'


function CardModel({ imageName, name, role, ...card }) {
  const dispatch = useDispatch();
  const adminLogged = useSelector((state) => state.login.logged);
  const isOpenModal = useSelector((state) => state.council[`isOpenModalMember-${card.town_hall_staff_id}`]);

  // const coucou = useSelector((state) => state.council);
  // console.log(coucou);
  
  const nameValue = useSelector((state) => state.utilities[`nameMember-${card.town_hall_staff_id}`]);
  const roleValue = useSelector((state) => state.utilities[`roleMember-${card.town_hall_staff_id}`]);
  // console.log(nameValue, roleValue); 

  const handleClick = () => {
    dispatch(toggleEditingMember(`isOpenModalMember-${card.town_hall_staff_id}`));
  }

  const handleDeleteClick = (event) => {
    dispatch(deleteCouncilMembers(event.target.closest(`.card-${card.town_hall_staff_id}`).getAttribute('name')));
    console.log(event.target.closest(`.card-${card.town_hall_staff_id}`).getAttribute('name'));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editingMemberName);
    console.log(editingMemberRole);
  }
  
  useEffect(() => {
    dispatch(createEditingMember(`isOpenModalMember-${card.town_hall_staff_id}`),

    dispatch(createEditingMemberName(`${card.first_name} ${card.last_name}`, `nameMember-${card.town_hall_staff_id}`)),
    dispatch(createEditingMemberRole(role, `roleMember-${card.town_hall_staff_id}`)),
    // dispatch(changeCurrentField(role, "councilEditingRole"))
  )}, [])

  return (
    <Card className={`card-${card.town_hall_staff_id}`} name={card.town_hall_staff_id}>

      {isOpenModal && (
        <form className='memberEditing-form' onSubmit={handleSubmit}>
          <Button className="memberEditing-button">Charger une photo</Button>
          <Field 
            error
            type="text"
            className="memberEditing-input"
            placeholder="Prénom Nom"
            value={nameValue}
            name={`nameMember-${card.town_hall_staff_id}`}
            title="Nom et prénom"
            icon=""
          />
          <Field 
            error
            type="text"
            className="memberEditing-input"
            placeholder="Fonction"
            value={roleValue}
            name={`roleMember-${card.town_hall_staff_id}`}
            title="Fonction"
            icon=""
          />
          <Button
            className="memberEditing-button"
          >Valider</Button>
        </form>
      )}

      {!isOpenModal && (
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
          <div className="editingIcon">
            <Icon name='pencil alternate' onClick={handleClick} />
          </div>
          <div className="deleteIcon">
            <Icon name='close' onClick={handleDeleteClick} />
          </div>
        </>
      )}
    </Card>
  );
}

CardModel.propTypes = {

};

export default CardModel;
