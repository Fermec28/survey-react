import React from 'react'
import { deleteSurvey } from '../../../api/index'
import { useHistory } from 'react-router-dom'
const SurveyCard = ({ survey, onDelete, token }) => {

    const history = useHistory();
    const { location: { pathname } } = history

    const onDetail = () => {
        history.push(`${pathname}/${survey.id}`)
    }

    const onStatistics = () => {
        history.push(`${pathname}/${survey.id}/statistics`)
    }
    const handleDelete = async () => {
        const response = await deleteSurvey({ id: survey.id, headers: { token } })
        if (response.status === 204)
            onDelete()
        else
            alert(response.body.error)

    }

    return (<div style={surveyCardStyle}>
        <div> <h1>{survey.id}</h1></div>
        <div>
            <p>{survey.description}</p>
        </div>
        <div>
            <div onClick={onDetail}>Detail</div>
            <div onClick={onStatistics}>Statistics</div>
            <div onClick={handleDelete}>Delete</div>
        </div>
    </div>)

}

export default SurveyCard

const surveyCardStyle = {
    backgroundColor: "aqua",
    width: "150px",
    border: "1px solid",
    margin: "10px",
    textAlign: "center"
}