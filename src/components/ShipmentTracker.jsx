import React, { useState } from 'react';
import Piechart from '../assets/Piechart.png'
import Package from '../assets/Package.png'
import Bus from '../assets/Bus.png'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
function ShipmentTracker() {
  const [totalShipments, setTotalShipments] = useState(0);
  const [pendingShipments, setPendingShipments] = useState(0);
  const [deliveredShipments, setDeliveredShipments] = useState(0);

//   const handleShipmentUpdate = (event) => {
//     const action = event.target.value;
//     if (action === 'pending') {
//       setPendingShipments(prevCount => prevCount + 1);
//       setTotalShipments(prevCount => prevCount + 1);
//     } else if (action === 'delivered') {
//       setDeliveredShipments(prevCount => prevCount + 1);
//       setTotalShipments(prevCount => prevCount + 1);
//     }
//   };

  const totalPercentage = totalShipments > 0 ? ((totalShipments / totalShipments) * 100).toFixed(2) : 0;
  const pendingPercentage = totalShipments > 0 ? ((pendingShipments / totalShipments) * 100).toFixed(2) : 0;
  const deliveredPercentage = totalShipments > 0 ? ((deliveredShipments / totalShipments) * 100).toFixed(2) : 0;

  const totalArrowColor = totalPercentage > 50 ? 'text-[#1AB568]' : 'text-red-500';
  const pendingArrowColor = pendingPercentage > 50 ? 'text-[#1AB568]' : 'text-red-500';
  const deliveredArrowColor = deliveredPercentage > 50 ? 'text-[#1AB568]' : 'text-red-500';

  const totalSign = totalPercentage > 50 ? '+' : '-';
  const pendingSign = pendingPercentage > 50 ? '+' : '-';
  const deliveredSign = deliveredPercentage > 50 ? '+' : '-';

  return (
    <div className='bg-[#09061E] mt-[22px] w-[968px] h-[318px] px-[38px] py-[32px] flex justify-between rounded-lg'>
      <div className='relative flex flex-col'>
        <div className='absolute w-[76px] h-[74px] rounded-full ml-[70px]  bg-[#6F4FF2] flex justify-center items-center m-auto'>
            <img src={Piechart} alt='dashboard vector'/>
        </div>
        <div className='border-solid border-2 border-slate-700 mt-[40px] rounded-lg bg-[#0F0C25] w-[217px] h-[217px] '>
            <div className='mt-[56px] h-[127px] text-center flex flex-col justify-between'>
                <div className='text-[42px] font-[600]'>{totalShipments}</div>
                <p className='text-[20px] font-[400]'>Total Shipments</p>  
                <div className={`text-[16px] flex items-center justify-center ${totalArrowColor}`}>
                    <span>{totalPercentage > 50 ? <FaArrowUp /> : <FaArrowDown />}</span>
                    <span className='ml-[2px]'>{totalSign}{totalPercentage}%</span>
                </div>
            </div>
        </div>
      </div>
      <div className='relative flex flex-col'>
        <div className='absolute w-[76px] h-[74px] rounded-full ml-[70px]  bg-[#6F4FF2] flex justify-center items-center m-auto'>
            <img src={Package} alt='dashboard vector'/>
        </div>
        <div className='border-solid border-2 border-slate-700 mt-[40px] rounded-lg bg-[#0F0C25] w-[217px] h-[217px] '>
            <div className='mt-[56px] h-[127px] text-center flex flex-col justify-between'>
                <div className='text-[42px] font-[600]'>{pendingShipments}</div>
                <p className='text-[20px] font-[400]'>Pending</p>  
                <div className={`text-[16px] flex items-center justify-center ${pendingArrowColor}`}>
                    <span>{totalPercentage > 50 ? <FaArrowUp /> : <FaArrowDown />}</span>
                    <span className='ml-[2px]'>{pendingSign}{pendingPercentage}%</span>
                </div>
            </div>
        </div>
      </div>
      <div className='relative flex flex-col'>
        <div className='absolute w-[76px] h-[74px] rounded-full ml-[70px]  bg-[#6F4FF2] flex justify-center items-center m-auto'>
            <img src={Bus} alt='dashboard vector'/>
        </div>
        <div className='border-solid border-2 border-slate-700 mt-[40px] rounded-lg bg-[#0F0C25] w-[217px] h-[217px] '>
            <div className='mt-[56px] h-[127px] text-center flex flex-col justify-between'>
                <div className='text-[42px] font-[600]'>{deliveredShipments}</div>
                <p className='text-[20px] font-[400]'>Delivered Shipments</p>  
                <div className={`text-[16px] flex items-center justify-center ${deliveredArrowColor}`}>
                    <span>{deliveredPercentage > 50 ? <FaArrowUp /> : <FaArrowDown />}</span>
                    <span className='ml-[2px]'>{deliveredSign}{deliveredPercentage}%</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentTracker;
