import React, { ChangeEventHandler } from "react";

class props {
    className?: string
    setInput: ChangeEventHandler
}

export default function TextInput(props: props) {
    return (<input type={'text'} className={props.className + ' shrink max-h-20 rounded-md focus:outline-none focus:bg-slate-200 '} onChange={props.setInput}></input>)
}