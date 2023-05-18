import React from "react";
/* import MyPosts from "./MyPosts/MyPosts"; */
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <section className={styles.profile}>
      <ProfileInfo />
      <MyPostsContainer /* store={props.store} */ />
      {/* <MyPosts 
        postsData={props.profilePageState.postsData} 
        newPostText={props.profilePageState.newPostText} 
        dispatch={props.dispatch}
      /> */}
    </section>
  );
};

export default Profile;