import {
  Switch,
  Route,
} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Delivery from './pages/Delivery';
import Shop from './pages/Shop';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
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
  );
}

export default Routes;
