// Jangan pake komponen ini
// Masih Belum FIX

import { useState } from "react";
import { BiMap, BiTrash } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';
import CheckBox from '../CheckBox';

export default function Filter({nama1, data1}) {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  

  const toggleClass = () => {
    setIsFilterActive(!isFilterActive);
  };

  const toggleClose = () => {
    setIsFilterActive(!isFilterActive);
  };


  return (
    <div className='relative'>

      {/* Button */}
      <button className="flex items-center px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300" onClick={toggleClass}>
        <GiHamburgerMenu />
        <p className="ml-2 font-medium">Filter</p>
      </button>

      {/* Isi Filter */}
      <div className={`${isFilterActive ? 'block' : 'hidden'} bg-green-50 absolute z-[100] w-72 left-0 shadow-2xl text-sm dark:text-gray-400 rounded-md py-5 px-5 md:w-[700px]`}>
      
        {/* Header */}
        <div className='flex justify-between mb-5'>
          <button className="flex items-center px-4 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-lg">
            <BiTrash></BiTrash>
            <p className='ml-2 font-medium'>Clear All</p>
          </button>
          <button>
            <FiX className='w-8 h-8' onClick={toggleClose}></FiX>
          </button>
        </div>

        {/* Body */}
        <div className='bg-green-100 rounded-lg p-5'>
          
          {/* Checkbox */}
          <div className='mt-5'>
            <p className='text-xl font-bold text-black mb-3'>{nama1}</p>
            <CheckBox
              data={data1}
              checkboxStatus={checkboxStatus}
              setCheckboxStatus={setCheckboxStatus}
            />
          </div>

        </div>

      </div>

    </div>
  )


}