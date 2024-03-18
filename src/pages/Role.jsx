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
  // bg-[#070318]

  return (
    <div className='bg-[#070318] flex justify-center items-center h-[100vh] w-[100%]'>
      <div className="bg-[#09061E] text-white w-[654px] h-[669px] max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h4>Login as</h4>
          <div>
            <label className="inline-flex items-center bg-[#0F0C25] w-[468px] h-[72px] rounded-full">
              <span className="ml-2">Option 1</span>
              <input
                type="radio"
                className="form-radio text-indigo-600"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <span className="ml-2">Option 2</span>
              <input
                type="radio"
                className="form-radio text-indigo-600"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <span className="ml-2">Option 3</span>
              <input
                type="radio"
                className="form-radio text-indigo-600"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <span className="ml-2">Option 4</span>
              <input
                type="radio"
                className="form-radio text-indigo-600"
                value="option4"
                checked={selectedOption === 'option4'}
                onChange={handleOptionChange}
              />
              
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
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
