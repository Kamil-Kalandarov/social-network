import React, { createRef } from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  const postsElement = props.postsData
    .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount} src={post.src}/>);

  const postTexAreaRef = createRef()

  const addPost = (event) => {
    event.preventDefault()
    const postTextAreaValue = postTexAreaRef.current.value
    alert(postTextAreaValue)
  }

  return (
    <section className={styles.profile__myPosts}>
      <h2>My Posts</h2>
      <form className={styles.profile__postForm}>
        <textarea className={styles.profile__textAreaPost} ref={postTexAreaRef}></textarea>
        <button className={styles.profile__postFormButton} onClick={addPost}>add post</button>
      </form>
      <ul className={styles.profile__postList}>
        {postsElement}
      </ul>
    </section>
  )
}

export default MyPosts