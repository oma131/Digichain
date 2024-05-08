/* eslint-disable react/prop-types */
import React from 'react'

const About = (props) => {
  return (
    <div className='w-full p-4 text-white flex justify-between items-center gap-4'>
        <div className='bg-[#6F4FF2] h-12 md:h-24 w-24 md:w-24 rounded-full flex justify-center items-center'>
            <img src={props.img} alt='Vector' className='w-5 md:w-10' />
        </div>
        <div className='w-96 leading-8 text-left'>
            <h5 className='text-xl font-semibold'>{props.title}</h5>
            <p className='text-base font-normal'>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default About