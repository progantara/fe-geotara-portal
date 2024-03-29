import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const BaseCard = ({ title, image, address, rating, price, link, discount, priceBefore, open, close, per }) => {

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

		rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
		return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
	}

  function setStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i+"fill"} size={20} color="#FFE141" />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<AiOutlineStar key={i+"out"} size={20} color="#FFE141" />);
    }
    return stars;
  }
  
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden p-3 text-primary relative max-w-[250px] md:min-w-[260px] xl:w-[360px] xl:max-w-[360px] xl:p-5 2xl:w-[380px] 2xl:max-w-2xl">

      {/* Discount Badge */}
      {
        discount && 
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute transform -rotate-45 bg-yellow-200 text-center text-white font-semibold py-1 left-[-36px] top-[32px] w-[170px]">
            <span className="text-red-500">{discount}%</span>
            <span className="ml-2 text-black">OFF</span>
          </div>
        </div>
      }

      {/* Image */}
      <img src={image} alt={title} className="w-full object-cover h-48 rounded-xl xl:h-64" />

      <div className="mt-2">

        {/* Title */}
        <div>
          <p className="text-lg font-bold mb-0 xl:text-xl text-left">{title}</p>
          <p className="text-sm flex items-center">
            <BiMap />
            {address}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center my-2">
          {setStars(rating)}
          <p className="ml-2 text-sm font-bold">({rating})</p>
        </div>

        <div className="flex justify-between">
        

        {/* Price */}
        {
          price &&
          <div className="flex items-center justify-between">
            <div className="">
              {
                priceBefore &&
                <p className="text-[12px]">Start From : <span className="text-red-500 line-through ">Rp {formatRupiah(String(priceBefore)) }</span></p>
                
              }
              {
                !priceBefore &&
                <p className="text-sm">Start From : </p>
              }

              <div className="flex items-center gap-2">
                <p className="text-xl font-bold xl:text-2xl">Rp {formatRupiah(String(price)) }</p>
                {/* Trip */}
                {
                  per && 
                    <p className="text-sm">/ {per}</p>
                }
              </div>
            </div>
          </div>
        }

        

        {/* Open & CLose */}
        {
          open &&
          <div className="flex flex-col justify-between">
            <p className="text-sm">Open From : </p>
            <p className="text-xl font-bold xl:text-2xl">{open} - {close}</p>
          </div>
        }

          {/* Link */}
          {
            link &&
            <>
              <div className="xl:hidden">
                <Link to={link}>
                  <Button size="small">Lihat</Button>
                </Link>
              </div>

              <div className="hidden xl:block">
                <Link to={link}>
                  <Button size="default">Lihat</Button>
                </Link>
              </div>
            </>

          }

        </div>

      </div>
    </div>
  );
};

export const Card = (props) => {
  return <BaseCard {...props} />;
};