import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuthorized: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.data,
        isAuthorized: true
      }
    default: 
      return state
  };
};

export const setUserData = (userId, login, email) => {
  return {
    type: SET_USER_DATA,
    data: {userId, login, email}
  };
};

export const getAuthUserData = () => {
  return (dispatch) => {
    usersAPI.authCheck()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data;
          dispatch(setUserData(id, login, email));
        }
      });
  }; 
};


export default authReducer;
