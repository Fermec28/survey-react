import React, { useState } from 'react'

const SingupForm = ({ handleSubmit }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    passwordConfirmation: ""
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
      <label>
        password confirmation:
          <input type="password" name="passwordConfirmation" value={state.value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form >
  );

}

export default SingupForm