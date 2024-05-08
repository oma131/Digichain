/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../Buttons/Button'
import { NavLink } from 'react-router-dom'
const Banner = (props) => {
  return (
    <div className='bg-[#0A071F] w-full  gap-8 text-white flex flex-col md:flex-row justify-between rounded-lg px-10 py-10 '>
        <div className='w-full flex flex-col gap-2 justify-between text-left'>
            <h2 className='text-2xl md:text-5xl font-semibold'>{props.title}</h2>
            <p className='text-base'>
              {props.text1} <span className='text-[#6F4FF2]'>{props.connect}</span> {props.text2}
            </p>
            <NavLink to='/wallet' className="w-full" >
              <button  className="w-full md:w-60 flex justify-center items-center hover:text-white hover:bg-[#6F4FF2] text-[#6F4FF2] border-2 border-[#6F4FF2] px-10 py-4 rounded-full text-sm md:text-base font-medium">
              {props.button}
              </button>
            </NavLink>
        </div>
        <div>
          <img src={props.img} alt='Banner photo' />
        </div>
    </div>
  )
}

export default Banner