import React from 'react';
import styles from './users.module.css';
import axios from 'axios';

const Users = (props) => {
  console.log(props)
  
  if (props.usersData.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
        console.log(props);
    })
  };

  return (
    <main>
      <h2>Users</h2>
      <ul className={styles.users}>
        { props.usersData 
          .map(user => <li className={styles.users__item} key={user.id}>
            <div className={styles.users__userContent}>
              <div>
                <div><img className={styles.users__userAvatar} src={user.photos.small} alt='user-avatar'/></div>
                { user.followed
                  ? <button onClick={() => {props.unfollow(user.id)}}>unfollow</button> 
                  : <button onClick={() => {props.follow(user.id)}}>follow</button> 
                }
              </div>
              <div className={styles.users__about}>
                <div>
                  <p>{user.name}</p>
                  <p>{user.status}</p>
                </div>
                <div className={styles.users__location}>
                  <p>{'user.location.country'}</p>
                  <p>{'user.location.city'}</p>
                </div>
              </div>
            </div>
          </li>)
        }
      </ul>
    </main>
  );
};

export default Users;
