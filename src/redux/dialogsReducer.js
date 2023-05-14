const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = state.newMessageText
      state.messagesData.push({id: 6, message: newMessage});
      state.newMessageText = '';
      return state
    case UPDATE_NEW_MESSAGE_TEXT: 
      state.newMessageText = action.newMessage;
      return state
    default: 
      return state
  }
};

export const addNewMessageActionCreator = () => {
  return {
    type: ADD_NEW_MESSAGE
  }
}

export const updateNewMessageTextCreator = (messageTextAreaValue) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: messageTextAreaValue
  }
};

export default dialogsReducer;
