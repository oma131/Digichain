import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className='w-[317px] flex justify-between items-center'>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        className='w-[253px] h-[48px] bg-[#0F0C25] rounded-full pl-[20px]'
      />
      <button type="submit" className='bg-[#6F4FF2] h-[48px] w-[48px] rounded-full text-[25px] flex justify-center items-center'>
        <CiSearch />
      </button>
    </form>
  );
}

export default Search;
