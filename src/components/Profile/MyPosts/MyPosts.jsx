import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {

  const postsElement = props.postsData
    .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount} src={post.src}/>);

  const addPost = (event) => {
    event.preventDefault()
    props.addPost()
    /* props.dispatch(addPostActionCreator()) */
  };

  const onPostChange = (event) => {
    const postTextAreaValue = event.target.value
    props.updateNewPostText(postTextAreaValue)
    /* props.dispatch(updateNewPostTextActionCreator(postTextAreaValue)) */
  };

  return (
    <section className={styles.profile__myPosts}>
      <h2>My Posts</h2>
      <form className={styles.profile__postForm}>
        <textarea 
          className={styles.profile__textAreaPost} 
          value={props.newPostText}
          onChange={onPostChange} 
        />
        <button className={styles.profile__postFormButton} onClick={addPost}>add post</button>
      </form>
      <ul className={styles.profile__postList}>
        {postsElement}
      </ul>
    </section>
  )
};

export default MyPosts;
