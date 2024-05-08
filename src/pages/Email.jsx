import React from 'react'
import { NavLink } from "react-router-dom";


const Email = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Email submitted");
      };
  return (
    <div className='bg-[#070318] px-10 flex justify-center items-center h-screen w-full'>
      <div className="bg-[#09061E] w-full text-white flex justify-center items-center p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <h4 className='text-2xl font-bold text-center'>Enter your email</h4>
          <div>
            <label className="w-full">
              <input
                type="text"
                className="bg-[#0F0C25] w-full px-10 py-4 rounded-full"
                placeholder='Enter Email'
              />
            </label>
          </div>
          <NavLink to='/dashboard' className='w-full'>
            <button  className="w-full mt-5 flex justify-center text-white bg-[#6F4FF2] hover:text-[#6F4FF2] hover:border hover:border-[#6F4FF2] hover:bg-transparent hover:text-[#6F4FF2] px-10 py-4 rounded-full text-sm md:text-base font-medium">
              Submit
            </button>
          </NavLink>
          
          
        </form>
      </div>
    </div>
  )
}

export default Email