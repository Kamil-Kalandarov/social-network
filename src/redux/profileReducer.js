const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        src: 'https://clck.ru/f4ZDf',
        message: state.newPostText, 
        likeCount: 0
      };
      state.postsData.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state
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
