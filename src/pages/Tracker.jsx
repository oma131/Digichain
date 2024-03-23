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
    <div className='pt-[52px] pl-[42px]'>
      <div className='flex justify-between'>
        <div className='w-[375px] flex justify-between items-center'>
          <div className='text-[24px] font-[600] flex items-center'>
            <CgMenuBoxed />
            <h2 className='ml-[16px]'>Tracker</h2>
          </div>
        </div>
        <Search />
      </div>
      {currentData.map((item, index) => (
        <div key={index} className='w-[650px] h-[711px] mt-[42px] flex flex-col justify-between'>
          <div className='h-[223px] py-[46px] px-[49px] bg-[#09061E] text-right flex flex-col justify-between rounded-lg'>
            <div className='flex justify-between items-center'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Product Name</p>
              <p className='text-[22px]'>{item.product_name}</p>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Date of Manufacture</p>
              <div className='text-[22px]'>
                <p>{item.manufacture_date},</p>
                <p>{item.manufacture_time}</p>
              </div>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Name of Producer</p>
              <p className='text-[22px]'>{item.manufacturer}</p>
            </div>
          </div>
          <div className='h-[223px] py-[46px] px-[49px] bg-[#09061E] flex flex-col justify-between rounded-lg'>
            <div className='flex justify-between items-center text-right'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Product Received by </p>
              <div className='text-[22px]'>
                <p>Distributor</p>
                <p>{item.distributor_received.date}, {item.distributor_received.time}</p>
              </div>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Name of Distributor</p>
              <p className='text-[22px]'> {item.distributor_name}</p>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Delivery Location:</p>
              <p className='text-[22px]'>{item.delivery_location}</p>
            </div>
          </div>
          <div className='h-[223px] py-[46px] px-[49px] bg-[#09061E] text-right flex flex-col justify-between rounded-lg'>
            <div className='flex justify-between items-center'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Product Received by </p>
              <div className='text-[22px]'>
                <p>Retailer</p>
                <p>{item.retailer_received.time}, {item.retailer_received.date}</p>
              </div>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Name of Retailer</p>
              <p className='text-[22px]'>{item.retailer_name}</p>
            </div>
            <div className='flex justify-between items-center text-right'>
              <p className='text-[24px] font-[600] text-[#3D3959]'>Product sold by</p>
              <div className='text-[22px]'>
                <p className='text-right'>Retailer</p>
                <p>{item.product_sold.time}, {item.product_sold.date}</p>
              </div>
            </div>
          </div>
          
        </div>
      ))}
      <div className='w-[650px] flex justify-center items-center mt-[30px]'>
        <div className=' w-[180px] flex justify-between items-center'>
          <button className='text-[42px]' onClick={prevPage} disabled={currentPage === 0}><IoIosArrowDropleft/></button>
          <p>Page {currentPage + 1} of {totalPages}</p>
          <button className='text-[42px]' onClick={nextPage} disabled={currentPage === totalPages - 1}><IoIosArrowDropright /></button>
        </div>
      </div>

    </div>
  )
}

export default Tracker