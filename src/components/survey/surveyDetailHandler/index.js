import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import SurveyOwnerDetail from '../surveyOwnerDetail/index'
import SurveyDetail from '../surveyOwnerDetail/index'
import { SurveyContext } from '../../../Providers/index'


const SurveyDetailHandler = () => {
    let { id } = useParams();
    let { isLogin, token } = useContext(SurveyContext)
    return isLogin ? <SurveyOwnerDetail token={token} /> : <SurveyDetail />
}
export default SurveyDetailHandler