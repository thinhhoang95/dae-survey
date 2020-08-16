import React, { useImperativeHandle, forwardRef } from 'react'
import {useState} from 'react'
import {Form, Alert, ButtonGroup, Button} from 'react-bootstrap'

export const CheckAnswer = forwardRef(({id, question, onChangeAndValidate}, ref) => {

    const [response, setResponse] = useState('')
    const [valid, setValid] = useState('')

    useImperativeHandle(ref, () => ({
        async setInitValue(value) {
            await handleChangeAndValidate(value)
        }
    }))

    const handleChangeAndValidate = async (value) => {
        await setResponse(value)
        setValid(true)
        await onChangeAndValidate({'id': id, 'value': value, 'valid': true})
    }

    return(
        <div style={{flex: 1, flexDirection: 'column', marginTop: '24px', marginBottom: '24px'}}>
            <div>
                <Form.Check type="checkbox" label={question} onChange={(e) => handleChangeAndValidate(e.target.checked)}/>
            </div>
        </div>
    )

})