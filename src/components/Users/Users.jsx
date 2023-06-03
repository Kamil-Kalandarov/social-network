import React from 'react';
import styles from './users.module.css';
import defaultAvatar from '../../images/Leonid_Medvedovskij.jpg';
import Pagination from '../Pagination/Pagination';

const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i)
  };

  const onUsersPageClick = (selectedPage) => {
    const currentPage = selectedPage.selected + 1
    props.onUsersPageClick(currentPage)
  };

  return (
    <main className={styles.users}>
      <h2>Users</h2>
      <div className={styles.users__navigation}>
        <Pagination
          breakLabel=". . ."
          previousLabel="<"
          nextLabel=">"
          onPageChange={onUsersPageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pagesCount}
          renderOnZeroPageCount={null}
        /> 
      </div>
      {/* <nav className={styles.users__navigation}>
        <span onClick={(e) => {props.onPrevUsersPage(props.currentPage)}}>{'<'}</span>
        <ul className={styles.users__pagesList}>
          {pages.map(page => {
            return (
              <li 
                className={props.currentPage === page ? styles.users__selectedPageItem : styles.users__pageItem}
                onClick={(e) => {props.onUsersPageClick(page)}}
              >
              {page}
              </li>
            )
          })}
        </ul>
        <span onClick={(e) => {props.onNextUsersPage(props.currentPage)}}>{'>'}</span>
      </nav> */}
      <ul className={styles.users__list}>
        { props.usersData.map(user => {
          return (
            <li key={user.id}>
              <div className={styles.users__userContent}>
                <div>
                  <div><img className={styles.users__userAvatar} src={user.photos.small !== null ? user.photos.small : defaultAvatar} alt='user-avatar'/></div>
                  { user.followed
                    ? <button onClick={() => {props.unFollow(user.id)}}>unfollow</button> 
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
            </li>
          )
          })
        }
      </ul>
    </main>
  );
};

export default Users;
