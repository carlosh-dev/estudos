import { ButtonHTMLAttributes } from 'react'

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // A interrogação deixa a variável como opcionales para
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
  return (
    <button 
    className={`button ${isOutlined ? 'outlined' : ''}`}
    {...props}/>
  )
}