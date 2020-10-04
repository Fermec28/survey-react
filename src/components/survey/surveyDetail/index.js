import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getSurvey, createAnswer } from '../../../api/index'
import NewQuestionAnswerForm from '../../../views/NewQuestionAnswerForm/NewQuestionAnswerForm'

const SurveyDetail = () => {
    const [questions, setQuestions] = useState([])
    const { id } = useParams();
    const handleCreateAnswer = async (questionId, optionId) => {
        const response = await createAnswer(optionId)
        if (response.status === 200) {
            console.log(questionId)
            const newQuestions = questions.filter((question) => question.id !== questionId)
            setQuestions(newQuestions)
        }
        else
            alert(response.body.error)
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSurvey({ id });
            if (response.status === 200) {
                console.log(response)
                setQuestions(response.body.questions)
            }
            else
                alert(response.body.error)
        }
        fetchData()
    }, [id, setQuestions])
    return (questions.map((question) => <NewQuestionAnswerForm question={question} onSubmit={handleCreateAnswer} />))
}
export default SurveyDetail