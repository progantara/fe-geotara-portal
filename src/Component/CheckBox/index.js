import React from "react";

function CheckBox({ data, checkboxStatus, setCheckboxStatus }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={item.id} className="flex items-center ml-1 mb-2">
          <input
            id={`${item.nama}${index + 1}`}
            type="checkbox"
            checked={checkboxStatus[`${item.nama}${index + 1}`]}
            onChange={(event) =>
              setCheckboxStatus({
                ...checkboxStatus,
                [`${item.nama}${index + 1}`]: event.target.checked,
              })
            }
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
          />
          <label
            htmlFor={`${item.nama}${index + 1}`}
            className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            {item.nama}
          </label>
        </div>
      ))}
    </>
  );
}

export default CheckBox;
