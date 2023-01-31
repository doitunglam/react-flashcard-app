/* eslint-disable space-before-function-paren */
import React, { MouseEventHandler, useEffect, useState } from 'react'

import ReactDOM from 'react-dom'

import axios from 'axios'

import '../index.css'
import Feedback from './Containers/Feedback'
import Button from './Components/Button'
import Dialog from './Containers/Dialog'

class HttpResponse {
  Message: string
}

function App() {
  const [isBlur, setIsBlur] = useState(false)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  const [textInput1, setTextInput1] = useState('')

  const toggleOpenFeedback = () => {
    setIsBlur(true)
    setIsFeedbackOpen(true)
  }

  const toggleCloseFeedback = () => {
    setIsBlur(false)
    setIsFeedbackOpen(false)
  }

  const setTextInput = (s: string) => {

    setTextInput1(s)
    setIsBlur(false)
    setIsFeedbackOpen(false)
  }


  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(res => {
        const data: HttpResponse = res.data
        document.title = data.Message
      })
      .catch(error => console.log(error))
  })

  return (
    <div className='relative'>
      <div className='h-screen w-screen bg-client-img bg-contain absolute top-0 left-0 -z-10' style={{ backgroundSize: '100% auto' }}>
        <Button className=' absolute bottom-10 right-10' onClick={toggleOpenFeedback}>Create Feedback</Button>
        <p className=' absolute top-1/2 left-1/2 text-lg '>{textInput1}</p>
      </div>

      {isBlur && <div className='h-screen w-screen absolute top-0 left-0 -z-10' style={{ backgroundColor: 'white', opacity: '0.5' }}></div>}

      {isFeedbackOpen &&
        <Dialog onDialogClose={toggleCloseFeedback} >
          <Feedback onFeedbackSubmit={setTextInput}></Feedback>
        </Dialog>
      }

    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
