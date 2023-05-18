import Dialogs from "./Dialogs";
import { addNewMessageActionCreator, updateNewMessageTextCreator,  } from "../../redux/dialogsReducer";
import { useDispatch, useSelector, connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userDialogsData: state.messagesPage.userDialogsData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addNewMessageActionCreator())},
    onMessageText: (messageTextAreaValue) => {
      dispatch(updateNewMessageTextCreator(messageTextAreaValue))}
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
