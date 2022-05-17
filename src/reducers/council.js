import { ADD_COUNCIL_MEMBERS, SET_COUNCIL_MEMBERS } from '../actions/council';
import CardModel from '../components/Council/CardModel';
import whiteImage from '../assets/images/council/whiteImage.png';

export const initialState = {
  councilMembers: [
    {
      first_name: "Aleks",
      last_name: "BigBoss",
      photo: null,
      role: "Dieu",
      town_hall_id: 1,
      town_hall_staff_id: 1,
    },
    {
      first_name: "Père Noêl",
      last_name: "imaginaire",
      photo: null,
      role: "God",
      town_hall_id: 1,
      town_hall_staff_id: 2,
    },
  ],
  cardL: [
    <CardModel imageName={whiteImage} name="Marie Marie" role="Mairesse" />,
    <CardModel imageName={whiteImage} name="Marie Marie" role="Mairesse" />,
    <CardModel imageName={whiteImage} name="Marie Marie" role="Mairesse" />,
    <CardModel imageName={whiteImage} name="Marie Marie" role="Mairesse" />,
  ],
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
          photo: null,
          role: "",
          town_hall_id: 1,
          town_hall_staff_id: "",
          },
        ]
      };
    default:
      return state;
  }
};

export default reducer;
