const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  postsData: [
    {id: 1, avatar: 'https://clck.ru/f4ZDf', message: 'Hi, how are you?', likeCount: 13},
    {id: 2, avatar: 'https://clck.ru/f4ZDf', message: "It's my firs post!", likeCount: 33},
    {id: 3, avatar: 'https://clck.ru/f4ZDf', message: "It's my second post!", likeCount: 33},
    {id: 4, avatar: 'https://clck.ru/f4ZDf', message: "It's my third post!", likeCount: 33},
    {id: 5, avatar: 'https://clck.ru/f4ZDf', message: "It's my fiveth post!", likeCount: 33},
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      const newPost = {
        id: 6,
        avatar: 'https://clck.ru/f4ZDf',
        message: state.newPostText, 
        likeCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
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

export default profileReducer;
