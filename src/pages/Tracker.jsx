import React, { useState } from 'react'
import { CgMenuBoxed } from "react-icons/cg";
import { tracking } from '../utils/trackingData'
import Search from '../components/Search';

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Tracker = () => {
  // State for current page index
  const [currentPage, setCurrentPage] = useState(0);

  // Number of items per page
  const itemsPerPage = 1;

  // Calculate total number of pages
  const totalPages = Math.ceil(tracking.length / itemsPerPage);

  // Calculate starting index of current page
  const startIndex = currentPage * itemsPerPage;

  // Slice the data to display only items for the current page
  const currentData = tracking.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Function to handle previous page
  const prevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className='py-8 md:py-16 px-8 md:p-14 text-white'>
      <div className='flex justify-between'>
        <div className='w-full flex justify-between items-center'>
          <div className='text-xl font-bold gap-2 flex items-center'>
            <CgMenuBoxed />
            <h2 >Tracker</h2>
          </div>
        </div>
        <Search />
      </div>
      {currentData.map((item, index) => (
        <div key={index} className='w-full mt-4 gap-8 flex flex-col justify-between'>
          <div className=' py-4 px-6 gap-2 bg-[#09061E] text-right flex flex-col justify-between rounded-lg'>
            <div className='flex justify-between items-center'>
              <p className='text-sm md:text-base font-[600] text-[#3D3959]'>Product Name</p>
              <p className='text-xs md:text-sm'>{item.product_name}</p>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-sm md:text-base font-[600] text-[#3D3959]'>Date of Manufacture</p>
              <div className='text-xs md:text-sm'>
                <p>{item.manufacture_date},</p>
                <p>{item.manufacture_time}</p>
              </div>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-sm md:text-base font-[600] text-[#3D3959]'>Name of Producer</p>
              <p className='text-xs md:text-sm'>{item.manufacturer}</p>
            </div>
          </div>
          <div className='py-4 px-6 gap-2 bg-[#09061E] text-right flex flex-col justify-between rounded-lg'>
            <div className='flex justify-between items-center text-right'>
              <p className='text-sm md:text-base font-[600] text-[#3D3959]'>Product Received by </p>
              <div className='text-xs md:text-sm'>
                <p>Distributor</p>
                <p>{item.distributor_received.date}, {item.distributor_received.time}</p>
              </div>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-sm md:text-base font-semibold text-[#3D3959]'>Name of Distributor</p>
              <p className='text-xs md:text-sm'> {item.distributor_name}</p>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-sm md:text-base font-semibold text-[#3D3959]'>Delivery Location:</p>
              <p className='text-xs md:text-sm'>{item.delivery_location}</p>
            </div>
          </div>
          <div className='py-4 px-6 gap-2 bg-[#09061E] text-right flex flex-col justify-between rounded-lg'>
            <div className='flex justify-between items-center'>
              <p className='text-sm md:text-base font-semibold text-[#3D3959]'>Product Received by </p>
              <div className='text-xs md:text-sm'>
                <p>Retailer</p>
                <p>{item.retailer_received.time}, {item.retailer_received.date}</p>
              </div>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-sm md:text-base font-[600] text-[#3D3959]'>Name of Retailer</p>
              <p className='text-xs md:text-sm'>{item.retailer_name}</p>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-sm md:text-base font-[600] text-[#3D3959]'>Product sold by</p>
              <div className='text-xs md:text-sm'>
                <p className='text-right'>Retailer</p>
                <p>{item.product_sold.time}, {item.product_sold.date}</p>
              </div>
            </div>
          </div>
          
        </div>
      ))}
      <div className='w-full flex justify-center items-center mt-[30px]'>
        <div className=' w-48 flex justify-between items-center'>
          <button className='text-4xl' onClick={prevPage} disabled={currentPage === 0}><IoIosArrowDropleft/></button>
          <p>Page {currentPage + 1} of {totalPages}</p>
          <button className='text-4xl' onClick={nextPage} disabled={currentPage === totalPages - 1}><IoIosArrowDropright /></button>
        </div>
      </div>

    </div>
  )
}

export default Tracker