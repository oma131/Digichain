/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
import Producer from '../../assets/Producer.png'
import Distributor from '../../assets/Distributor.png'
import Retailer from '../../assets/Retailer.png'
import Consumer from '../../assets/Consumer.png'

const Cards = () => {
  return (
    <div className='lg:flex justify-between items-center mt-[42px] sm:block'>
        <Card 
            img={Producer}
            head="For Producers"
            text_one="Receive and confirm receipt
            of shipments"
            text_two="Manage inventory and initiate
            shipments to retailers."
        />
        <Card 
            img={Distributor}
            head="For Distributors"
            text_one="Receive and confirm receipt
            of shipments"
            text_two="Manage inventory and initiate
            shipments to retailers"
        />
        <Card 
            img={Retailer}
            head="For Retailers"
            text_one="Receive products from
            distributors and manage
            inventory"
            text_two="Manage inventory and initiate
            shipments to retailers."
        />
        <Card 
            img={Consumer}
            head="For Consumers"
            text_one="Access product details 
            including origin and quality"
            text_two="Place orders, track shipments,
            and provide feedback."
        />
    </div>
  )
}

export default Cards