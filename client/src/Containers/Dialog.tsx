import React, { ReactNode } from "react";

class Props {
    className?: string
    onDialogClose: Function
    children: ReactNode
}

export default function Dialog(props: Props) {

    const onDialogCloseClick = () => {
        props.onDialogClose()
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center '>
            <div className="w-fit h-fit relative">
                <button className="absolute top-0 right-0" onClick={onDialogCloseClick}>X</button>
                {props.children}
            </div>
        </div>
    )
}