import React, { useState } from 'react';
import { getLastFiveShipments } from '../pages/Shipment';
import { NavLink } from 'react-router-dom';

const RecentShipments = () => {
  const recentShipments = getLastFiveShipments();

  // State to track visibility of dropdown for each shipment
  const [dropdownVisible, setDropdownVisible] = useState({});

  // Function to toggle dropdown visibility for a shipment
  const toggleDropdown = (shipmentId) => {
    setDropdownVisible({
      ...dropdownVisible,
      [shipmentId]: !dropdownVisible[shipmentId]
    });
  };

  return (
    <div className='bg-[#09061E] w-full flex flex-col rounded-lg mt-6 px-6 py-4 pb-9'>
      <div className='flex justify-between text-white items-center text-base font-semibold pt-4'>
        <h2 className=''>Recent Shipments</h2>
        <NavLink to='/shipment'>View all</NavLink>
      </div>
      <div>
        {recentShipments.map((shipment) => (
          <div key={shipment.id}>
            <div  className=" w-full grid grid-cols-3 lg:grid-cols-6 gap-6 items-center bg-[#0F0C25] text-xs md:text-base font-semibold text-white px-8 py-4 mt-6">
              <div className=''>
                <div className=' text-[#3D3959]'>Product</div>
                <div className=''>{shipment.productName}</div>
              </div>
              <div className='block text-center'>
                <div className=' text-[#3D3959]'>Product ID</div>
                <div className=''>{shipment.productId}</div>
              </div>
              <div className='hidden lg:block text-center'>
                <div className=' text-[#3D3959]'>Status</div>
                <div className={` ${
                  shipment.status === 'Delivered' ? 'text-green-500' :
                  shipment.status === 'Pending' ? 'text-red-500' : 'text-yellow-500'
                }`}>{shipment.status}</div>
              </div>
              <div className='hidden lg:block text-center'>
                <div className=' text-[#3D3959]'>Distributor ID</div>
                <div>{shipment.distributorId}</div>
              </div>
              <button className='hidden lg:block w-24 h-12 text-white bg-[#6F4FF2] hover:bg-transparent hover:text-[#6F4FF2] rounded-full text-base font-semibold '>
                View
              </button>
              <button className='hidden lg:block w-24 h-12 text-[#6F4FF2] border-2 border-[#6F4FF2] hover:bg-[#6F4FF2] hover:text-white  rounded-full text-base font-semibold'>
                Track
              </button>
              {/* Toggle button for dropdown */}
              <div className='-mr-2 w-full flex place-content-end lg:hidden'>
                <button className='text-[#6F4FF2]  focus:outline-none' onClick={() => toggleDropdown(shipment.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2 10a2 2 0 114 0 2 2 0 01-4 0zM10 6a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M14 10a2 2 0 114 0 2 2 0 01-4 0zM10 14a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Dropdown menu */}
            {dropdownVisible[shipment.id] && (
              <div className='absolute z-10 right-20 text-white text-xs flex flex-col gap-4 rounded-lg px-5 py-4 bg-[#060317] border  '>
                <div className='text-left'>
                  <div className={` ${
                    shipment.status === 'Delivered' ? 'text-green-500' :
                    shipment.status === 'Pending' ? 'text-red-500' : 'text-yellow-500'
                  }`}>{shipment.status}</div>
                </div>
                <div className='text-left'>
                  <div>{shipment.distributorId}</div>
                </div>
                <div className='text-left '>View</div>
                <div className='text-left '>Track</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentShipments;
