// recentShipment.js

import React from 'react';
import Button from './Buttons/Button';
import { getLastFiveShipments } from '../pages/Shipment';

const RecentShipments = () => {
  const recentShipments = getLastFiveShipments();

  return (
    <div className='bg-[#09061E] w-[969px] rounded-lg mt-[22px] px-[47px] py-[32] pb-[50px]'>
      <div className='flex justify-between items center text-[16px] font-[600] pt-[32px] mr-[35px]'>
        <h2 className=''>Recent Shipments</h2>
        <p>View all</p>
      </div>
      <div>
      {recentShipments.map((shipment) => (
          <div key={shipment.id} className="w-[860px] bg-[#0F0C25] px-[43px] py-[10px] mt-[26px] flex justify-between tems-center rounded-lg mt-[12px]">
            {/* Render shipment details here */}
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
              }`}>{shipment.status}</div>
            </div>
            <div className='text-center'>
              <div className='text-[14px] font-[500] text-[#3D3959]'>Distributor ID</div>
              <div className='text-[14px] font-[500]'>{shipment.distributorId}</div>
            </div>
            
            {/* Add more details if needed */}
            <div className='w-[230px] flex justify-between'>
              <Button style={{ backgroundColor: '#6F4FF2', color: 'white', width:'108px', height:'44px'}} >View</Button>
              <Button style={{ width:'108px', height:'44px', color: 'white', border: '2px solid #6F4FF2' }}>Track</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentShipments;
