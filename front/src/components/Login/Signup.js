import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Signup(props) {


  const dispatch = useDispatch()

  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
let respback  = await response.json()
console.log(respback);
    if (respback.status ===true) {
      dispatch({ type: 'AUT_SUCCESS' ,payload: respback.user})
      return history.push('/')
    }
    // dispatch({ type: 'AUT_BAD' })
    return setError('Такой логин уже существует')
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,

    })
  }

  const { name, email, password } = inputs

console.log(name,email,password);
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="name" placeholder="name" required onChange={handleChange} value={name} />
      <input name="email" type="email" placeholder="email" required onChange={handleChange} value={email} />
      <input name="password" type="password" placeholder="password" required onChange={handleChange} value={password} />
      <button type="submit">Signup</button>
      <div className="error">{error}</div>
      <Link to="/">Главная</Link>
    </form>
  );
}

export default Signup;
