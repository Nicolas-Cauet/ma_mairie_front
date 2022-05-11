import { SET_ACTIVE_INDEX, SET_ACTIVE_INDEX_TERMS } from "../actions/reports";

export const initialState = {
  activeIndex: -1,
  activeIndexTerms: -1,
  isReporting:false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //Management of accordion section of report
    case SET_ACTIVE_INDEX:
      return {
        ...state,
        activeIndex: action.activeIndex,
      }
    case SET_ACTIVE_INDEX_TERMS:
      return {
        ...state,
        activeIndexTerms: action.activeIndexTerms,
      }
    default:
      return state; 
  }
};

export default reducer; 