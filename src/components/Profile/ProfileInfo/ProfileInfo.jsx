import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloade';
import jobIcon from '../../../images/job.svg'
import ProfileFullInfo from './ProfileFullInfo/ProfileFullInfo';

const ProfileInfo = (props) => {

  if(!props.profile) {
    return (
      <Preloader />
    )
  }

  return (
    <>
      <div className={styles.profile__backgroundContainer}></div>
      <div className={styles.profile__profileDescription}>
        <img className={styles.profile__avatar} src={props.profile.photos.large} alt='user-avatar'/>
        <div className={styles.profile__userInfo}>
          <h2 className={styles.profile__name}>{props.profile.fullName}</h2>
          {props.profile.lookingForAJob ? <img className={styles.profile__jobIcon} src={jobIcon} alt='jobIcon'/> : null}
          <div className={styles.profile__about}>
            <h3>About</h3>
          </div>
          <ProfileFullInfo contacts={props.profile.contacts}/>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;