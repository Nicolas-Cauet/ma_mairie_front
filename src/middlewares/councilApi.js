import axios from 'axios';
import { GET_COUNCIL_MEMBERS, setCouncilMembers } from '../actions/council';

const instance = axios.create({
  baseURL: 'https://mamairie.herokuapp.com',
});

const councilApi = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COUNCIL_MEMBERS:
      console.log('GET Council');
      instance.get('council/1')
        .then((response) => {
          console.log(response);
          store.dispatch(setCouncilMembers(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default councilApi;
