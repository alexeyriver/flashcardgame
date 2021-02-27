import React from 'react';
import { useSelector } from "react-redux"

function Main(props) {

  const user = useSelector(state => state.user)


  return (
    <div>
      Stat:
     <div>User: {user.name}</div> 
     <div>Counts: {user.counts}</div> 
     <div>True Answer: {user.trueanswer}</div> 
     <div>False Answer: {user.falseanswer}</div> 
    </div>
  );
}

export default Main;
