import { NavLink } from 'react-router-dom';
import styles from './Hero.module.scss';
import IMG_PATH from '../../constants';

function Hero() {
  const img = `${IMG_PATH}hero.jpg`;
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img})` }}>
      <div className={`${styles.heroText} ${styles.heroTextRight}`}>Micro</div>
      <div className={`${styles.heroText} ${styles.heroTextLeft}`}>Green</div>
      <div className={styles.toShop}>
        <div className={styles.toShopText}>Alive food for you</div>
        <NavLink to="/shop" className={styles.btn}>To Shop</NavLink>
      </div>
    </div>
  );
}

export default Hero;
