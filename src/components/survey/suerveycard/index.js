import React from 'react'
import { deleteSurvey } from '../../../api/index'
import { useHistory } from 'react-router-dom'
const SurveyCard = ({ survey, onDelete, token }) => {

    const history = useHistory();

    const onDetail = () => {
        history.push(`${survey.id}`)
    }

    const onStatistics = () => {
        history.push(`${survey.id}/statistics`)
    }
    const handleDelete = async () => {
        const response = deleteSurvey({ id: survey.id, headers: { token } })
        if (response.status === 204)
            onDelete()
        else
            alert(response.body.error)

    }

    return (<div>
        <div> <h1>{survey.id}</h1></div>
        <div>
            <p>{survey.description}</p>
        </div>
        <div>
            <div onClick={onDetail}>Detail</div>
            <div onClick={onStatistics}>Statistics</div>
            <div >Delete</div>
        </div>
    </div>)

}

export default SurveyCard