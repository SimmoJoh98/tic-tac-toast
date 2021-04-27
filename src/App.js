import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import Axios from 'axios';
import landingPage from './pages/landing-page';
import lobbyPage from './pages/lobby-page';
import GamePage from './pages/game-page';


function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history = {history}>
        <Switch>
          <Route exact path='/' component={landingPage}/>
          <Route exact path='/lobby-page' component={lobbyPage}/>
          <Route exact path='/game-page' component={GamePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
