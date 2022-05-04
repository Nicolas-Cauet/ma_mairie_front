export const initialState = {
    email: '',
    password: '',
    inseeCode: '',
    logged: false,
    isOpenSignup: false,
    isOpenLogin: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;