import styles from './Cards.module.scss';
import Card from '../Card';
import { ICard } from '../../shared/interfaces/card.interface';

interface IProps {
  cardsList: ICard[]
}

function Cards(cardsList: IProps) {
  const cardsArray = cardsList.cardsList;
  return (
    <ul className={styles.cardList}>
      {cardsArray.length && cardsArray.map((item) => <Card key={item.id} card={item} />)}
    </ul>
  );
}

export default Cards;
