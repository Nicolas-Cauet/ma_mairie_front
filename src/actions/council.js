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

// POST council members to council page
export const POST_COUNCIL_MEMBERS = 'POST_COUNCIL_MEMBERS';
export const postCouncilMembers = () => ({
  type: POST_COUNCIL_MEMBERS,
});

// PATCH council members to council page
export const PATCH_COUNCIL_MEMBERS = 'PATCH_COUNCIL_MEMBERS';
export const patchCouncilMembers = () => ({
  type: PATCH_COUNCIL_MEMBERS,
});

// DELETE council members to council page
export const DELETE_COUNCIL_MEMBERS = 'DELETE_COUNCIL_MEMBERS';
export const deleteCouncilMembers = () => ({
  type: DELETE_COUNCIL_MEMBERS,
});

// add council members to council page
export const ADD_COUNCIL_MEMBERS = 'ADD_COUNCIL_MEMBERS';
export const addCouncilMembers = () => ({
  type: ADD_COUNCIL_MEMBERS,
});
