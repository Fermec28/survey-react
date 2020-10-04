import React, { useState, useContext, useEffect } from 'react'
import { SurveyContext } from '../../../Providers/index'
import { getStatistics } from '../../../api/index'
import Chart from "react-apexcharts";


const data = {
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
};

const buildDataToChart = (question) => {
    const [categories, data] = question.options.reduce((accu, option) => {
        const categories_aux = [...accu[0], option.description]
        const data_aux = [...accu[1], option.count]
        return [categories_aux, data_aux]
    }, [[], []])
    return {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories
            }
        },
        series: [
            {
                name: "Resultados",
                data
            }
        ]
    }
}

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
        {showOptions && <Chart
            options={buildDataToChart(statisticsResult).options}
            series={buildDataToChart(statisticsResult).series}
            type="bar"
            width="500"
        />}
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
