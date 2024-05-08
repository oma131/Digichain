import React from 'react'
import Metamask from '../assets/Metamask.png'
import TrustWallet from '../assets/TrustWallet.png'

import { NavLink } from "react-router-dom";

const Wallet = () => {
  return (
    <div className='bg-[#070318] px-10 flex justify-center items-center h-screen w-full'>
        <div className='bg-[#09061E] w-full  flex justify-center items-center px-5'>
            <div className='text-white py-10'>
                <h3 className='text-2xl font-bold text-center'>Connect Wallet</h3>
                <div className='mt-8 flex flex-col gap-6 justify-between'>
                    <NavLink to='/email' className="w-full" >
                        <button  className="w-full flex justify-center items-center text-white hover:bg-[#A4A4A9] border-2 border-[#A4A4A9] px-10 py-4 rounded-full text-sm md:text-base font-medium">
                            <img src={Metamask} className='mr-3' alt='metamask button' />
                            Metamask
                        </button>
                    </NavLink>
                    <NavLink to='/email' className="w-full" >
                        <button  className="w-full flex justify-center items-center text-white hover:bg-[#A4A4A9] border-2 border-[#A4A4A9] px-10 py-4 rounded-full text-sm md:text-base font-medium">
                            <img src={TrustWallet} className='mr-3' alt='metamask button' />
                            Trust Wallet
                        </button>
                    </NavLink>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet