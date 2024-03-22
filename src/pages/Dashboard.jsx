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
    <div className='w-[100%] p-[42px] pt-[10px]'>
      <div className='w-[969px] '>
        <Search onSearch={handleSearch} />
        <ShipmentTracker />
        <div>
          <RecentShipments />
        </div>
      </div>
    </div>
  )
}

export default Dashboard