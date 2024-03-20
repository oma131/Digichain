import React, { useState } from 'react';

const Role = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Selected option:", selectedOption);
  };

  return (
    <div className='bg-[#070318]  flex justify-center items-center h-[100vh] w-[100%]'>
      <div className="bg-[#09061E] text-white w-[654px] h-[569px] p-[92px] mx-auto mt-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h4 className='text-[24px] font-[700] text-center'>Login as</h4>
          <div>
            <label className="flex justify-between items-center px-[25px]  bg-[#0F0C25] w-[468px] h-[52px] rounded-full">
              <span className="ml-2 text-[20px]">Manufacturer</span>
              <input
                type="radio"
                className="form-radio text-[#6F4FF2] h-[22px] w-[22px]"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <label className="flex justify-between items-center px-[25px]  bg-[#0F0C25] w-[468px] h-[52px] rounded-full">
              <span className="ml-2 text-[20px]">Retailer</span>
              <input
                type="radio"
                className="form-radio text-[#6F4FF2] h-[22px] w-[22px]"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <label className="flex justify-between items-center px-[25px]  bg-[#0F0C25] w-[468px] h-[52px] rounded-full">
              <span className="ml-2 text-[20px]">Distributor</span>
              <input
                type="radio"
                className="form-radio text-[#6F4FF2] h-[22px] w-[22px]"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <label className="flex justify-between items-center px-[25px]  bg-[#0F0C25] w-[468px] h-[52px] rounded-full">
              <span className="ml-2 text-[20px]">Consumer</span>
              <input
                type="radio"
                className="form-radio text-[#6F4FF2] h-[22px] w-[22px]"
                value="option4"
                checked={selectedOption === 'option4'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#6F4FF2] hover:bg-indigo-700 text-white py-2 px-4 text-[20px] w-[468px] h-[52px] rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Role;
