import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div className={styles.profile__backgroundContainer}></div>
      <div className={styles.profile__profileDescription}>
          ava + description
      </div>
    </>
  );
};

export default ProfileInfo;