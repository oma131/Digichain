// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
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
      <div>
        <Navbar />

        <section className=" text-white">
          <div className="mx-auto max-w-screen-xl px-4 pt-16 lg:flex ">
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

              <div className="mt-8 w-full  flex flex-col md:flex-row items-center justify-center gap-4">
                <NavLink to='/wallet' className='w-full'>
                  <button  className="w-full flex justify-center text-white bg-[#6F4FF2] hover:text-[#6F4FF2] hover:border hover:border-[#6F4FF2] hover:bg-transparent hover:text-[#6F4FF2] px-10 py-4 rounded-full text-sm md:text-base font-medium">
                    Connect Wallet
                  </button>
                </NavLink>
                <NavLink to='/wallet' className="w-full" >
                  <button  className="w-full flex justify-center items-center hover:text-white hover:bg-[#6F4FF2] text-[#6F4FF2] border-2 border-[#6F4FF2] px-10 py-4 rounded-full text-sm md:text-base font-medium">
                    <FontAwesomeIcon icon={faCirclePlay} className='mr-3'/>
                    Watch Video
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <img src={HeroImg} className='mx-auto w-1/2 md:w-1/4 mt-16' alt='supply chain vector' />
        </section>

        <section>
          <div className="flex justify-center items-center w-full mt-32 mx-auto px-8 md:px-20">
            <div className="bg-[url('./assets/Tech.png')] bg-cover bg-center w-full flex p-14 md:p-20 justify-start items-center">
              <div className='text-left flex flex-col text-white'>
                <h2 className='text-lg md:text-3xl font-semibold'>What is DigiChain?</h2>
                <p className=' text-xs md:text-base  mt-8 '>
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

        <section className='mt-32 text-white mx-auto px-14 md:px-20'>
          <h2 className='text-3xl  font-semibold '>
            How Does DigiChain Work?
          </h2>
          <Cards />
        </section>

        <section className=''>
          <Features />
        </section>
        
        <section className='mt-20 px-8 flex flex-col gap-8'>
          <Banner 
            title="Connect and Track"
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

        <section className='mt-24 w-full px-12 text-white '>
          <h2 className='text-4xl font-semibold leading-8'>Why Choose Digichain</h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
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
        </section>

        <section className='px-10 md:px-16 mt-16'>
          <div className='bg-[#6F4FF2] w-full py-7 px-6 rounded-lg flex flex-col justify-center '>
            <div className='w-full   text-left'>
              <p className='text-xl md:text-3xl font-semibold'>
                Lets revolutionize the way 
                products move from production to consumption together.
              </p>
              <p className='text-base md:text-2xl mt-3'>
                Experience DigiChain - Where Trust Meets Transparency
              </p>
            </div>
            <NavLink to='/wallet' >
              <button className='text-white bg-[#060317] hover:text-[#060317] hover:border hover:border-[#060317] hover:bg-transparent px-5 md:px-10 py-2 md:py-4 mt-4 rounded-full text-sm  font-medium'>
                Connect Wallet
              </button>
            </NavLink>
            
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
