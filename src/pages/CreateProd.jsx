/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";


const CreateProd = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  
  const [submittedProducts, setSubmittedProducts] = useState([]);

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Set the file name for display
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productName,
      description,
      image,
      type,
      color,
      price,
      quantity
    };
    setSubmittedProducts([...submittedProducts, newProduct]);
    // Reset form fields after submission
    setProductName('');
    setDescription('');
    setImage(null);
    setFileName('');
    setType('');
    setColor('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div className='py-16 px-8 md:block flex items-center justify-center'>
      <form className='w-full text-white max-w-sm'>
        <div className="md:flex md:items-center">
          <div className="hidden md:flex md:w-1/3"></div>
          <div className="w-full md:w-2/3 flex items-center justify-center gap-4 md:ml-12  text-xl font-semibold">
            <FaRegSquarePlus />
            <h2 className=" " >
              Create Product
            </h2>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row md:items-center mb-6 mt-[38px]'>
          <div className='w-full md:w-1/3'>
            <label className='text-white md:text-left mb-0  mb:pr-4" '>
              Product Name
            </label>
          </div>
          <div className='w-full md:w-2/3'>
            <input
              type="text"
              value={productName}
              onChange={handleNameChange}
              placeholder='Product Name'
              className='bg-[#0F0C25] border-[#0F0C25]  appearance-none rounded-lg w-full md:ml-12 py-2 px-4 '
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='w-full md:w-1/3  '>
            <label className='block text-white  w-[180px] md:text-left mb-1 md:mb-0 pr-4'>
              Product Description
            </label>
          </div>
          <div className='md:w-2/3'>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder='Product Description'
              className='bg-[#0F0C25] border-[#0F0C25] appearance-none rounded-lg w-full  md:ml-12 py-2 px-4 '
            />
          </div>
        </div>
        <div className="w-full mb-6 relative flex flex-col md:flex-row">
          <div className='w-full md:w-1/3'>
            <label htmlFor="image" className='block text-white  w-full md:text-left mb-1 md:mb-0 pr-4'>
              Product Image
            </label>
          </div>
          <div className='w-full md:w-2/3  '>
            <div
              className="mb-4 relative md:ml-12 rounded-lg w-full bg-[#0F0C25] p-4"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="flex items-center border-dashed border-2 border-[#787685] ">
                <span className="mr-2 text-[#787685]">{fileName || 'Drag file here to upload or'}</span>
                <span htmlFor="image" className="cursor-pointer text-[#6F4FF2] font-[600]">
                  browse
                </span>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="appearance-none opacity-0 absolute top-0 left-0"
                />
                
              </div>
            </div>
          </div>
        </div>
        {image && (
          <div className="mb-4">
            <img src={image} alt="Uploaded" className="w-full mx-auto" />
          </div>
        )}
        <div className='w-full flex flex-col md:flex-row md:items-center mb-6'>
          <div className='w-full md:w-1/3'>
            <label className='block text-white md:text-left mb-1 md:mb-0 pr-4'>
              Product Type
            </label>
          </div>
          <div className='w-full md:w-2/3'>
            <input
              type="text"
              value={type}
              onChange={handleTypeChange}
              placeholder='Product Type'
              className='bg-[#0F0C25] border-[#0F0C25] appearance-none rounded-lg w-full md:ml-12 py-2 px-4'
            />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row md:items-center mb-6'>
          <div className='w-full md:w-1/3'>
            <label className='block text-white md:text-left mb-1 md:mb-0 pr-4'>
              Color
            </label>
          </div>
          <div className='w-full md:w-2/3'>
            <input
              type="text"
              value={color}
              onChange={handleColorChange}
              placeholder='color'
              className='bg-[#0F0C25] border-[#0F0C25] appearance-none rounded-lg w-full md:ml-12 py-2 px-4 '
            />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row md:items-center mb-6'>
          <div className='w-full md:w-1/3'>
            <label className='block text-white md:text-left mb-1 md:mb-0 pr-4'>
              Price
            </label>
          </div>
          <div className='w-full md:w-2/3'>
            <input
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder='price'
              className='bg-[#0F0C25] border-[#0F0C25] appearance-none rounded-lg w-full md:ml-12 py-2 px-4'
            />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row md:items-center mb-6'>
          <div className='w-full md:w-1/3'>
            <label className='block text-white md:text-left mb-1 md:mb-0 pr-4'>
              Quantity
            </label>
          </div>
          <div className='w-full md:w-2/3'>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              placeholder='quantity'
              className='bg-[#0F0C25] border-[#0F0C25] appearance-none rounded-lg w-full md:ml-12 py-2 px-4'
            />
          </div>
        </div>
        
        <div className="w-full flex items-center justify-center">
          <div className="hidden md:flex md:w-1/3"></div>
          <div className="w-full md:w-2/3">
            <button type="submit" className="shadow bg-[#6F4FF2] w-full hover:bg-purple-400 md:ml-12 text-white py-2 px-4 rounded-lg" >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProd