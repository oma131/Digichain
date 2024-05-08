/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0A071F] text-white mt-10 w-full py-10 flex justify-center items-center'>
        <div className='flex flex-col justify-between items-center'>
          <div className='w-full gap-4 md:gap-10 flex flex-col md:flex-row justify-between items-center'>
            <h2 className='font-semibold text-xl md:text-3xl md:mr-20'>Digichain</h2>
            <div className=' flex justify-between items-center text-base'>
              <ul className='flex flex-col md:flex-row items-center gap-1 md:gap-12'>
                <a href='/'>
                  <li>Home</li>
                </a>
                <a href='/api' className=''>
                  <li >API</li>
                </a>
              </ul>
            </div>
          </div>
          <p className='w-full text-xs md:text-base text-center text-[#706C85] mt-10'>© 2024 DigiChain. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer