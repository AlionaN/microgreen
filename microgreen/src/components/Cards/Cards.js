import styles from './Cards.module.scss';
import Card from '../Card';

function Cards(cardsList) {
  const cardsArray = cardsList.cardsList;
  return (
    <ul className={styles.cardList}>
      {cardsArray.length && cardsArray.map((item) => <Card key={item.id} card={item} />)}
    </ul>
  );
}

export default Cards;
