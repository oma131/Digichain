/* eslint-disable no-unused-vars */
import React from 'react'
import Dashboard from '../assets/Dashboard.png'
import SmallCard from './Card/SmallCard'
import Location from '../assets/Location.png'
import Time from '../assets/Time.png'
import Secure from '../assets/Secure.png'
import Computer from '../assets/Computer.png'

const Features = () => {
  return (
    <div className='mt-[132px]'>
        <h2 className='text-left text-[40px] font-[500]'>Key Features</h2>
        <div className='flex justify-between items-center m-auto'>
            <div className='h-[560px] mt-[32px]  flex flex-col justify-between'>
                <SmallCard
                    img={Location}
                    main_text="Transparent Tracking"
                    para="Each product has a unique identifier for traceability."
                />
                <SmallCard
                    img={Time}
                    main_text="Real-Time Updates"
                    para="Instant notifications on shipments, deliveries, and status changes."
                />
                <SmallCard
                    img={Secure}
                    main_text="Secure & Reliable"
                    para="Built on blockchain for data integrity and security."
                />
                <SmallCard
                    img={Computer}
                    main_text="User-Friendly Interface"
                    para="Intuitive dashboard for easy navigation."
                />
            </div>
            <div>
                <img src={Dashboard} className='h-[555px] w-[614px] rounded-lg' alt='key features' />
            </div>
        </div>
    </div>
  )
}

export default Features