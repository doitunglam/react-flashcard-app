/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
import React from 'react'
import Button from './Button';

class Props {
  className: string;
  onClick: any;
  message: string;
}

export default function Card(props: Props) {
  return (
    <div className={props.className + 'bg-emerald-500 z-5 flex w-full align-middle justify-center'}>
      <p className='font-medium text-5xl text-fuchsia-800 self-center inline hover:text-8xl'>{props.message}</p>
      <Button className='' onClick={props.onClick}>Blur</Button>
    </div>
  )
}
