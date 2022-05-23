import {
  ADD_COUNCIL_MEMBERS,
  CREATE_EDITING_MEMBER,
  CREATE_EDITING_MEMBER_FIRSTNAME,
  CREATE_EDITING_MEMBER_LASTNAME,
  CREATE_EDITING_MEMBER_PHOTO,
  CREATE_EDITING_MEMBER_ROLE,
  SET_COUNCIL_MEMBERS,
  TOGGLE_EDITING_MEMBER,
} from '../actions/council';

export const initialState = {
  councilMembers: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COUNCIL_MEMBERS:
      return {
        ...state,
        councilMembers: action.councilMembers,
      };
    case ADD_COUNCIL_MEMBERS:
      return {
        ...state,
        councilMembers: [...state.councilMembers,
          {
            first_name: 'Prénom',
            last_name: 'Nom',
            photo: 'https://react.semantic-ui.com/images/wireframe/image.png',
            role: 'Fonction',
            town_hall_id: 1,
            town_hall_staff_id: '',
          },
        ],
      };
    case CREATE_EDITING_MEMBER:
      return {
        ...state,
        [action.name]: false,
      };
    case TOGGLE_EDITING_MEMBER:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case CREATE_EDITING_MEMBER_LASTNAME:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CREATE_EDITING_MEMBER_FIRSTNAME:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CREATE_EDITING_MEMBER_ROLE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CREATE_EDITING_MEMBER_PHOTO:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
