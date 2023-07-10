import React from "react";
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
    <header className={styles.header}>
      <div className={styles.header__logoContainer}>
        <img className={styles.header__logo} src="https://kurl.ru/cqIMc" alt="logo"/>
        <img className={styles.header__logo} src="https://kurl.ru/BxGfX" alt="logo"/>
      </div>
      <div className={styles.header__buttonsContainer}>
        {props.isAuthorized 
          ? <p>{props.userName}</p>
          : <NavLink to={'/login'} className={styles.header__button}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header