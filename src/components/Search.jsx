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
    <form onSubmit={handleSubmit} className='w-full flex justify-between items-center'>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        className='w-full  bg-[#0F0C25] rounded-full'
      />
      <button type="submit" className='bg-[#6F4FF2] h-10 md:h-14 w-16 rounded-full text-lg flex justify-center items-center'>
        <CiSearch />
      </button>
    </form>
  );
}

export default Search;
