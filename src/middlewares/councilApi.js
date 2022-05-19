import axios from 'axios';
import {
  DELETE_COUNCIL_MEMBERS,
  getCouncilMembers,
  GET_COUNCIL_MEMBERS, PATCH_COUNCIL_MEMBERS, POST_COUNCIL_MEMBERS, setCouncilMembers,
} from '../actions/council';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

const councilApi = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COUNCIL_MEMBERS:
      console.log('GET Council');
      instance.get('/council/1')
        .then((response) => {
          console.log(response);
          store.dispatch(setCouncilMembers(response.data));
        })
        .catch((error) => {
          // Make error
          console.log(error);
        });
      break;
    case POST_COUNCIL_MEMBERS:
      console.log('POST Council');
      instance.post('/admin/council/1', {
        first_name: 'Prénom',
        last_name: 'Nom',
        photo: 'https://react.semantic-ui.com/images/wireframe/image.png',
        role: 'Fonction',
        town_hall_id: 1,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(getCouncilMembers());
        })
        .catch((error) => {
          // Make error
          console.log(error);
        });
      break;
    case PATCH_COUNCIL_MEMBERS:
      console.log('PATCH Council');
      instance.patch(`/admin/council/1/${action.id}`, {
        first_name: action.firstName,
        last_name: action.lastName,
        photo: action.photo,
        role: action.role,
        town_hall_id: 1,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(getCouncilMembers());
        })
        .catch((error) => {
          // Make error
          console.log(error);
        });
      break;
    case DELETE_COUNCIL_MEMBERS:
      console.log('DELETE Council');
      instance.delete(`/admin/council/1/${action.id}`)
        .then((response) => {
          console.log(response);
          store.dispatch(getCouncilMembers());
        })
        .catch((error) => {
          // Make error
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default councilApi;
