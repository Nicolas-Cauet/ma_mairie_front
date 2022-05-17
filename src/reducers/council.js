import { ADD_COUNCIL_MEMBERS, SET_COUNCIL_MEMBERS, TOGGLE_EDITING_MEMBER } from '../actions/council';
import CardModel from '../components/Council/CardModel';
import whiteImage from '../assets/images/council/whiteImage.png';

export const initialState = {
  councilMembers: [
    {
      first_name: "Aleks",
      last_name: "BigBoss",
      photo: 'https://images.generated.photos/pUdPEX9EX1AY-gbcRKI5nJ8H7fKlthV5oJS4lGhFJlc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI5NDQzLmpwZw.jpg',
      role: "Dieu",
      town_hall_id: 1,
      town_hall_staff_id: 1,
    },
    {
      first_name: "Père Noêl",
      last_name: "imaginaire",
      photo: 'https://images.generated.photos/51LnbjRt1Ev5zA1Ipuy-3GuoZ1CYhtTOkhywZBNCjxI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wMjI0/NDAwLmpwZw.jpg',
      role: "God",
      town_hall_id: 1,
      town_hall_staff_id: 2,
    },
  ],
  isOpenEditingMember: false,
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
    case TOGGLE_EDITING_MEMBER:
      return {
        ...state,
        isOpenEditingMember: !state.isOpenEditingMember,
      };
    default:
      return state;
  }
};

export default reducer;
