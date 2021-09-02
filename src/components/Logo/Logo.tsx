import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <NavLink className={styles.logo} to="/">
      Micro
    </NavLink>
  );
}

export default Logo;
