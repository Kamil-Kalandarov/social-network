import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsListReducer from "./friendsListReducer";
import usersReducer from "./usersReducer";
import modalReducer from "./modalReducer";

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  friendsList: friendsListReducer,
  usersPage: usersReducer,
  modal: modalReducer,
});
