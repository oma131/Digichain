/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState} from 'react';
import '../App.css'

const RecievedModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay "></div>
        <div className="modal-container ">
            <div className='w-[100%] '>
                <button onClick={onClose} className="modal-close-two">&times;</button>
            </div>
            <h2 className="modal-title">Your shipment was sent</h2>
            <div className='w-[366px] flex justify-between items-center'>
                <div className=''>
                    <div className='text-[14px] font-[500] text-[#3D3959]'>Product</div>
                    <div className='text-[14px] font-[500]'>Product 5</div>
                </div>
                <div className='text-center'>
                    <div className='text-[14px] font-[500] text-[#3D3959]'>Product Id</div>
                    <div className='text-[14px] font-[500]'>12345</div>
                </div>
                <div className='text-center'>
                    <div className='text-[14px] font-[500] text-[#3D3959]'>Product</div>
                    <div className='text-[14px] font-[500]'>
                        10000
                    </div>
                </div>
            </div>
            <p className='text-[24px] font-[600] mt-[30px]'>Tracking number:  1631137192 </p>
        </div>
    </div>
  );
};

export default RecievedModal;
