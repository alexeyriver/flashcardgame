import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Main from '../Main/Main'
import Signin from '../Login/Signin'
import Logout from '../Login/Logout'
import {useSelector} from 'react-redux'
import Secret from '../Secret/Secret'
import PrivateRoute from '../Privateroute/Privateroute'

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
          <Link to="/signup">SignUn</Link>
        </li>}
        {isAuthenticated && <li>
          <Link to="/logout">LogOut</Link>
        </li>}
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>


      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <PrivateRoute path="/secret">
          <Secret />
        </PrivateRoute>
        <Route path="/login">
          <Signin />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;