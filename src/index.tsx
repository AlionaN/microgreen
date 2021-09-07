import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <App />
  </Router>,
  document.getElementById('root'),
);
