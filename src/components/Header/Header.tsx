import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Routes from '../../enums';
// import Button from '../Button';
import Logo from '../Logo';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {/* <Button to={Routes.Shop} component={Link} /> */}
            <li className={styles.navListItem}>
              <NavLink exact to={Routes.Shop}>Products</NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink exact to={Routes.AboutUs}>About us</NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink exact to={Routes.Delivery}>Delivery</NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink exact to={Routes.Payment}>Payment</NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink exact to={Routes.Contacts}>Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.userFunc}>
          <div className={styles.userFuncAuth}>Log in</div>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
}

export default Header;
