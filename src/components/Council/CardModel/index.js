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
  
  const isOpenModal = useSelector((state) => state.council[`id-${card.last_name}`]);
  console.log('modal', isOpenModal);

  const coucou = useSelector((state) => state.council);
  console.log(coucou);

  const handleClick = (event) => {
    console.log(event.target.getAttribute('name_id'));
    dispatch(toggleEditingMember(`id-${card.last_name}`));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editingMemberName);
    console.log(editingMemberRole);
  }

  useEffect(() => {
    dispatch(createEditingMember(`id-${card.last_name}`)
  )}, [])

  return (
    <Card className={`card-${card.town_hall_staff_id}`} name={card.first_name}>

      {isOpenModal && (
        <form className='memberEditing-form' onSubmit={handleSubmit}>
          <Button className="memberEditing-button">Charger une photo</Button>
          <Field 
            error
            type="text"
            className="memberEditing-input"
            placeholder={editingMemberName}
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
