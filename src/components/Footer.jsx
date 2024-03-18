/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0A071F] text-white h-[254px] flex justify-center items-center'>
        <div className='h-[130px] flex flex-col justify-between items-center'>
            <div className='w-[467px] flex justify-between items-center'>
                <h2 className='font-[600] text-[32px]'>Digichain</h2>
                <div className='w-[234px] flex justify-between font-[400] text-[20px]'>
                    <p>Home</p>
                    <p>Features</p>
                    <p>API</p>
                </div>
            </div>
            <p className='text-[16px] font-[300] text-[#706C85]'>© 2024 DigiChain. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer