import styles from './Home.module.scss';
import Cards from '../../components/Cards';
import Hero from '../../components/Hero';
import * as cardsList from '../../products.json';

function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>
        <Cards cardsList={cardsList.products} />
      </main>
    </>
  );
}

export default Home;
