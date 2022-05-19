// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Image,
  Icon,
  Button,
  Confirm,
  Modal,
} from 'semantic-ui-react';

import {
  createEditingMember,
  createEditingMemberFirstName,
  createEditingMemberLastName,
  createEditingMemberPhoto,
  createEditingMemberRole,
  deleteCouncilMembers,
  patchCouncilMembers,
  toggleEditingMember,
} from '../../../actions/council';

import Field from '../../Field';

function CardModel({ ...card }) {
  const dispatch = useDispatch();
  const adminLogged = useSelector((state) => state.login.logged);
  const isOpenModal = useSelector((state) => state.council[`isOpenModalMember-${card.town_hall_staff_id}`]);
  const lastNameValue = useSelector((state) => state.utilities[`lastNameMember-${card.town_hall_staff_id}`]);
  const firstNameValue = useSelector((state) => state.utilities[`firstNameMember-${card.town_hall_staff_id}`]);
  const roleValue = useSelector((state) => state.utilities[`roleMember-${card.town_hall_staff_id}`]);
  const photoValue = useSelector((state) => state.utilities[`photoMember-${card.town_hall_staff_id}`]);
  // const coucou = useSelector((state) => state.council);
  // console.log(coucou);

  // Confirm component to delete a card member
  const [confirm, setConfirm] = useState(false);
  const toggleDeleteConfirm = () => {
    console.log('coucou');
    setConfirm(!confirm);
  };
  // Management of opening editing member
  // function ModalExampleModal() {
  //   const [open, setOpen] = useState(false)
  // }
  /**
   *  Trigger opening editing member
   *  @open modal corresponding at id member staff
   */
  const handleClick = () => {
    dispatch(toggleEditingMember(`isOpenModalMember-${card.town_hall_staff_id}`));
  };

  const confirmDeleteClick = (event) => {
    const id = event.target.closest('.dimmable').querySelector(`.card-${card.town_hall_staff_id}`).getAttribute('name');
    dispatch(deleteCouncilMembers(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const id = event.target.closest(`.card-${card.town_hall_staff_id}`).getAttribute('name');
    const id = event.target.closest('.dimmable').querySelector(`.card-${card.town_hall_staff_id}`).getAttribute('name');
    console.log(id);
    dispatch(toggleEditingMember(`isOpenModalMember-${card.town_hall_staff_id}`));
    dispatch(patchCouncilMembers(photoValue, firstNameValue, lastNameValue, roleValue, id));
  };

  useEffect(() => {
    dispatch(createEditingMember(`isOpenModalMember-${card.town_hall_staff_id}`));
    dispatch(createEditingMemberLastName(card.last_name, `lastNameMember-${card.town_hall_staff_id}`));
    dispatch(createEditingMemberFirstName(card.first_name, `firstNameMember-${card.town_hall_staff_id}`));
    dispatch(createEditingMemberRole(card.role, `roleMember-${card.town_hall_staff_id}`));
    dispatch(createEditingMemberPhoto(card.photo, `photoMember-${card.town_hall_staff_id}`));
  }, []);

  return (
    <Card className={`card-${card.town_hall_staff_id}`} name={card.town_hall_staff_id}>

      {isOpenModal && (
      <Modal
        className="modalEditingCouncilMember"
        // onClose={() => setOpen(false)}
        // onOpen={() => setOpen(true)}
        // open={open}
      >
        <Modal.Header>Editer ce membre</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={photoValue} wrapped />
          <div className="modal-inputs">
            <Field
              icon="picture"
              iconPosition="left"
              value={photoValue}
              name={`photoMember-${card.town_hall_staff_id}`}
              placeholder="URL de la photo"
              title="Photo"
            />
            <Field
              icon="user"
              iconPosition="left"
              value={firstNameValue}
              name={`firstNameMember-${card.town_hall_staff_id}`}
              placeholder="Prénom du membre"
              title="Prénom"
            />
            <Field
              icon="user"
              iconPosition="left"
              value={lastNameValue}
              name={`lastNameMember-${card.town_hall_staff_id}`}
              placeholder="Nom du membre"
              title="Nom"
            />
            <Field
              icon="book"
              iconPosition="left"
              value={roleValue}
              name={`roleMember-${card.town_hall_staff_id}`}
              placeholder="Fonction du membre"
              title="Fonction"
            />
          </div>
        </Modal.Content>
        <Modal.Actions className="modalEditingCouncilMember-buttons">
          <Button color="red" onClick={handleClick}>
            Annuler
          </Button>
          <Button
            content="Mettre à jour"
            labelPosition="right"
            icon="checkmark"
            onClick={handleSubmit}
            positive
          />
        </Modal.Actions>
      </Modal>
      )}

      {!isOpenModal && (
        <>
          <Image src={photoValue} wrapped ui={false} />
          <Card.Content>
            <Card.Header className="card-header">{`${firstNameValue} ${lastNameValue}`}</Card.Header>
            <Card.Meta>
              <span className="fonction">{roleValue}</span>
            </Card.Meta>
          </Card.Content>
        </>
      )}

      {adminLogged && (
        <>
          <div className="editingIcon">
            <Icon name="pencil alternate" onClick={handleClick} />
          </div>
          <div className="deleteIcon">
            <Icon name="close" onClick={toggleDeleteConfirm} />
            <Confirm
            // report="coucou"
              content="Êtes-vous sûr de vouloir supprimer ce membre ?"
              cancelButton="Annuler"
              confirmButton="Supprimer"
              open={confirm}
              onCancel={toggleDeleteConfirm}
              onConfirm={confirmDeleteClick}
            />
          </div>
        </>
      )}
    </Card>
  );
}

CardModel.propTypes = {

};

export default CardModel;
