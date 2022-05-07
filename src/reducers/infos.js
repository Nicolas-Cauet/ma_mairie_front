import { TOGGLE_RECYCLING, TOGGLE_WASTE } from "../actions/infos";

export const initialState = {
    isOpenWaste: false,
    isOpenRecycling: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_WASTE:
      return {
        ...state,
        isOpenWaste: !state.isOpenWaste,
      };
    case TOGGLE_RECYCLING:
      return {
        ...state,
        isOpenRecycling: !state.isOpenRecycling,
      };
    default:
      return state; 
  }
};

export default reducer; 