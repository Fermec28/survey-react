import React, { useState } from 'react'
import { deleteOption } from '../../../api/index'
const OptionCard = ({ questionId, option, onDelete, token }) => {
    const handleDelete = async () => {
        const response = await deleteOption({ id: option.id, questionId, headers: { token } })
        if (response.status === 204)
            onDelete()
        else
            alert(response.body.error)
    }

    return (<div>

        <OptionHeader option={option} handleDelete={handleDelete} />
    </div>)

}

export default OptionCard

const optionHeaderStyle = {
    display: "flex",
    justifyContent: "space-around"
}

const OptionHeader = ({ option, handleDelete, headerClick }) => {
    return (<div style={optionHeaderStyle}>
        <div >
            <p>{option.description}</p>
        </div>

        <div onClick={handleDelete}><p>Delete</p></div>

    </div>)
}
