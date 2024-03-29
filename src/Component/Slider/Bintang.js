import { useState } from "react";

export default function Bintang() {
  const [value, setValue] = useState(1);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return(
    <div>
      <label htmlFor="slider" className="text-base">Bintang : {value}</label>
      <br />
      <input
        type="range"
        id="slider"
        min="1"
        max="5"
        value={value}
        onChange={handleOnChange}
        className="w-full md:w-1/3"
      />
    </div>
  )
}