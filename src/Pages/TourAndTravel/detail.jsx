import React from 'react';

import PortalTemplate from '../../Component/Layout';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMap, BiWifi } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getOneTour } from '../../Services/TourService';
import { IoFastFoodOutline } from 'react-icons/io5';

const TourAndTravelDetail = () => {
	const items = [
		{ label: 'Tour & Travel', url: '/TourAndTravel' },
		{ label: 'Tour & Travel Detail', url: '/TourAndTravel/detail' },
	];

	const {id} = useParams();

	// Get Data Detail Accomodation
	const [tour, setTour] = useState([]);

  useEffect(() => {
    getOneTour(id).then((res) => {
      setTour(res.data.data);
    });
  }, []);


	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col p-20 bg-green-100 px-32 pt-10">
				<section>
					<div className="flex flex-col text-primary">
						<p className="text-4xl font-bold">{tour.nama}</p>
						<div className="flex items-center mt-4 mb-2">
							<p className="text-black px-6 mr-2 rounded-3xl bg-[#FFE141]">Hotel</p>
							<AiFillStar size={20} color="#FFE141" />
							<AiFillStar size={20} color="#FFE141" />
							<AiFillStar size={20} color="#FFE141" />
							<AiFillStar size={20} color="#FFE141" />
							<AiOutlineStar size={20} color="#FFE141" />
						</div>
					</div>
					<div className="flex my-10">
						<div class="pr-8 w-[70%]">
							<div class="rounded-xl h-[35rem] w-full bg-center bg-cover">
								<img src={process.env.REACT_APP_API_BASE_URL+"/storage/tour/" + tour.thumbnail} alt="tour" className='w-full h-full' />
							</div>
							{/* <div
								class="  rounded-xl relative w-full bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="  rounded-xl relative w-full bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="  rounded-xl relative w-full bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div> */}
						</div>
						<div className="flex flex-col px-4 py-5 bg-white border border-gray-500 rounded">
							<p className="text-2xl font-bold">{tour.detail?.jurusan[0].tipe}</p>
							<div className="my-[2.75rem]">
								<p>Dari</p>
								<p className="text-lg font-semibold">{tour.detail?.jurusan[0].keberangkatan} : {tour.detail?.jurusan[0].jam_keberangkatan} WIB</p>
								<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
								<p>Ke</p>
								<p className="text-lg font-semibold">{tour.detail?.jurusan[0].tujuan} : {tour.detail?.jurusan[0].estimasi_sampai} WIB</p>
							</div>
							<div className="flex flex-col">
								<div className='flex gap-5 items-center'>
									<p>Durasi</p>
									<p>7 Jam</p>
								</div>
								<div className='flex gap-5 items-center'>
									<p>Orang</p>
									<p>14 Kursi</p>
								</div>
							</div>
							<div className="text-lg mt-28">
								<p>Rp</p>
								<p className="font-bold text-red-500">{tour.detail?.jurusan[0].harga}</p>
								<button className="flex items-center px-6 py-3 text-white rounded-lg shadow bg-primary">
									Pesan Tiket <AiOutlineArrowRight />
								</button>
							</div>
							<p></p>
						</div>
					</div>
				</section>
				<section>
					<div className="flex flex-col mb-10">
						<p className=" text-center text-[#064E3B] font-extrabold text-3xl mb-4">TITIK</p>
						<div className="flex bg-white justify-between px-8 rounded-3xl text-black py-[3.125rem]">
							<div>
								<p className="text-lg font-semibold">Titik Naik</p>
								<div className="flex space-x-2">
									<p>{tour.detail?.jurusan[0].jam_keberangkatan} WIB </p>
									<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
									<p>{tour.detail?.jurusan[0].keberangkatan}</p>
								</div>
							</div>
							<div>
								<p className="text-lg font-semibold">Titik Turun</p>
								<div className="flex space-x-2">
									<p>{tour.detail?.jurusan[0].estimasi_sampai} WIB </p>
									<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
									<p>{tour.detail?.jurusan[0].tujuan}</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="flex flex-col ">
						<p className=" text-center text-[#064E3B] font-extrabold text-3xl mb-4">FASILITAS</p>
						<div className="flex bg-primary rounded-3xl justify-center space-x-10 text-white py-[3.125rem]">
							<div className="flex flex-col items-center">
								<BiWifi className='w-5 h-5 lg:w-12 lg:h-12 text-yellow-300'></BiWifi>
								<p>Wifi.</p>
							</div>
							<div className="flex flex-col items-center">
								<IoFastFoodOutline className='w-5 h-5 lg:w-12 lg:h-12 text-yellow-300'></IoFastFoodOutline>
								<p>Snack.</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="flex flex-col mt-10 ">
						<p className="text-4xl font-bold">Available Travel</p>
						<div className='flex flex-col gap-5'>
							<div className="flex my-4 ">
								<div class="grid grid-cols-3 gap-4 w-1/5">
									<div class="col-span-3 rounded-xl relative h-[13.75rem] w-full bg-center bg-cover">
										<img src={process.env.REACT_APP_API_BASE_URL+"/storage/tour/jurusan/" + tour.detail?.jurusan[0].thumbnail} alt="tour" className='h-full object-cover w-full'/>
									</div>
								</div>

								<div className="flex items-center justify-between w-4/5 px-10 py-5 ml-4 bg-white rounded-lg shadow-2xl">
									<div className="flex flex-col justify-between">
										<p className="mb-8 text-2xl font-bold">
											{tour.detail?.jurusan[0].tipe}
										</p>
										<div>
											<p>Dari</p>
											<p className="text-lg font-semibold">
												{tour.detail?.jurusan[0].keberangkatan}
												: {tour.detail?.jurusan[0].jam_keberangkatan} WIB
											</p>
											<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
											<p>Ke</p>
											<p className="text-lg font-semibold">
												{tour.detail?.jurusan[0].tujuan} : {tour.detail?.jurusan[0].estimasi_sampai} WIB
											</p>
										</div>
									</div>
									<div className="flex flex-col items-center justify-end space-y-4">
										<div className="flex flex-col">
											<p>
												<span className="line-through ">
													Rp
													{tour.detail?.jurusan[0].harga}
												</span>
											</p>
											<p className="text-2xl font-extrabold text-red-500">
												Rp {tour.detail?.jurusan[0].harga}
											</p>
											<p>/malam</p>
										</div>

										<button className="flex items-center justify-center w-full py-4 bg-yellow-200 rounded-md ">
											<span className="font-semibold text-black">
												Pilih
											</span>
										</button>
									</div>
								</div>
								
							</div>
							<div className="flex my-4 ">
								<div class="grid grid-cols-3 gap-4 w-1/5">
									<div class="col-span-3 rounded-xl relative h-[13.75rem] w-full bg-center bg-cover">
										<img src={process.env.REACT_APP_API_BASE_URL+"/storage/tour/jurusan/" + tour.detail?.jurusan[0].thumbnail} alt="tour" className='h-full object-cover w-full'/>
									</div>
								</div>

								<div className="flex items-center justify-between w-4/5 px-10 py-5 ml-4 bg-white rounded-lg shadow-2xl">
									<div className="flex flex-col justify-between">
										<p className="mb-8 text-2xl font-bold">
											{tour.detail?.jurusan[0].tipe}
										</p>
										<div>
											<p>Dari</p>
											<p className="text-lg font-semibold">
												{tour.detail?.jurusan[0].keberangkatan}
												: {tour.detail?.jurusan[0].jam_keberangkatan} WIB
											</p>
											<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
											<p>Ke</p>
											<p className="text-lg font-semibold">
												{tour.detail?.jurusan[0].tujuan} : {tour.detail?.jurusan[0].estimasi_sampai} WIB
											</p>
										</div>
									</div>
									<div className="flex flex-col items-center justify-end space-y-4">
										<div className="flex flex-col">
											<p>
												<span className="line-through ">
													Rp
													{tour.detail?.jurusan[0].harga}
												</span>
											</p>
											<p className="text-2xl font-extrabold text-red-500">
												Rp {tour.detail?.jurusan[0].harga}
											</p>
											<p>/malam</p>
										</div>

										<button className="flex items-center justify-center w-full py-4 bg-yellow-200 rounded-md ">
											<span className="font-semibold text-black">
												Pilih
											</span>
										</button>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</section>
			</div>
		</PortalTemplate>
	);
};

export default TourAndTravelDetail;
