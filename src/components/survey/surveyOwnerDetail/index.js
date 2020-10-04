import React from 'react'
import { useParams } from "react-router-dom";
import QuestionList from '../../question/questionlist/index'

const SurveyOwnerDetail = () => {
    const { id } = useParams();
    return <QuestionList id={id} />
}
export default SurveyOwnerDetail