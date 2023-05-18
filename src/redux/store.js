import dialogsReducer from "./dialogsReducer";
import friendsListReducer from "./friendsListReducer";
import profileReducer from "./profileReducer";

/* const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'; */

const store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, src: 'https://clck.ru/f4ZDf', message: 'Hi, how are you?', likeCount: 13},
        {id: 2, src: 'https://clck.ru/f4ZDf', message: "It's my firs post!", likeCount: 33},
        {id: 3, src: 'https://clck.ru/f4ZDf', message: "It's my second post!", likeCount: 33},
        {id: 4, src: 'https://clck.ru/f4ZDf', message: "It's my third post!", likeCount: 33},
        {id: 5, src: 'https://clck.ru/f4ZDf', message: "It's my fiveth post!", likeCount: 33},
      ],
      newPostText: ''
    },
    
    messagesPage: {
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
    },
  
    friendsList: {
      friendsData: [
        {id: 1, name: 'Sitara', src: 'https://clck.ru/gvZ4o'},
        {id: 2, name: 'Rench', src: 'https://clck.ru/gvZ4o'},
        {id: 3, name: 'Aiden', src: 'https://clck.ru/gvZ4o'},
        {id: 4, name: 'Markus', src: 'https://clck.ru/gvZ4o'},
        {id: 5, name: 'Ti-Bon', src: 'https://clck.ru/gvZ4o'},
        {id: 6, name: 'Ti-Bon', src: 'https://clck.ru/gvZ4o'},
        {id: 7, name: 'Ti-Bon', src: 'https://clck.ru/gvZ4o'}
      ]
    }
  },

  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.friendsList = friendsListReducer(this._state.friendsList, action)
    this._callSubscriber(this._state)

    /* if (action.type === ADD_POST) {
      const newPost = {
        id: 6,
        src: 'https://clck.ru/f4ZDf',
        message: this._state.profilePage.newPostText, 
        likeCount: 0
      };
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state)
    } else if (action.type === ADD_NEW_MESSAGE) {
      const newMessage = this._state.messagesPage.newMessageText
      this._state.messagesPage.messagesData.push({ id: 6, message: newMessage });
      this._state.messagesPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        this._state.messagesPage.newMessageText = action.newMessage;
        this._callSubscriber(this._state)
    } */
  }
};

/* export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreator = (postTextAreaValue) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: postTextAreaValue
  }
}; */

/* export const addNewMessageActionCreator = () => {
  return {
    type: ADD_NEW_MESSAGE
  }
}

export const updateNewMessageTextCreator = (messageTextAreaValue) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: messageTextAreaValue
  }
}; */

window.state = store

export default store;