/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = (props) => {
  return (
    <div className="rounded-lg md:h-96 w-full bg-[#0F0C25] p-8">
        <div className="flex items-center mt-6 gap-4">
            <img
            alt="How digichain work card"
            src={props.img}
            className="size-20 md:size-30 rounded-full object-cover"
            />
        </div>

        <div className='text-left mt-10'>
            <h4 className="text-lg font-semibold text-[#6F4FF2]">{props.head}</h4>

            <div className='mt-4'>
                <p className="mt-1 text-base ">
                    {props.text_one}
                </p>
                <p className="mt-1 text-base">
                    {props.text_two}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card