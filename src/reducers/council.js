import { SET_COUNCIL_MEMBERS } from '../actions/council';

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
    default:
      return state;
  }
};

export default reducer;
