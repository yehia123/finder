import './App.css';
import Home from './components/Home';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import CardForm from './components/CardForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/createcard" component={CardForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
