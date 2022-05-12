
//State for accordion
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';
export const setActiveIndex = (newIndex) => ({
  type: SET_ACTIVE_INDEX,
  activeIndex: newIndex,
});

export const GET_REPORTS = 'GET_REPORTS';
export const getReports = () => ({
  type: GET_REPORTS,
});

export const SAVE_REPORTS = 'SAVE_REPORTS';
export const saveReports = (reports) => ({
  type: SAVE_REPORTS,
  playload: reports,
});