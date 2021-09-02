import styles from './Card.module.scss';
import Button from '../Button';
import { ICard } from '../../shared/interfaces/card.interface';

type IProps = {
  card: ICard
}

function Card({ card }: IProps) {
  const { image, title, price } = card;
  return (
    <li className={styles.card}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/${image}`} className={styles.cardImg} alt={title} />
      <div className={styles.cardInfo}>
        <div className={styles.cardInfoTitle}>{title}</div>
        <div className={styles.cardInfoPrice}>
          {price.toFixed(2)}
          $
        </div>
      </div>
      <Button btnText="Add to cart" />
    </li>
  );
}

export default Card;
