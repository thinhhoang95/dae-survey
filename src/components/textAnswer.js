import React, { useImperativeHandle, forwardRef, useEffect, useCallback } from 'react'
import {useState} from 'react'
import {Form, Alert} from 'react-bootstrap'

export const TextAnswer = forwardRef(({id, question, textbox, description, minimumLength, maximumLength, required , onChangeAndValidate, showError}, ref) => {

    const [response, setResponse] = useState('')
    const [valid, setValid] = useState('')

    useImperativeHandle(ref, () => ({
        async setInitValue(value) {
            await handleChangeAndValidate(value)
        }
    }))

    const handleChangeAndValidate = async (value) => {
        await setResponse(value)
        let valid = true
        if (required && value.length === 0)
        {
            valid = false
        }

        if (required && minimumLength)
        {
            if (value.length < minimumLength) {
                valid = false
            }
        }
        if (maximumLength)
        {
            if (value.length > maximumLength) {
                valid = false
            }
        }
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
            if (required && response.length === 0)
            {
                return(
                    <Alert variant='danger'>Câu trả lời không được bỏ trống</Alert>
                )
            } else {
                if (required && minimumLength && response.length < minimumLength)
                {
                    return (
                        <Alert variant='danger'>Câu trả lời phải từ {minimumLength} ký tự đến {maximumLength} ký tự. Câu trả lời của bạn có {response.length} ký tự.</Alert>
                    )
                }
                else if (maximumLength && response.length > maximumLength)
                {
                    return (
                        <Alert variant='danger'>Câu trả lời phải từ {minimumLength} ký tự đến {maximumLength} ký tự. Câu trả lời của bạn có {response.length} ký tự.</Alert>
                    )
                }
                else {
                    return (<></>)
                }
            }
        }
    }

    return(
        <div style={{flex: 1, flexDirection: 'column', marginTop: '24px', marginBottom: '24px'}}>
            <div style={{fontWeight: 'bold'}}>{question} <span style={{color: 'red'}}>{required ? '*' : ''}</span></div>
            {renderDescription()}
            <div>
            {textbox === true ? (<Form.Control as="textarea" rows="3" value={response} onChange={(e) => handleChangeAndValidate(e.target.value)} />) : (<Form.Control as="input" value={response} onChange={(e) => handleChangeAndValidate(e.target.value)} />)}
            </div>
            <div>
            {renderErrorMessages()}
            </div>
        </div>
    )

})