import React, { useState, useEffect } from 'react';

function Secret(props) {
  const [data, setData] = useState('Loading...')
  useEffect(() => {
    (async () => {
      const response =await  fetch('http://localhost:4000/secret')
      const json = await response.json()
      console.log(json,'dfsfdf');
      setData(JSON.stringify(json))
    })()

  }, [])
  console.log(data);
  return data

}

export default Secret;
