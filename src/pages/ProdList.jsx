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
    <div className='pt-[52px] pl-[42px]'>
      <div className='flex justify-between'>
        <div className='w-[375px] flex justify-between items-center'>
          <div className='text-[24px] font-[600] flex items-center'>
            <FaList />
            <h2 className='ml-[16px]'>Product List</h2>
          </div>
          <div className='text-[16px] flex justify-center items-center bg-[#0F0C25] w-[88px] rounded-full'>
            <p className='mr-[6px]'>Recent</p>
            <IoIosArrowDown />
          </div>
        </div>
        <Button style={{ backgroundColor: '#6F4FF2', color: 'white', width: '108px', height: '44px' }} onClick={toggleModal}>Send</Button>
      </div>
      {currentShipments.map((shipment) => (
        <div key={shipment.id} className="w-[985px] items-center bg-[#0F0C25] px-[67px] py-[10px] mt-[26px] flex justify-between tems-center rounded-lg mt-[12px]">
          <div className='w-[366px] flex justify-between items-center'>
            <div className=''>
              <div className='text-[14px] font-[500] text-[#3D3959]'>Product</div>
              <div className='text-[14px] font-[500]'>{shipment.productName}</div>
            </div>
            <div className='text-center'>
              <div className='text-[14px] font-[500] text-[#3D3959]'>Product ID</div>
              <div className='text-[14px] font-[500]'>{shipment.productId}</div>
            </div>
            <div className='text-center'>
              <div className='text-[14px] font-[500] text-[#3D3959]'>Quantity</div>
              <div className='text-[14px] font-[500]'>
                {shipment.quantity}
              </div>
            </div>
          </div>


          <input
            type="checkbox"
            className='w-[30px] h-[30px] flex justify-center items-center rounded bg-red-100 border-white text-red-500 focus:ring-white'
            style={{
              backgroundColor: 'transparent', // Set initial background color
              '--checked-bg-color': '#6F4FF2', // Define custom property for checked background color
            }}
            onChange={(e) => e.target.style.backgroundColor = e.target.checked ? 'var(--checked-bg-color)' : 'transparent'} // Change background color based on checkbox state
          />

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

      {/* Render the form modal */}
      <SendModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default ProdList;
