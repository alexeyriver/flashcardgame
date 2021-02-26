import React, { useState } from 'react';
import { useHistory , Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Signin(props) {
  const dispatch = useDispatch()

  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    if (response.status === 200) {
      dispatch({ type: 'AUT_SUCCESS' })
      return history.push('/secret')
    }
    // dispatch({ type: 'AUT_BAD' })
    return setError('Try it')
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,

    })
  }

  const { email, password } = inputs

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="email" required onChange={handleChange} value={email} />
      <input name="password" type="password" placeholder="password" required onChange={handleChange} value={password} />
      <button type="submit">Signin</button>
      <div className="error">{error}</div>
      <Link to="/">Главная</Link>
    </form>
  );
}

export default Signin;
