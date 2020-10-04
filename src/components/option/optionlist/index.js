import React, { useContext, useEffect, useState } from 'react'
import { createOption, getOptions } from '../../../api/index'
import { SurveyContext } from '../../../Providers'
import Optioncard from '../optioncard/index'
import NewResource from '../../../views/NewResource/index'

const OptionList = ({ id }) => {
    const questionId = id
    const [options, setOptions] = useState([])
    const { token } = useContext(SurveyContext)

    const onCreateOption = async (option) => {
        const headers = { token }
        const response = await createOption({ headers, questionId, option })
        if (response.status === 200)
            setOptions([...options, response.body])
        else
            alert(response.body.error)
    }

    const onDelete = (id) => {
        const newOptions = options.filter((option) => option.id !== id)
        setOptions(newOptions)
    }

    useEffect(() => {
        const fetchData = async () => {
            const headers = { token }
            const response = await getOptions({ headers, questionId });
            if (response.status === 200) {
                setOptions(response.body.Options)
            }
            else
                alert(response.body.error)
        }
        fetchData()
    }, [questionId, token])

    return (<div>
        {options.map((option) => <Optioncard option={option} key={option.id} token={token} questionId={questionId} onDelete={() => { onDelete(option.id) }} />)}
        <NewResource handleSubmit={onCreateOption} nameResource={"Option"} />
    </div>)
}
export default OptionList