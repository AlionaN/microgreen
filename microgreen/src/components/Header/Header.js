import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a className={styles.headerLogo} href="/">
          Micro
        </a>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}><a href="/">Products</a></li>
            <li className={styles.navListItem}><a href="/">About us</a></li>
            <li className={styles.navListItem}><a href="/">Delivery</a></li>
            <li className={styles.navListItem}><a href="/">Payment</a></li>
            <li className={styles.navListItem}><a href="/">Contacts</a></li>
          </ul>
        </nav>
        <div className={styles.userFunc}>
          <div className={styles.userFuncAuth}>Log in</div>
          <ShoppingCartIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
