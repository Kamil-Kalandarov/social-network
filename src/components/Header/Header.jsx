import React from "react";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src="https://i.pinimg.com/474x/46/aa/6a/46aa6aca0cac7dd47b2d667ac20cc83d--watch-dogs--videogames.jpg"/>
      <img className={styles.header__logo} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1qX1CxH2ZWk5gCL4PU4idw/ede7a498a0d61e454f7f5d8aa19664e2/watchdogs1-logo-inline-white-shadow.png" />
    </header>
  )
}

export default Header