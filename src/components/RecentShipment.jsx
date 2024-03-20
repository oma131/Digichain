// recentShipment.js

import React from 'react';
import { getLastFiveShipments } from '../pages/Shipment';

const RecentShipments = () => {
  const recentShipments = getLastFiveShipments();

  return (
    <div className='bg-[#09061E] w-[969px] rounded-lg mt-[22px] px-[47px] py-[32px]'>
      <h2>Recent Shipments</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Origin</th>
            <th className="px-4 py-2">Destination</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentShipments.map((shipment) => (
            <tr key={shipment.id}>
              <td className="border px-4 py-2">{shipment.id}</td>
              <td className="border px-4 py-2">{shipment.name}</td>
              <td className="border px-4 py-2">{shipment.origin}</td>
              <td className="border px-4 py-2">{shipment.destination}</td>
              <td className="border px-4 py-2">{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentShipments;
