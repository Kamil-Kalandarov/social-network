import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  postsData: [
    {id: 1, avatar: 'https://clck.ru/f4ZDf', message: 'Hi, how are you?', likeCount: 13},
    {id: 2, avatar: 'https://clck.ru/f4ZDf', message: "It's my firs post!", likeCount: 33},
    {id: 3, avatar: 'https://clck.ru/f4ZDf', message: "It's my second post!", likeCount: 33},
    {id: 4, avatar: 'https://clck.ru/f4ZDf', message: "It's my third post!", likeCount: 33},
    {id: 5, avatar: 'https://clck.ru/f4ZDf', message: "It's my fiveth post!", likeCount: 33},
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      const newPost = {
        id: 6,
        avatar: 'https://clck.ru/f4ZDf',
        message: state.newPostText, 
        likeCount: 0
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
      case SET_USER_PROFILE:
        return {
          ...state,
          profile: action.userProfile
        };
    default: 
      return state
  };
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = (postTextAreaValue) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: postTextAreaValue
  };
};

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE, 
    userProfile: userProfile
  };
};

// СОЗДАТЕЛИ САНОК ПОЛУЧАЮТ АРГУМЕНТЫ И ВЫЗЫВЮТ ВНУТРИ СЕБЯ САНКУ (функция, которая диспатчит необходимые экшены и возвращает их обратно редьюсерам):
// санка получения данных пользователя на чьей странице находимся
export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      });
  };
};

export default profileReducer;
