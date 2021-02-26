import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, Link} from 'react-router-dom'



function Logout(props) {
  const dispatch = useDispatch()
 const history = useHistory()
  useEffect(() => {
    (async () => {
      await fetch('http://localhost:4000/logout')
      dispatch({ type: 'LOGOUT' })
      history.push('/')
    })()
  })


  return (
    'logout'
  );
}

export default Logout;
