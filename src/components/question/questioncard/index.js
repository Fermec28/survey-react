import React, { useState } from 'react'
import { deleteQuestion } from '../../../api/index'
import OptionList from '../../../components/option/optionlist/'
const QuestionCard = ({ surveyId, question, onDelete, token }) => {
    const [showOptions, setShowOptions] = useState(false)
    const questionId = question?.id
    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }
    const handleDelete = async () => {
        const response = await deleteQuestion({ id: question.id, surveyId, headers: { token } })
        if (response.status === 204)
            onDelete()
        else
            alert(response.body.error)

    }

    return (<div style={questionCardStyle}>
        <QuestionHeader question={question} handleDelete={handleDelete} headerClick={toggleOptions} />
        <div >
            <p>{question.description}</p>
        </div>
        {showOptions && <OptionList id={questionId} />}
    </div>)

}

export default QuestionCard
const questionHeaderStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    margin: "0px 20px"
}

const questionCardStyle = {
    borderBottom: "solid 1px #000"
}
const questionOptionStyle = {
    margin: "0px 20px"
}
const QuestionHeader = ({ handleDelete, headerClick }) => {
    return (<div style={questionHeaderStyle}>
        <div onClick={headerClick}>Options</div>
        <div onClick={handleDelete} style={questionOptionStyle}>Delete</div>
    </div>)
}
