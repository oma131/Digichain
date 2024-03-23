/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = (props) => {
  return (
    <div className="rounded-xl h-[460px] w-[250px] bg-[#0F0C25] p-4">
        <div className="flex items-center mt-[44px] gap-4">
            <img
            alt="How digichain work card"
            src={props.img}
            className="size-[112px] rounded-full object-cover"
            />
        </div>

        <div className='text-left mt-[57px]'>
            <h4 className="text-[18px] font-[500] text-[#6F4FF2]">{props.head}</h4>

            <div className='mt-[12px]'>
                <p className="mt-1 text-[18px] font-[400]">
                    {props.text_one}
                </p>
                <p className="mt-1 text-[18px] font-[400]">
                    {props.text_two}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card