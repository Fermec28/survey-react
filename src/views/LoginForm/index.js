import React, { useState } from 'react'

const LoginForm = ({ handleSubmit }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const formHandleSubmit = (event) => {
    handleSubmit(state)
    event.preventDefault()
  }
  return (
    <form onSubmit={formHandleSubmit} >
      <label>
        Mail:
          <input type="email" name="email" value={state.value} onChange={handleChange} />
      </label>
      <label>
        password:
          <input type="password" name="password" value={state.value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form >
  );

}

export default LoginForm