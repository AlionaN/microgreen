import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <NavLink className={styles.headerLogo} to="/">
          Micro
        </NavLink>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}><NavLink to="/shop">Products</NavLink></li>
            <li className={styles.navListItem}><NavLink to="/about-us">About us</NavLink></li>
            <li className={styles.navListItem}><NavLink to="/delivery">Delivery</NavLink></li>
            <li className={styles.navListItem}><NavLink to="/payment">Payment</NavLink></li>
            <li className={styles.navListItem}><NavLink to="/contacts">Contacts</NavLink></li>
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