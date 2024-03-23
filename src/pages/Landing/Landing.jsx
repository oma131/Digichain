// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

import HeroImg from '../../assets/HeroImg.png'
import ConnectWallet from '../../assets/ConnectWallet.png'
import Map from '../../assets/Map.png'
import Api from '../../assets/Api.png'
import Guard from '../../assets/Guard.png'
import Checkmark from '../../assets/Checkmark.png'
import Arrow from '../../assets/Arrow.png'
import Lightbulb from '../../assets/Lightbulb.png'

// import Tech from './assets/Tech.png'
import Cards from '../../components/Card/Cards'
import Features from '../../components/Features'
import Banner from '../../components/Card/Banner'
import About from '../../components/About'

import { NavLink } from "react-router-dom";

import './Landing.css'
function Landing() {

  return (
    <div>
      <div className='text-center bg-[#070318] text-white px-[85px] pb-[122px] w-[100%]'>
        <Navbar />

        <section className=" text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-[383px]">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="text-white text-3xl font-extrabold text-transparent sm:text-5xl"
              >
                Welcome To

                <span className="text-[#6F4FF2]"> Digichain. </span>
              </h1>

              <p className="mx-auto mt-[24px] max-w-xl sm:text-xl/relaxed">              
                transparent and efficient supply chain management
                powered by blockchain technology. 
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <NavLink to='/wallet'>
                  <Button style={{ backgroundColor: '#6F4FF2', color: 'white', fontSize: '14px'}} >Connect Wallet</Button>
                </NavLink>
                <Button style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid #6F4FF2' }}>
                  <FontAwesomeIcon icon={faCirclePlay} />
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <img src={HeroImg} className='m-auto' alt='supply chain vector' />
        </section>

        <section>
          <div className="flex justify-center items-center h-screen">
            <div className="bg-[url('./assets/Tech.png')] bg-cover bg-center h-[490px] w-[1100px] flex justify-start items-center">
              <div className='text-left flex flex-col ml-[70px]'>
                <h2 className='text-[40px] font-[500]'>What is DigiChain?</h2>
                <p className='w-[865px] text-[20px] font-[400] mt-[28px]'>
                  DigiChain is a next-generation supply chain tracking 
                  platform built on blockchain technology. 
                  Our platform connects producers, distributors, 
                  retailers, and consumers, creating a seamless ecosystem 
                  for product information flow. DigiChain streamlines 
                  product tracking and management, ensuring reliability 
                  and trust throughout the entire supply chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-[40px] font-[500]'>
            How Does DigiChain Work?
          </h2>
          <Cards />
        </section>

        <section className='m-auto'>
          <Features />
        </section>
        
        <section className='mt-[114px]'>
          <Banner 
            title=" Connect and Track"
            text1="Connect Your Ethereum Wallet:
            Seamlessly connect your Ethereum wallet to
            access the DigiChain dashboard.
            Simply click 
            "
            connect="Connect Wallet"
            text2="below to get started."
            button="Connect Wallet"
            img={ConnectWallet}
          />
          <Banner 
            title="Track Your Products"
            text1="Connect Your Ethereum Wallet:
            Seamlessly connect your Ethereum wallet to
            access the DigiChain dashboard.
            Simply click 
            "
            connect="Connect Wallet"
            text2="below to get started."
            button="Track Product"
            img={Map}
          />
          <Banner 
            title="Integrate with DigiChain API"
            text1="API Available for Integration:
            Developers can integrate DigiChain's product tracking feature into their apps using our API.
            Explore the [API Documentation](#) for detailed instructions on integration.
            "
            button="Explore"
            img={Api}
          />
          
        </section>

        <section className='mt-[92px] w-[1157px] m-auto'>
          <h2 className='text-[40px] font-[500] leading-8'>Why Choose Digichain</h2>
          <div className='mt-[32px] flex justify-between items-center'>
            <div className='h-[323px] flex flex-col justify-between'>
              <About 
                img={Guard}
                title="Trust"
                text="Build consumer trust with transparent
                product information and traceability."
              />
              <About 
                img={Checkmark}
                title="Reliability "
                text="Ensure product authenticity and 
                quality through secure tracking"
              />
            </div>
            <div className='h-[323px] flex flex-col justify-between'>
              <About 
                img={Arrow}
                title="Efficiency"
                text="Streamline supply chain operations 
                and reduce manual processes."
              />
              <About 
                img={Lightbulb}
                title="Insight"
                text="Generate reports and analytics for informed decision-making."
              />
            </div>
          </div>
        </section>

        <section className='bg-[#6F4FF2] w-[1100px] h-[369px] mt-[142px] rounded-lg flex flex-col justify-center items-center m-auto'>
          <div className='w-[898px] h-[163px] text-left flex flex-col justify-between'>
            <p className='text-[32px] font-[500]'>
              Lets revolutionize the way 
              products move from production to consumption together.
            </p>
            <p className='text-[24px] font-[400]'>
              Experience DigiChain - Where Trust Meets Transparency
            </p>
          </div>
          <div className='w-[100%]'>
            <div className='flex  w-[345px] ml-[191px] mt-[32px] flex justify-between'>
              <Button style={{ backgroundColor: '#060317', color: 'white'}} >Connect Wallet</Button>
              <Button style={{ backgroundColor: 'transparent', color: '#060317', border: '2px solid #060317' }}>Track Product</Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
