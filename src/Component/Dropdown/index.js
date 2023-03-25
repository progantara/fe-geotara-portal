import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-white text-gray-500 px-4 py-2 rounded inline-flex items-center md:w-40 lg:w-56"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-center w-full">
          <span className="mr-1 text-sm">Sort By</span>
          <FiChevronDown></FiChevronDown>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg text-gray-500 w-full text-sm">
          <ul>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              A-Z
            </li>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              Z-A
            </li>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              Price, Low To High
            </li>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              Price, High To Low
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
