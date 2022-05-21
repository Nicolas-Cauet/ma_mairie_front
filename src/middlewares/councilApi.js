import axios from 'axios';
import {
  DELETE_COUNCIL_MEMBERS,
  getCouncilMembers,
  GET_COUNCIL_MEMBERS, PATCH_COUNCIL_MEMBERS, POST_COUNCIL_MEMBERS, setCouncilMembers,
} from '../actions/council';
import { setMessage } from '../actions/utilities';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

const councilApi = (store) => (next) => (action) => {
  const townHallId = store.getState((state) => state.login.townHallId);
  switch (action.type) {
    case GET_COUNCIL_MEMBERS:
      console.log('GET Council');
      instance.get(`/council/${townHallId}`)
        .then((response) => {
          console.log(response);
          store.dispatch(setCouncilMembers(response.data));
        })
        .catch((error) => {
          store.dispatch(setMessage('Les données concernant les membres du conseil ne sont pas pour le moment disponible', false));
          console.log(error);
        });
      break;
    case POST_COUNCIL_MEMBERS:
      console.log('POST Council');
      instance.post(`/admin/council/${townHallId}`, {
        first_name: 'Prénom',
        last_name: 'Nom',
        photo: 'https://react.semantic-ui.com/images/wireframe/image.png',
        role: 'Fonction',
        town_hall_id: townHallId,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(getCouncilMembers());
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
          console.log(error);
        });
      break;
    case PATCH_COUNCIL_MEMBERS:
      console.log('PATCH Council');
      instance.patch(`/admin/council/${townHallId}/${action.id}`, {
        first_name: action.firstName,
        last_name: action.lastName,
        photo: action.photo,
        role: action.role,
        town_hall_id: townHallId,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(getCouncilMembers());
        })
        .catch((error) => {
          store.dispatch(setMessage(error.response.data.error.message, false));
          console.log(error);
        });
      break;
    case DELETE_COUNCIL_MEMBERS:
      console.log('DELETE Council');
      instance.delete(`/admin/council/${townHallId}/${action.id}`)
        .then((response) => {
          console.log(response);
          store.dispatch(getCouncilMembers());
        })
        .catch((error) => {
          store.dispatch(setMessage('Les modifications concernant les signalements ne sont pas possible pour le moment', false));
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default councilApi;
