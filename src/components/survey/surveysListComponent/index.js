import React, { useEffect, useState, useContext } from 'react'
import { getSurveys } from '../../../api/index'
import { SurveyContext } from '../../../Providers'
import SurveyCard from '../suerveycard/index'


const SurveyList = () => {
    const [surveys, setSurveys] = useState([])
    const { token } = useContext(SurveyContext)

    const onDelete = (id) => {
        const newSurveys = surveys.filter((survey) => survey.id !== id)
        setSurveys(newSurveys)
    }

    useEffect(() => {
        const fetchData = async () => {

            const response = await getSurveys(token);
            if (response.status === 200)
                setSurveys(response.body)
            else
                alert(response.body.error)
        }
        fetchData()
    }, [token])

    return (<div>
        {surveys.map((survey) => <SurveyCard survey={survey} key={survey.id} onDelete={() => onDelete(survey.id)} token={token} />)}
    </div>)

}
export default SurveyList