const data = [
  {
    admin_image: null,
    admin_text: "",
    created_at: "2022-05-16T17:10:42.926Z",
    email: "nico@gmail.com",
    first_name: "nicolas",
    last_name: "coco",
    phonenumber: "0202020202",
    reporting_category: null,
    reporting_id: 2,
    reporting_statut: "En cours",
    title: "Souci sur la route",
    town_hall_id: 1,
    updated_at: null,
    user_image: null,
    user_ip: "62.35.187.203",
    user_text: null,
  },
  {
    admin_image: null,
    admin_text: "",
    created_at: "2022-05-16T17:10:42.926Z",
    email: "nico@gmail.com",
    first_name: "nicolas",
    last_name: "coco",
    phonenumber: "0202020202",
    reporting_category: null,
    reporting_id: 2,
    reporting_statut: "En cours",
    title: "Souci sur la route",
    town_hall_id: 1,
    updated_at: null,
    user_image: null,
    user_ip: "62.35.187.203",
    user_text: null,
  }
],

const council = {
  created_at: "2022-05-16T20:02:41.843Z",
  first_name: "Aleks",
  last_name: "BigBoss",
  photo: null,
  role: "Dieu",
  town_hall_id: 1,
  town_hall_staff_id: 1,
  updated_at: null,
}

const regex = {
  /^([a-zA-Z0-9@*#!?]{8,15})$/,
}

councilMembers: [
  //   {
  //     first_name: "Aleks",
  //     last_name: "BigBoss",
  //     photo: 'https://images.generated.photos/pUdPEX9EX1AY-gbcRKI5nJ8H7fKlthV5oJS4lGhFJlc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI5NDQzLmpwZw.jpg',
  //     role: "Dieu",
  //     town_hall_id: 1,
  //     town_hall_staff_id: 1,
  //   },
  //   {
  //     first_name: "Père Noêl",
  //     last_name: "imaginaire",
  //     photo: 'https://images.generated.photos/51LnbjRt1Ev5zA1Ipuy-3GuoZ1CYhtTOkhywZBNCjxI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wMjI0/NDAwLmpwZw.jpg',
  //     role: "God",
  //     town_hall_id: 1,
  //     town_hall_staff_id: 2,
  //   },
  // ],


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
  console.log(isOpenModal);
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

