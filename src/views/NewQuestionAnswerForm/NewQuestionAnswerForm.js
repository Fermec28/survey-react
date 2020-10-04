import React, { useState } from 'react'

const NewQuestionAnswerForm = ({ question, onSubmit }) => {
    const [state, setState] = useState('')
    const questionId = question.id
    const handleChange = (e) => {
        setState(e.target.value)
    }
    const handleSumbmit = (e) => {
        onSubmit(questionId, state)
        e.preventDefault()
    }
    return (<form onSubmit={handleSumbmit}>
        <label>
            {question.description}
            <select value={state} onChange={handleChange}>
                <option value="">Select Choice</option>
                {question.options.map((questionOption) =>
                    <option value={questionOption.id}>{questionOption.description}</option>
                )}
            </select>
        </label>
        <input type="submit" value="Submit" />
    </form>)
}


export default NewQuestionAnswerForm