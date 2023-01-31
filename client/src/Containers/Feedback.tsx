import React, { MouseEventHandler, useState } from "react";

import TextInput from "../Components/TextInput";
import Button from "../Components/Button";

class Props {
    className?: string
    onFeedbackSubmit: Function
}


export default function Feedback(props: Props) {

    const [feedbackText, setFeedbackText] = useState('')

    const setFeedbackTextFromInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFeedbackText(e.target.value)
    }

    const submitFeedback = (e: React.BaseSyntheticEvent) => {
        props.onFeedbackSubmit(feedbackText)
    }

    return (
            <div className={props.className + 'flex flex-wrap flex-col z-20 w-fit h-fit p-8 h-50 bg-zinc-400'}>
                <TextInput className='w-60 h-8 ' setInput={setFeedbackTextFromInputText}></TextInput>
                <Button onClick={submitFeedback}>Submit Feedback</Button>
            </div>
    )
}