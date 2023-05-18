import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsListReducer from "./friendsListReducer";

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  friendsList: friendsListReducer,
});
