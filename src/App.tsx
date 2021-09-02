import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Delivery from './pages/Delivery';
import Shop from './pages/Shop';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/delivery">
          <Delivery />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
