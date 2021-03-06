import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import IMG_PATH from '../../../constants';
import Button from '../../../components/Button';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <img className={styles.contactsImage} src={`${IMG_PATH}contacts.jpg`} alt="Contacts" />
      <div className={styles.contactsInfo}>
        <div className={styles.contactsInfoTitle}>Contact us</div>
        <div className={styles.contactsInfoWrap}>
          <div className={styles.contactsInfoWrapAddress}>Kyiv, Lobanovskogo st., 8</div>
          <div className={styles.contactsInfoWrapEmail}>info@microgreen.com</div>
          <div className={styles.contactsInfoWrapPhone}>+380639000343</div>
        </div>
        <form className={styles.form}>
          <input type="text" className={styles.formInput} placeholder="Name" />
          <input type="email" className={styles.formInput} placeholder="Email" />
          <textarea className={styles.formTextarea} placeholder="Message" />
          <Button btnText="Send" />
        </form>
        <div className={styles.contactsFollow}>
          <div className={styles.contactsFollowTitle}>Follow us</div>
          <div className={styles.contactsFollowSocials}>
            <Link className={styles.contactsFollowSocialsItem} to="https://www.facebook.com/"><img src={`${IMG_PATH}facebook.png`} alt="Facebook" /></Link>
            <Link className={styles.contactsFollowSocialsItem} to="https://www.instagram.com/"><img src={`${IMG_PATH}instagram.png`} alt="Instagram" /></Link>
            <Link className={styles.contactsFollowSocialsItem} to="https://www.linkedin.com/"><img src={`${IMG_PATH}linkedin.png`} alt="LinkedIn" /></Link>
            <Link className={styles.contactsFollowSocialsItem} to="https://twitter.com/?lang=en"><img src={`${IMG_PATH}twitter.png`} alt="Twitter" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
