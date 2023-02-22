import React, {useState} from 'react'
import {answers} from './answers'
import './EightBall.css'

const EightBall = () => {
    const [msg, setMsg] = useState('Think of a Question')
    const [color, setColor] = useState('black')
    const answerQuestion = () => {
        const randAnswer = answers[Math.floor(Math.random() * answers.length)]
        setMsg(randAnswer.msg)
        setColor(randAnswer.color)
    }
    const restart = () => {
        setMsg('Think of a Question')
        setColor('black')
    }
    return (
        <div>
            <h1 className='EightBall-header'>Magic Eight Ball</h1>
            <div className="EightBall" style={{backgroundColor: color}} onClick={answerQuestion}>
                <b className='EightBall-msg'>{msg}</b>
            </div>
            <button className='EightBall-restart' onClick={restart}>New Question</button>
        </div>  
    )
}

export default EightBall
