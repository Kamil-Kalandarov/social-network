import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <ProfileInfo />
      <MyPosts 
        postsData={props.profilePageState.postsData} 
        newPostText={props.profilePageState.newPostText} 
        dispatch={props.dispatch}/>
    </section>
  );
};

export default Profile;