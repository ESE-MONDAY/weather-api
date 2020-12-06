import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css'
import Menu from './menu';
import Form from './form';
import User from './user';
import Home from './home';


function App() {
  
  return (
    <Router>
       <div>
        
        <Menu />
        <Switch>
          <Route path="/form" Component={Form}>
            <Form />
          </Route>
          <Route path="/user" exact Component={User}>
            <User/>
          </Route>
          <Route path="/" exact Component={Home}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
