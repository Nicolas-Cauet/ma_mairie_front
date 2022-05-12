import { SAVE_REPORTS, SET_ACTIVE_INDEX } from "../actions/reports";

export const initialState = {
  activeIndex: -1,
  reportsList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_INDEX:
      return {
        ...state,
        activeIndex: action.activeIndex,
      }
    case SAVE_REPORTS:
    return {
      ...state,
      reportsList: action.payload,
    }
    default:
      return state; 
  }
};

export default reducer; 