/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Search from '../components/Search'
import ShipmentTracker from '../components/ShipmentTracker';
import RecentShipments from '../components/RecentShipments';

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform search operation 
    console.log('Search done');
    // Update search results if needed
    // setSearchResults([...]);
  };

  return (
    <div className='w-full px-10 py-10 '>
      <div className='w-full '>
        <Search onSearch={handleSearch} />
        <ShipmentTracker />
        <div className='w-full '>
          <RecentShipments />
        </div>
      </div>
    </div>
  )
}

export default Dashboard