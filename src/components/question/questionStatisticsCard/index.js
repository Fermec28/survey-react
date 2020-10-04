import React, { useState, useContext, useEffect } from 'react'
import { SurveyContext } from '../../../Providers/index'
import { getStatistics } from '../../../api/index'

const QuestionStatisticCard = ({ question }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [statisticsResult, setStatisticsResult] = useState()
    const statisticLink = question?.links?.statistics
    const { token } = useContext(SurveyContext)
    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }

    useEffect(() => {
        const fetchData = async () => {
            const headers = { token }
            const response = await getStatistics({ headers, link: statisticLink });
            if (response.status === 200) {
                console.log(response)
                setStatisticsResult(response.body)
            }
            else
                alert(response.body.error)
        }
        fetchData()
    }, [statisticLink, token])
    return (<div style={questionCardStyle}>
        <QuestionHeader question={question} headerClick={toggleOptions} />
        <div >
            <p>{question.description}</p>
        </div>
        {showOptions && "chart"}
    </div>)

}

export default QuestionStatisticCard
const questionHeaderStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    margin: "0px 20px"
}

const questionCardStyle = {
    borderBottom: "solid 1px #000"
}

const QuestionHeader = ({ handleDelete, headerClick }) => {
    return (<div style={questionHeaderStyle}>
        <div onClick={headerClick}>ShowChart</div>
    </div>)
}
