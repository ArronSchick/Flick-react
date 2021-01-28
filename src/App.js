import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import Splash from './components/Splash';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
