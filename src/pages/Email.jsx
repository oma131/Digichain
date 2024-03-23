import React from 'react'
import { NavLink } from "react-router-dom";


const Email = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Email submitted");
      };
  return (
    <div className='bg-[#070318]  flex justify-center items-center h-[100vh] w-[100%]'>
      <div className="bg-[#09061E] text-white w-[654px] h-[405px] p-[92px] mx-auto mt-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h4 className='text-[24px] font-[700] text-center'>Enter your email</h4>
          <div>
            <label className="">
              <input
                type="text"
                className="flex justify-between items-center px-[25px]  bg-[#0F0C25] w-[468px] h-[52px] rounded-full"
                placeholder='Enter Email'
              />
              
            </label>
          </div>
          
          
          <NavLink to='/dashboard'>
            <button
              type="submit"
              className="bg-[#6F4FF2] border-none outline-none hover:bg-indigo-700 text-white py-2 px-4 text-[20px] w-[468px] h-[52px] rounded-full mt-[20px]"
            >
              Submit
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default Email