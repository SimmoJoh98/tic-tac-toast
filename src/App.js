import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import axios from 'axios';
import landingPage from './pages/landing-page';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history = {history}>
        <Switch>
          <Route path='/' component={landingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
