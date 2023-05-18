import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import FriendIconAccount from "../FriendIconAccount/FriendIconAccount";
import { useSelector } from "react-redux";

const setActive = ({isActive}) => isActive ? styles.navbar__link_active : styles.navbar__link;

const Navbar = (props) => {

  /* const { friendsData } = useSelector(store => store.friendsList)

  let friendsListElements = friendsData
    .map(friend => <FriendIconAccount key={friend.id} name={friend.name} id={friend.id} src={friend.src} />) */
  
  let friendsListElements = props.friendsList.friendsData
    .map(friend => <FriendIconAccount key={friend.id} name={friend.name} id={friend.id} src={friend.src} />)

  return (
    <section className={styles.navbar}>
      <nav>
        <ul className={styles.navbar__navList}>
          <li><NavLink to='/profile' className={setActive}>Profile</NavLink></li>
          <li><NavLink to='/dialogs' className={setActive}>Messages</NavLink></li>
          <li><a className={styles.navbar__link}>News</a></li>
          <li><a className={styles.navbar__link}>Settings</a></li>
          <li className={styles.navbar__frindsItem}>
            <a className={`${styles.navbar__link} navbar__friendsLink`}>Friends</a>
            <ul className={styles.navbar__friendsList}>
              {friendsListElements}
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar;