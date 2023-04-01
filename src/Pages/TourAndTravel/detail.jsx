import React from 'react';

import PortalTemplate from '../../Component/Layout';

import { AiFillStar, AiOutlineLine, AiOutlineStar } from 'react-icons/ai';
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
			<div className="bg-green-100 p-6 md:px-16 lg:px-32 pt-10">

				<section>
					<div className="flex flex-col text-primary">
						<p className="text-xl md:text-4xl font-bold">{tour.nama}</p>
						<div className="flex items-center mt-4 mb-2">
							<p className="text-black px-6 mr-2 rounded-3xl bg-[#FFE141]">Hotel</p>
							<AiFillStar size={20} color="#FFE141" />
							<AiFillStar size={20} color="#FFE141" />
							<AiFillStar size={20} color="#FFE141" />
							<AiFillStar size={20} color="#FFE141" />
							<AiOutlineStar size={20} color="#FFE141" />
						</div>
					</div>

					<div className="flex flex-col md:flex-row my-10 gap-5">
						<div className="w-full h-52 md:w-[70%] md:h-[620px]">
							<div className="rounded-xl h-full w-full overflow-hidden bg-center bg-cover bg-white">
								<img src={process.env.REACT_APP_API_BASE_URL + "/storage/tour/" + tour.thumbnail} alt="tour" className='w-full h-full' />
							</div>
						</div>

						{
							tour.detail?.jurusan &&
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
						}

					</div>
				</section>
				
				<section>

					{
						tour.detail?.jurusan &&
						tour.detail.jurusan.map((item, index) => {
							if(index === 0){
								return (
									<div className="flex flex-col mb-10" key={"titik-" + index}>
										<p className=" text-center text-[#064E3B] font-extrabold text-3xl mb-4">TITIK</p>
										<div className="flex flex-col bg-white justify-center md:justify-evenly md:px-8 rounded-3xl text-black text-sm p-5 md:flex-row">

											{/* Naik */}
											<div className=''>
												<p className="md:text-lg font-semibold">Titik Naik</p>
												<div className="flex flex-col">
													<p>{tour.detail?.jurusan[0].jam_keberangkatan} WIB </p>
													<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
													<p>{tour.detail?.jurusan[0].keberangkatan}</p>
												</div>
											</div>

											<div className='md:flex md:items-center'>
												<AiOutlineLine className='rotate-90 md:rotate-0'></AiOutlineLine>
											</div>

											{/* Turun */}
											<div>
												<p className="md:text-lg font-semibold">Titik Turun</p>
												<div className="flex flex-col">
													<p>{tour.detail?.jurusan[0].estimasi_sampai} WIB </p>
													<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
													<p>{tour.detail?.jurusan[0].tujuan}</p>
												</div>
											</div>

										</div>
									</div>
								)
							}
						})
					}

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
							{
								tour.detail?.jurusan &&
								<div className="flex flex-col md:flex-row gap-5 items-center">
								
									<div className="rounded-xl w-full h-52 md:w-[30%] bg-white bg-center bg-cover">
										<img src={process.env.REACT_APP_API_BASE_URL + "/storage/tour/jurusan/" + tour.detail?.jurusan[0].thumbnail} alt="tour" className='h-full object-cover w-full'/>
									</div>

									<div className="flex items-center justify-between bg-white rounded-lg shadow-2xl p-5 md:w-[70%]">
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
							}
						</div>
					</div>
				</section>
			</div>
		</PortalTemplate>
	);
};

export default TourAndTravelDetail;
