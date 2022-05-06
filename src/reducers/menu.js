import { TOGGLE_MENU } from "../actions/action";

export const initialState = {
    isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
          ...state,
        isOpen: !state.isOpen,
      };
    }
    default:
      return state; 
  }
};

export default reducer;