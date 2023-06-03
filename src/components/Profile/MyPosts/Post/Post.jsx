import React from "react";
import styles from './Post.module.css'

const Post = (props) => {
  return (
    <li className={styles.profile__postItem}>
      <div className={styles.profile__postContent}>
        <img className={styles.profile__postImage} src={props.src} alt="#"/>
        <p className={styles.profile__postText}>{props.message}</p>
      </div>
      <div>
        <span className={styles.profile__postLike}>like</span> {props.likeCount}
      </div>
    </li>
  )
}

export default Post