import { ADD_COUNCIL_MEMBERS, SET_COUNCIL_MEMBERS } from '../actions/council';
import CardModel from '../components/Council/CardModel';
import whiteImage from '../assets/images/council/whiteImage.png';

export const initialState = {
  councilMembers: [],
  cardList: [
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
        cardList: [...state.cardList, <CardModel imageName={whiteImage} name="Marie Marie" role="Mairesse" />],
      };
    default:
      return state;
  }
};

export default reducer;
