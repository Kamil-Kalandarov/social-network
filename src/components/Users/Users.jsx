import React from 'react';
import styles from './users.module.css';
import defaultAvatar from '../../images/Leonid_Medvedovskij.jpg';
import Pagination from '../Pagination/Pagination';
import { NavLink } from 'react-router-dom';

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
    <section className={styles.users}>
      <h2>Users</h2>
      <div className={styles.users__navigation}>
        <Pagination
          breakLabel=". . ."
          previousLabel="<"
          nextLabel=">"
          onPageChange={onUsersPageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={6}
          pageCount={pagesCount}
          renderOnZeroPageCount={null}
          forcePage={props.currentPage - 1}
        /> 
      </div>
      <ul className={styles.users__list}>
        { props.usersData.map(user => {
          return (
            <li key={user.id}>
              <div className={styles.users__userContent}>
                <div>
                  <div>
                    <NavLink to={'/profile/' + user.id}><img 
                      className={styles.users__userAvatar} 
                      src={user.photos.small !== null ? user.photos.small : defaultAvatar} 
                      alt='user-avatar'/>
                    </NavLink>
                  </div>
                  { user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                      props.unfollow(user.id)
                    }}>unfollow</button> 
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                      props.follow(user.id)
                    }}>follow</button> 
                  }
                </div>
              <div className={styles.users__about}>
                <div>
                  <NavLink to={'/profile/' + user.id}><p>{user.name}</p></NavLink>
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
    </section>
  );
};

export default Users;


 // eslint-disable-next-line no-lone-blocks
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