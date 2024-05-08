import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import Button from '../Buttons/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

//   const navigationArray = [
//     { title: "Home", link: "/" },
//     { title: "SignUp", link: "/SignUp" },
//     { title: "LogIn", link: "/LogIn" },
//   ];

  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState('')

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };


  return (
    <nav className="text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 lg:py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex ">
            <a href='#home' className='text-3xl font-semibold'>
                Digichain
            </a>
          </div>
          
          {/* Links */}
          <div className="hidden  md:flex justify-center flex-grow">
            <div className="flex space-x-4">
              <NavLink to="/" onClick={() => handleMenuItemClick('link1')} className={`text-white hover:text-[#6F4FF2] px-3 py-2 rounded-md text-lg font-medium ${activeMenuItem === 'link1' ? 'underline underline-offset-8 text-midnight' : ''} `}>Home</NavLink>
              <NavLink to="/api" onClick={() => handleMenuItemClick('link2')} className={`text-white hover:text-[#6F4FF2] px-3 py-2 rounded-md text-lg font-medium ${activeMenuItem === 'link2' ? 'underline underline-offset-8 text-midnight' : ''} `}>API</NavLink>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center">
            <NavLink to='/wallet' >
              <button onClick={handleButtonClick} className={`hidden lg:flex md:flex text-white bg-[#6F4FF2] hover:text-[#6F4FF2] hover:border hover:border-[#6F4FF2] hover:bg-transparent hover:text-[#6F4FF2] px-10 py-4 rounded-full text-sm text-lg font-medium ${isButtonClicked ? 'bg-light border border-midnight text-midnight' : ''}`}>
                Connect Wallet
              </button>
            </NavLink>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className=" inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#6F4FF2] focus:outline-none   ">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#6F4FF2] ">
          <div className="px-6 py-6 space-y-1 ">
            <a href="/" className="text-gray-300 hover:bg-[#060317] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-[#060317] hover:text-white block px-3 py-2 rounded-md text-base font-medium">API</a>
            <NavLink to='/wallet'>
              <button className="text-white bg-[#060317] hover:text-white mt-10 px-10 py-2 rounded-full text-sm text-lg font-medium">Connect Walet</button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
