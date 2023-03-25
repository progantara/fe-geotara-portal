import React, { useState } from "react";

function Slider() {
  const [value, setValue] = useState(50000);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  function formatRupiah(angka, prefix){
		var number_string = angka.replace(/[^,\d]/g, '').toString(),
		split   		= number_string.split(','),
		sisa     		= split[0].length % 3,
		rupiah     		= split[0].substr(0, sisa),
		ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

		// tambahkan titik jika yang di input sudah menjadi angka ribuan
		if(ribuan){
			let separator = sisa ? '.' : '';
			rupiah += separator + ribuan.join('.');
		}

		rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
		return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
	}

  return (
    <div>
      <label htmlFor="slider" className="text-base ">Mulai Dari Harga : <p className="font-bold text-green-700 inline">Rp {formatRupiah(String(value)) }</p></label>
      <br />
      <input
        type="range"
        id="slider"
        min="50000"
        max="500000"
        step={1000}
        value={value}
        onChange={handleOnChange}
        className="w-full md:w-1/3"
      />
    </div>
  );
}

export default Slider;
