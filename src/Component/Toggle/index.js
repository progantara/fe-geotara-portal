import { useState } from "react";

export default function Toggle({nama}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        className="sr-only peer"
        onChange={handleInputChange}
      />
      <div
        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 ${
          isChecked ? "peer-checked:bg-green-600" : ""
        } dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600`}
      />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Filter {nama}
      </span>
    </label>
  );
}