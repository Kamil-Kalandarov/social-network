import React, { createRef } from "react";
import styles from './Dialogs.module.css';
import DialogUserItem from "./DialogUserItem/DialogUserItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const userDialogsElements = props.state.userDialogsData
    .map(userDialog => <DialogUserItem key={userDialog.name} name={userDialog.name} id={userDialog.id} src={userDialog.src} />);
  
  const userMessagesElements = props.state.messagesData
    .map(message => <Message key={message.message} message={message.message} id={message.id}/>);

  const messageTextAreaRef = createRef();

  

  const sendMessage = (event) => {
    event.preventDefault()
    const messageTextAreaValue = messageTextAreaRef.current.value
    alert(messageTextAreaValue)
  }

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
          <textarea className={styles.dialogs__messageTextArea} ref={messageTextAreaRef} ></textarea>
          <button className={styles.dialogs__messagesFormButton} onClick={sendMessage}>send message</button>
        </form>
      </div>
    </section>
  );
};

export default Dialogs;