import React from "react";
import styles from './friendIconAccount.module.css'

const FriendIconAccount = (props) => {
  return (
    <li>
      <a>
        <div className={styles.friendIconAccount__container}>
          <img className={styles.friendIconAccount__image} src={props.src} alt='#'></img>
          <p className={styles.friendIconAccount__name}>{props.name}</p>
        </div>
      </a>
    </li>
  );
};

export default FriendIconAccount;