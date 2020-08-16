import React, { forwardRef, useImperativeHandle } from 'react'
import {useState} from 'react'
import {Form, Alert} from 'react-bootstrap'

export const DropdownAnswer = forwardRef(({id, question, description, choices, required , onChangeAndValidate, showError}, ref) => {

    const [response, setResponse] = useState('-')
    const [valid, setValid] = useState(false)

    useImperativeHandle(ref, ()=>({
        async setInitValue(value) {
            await handleChangeAndValidate(value)
        }
    }))

    const handleChangeAndValidate = async (value) => {
        await setResponse(value)
        console.log(value)
        let valid = true
        if (value === '-')
        {
            valid = false
        }
        setValid(valid)
        await onChangeAndValidate({'id': id, 'value': value, 'valid': valid})
    }

    const renderDescription = () => {
        if (description) 
        return(
            <div style={{color: 'grey'}}>{description}</div>
        )
    }

    const renderErrorMessages = () => {
        if (showError) {
            if (valid === false)
            {
                return(
                    <Alert variant='danger'>Phải chọn một mục trong danh sách này</Alert>
                )
            } else {
                return (<></>)
            }
        }
    }

    return(
        <div style={{flex: 1, flexDirection: 'column', marginTop: '24px', marginBottom: '24px'}}>
            <div>{question} <span style={{color: 'red'}}>{required ? '*' : ''}</span></div>
            {renderDescription()}
            <div>
            <Form.Group controlId="dropdown1">
                <Form.Control as="select" value={response}  onChange={(e) => handleChangeAndValidate(e.target.value)}>
                <option key={-1}>-</option>
                    {choices.map((item, i) => {
                        return(
                            <option key={i}>{item}</option>
                        )
                    })}
                </Form.Control>
            </Form.Group>
            </div>
            <div>
            {renderErrorMessages()}
            </div>
        </div>
    )

})