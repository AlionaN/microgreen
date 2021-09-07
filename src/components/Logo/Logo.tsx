import { NavLink } from 'react-router-dom';
import Routes from '../../enums';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <NavLink className={styles.logo} to={Routes.Root}>
      Micro
    </NavLink>
  );
}

export default Logo;
