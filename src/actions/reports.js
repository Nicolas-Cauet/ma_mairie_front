//State for accordion reports list
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';
export const setActiveIndex = (newIndex) => ({
  type: SET_ACTIVE_INDEX,
  activeIndex: newIndex,
});

//State for accordion terms and conditions
export const SET_ACTIVE_INDEX_TERMS = 'SET_ACTIVE_INDEX_TERMS';
export const setActiveIndexTerms = (newIndex) => ({
  type: SET_ACTIVE_INDEX_TERMS,
  activeIndexTerms: newIndex,
});