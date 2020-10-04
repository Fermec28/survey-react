import React, { useState } from 'react'

const NewResource = ({ handleSubmit, nameResource = "" }) => {
    const [state, setState] = useState({
        description: "",
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
        setState({ description: "" })
        event.preventDefault()
    }
    return (
        <div>
            New {nameResource}
            <form onSubmit={formHandleSubmit} >
                <label>
                    Description:
                <input type="text" name="description" value={state.description} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form >
        </div>
    );

}

export default NewResource;