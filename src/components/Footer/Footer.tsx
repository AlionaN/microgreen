import Logo from '../Logo';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.copyright}>2021</div>
    </footer>
  );
}

export default Footer;
