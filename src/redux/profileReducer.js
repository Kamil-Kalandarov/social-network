const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  postsData: [
    {id: 1, src: 'https://clck.ru/f4ZDf', message: 'Hi, how are you?', likeCount: 13},
    {id: 2, src: 'https://clck.ru/f4ZDf', message: "It's my firs post!", likeCount: 33},
    {id: 3, src: 'https://clck.ru/f4ZDf', message: "It's my second post!", likeCount: 33},
    {id: 4, src: 'https://clck.ru/f4ZDf', message: "It's my third post!", likeCount: 33},
    {id: 5, src: 'https://clck.ru/f4ZDf', message: "It's my fiveth post!", likeCount: 33},
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 6,
        src: 'https://clck.ru/f4ZDf',
        message: state.newPostText, 
        likeCount: 0
      };
      const stateCopy = { ...state }
      stateCopy.postsData = [...state.postsData]
      stateCopy.postsData.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state }
      stateCopy.newPostText = action.newText;
      return stateCopy
    }
    default: 
      return state
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreator = (postTextAreaValue) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: postTextAreaValue
  }
};

export default profileReducer;
