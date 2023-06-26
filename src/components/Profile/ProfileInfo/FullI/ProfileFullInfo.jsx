import styles from './profileFullInfo.module.css';
import SocialLinks from '../SocialLinks/SocialLinks';

const ProfileFullInfo = (props) => {
  return (
    <div className={styles.profile__contacts}>
      <h3 className={styles.profile__contactsTitle}>Contacts</h3>
        <SocialLinks contacts={props.contacts}/>
      </div>
  );
};

export default ProfileFullInfo;
