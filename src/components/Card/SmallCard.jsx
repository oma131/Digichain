/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const SmallCard = (props) => {
  return (
    <div className='w-full  text-white bg-[#322373] rounded-lg px-5 py-6 flex items-center'>
        <div className='bg-[#6F4FF2] w-24 h-16 md:h-20 md:w-20 rounded-full flex justify-center items-center'>
            <img src={props.img} alt='Vector' className='w-7' />
        </div>
        <div className='ml-7 text-left w-72'>
            <h4 className='font-semibold text-lg md:text-2xl'>{props.main_text}</h4>
            <p className='text-base font-[400]'>{props.para}</p>
        </div>
    </div>
  )
}

export default SmallCard