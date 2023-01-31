/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
import React, { MouseEventHandler, ReactNode } from 'react'

class Props {
  className?: string;
  onClick: MouseEventHandler;
  children: ReactNode;
}

export default function Button(props: Props) {
  return (
      <button onClick={props.onClick} className={props.className + ' p-3 block w-fit h-fit rounded-md bg-emerald-500 text-center hover:bg-emerald-600 active:bg-emerald-800 '} >{props.children}</button>
  )
}
