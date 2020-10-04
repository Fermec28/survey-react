import React, { useContext, useEffect, useState } from 'react'
import { getSurvey, createQuestion } from '../../../api/index'
import { SurveyContext } from '../../../Providers'
import Questioncard from '../questioncard/index'
import NewResource from '../../../views/NewResource/index'

const QuestionList = ({ id }) => {

    const surveyId = id
    const [_, setSurvey] = useState([])
    const [questions, setQuestions] = useState([])
    const { token } = useContext(SurveyContext)

    const onCreateQuestion = async (question) => {
        const headers = { token }
        const response = await createQuestion({ headers, surveyId, question })
        if (response.status === 200)
            setQuestions([...questions, response.body])
        else
            alert(response.body.error)
    }

    const onDelete = (id) => {
        const newQuestions = questions.filter((question) => question.id !== id)
        setQuestions(newQuestions)
    }

    useEffect(() => {
        const fetchData = async () => {
            const headers = { token }
            const response = await getSurvey({ headers, id: surveyId });
            if (response.status === 200) {
                console.log(response)
                setSurvey(response.body)
                setQuestions(response.body.questions)
            }
            else
                alert(response.body.error)
        }
        fetchData()
    }, [surveyId, token])

    return (<div>
        <NewResource handleSubmit={onCreateQuestion} nameResource={"Question"} />
        <h2>Questions</h2>
        {questions.map((question) => <Questioncard question={question} key={question.id} token={token} surveyId={surveyId} onDelete={() => { onDelete(question.id) }} />)}
    </div>)
}
export default QuestionList