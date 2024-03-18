/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './Button.css'

const Button = ({children, style, onclick }) => {
  return (
    <button className='mainButton' style={style} onClick={onclick}>
        {children}
    </button>
  )
}

export default Button