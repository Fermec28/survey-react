import React, { useContext } from 'react'
import SurveyOwnerDetail from '../surveyOwnerDetail/index'
import SurveyDetail from '../surveyDetail/index'
import { SurveyContext } from '../../../Providers/index'


const SurveyDetailHandler = () => {
    let { isLogin, token } = useContext(SurveyContext)
    return isLogin ? <SurveyOwnerDetail token={token} /> : <SurveyDetail />
}
export default SurveyDetailHandler