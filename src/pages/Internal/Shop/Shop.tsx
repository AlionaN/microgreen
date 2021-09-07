import styles from './Shop.module.scss';
import * as cardsList from '../../../products.json';
import Cards from '../../../components/Cards';

function Shop() {
  return (
    <div className={styles.shop}>
      <Cards cardsList={cardsList.products} />
    </div>
  );
}

export default Shop;
