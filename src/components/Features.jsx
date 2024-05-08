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
    <div className='mt-20 mx-auto  max-w-screen-xl px-8 pt-16'>
        <h2 className='text-left text-5xl text-white font-semibold'>Key Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center'>
            <div className=' mt-10 gap-6  flex flex-col justify-between'>
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
                <img src={Dashboard} className=' w-full rounded-xl' alt='key features' />
            </div>
        </div>
    </div>
  )
}

export default Features