import React from 'react';
import { useSelector } from "react-redux"

function Allstat(props) {

  const user = useSelector(state => state.user)
  function Allstat() {
    fetch('http://localhost:4000/allstat')
  .then(allstat =>allstat.json())
.then(data=>console.log(data))
}

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

export default Allstat;
