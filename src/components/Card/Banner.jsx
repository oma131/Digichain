/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../Buttons/Button'
import { NavLink } from 'react-router-dom'
const Banner = (props) => {
  return (
    <div className='bg-[#0A071F] w-[1100px] m-auto h-[412px] flex justify-between rounded-lg px-[30px] py-[50px] mt-[42px]'>
        <div className='w-[580px] h-[276px] pl-[39px] flex flex-col justify-between text-left'>
            <h2 className='text-[40px] font-[500]'>{props.title}</h2>
            <p className='text-[18px] font-[400]'>
              {props.text1} <span className='text-[#6F4FF2]'>{props.connect}</span> {props.text2}
            </p>
            <NavLink to='/wallet'>
              <Button style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid #6F4FF2', fontSize:'16px' }}>{props.button}</Button>
            </NavLink>
        </div>
        <div>
          <img src={props.img} alt='Banner photo' />
        </div>
    </div>
  )
}

export default Banner