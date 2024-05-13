import React, { useState } from 'react';
import { shipments } from '../utils/shipmentData';
import { FaList } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Button from '../components/Buttons/Button';
import SendModal from '../components/SendModal'; // Import the SendFormModal component

const ProdList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
  const shipmentsPerPage = 10;

  // Calculate index of the first and last shipment of the current page
  const indexOfLastShipment = currentPage * shipmentsPerPage;
  const indexOfFirstShipment = indexOfLastShipment - shipmentsPerPage;
  const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Generate pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(shipments.length / shipmentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-8 md:py-16 px-8 md:p-14 md:block flex items-center justify-center'>
      <div className='w-full text-white pb-10'>
        <div className='flex justify-between items-center gap-4'>
          <div className='w-full flex justify-between items-center'>
            <div className='text-lg md:text-2xl gap-2 md:gap-4 font-semibold flex items-center'>
              <FaList />
              <h2 >Product List</h2>
            </div>
            <div className='text-xs gap-2  md:text-base py-1 md:py-2 md:px-4 px-3 flex justify-center items-center bg-[#0F0C25] rounded-full'>
              <p>Recent</p>
              <IoIosArrowDown />
            </div>
          </div>
          <button className='hidden md:block w-32 h-12 text-white bg-[#6F4FF2] hover:bg-transparent hover:text-[#6F4FF2] rounded-full text-base font-semibold '>
            Send
          </button>
        </div>
        {currentShipments.map((shipment) => (
          <div key={shipment.id} className="w-full items-center bg-[#0F0C25] px-6 md:px-10 py-4 flex justify-between items-center rounded-lg mt-6">
            <div className='w-full flex gap-4 md:gap-10 items-center'>
              <div className=''>
                <div className='text-sm md:text-base  text-[#3D3959]'>Product</div>
                <div className='text-sm md:text-base font-semibold'>{shipment.productName}</div>
              </div>
              <div className='text-center'>
                <div className='text-sm md:text-base text-[#3D3959]'>Product ID</div>
                <div className='text-sm md:text-base font-semibold'>{shipment.productId}</div>
              </div>
              <div className='text-center'>
                <div className='text-sm md:text-base text-[#3D3959]'>Quantity</div>
                <div className='text-sm md:text-base font-semibold'>
                  {shipment.quantity}
                </div>
              </div>
            </div>


            <input
              type="checkbox"
              className='w-6 h-6 flex ml-2 justify-end items-center rounded border-white focus:ring-white'
              style={{
                backgroundColor: 'transparent', // Set initial background color
                '--checked-bg-color': '#6F4FF2', // Define custom property for checked background color
              }}
              onChange={(e) => e.target.style.backgroundColor = e.target.checked ? 'var(--checked-bg-color)' : 'transparent'} // Change background color based on checkbox state
            />

          </div>
        ))}
        <div className='w-full mt-4 flex justify-end'>
          <button className='block md:hidden  w-24 h-10 text-white bg-[#6F4FF2] hover:bg-transparent hover:text-[#6F4FF2] rounded-lg text-base font-semibold '>
            Send
          </button>
        </div>
        {/* Pagination */}
        <div className="w-full flex justify-center mt-6 gap-4">
          {pageNumbers.map(number => (
            <button
              onClick={() => paginate(number)}
              className={`bg-[#6F4FF2] w-8  rounded border ${currentPage === number ? 'bg-gray-500' : 'border-transparent'}`}
              key={number}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Render the form modal */}
        <SendModal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </div>
  );
};

export default ProdList;
