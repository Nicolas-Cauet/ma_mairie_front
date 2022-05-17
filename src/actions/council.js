// GET council members to council page
export const GET_COUNCIL_MEMBERS = 'GET_COUNCIL_MEMBERS';
export const getCouncilMembers = () => ({
  type: GET_COUNCIL_MEMBERS,
});

// SET council members to state
export const SET_COUNCIL_MEMBERS = 'SET_COUNCIL_MEMBERS';
export const setCouncilMembers = (councilMembers) => ({
  type: SET_COUNCIL_MEMBERS,
  councilMembers,
});
