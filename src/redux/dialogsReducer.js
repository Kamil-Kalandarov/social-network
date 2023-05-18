const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
  userDialogsData: [
    {id: 1, name: 'Sitara', src: 'https://clck.ru/gvZ4o'},
    {id: 2, name: 'Rench', src: 'https://clck.ru/gvZ4o'},
    {id: 3, name: 'Aiden', src: 'https://clck.ru/gvZ4o'},
    {id: 4, name: 'Markus', src: 'https://clck.ru/gvZ4o'},
    {id: 5, name: 'Ti-Bon', src: 'https://clck.ru/gvZ4o'},
  ],

  messagesData: [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'How is your IT Kamasutra?'},
    {id: 3, message: 'It is good, thak you!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Nice to meet you!'},
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      const newMessage = state.newMessageText
      const staeCopy = { ...state }
      staeCopy.messagesData = [...state.messagesData]
      staeCopy.messagesData.push({id: 6, message: newMessage});
      staeCopy.newMessageText = '';
      return staeCopy
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      const stateCopy = { ...state }
      stateCopy.newMessageText = action.newMessage;
      return stateCopy
    }
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
