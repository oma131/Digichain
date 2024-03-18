/* eslint-disable react/prop-types */
import React from 'react'

const About = (props) => {
  return (
    <div className='w-[543px] p-[10px] flex justify-between items-center'>
        <div className='bg-[#6F4FF2] h-[105px] w-[105px] rounded-full flex justify-center items-center'>
            <img src={props.img} alt='Vector' />
        </div>
        <div className='w-[339px] leading-8 mr-[57px] text-left'>
            <h5 className='text-[20px] font-[500]'>{props.title}</h5>
            <p className='text-[18px] font-[400]'>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default About