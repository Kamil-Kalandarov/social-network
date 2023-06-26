import styles from './socialLinks.module.css';
import facebookIcon from '../../../../images/facebook.svg';
import webSiteIcon from '../../../../images/webSite.svg';
import vkIcon from '../../../../images/vk.svg';
import twitterIcon from '../../../../images/twitter.svg';
import instagramIcon from '../../../../images/instagram.svg';
import youTubeIcon from '../../../../images/youtube.svg';
import gitHubIcon from '../../../../images/github.svg';

const SocialLinks = (props) => {
  const contacts = props.contacts
  console.log(contacts);
  return (
    <ul className={styles.socialLinks}>
      {contacts.facebook ? <a href={contacts.facebook}><img src={facebookIcon} alt='facebookIcon'/></a> : null}
      {contacts.website ? <a href={contacts.website}><img src={webSiteIcon} alt='webSiteIcon'/></a> : null}
      {contacts.vk ? <a href={contacts.vk}><img src={vkIcon} alt='vkIcon'/></a> : null}
      {contacts.twitter ? <a href={contacts.twitter}><img src={twitterIcon} alt='witterIcon'/></a> : null}
      {contacts.instagram ? <a href={contacts.instagram}><img src={instagramIcon} alt='instagramIcon'/></a> : null}
      {contacts.youtube ? <a href={contacts.youtube}><img src={youTubeIcon} alt='youTubeIcon'/></a> : null}
      {contacts.github ? <a href={contacts.github}><img src={gitHubIcon} alt='gitHubIcon' /></a> : null}
      {contacts.mainLink ? <a href={contacts.mainLink}>{contacts.mainLink}</a> : null}
    </ul>
  );
};

export default SocialLinks;
