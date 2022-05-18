import { ADD_COUNCIL_MEMBERS, CREATE_EDITING_MEMBER, CREATE_EDITING_MEMBER_NAME, CREATE_EDITING_MEMBER_ROLE, SET_COUNCIL_MEMBERS, TOGGLE_EDITING_MEMBER } from '../actions/council';
import CardModel from '../components/Council/CardModel';
import whiteImage from '../assets/images/council/whiteImage.png';

export const initialState = {
  // councilMembers: [
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
          first_name: "",
          last_name: "",
          photo: "",
          role: "",
          town_hall_id: 1,
          town_hall_staff_id: "",
          },
        ]
      };
    case CREATE_EDITING_MEMBER:
      return {
        ...state,
        [action.name]: false
      }
    case TOGGLE_EDITING_MEMBER:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case CREATE_EDITING_MEMBER_NAME:
      return {
        ...state,
        [action.key]: action.value
      };
    case CREATE_EDITING_MEMBER_ROLE:
      return {
        ...state,
        [action.key]: action.value
      };
    default:
      return state;
  }
};

export default reducer;
