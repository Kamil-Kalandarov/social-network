import React from 'react';
import styles from './user.module.css';

const User = (props) => {
  return (
    <>
    <h2>Users</h2>
    <li className={styles.users__item}>
      <div className={styles.users__userContent}>
        <div>
          <div><img className={styles.users__userAvatar} src={props.avatar} alt='user-avatar'/></div>
          { props.followed
            ? <button onClick={() => {props.follow(props.userId)}}>followed</button> 
            : <button onClick={() => {props.unfollow(props.userId)}}>unfollow</button> 
          }
        </div>
        <div className={styles.users__about}>
          <div>
            <p>{props.name}</p>
            <p>{props.status}</p>
          </div>
          <div className={styles.users__location}>
            <p>{props.location.country}</p>
            <p>{props.location.city}</p>
          </div>
        </div>
      </div>
    </li>
    </>
  )
}

export default User;
