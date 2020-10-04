import React, { useEffect, useState, useContext } from 'react'
import { getSurveys, createSurvey } from '../../../api/index'
import { SurveyContext } from '../../../Providers'
import SurveyCard from '../suerveycard/index'
import PortalModalView from '../../../views/PortalModalView'
import NewResource from '../../../views/NewResource/index'


const SurveyList = () => {
    const [surveys, setSurveys] = useState([])
    const { token } = useContext(SurveyContext)
    const [newSurveyModal, setNewSurveyModal] = useState(false)

    const onDelete = (id) => {
        const newSurveys = surveys.filter((survey) => survey.id !== id)
        setSurveys(newSurveys)
    }

    const toogleNewSurveyModal = () => {
        setNewSurveyModal(!newSurveyModal)
    }

    const onCreateSurvey = async (survey) => {
        const headers = { token }
        const response = await createSurvey({ headers, survey })
        if (response.status === 201)
            setSurveys([...surveys, response.body])
        else
            alert(response.body.error)
        setNewSurveyModal(false)
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
        <div onClick={toogleNewSurveyModal}>New Survey</div>
        <PortalModalView visible={newSurveyModal} onToggle={toogleNewSurveyModal}>
            <NewResource handleSubmit={onCreateSurvey} />
        </PortalModalView>
        {surveys.map((survey) => <SurveyCard survey={survey} key={survey.id} onDelete={() => onDelete(survey.id)} token={token} />)}
    </div>)

}
export default SurveyList