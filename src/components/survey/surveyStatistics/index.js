import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { SurveyContext } from '../../../Providers/index'
import { getSurvey } from '../../../api/index'
import QuestionStatisticCard from '../../question/questionStatisticsCard/index'

const SurveyStatistics = () => {
    const { id } = useParams();
    const { token } = useContext(SurveyContext)
    const [_, setSurvey] = useState([])
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const headers = { token }
            const response = await getSurvey({ headers, id: id });
            if (response.status === 200) {
                setSurvey(response.body)
                setQuestions(response.body.questions)
            }
            else
                alert(response.body.error)
        }
        fetchData()
    }, [id, token])
    return questions.map((question) => <QuestionStatisticCard question={question} key={question.id} />)
}

export default SurveyStatistics