import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Main from '../Main/Main'
import Signin from '../Login/Signin'
import Logout from '../Login/Logout'
import {useSelector} from 'react-redux'
import Signup from "../Login/Signup"
import Card from '../Card/Card'


function App() {

  const isAuthenticated = useSelector(state => state.isAuthenticated)

  return (
    <Router>
      <ul>
        {!isAuthenticated &&
          <li>
            <Link to="/login">SignIn</Link>
          </li>}
        {!isAuthenticated && <li>
          <Link to="/signup">SignUp</Link>
        </li>}
        {isAuthenticated && <li>
          <Link to="/logout">LogOut</Link>
        </li>}
        
      </ul>


      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Signin />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
