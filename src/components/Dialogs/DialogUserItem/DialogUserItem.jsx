import React from "react";
import styles from './DialogUserItem.module.css';
import { NavLink } from "react-router-dom";

const DialogUserItem = (props) => {

  const path = `/dialogs/${props.id}`;
  
  return (
    <li>
      <div className={styles.dialogs__userDilogContainer}>
        <img className={styles.dialogs__dialogUserItemImage} src={props.src} alt="#"/>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </li>
  );
};

export default DialogUserItem;