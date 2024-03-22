/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './Button.css'

const Button = ({children, style, type,onClick }) => {
  return (
    <button className='mainButton' style={style} type={type} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button