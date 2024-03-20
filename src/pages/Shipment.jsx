/* eslint-disable react-refresh/only-export-components */

import React from 'react';

export const shipments = [
  { id: 1, name: 'Shipment 1', origin: 'Origin 1', destination: 'Destination 1', status: 'Delivered' },
  { id: 2, name: 'Shipment 2', origin: 'Origin 2', destination: 'Destination 2', status: 'In transit' },
  { id: 3, name: 'Shipment 3', origin: 'Origin 3', destination: 'Destination 3', status: 'Pending' },
  { id: 4, name: 'Shipment 4', origin: 'Origin 4', destination: 'Destination 4', status: 'Delivered' },
  { id: 5, name: 'Shipment 5', origin: 'Origin 5', destination: 'Destination 5', status: 'In transit' },
  { id: 6, name: 'Shipment 6', origin: 'Origin 6', destination: 'Destination 6', status: 'Pending' },
  { id: 7, name: 'Shipment 7', origin: 'Origin 7', destination: 'Destination 7', status: 'Delivered' },
  { id: 8, name: 'Shipment 8', origin: 'Origin 8', destination: 'Destination 8', status: 'In transit' },
  { id: 9, name: 'Shipment 9', origin: 'Origin 9', destination: 'Destination 9', status: 'Pending' },
  { id: 10, name: 'Shipment 10', origin: 'Origin 10', destination: 'Destination 10', status: 'Delivered' }
];

export function getLastFiveShipments() {
  return shipments.slice(-5);
}

const Shipment = () => {
  return (
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
        {shipments.map((shipment) => (
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
  );
};

export default Shipment;
