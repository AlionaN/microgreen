import styles from './Card.module.scss';

function Card(card) {
  const { image, title, price } = card.card;
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
      <button type="button" className={styles.btn}>Add to cart</button>
    </li>
  );
}

export default Card;
