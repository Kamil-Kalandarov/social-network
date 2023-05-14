import React from "react";
import styles from './Dialogs.module.css';
import DialogUserItem from "./DialogUserItem/DialogUserItem";
import Message from "./Message/Message";
import { addNewMessageActionCreator, updateNewMessageTextCreator,  } from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  
  const userDialogsElements = props.messagesPageState.userDialogsData
    .map(userDialog => <DialogUserItem key={userDialog.name} name={userDialog.name} id={userDialog.id} src={userDialog.src} />);
  
  const userMessagesElements = props.messagesPageState.messagesData
    .map(message => <Message key={message.message} message={message.message} id={message.id}/>);

  const sendMessage = (event) => {
    event.preventDefault()
    props.dispatch(addNewMessageActionCreator())
  };

  const onMessageText = (event) => {
    const messageTextAreaValue = event.target.value
    props.dispatch(updateNewMessageTextCreator(messageTextAreaValue))
  };

  return (
    <section className={styles.dialogs}>
      <ul className={styles.dialogs__userListItems}>
       {userDialogsElements}
      </ul>
      <div className={styles.dialog__messegesContainer}>
        <ul className={styles.dialogs__messagesListItems}>
          {userMessagesElements}
        </ul>
        <form className={styles.dialogs__messagesFrom}>
          <textarea 
            className={styles.dialogs__messageTextArea} 
            value={props.messagesPageState.newMessageText}
            onChange={onMessageText}
          />
          <button className={styles.dialogs__messagesFormButton} onClick={sendMessage}>send message</button>
        </form>
      </div>
    </section>
  );
};

export default Dialogs;