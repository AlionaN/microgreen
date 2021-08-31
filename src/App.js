import './App.css';
import Cards from './components/Cards';
import Header from './components/Header/Header';
import { products as cardsList } from './products';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Cards cardsList={cardsList} />
      </main>
    </>
  );
}

export default App;
