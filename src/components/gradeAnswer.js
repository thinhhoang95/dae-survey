import React, { useImperativeHandle, forwardRef } from 'react'
import {useState} from 'react'
import {Form, Alert, ButtonGroup, Button} from 'react-bootstrap'

export const GradeAnswer = forwardRef(({id, question, description, required , onChangeAndValidate, showError}, ref) => {

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
            if (required && response==='')
            {
                return(
                    <Alert variant='danger'>Câu trả lời không được bỏ trống</Alert>
                )
            }
            else {
                return (<></>)
            }
        }
    }

    const renderGradeDescription = () => {
        if (response===1)
            return "Không quan trọng"
        else if (response===2)
            return "Hơi quan trọng"
        else if (response===3)
            return "Khá quan trọng"
        else if (response===4)
            return "Rất quan trọng"
        else if (response===5)
            return "Vô cùng quan trọng"
        else
            return ""
    }

    const renderQuestion = (question) => {
        let questionParts = question.split('$')
        // console.log(questionParts)
        let formattedQuestion = []
        for (let i=0; i<questionParts.length; i++)
        {
            if (i%2 === 1)
            {
                formattedQuestion.push(<span style={{color: 'blue'}}>{questionParts[i]}</span>)
            } else {
                formattedQuestion.push(<span style={{color: 'black'}}>{questionParts[i]}</span>)
            }
        }
        return formattedQuestion
    }

    return(
        <div style={{flex: 1, flexDirection: 'column', marginTop: '24px', marginBottom: '24px'}}>
            <div style={{fontWeight: 'bold'}}>{renderQuestion(question)} <span style={{color: 'red'}}>{required ? '*' : ''}</span></div>
            {renderDescription()}
            <div>
                <ButtonGroup aria-label="Grade">
                    <Button variant={response===1 ? 'primary' : 'secondary'} onClick={() => handleChangeAndValidate(1)}>1</Button>
                    <Button variant={response===2 ? 'primary' : 'secondary'} onClick={() => handleChangeAndValidate(2)}>2</Button>
                    <Button variant={response===3 ? 'primary' : 'secondary'} onClick={() => handleChangeAndValidate(3)}>3</Button>
                    <Button variant={response===4 ? 'primary' : 'secondary'} onClick={() => handleChangeAndValidate(4)}>4</Button>
                    <Button variant={response===5 ? 'primary' : 'secondary'} onClick={() => handleChangeAndValidate(5)}>5</Button>
                    <div style={{marginLeft: '24px'}}>{renderGradeDescription()}</div>
                </ButtonGroup> 
            </div>
            <div>
            {renderErrorMessages()}
            </div>
        </div>
    )

})