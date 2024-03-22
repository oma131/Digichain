import React, { useState } from 'react';
import Button from './Buttons/Button';
import RecievedModal from '../components/RecievedModal'
import '../App.css'

const SendModal = ({ isOpen, onClose }) => {
    const [isAnotherModalOpen, setIsAnotherModalOpen] = useState(false);

    
    // Function to toggle nested modal
    const toggleAnotherModal = () => setIsAnotherModalOpen(!isAnotherModalOpen);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        toggleAnotherModal(); // Toggle the nested modal
    };


  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay "></div>
      <div className="modal-container ">
        <button onClick={onClose} className="modal-close">&times;</button>
        <h2 className="modal-title">Enter Distributor ID</h2>
        <form className=' flex flex-col'>
            <input 
                type='text' 
                placeholder='Enter here'
                className='w-[468px] h-[52px] bg-[#0F0C25] py-[19px] px-[42px] border-transparent rounded-full'
            />
            <Button 
                style={{ backgroundColor: '#6F4FF2', color: 'white', width: '468px', height: '52px', marginTop: '16px' }} 
                type="submit"
                onClick={handleSubmit}
            >
                Send
            </Button>
        </form>
      </div>
      <RecievedModal isOpen={isAnotherModalOpen} onClose={toggleAnotherModal}/>
    </div>
  );
};

export default SendModal;
