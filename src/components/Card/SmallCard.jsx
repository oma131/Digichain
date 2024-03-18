/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const SmallCard = (props) => {
  return (
    <div className='w-[626px] h-[124px] bg-[#322373] rounded-lg p-[18px] flex items-center'>
        <div className='bg-[#6F4FF2] h-[88px] w-[88px] rounded-full flex justify-center items-center'>
            <img src={props.img} alt='Vector' />
        </div>
        <div className='text-left ml-[31px] w-[471px]'>
            <h4 className='font-[500] text-[24px]'>{props.main_text}</h4>
            <p className='text-[18px] font-[400]'>{props.para}</p>
        </div>
    </div>
  )
}

export default SmallCard