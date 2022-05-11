import { SET_ACTIVE_INDEX } from "../actions/reports";

export const initialState = {
  activeIndex: -1,
  isReporting: true,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //Management of accordion section of report
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