import { SET_ACTIVE_INDEX } from "../actions/reports";

export const initialState = {
  activeIndex: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_INDEX:
      return {
        ...state,
        activeIndex: action.activeIndex,
      }
    default:
      return state; 
  }
};

export default reducer; 