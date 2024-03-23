import React from 'react'
import Button from '../components/Buttons/Button'
import Metamask from '../assets/Metamask.png'
import TrustWallet from '../assets/TrustWallet.png'

import { NavLink } from "react-router-dom";

const Wallet = () => {
  return (
    <div className='bg-[#070318] flex justify-center items-center h-[100vh] w-[100%]'>
        <div className='bg-[#09061E] w-[644px] h-[400px] flex justify-center items-center'>
            <div className='text-white'>
                <h3 className='text-[24px] font-[700] text-center'>Connect Wallet</h3>
                <div className='mt-[20px] h-[148px] flex flex-col justify-between'>
                    <NavLink to='/email'>
                        <Button style={{border:'1px solid #A4A4A9', cusor:'pointer', width:'460px', height:'64px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <img src={Metamask} className='mr-[10px]' alt='metamask button' />
                            Metamask
                        </Button>
                    </NavLink>
                    <NavLink to='/email'>
                        <Button style={{border:'1px solid #A4A4A9', cusor:'pointer', width:'460px', height:'64px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <img src={TrustWallet} className='mr-[10px]' alt='Trustwallet button' />
                            Trustwallet
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet