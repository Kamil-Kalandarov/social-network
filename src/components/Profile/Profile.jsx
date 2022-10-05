import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData}/>
    </section>
  );
};

export default Profile;