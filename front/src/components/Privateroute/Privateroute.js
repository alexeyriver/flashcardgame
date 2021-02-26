import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Privateroute({ children, ...rest }) {
  const isAuthenticated = useSelector(state=>state.isAuthenticated)
  
  return (
    <Route {...rest}>
      {
        isAuthenticated ? children : <Redirect to='/login' />
      }
    </Route>
  );

}

export default Privateroute;
