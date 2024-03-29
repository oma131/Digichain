/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { shipments } from '../utils/shipmentData'
import { GrInbox } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import Button from '../components/Buttons/Button'
import Search from '../components/Search';

export function getLastFiveShipments() {
  return shipments.slice(-5);
}

const Shipment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const shipmentsPerPage = 10;

  // Calculate index of the first and last shipment of the current page
  const indexOfLastShipment = currentPage * shipmentsPerPage;
  const indexOfFirstShipment = indexOfLastShipment - shipmentsPerPage;
  const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Generate pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(shipments.length / shipmentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pt-[52px] pl-[42px]'>
      <div className='flex justify-between'>
        <div className='w-[375px] flex justify-between items-center'>
          <div className='text-[24px] font-[600] flex items-center'>
            <GrInbox />
            <h2 className='ml-[16px]'>Shipment History</h2>
          </div>
          <div className='text-[16px] flex justify-center items-center bg-[#0F0C25] w-[88px] rounded-full'>
            <p className='mr-[6px]'>filter</p>
            <IoIosArrowDown />
          </div>
        </div>
        <Search />
      </div>
      {currentShipments.map((shipment) => (
        <div key={shipment.id} className="w-[985px] bg-[#0F0C25] px-[43px] py-[10px] mt-[26px] flex justify-between tems-center rounded-lg mt-[12px]">
          <div className=''>
            <div className='text-[14px] font-[500] text-[#3D3959]'>Product</div> 
            <div className='text-[14px] font-[500]'>{shipment.productName}</div>
          </div>
          <div className='text-center'>
            <div className='text-[14px] font-[500] text-[#3D3959]'>Product ID</div> 
            <div className='text-[14px] font-[500]'>{shipment.productId}</div>
          </div>
          <div className='text-center'>
            <div className='text-[14px] font-[500] text-[#3D3959]'>Status</div> 
            <div className={`text-[14px] font-[500] ${
              shipment.status === 'Delivered' ? 'text-green-500' :
              shipment.status === 'Pending' ? 'text-red-500' : 'text-yellow-500'
            }`}>
              {shipment.status}
            </div>
          </div>
          <div className='text-center'>
            <div className='text-[14px] font-[500] text-[#3D3959]'>Product</div> 
            <div className='text-[14px] font-[500]'>{shipment.distributorId}</div>
          </div>

          <div className='w-[230px] flex justify-between'>
            <Button style={{ backgroundColor: '#6F4FF2', color: 'white', width:'108px', height:'44px'}} >View</Button>
            <Button style={{ width:'108px', height:'44px', color: 'white', border: '2px solid #6F4FF2' }}>Track</Button>
          </div>
          
        </div>
      ))}
      {/* Pagination */}
      <div className="w-[100%] flex justify-center mt-[20px]">
        {pageNumbers.map(number => (
          <button 
            onClick={() => paginate(number)} 
            className={`bg-[#6F4FF2] w-[30px] ml-[10px] rounded border ${currentPage === number ? 'bg-gray-500' : 'border-transparent'}`}
            key={number} 
            >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shipment;