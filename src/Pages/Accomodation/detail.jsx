import React from 'react';

import PortalTemplate from '../../Component/Layout';
import Badge from '../../Component/Badge';

import BgHero from '../../Assets/img/hero.jpg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiBed, BiMap, BiTv, BiWifi } from 'react-icons/bi';
import { MdOutlineGarage, MdOutlineShower } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import IMAGES from '../../Assets/img';

const AccomodationDetail = () => {
	const items = [
		{ label: 'Accomodation', url: '/Accomodation' },
		{ label: 'Vanada Bugeul Cottage', url: '/Accomodation/detail' },
	];

	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col px-6 py-10 bg-green-100">
				<section>

					{/* Header */}
					<div className="flex flex-col text-primary mb-5">
						<p className="text-xl md:text-4xl font-bold">Vanada Bugeul Cottage</p>
						<div className="flex items-center mt-4 mb-2 gap-2">
							<Badge name={"Hotel"}/>
							<div className='flex'>
								<AiFillStar size={20} color="#FFE141" />
								<AiFillStar size={20} color="#FFE141" />
								<AiFillStar size={20} color="#FFE141" />
								<AiFillStar size={20} color="#FFE141" />
								<AiOutlineStar size={20} color="#FFE141" />
							</div>
						</div>
						<div className="flex items-start gap-2">
							<BiMap size={20} />
							<p className='text-sm'>Ciwaru, Ciemas, Sukabumi, West Java 43177</p>
						</div>
					</div>

					{/* Gambar */}
					<div className='flex flex-col gap-2'>
						<div className='w-full h-52 bg-white rounded-xl overflow-hidden relative'>
							<img src={IMAGES.hotel3} alt="hotel" className='w-full h-full object-cover'/>
						</div>
						<div className='flex flex-row justify-between'>
							<div className='w-[30%] h-32 rounded-xl overflow-hidden relative'>
								<img src={IMAGES.hoteldetail1} alt="hotel" className='w-full h-full object-cover'/>
							</div>
							<div className='w-[30%] h-32 rounded-xl overflow-hidden relative'>
								<img src={IMAGES.hoteldetail2} alt="hotel" className='w-full h-full object-cover'/>
							</div>
							<div className='w-[30%] h-32 rounded-xl overflow-hidden relative'>
								<img src={IMAGES.hoteldetail3} alt="hotel" className='w-full h-full object-cover'/>
							</div>
						</div>
					</div>

				</section>

				<section className='mt-5'>
					<div className='flex flex-col gap-2'>
						<h2 className='text-xl text-center text-primary font-bold'>FASILITAS</h2>
						<div className='w-full h-32 bg-primary rounded-xl p-5 flex justify-center items-center'>
							<div className='flex justify-between gap-3'>
								
								<div className='flex flex-col items-center'>
									<IoFastFoodOutline className='w-5 h-5 text-yellow-300'></IoFastFoodOutline>
									<p className='text-white text-[10px]'>Sarapan</p>
								</div>
								<div className='flex flex-col items-center'>
									<MdOutlineGarage className='w-5 h-5 text-yellow-300'></MdOutlineGarage>
									<p className='text-white text-[10px]'>Garasi</p>
								</div>
								<div className='flex flex-col items-center'>
									<MdOutlineShower className='w-5 h-5 text-yellow-300'></MdOutlineShower>
									<p className='text-white text-[10px]'>Kolam Renang</p>
								</div>
								<div className='flex flex-col items-center'>
									<BiWifi className='w-5 h-5 text-yellow-300'></BiWifi>
									<p className='text-white text-[10px]'>Wifi</p>
								</div>

							</div>
						</div>
					</div>
				</section>

				<section className='mt-5'>
					<div className='flex flex-col gap-2 text-primary'>

						{/* Header */}
						<div>
							<h2 className='text-xl font-bold'>LOCATION INFO</h2>
							<div className="flex items-start gap-2">
								<BiMap size={20} />
								<p className='text-sm'>Ciwaru, Ciemas, Sukabumi, West Java 43177</p>
							</div>
						</div>

						{/* Map */}
						<div className='w-full h-36 bg-white rounded-lg overflow-hidden'>
							<img src={IMAGES.map1} alt="map" className='w-full h-full object-cover' />
						</div>

						{/* Destinasi Terdekat */}
						<div className='flex flex-col gap-2'>
							<h3 className='font-bold'>Destinasi Terdekat</h3>
							<div className='flex flex-col gap-2'>
								
								{/* Destinasi */}
								<div className='w-full flex justify-between items-center gap-2'>

									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 overflow-hidden'>
											<img src={IMAGES.hoteldetail4} alt="4" className='w-full h-full object-cover'/>
										</div>
										<div className='flex flex-col'>
											<h4 className='font-bold text-sm'>Curug Cimarinjung</h4>
											<p className='text-[10px]'>Wisata</p>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<h4 className='text-[10px]'>962 meters</h4>
										<p className='text-[10px]'>(10 Minute)</p>
									</div>

								</div>
								
								{/* Destinasi */}
								<div className='w-full flex justify-between items-center gap-2'>

									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 overflow-hidden'>
											<img src={IMAGES.hoteldetail5} alt="4" className='w-full h-full object-cover'/>
										</div>
										<div className='flex flex-col'>
											<h4 className='font-bold text-sm'>Curug Sodong</h4>
											<p className='text-[10px]'>Wisata</p>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<h4 className='text-[10px]'>1200 meters</h4>
										<p className='text-[10px]'>(12 Minute)</p>
									</div>

								</div>
								
								{/* Destinasi */}
								<div className='w-full flex justify-between items-center gap-2'>

									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 overflow-hidden'>
											<img src={IMAGES.hoteldetail6} alt="4" className='w-full h-full object-cover'/>
										</div>
										<div className='flex flex-col'>
											<h4 className='font-bold text-sm'>Batu Batik</h4>
											<p className='text-[10px]'>Wisata</p>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<h4 className='text-[10px]'>873 meters</h4>
										<p className='text-[10px]'>(8 Minute)</p>
									</div>

								</div>
								
								{/* Destinasi */}
								<div className='w-full flex justify-between items-center gap-2'>

									<div className='flex items-center gap-2'>
										<div className='w-10 h-10 overflow-hidden'>
											<img src={IMAGES.hoteldetail7} alt="4" className='w-full h-full object-cover'/>
										</div>
										<div className='flex flex-col'>
											<h4 className='font-bold text-sm'>Pantai Pasir Putih</h4>
											<p className='text-[10px]'>Wisata</p>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<h4 className='text-[10px]'>640 meters</h4>
										<p className='text-[10px]'>(5 Minute)</p>
									</div>

								</div>

							</div>
						</div>

					</div>
				</section>

				<section className='mt-5'>
					<div className='text-primary'>
						<h2 className='text-xl font-bold uppercase'>Available Room</h2>

						<div>
							<div className='flex justify-between items-center'>
								{/* Gambar */}
								<div className='flex flex-col gap-2 w-[48%] h-full'>
									<div className='w-full h-32 bg-white rounded-xl overflow-hidden relative'>
										<img src={IMAGES.hotel3} alt="hotel" className='w-full h-full object-cover'/>
									</div>
									<div className='flex flex-row justify-between'>
										<div className='w-[30%] h-16 rounded-xl overflow-hidden relative'>
											<img src={IMAGES.hoteldetail1} alt="hotel" className='w-full h-full object-cover'/>
										</div>
										<div className='w-[30%] h-16 rounded-xl overflow-hidden relative'>
											<img src={IMAGES.hoteldetail2} alt="hotel" className='w-full h-full object-cover'/>
										</div>
										<div className='w-[30%] h-16 rounded-xl overflow-hidden relative'>
											<img src={IMAGES.hoteldetail3} alt="hotel" className='w-full h-full object-cover'/>
										</div>
									</div>
								</div>

								<div className='w-[48%] h-full bg-white p-3'>
									<h4 className='text-base font-bold mb-2'>Superior Double Room, 1 Double Bed</h4>
									<div className='flex items-center gap-2'>
										<BiBed></BiBed>
										<p>1 Double Bed & 2 Twin</p>
									</div>
									<div className='flex items-center gap-2'>
										<BiWifi></BiWifi>
										<p>Wifi</p>
									</div>
									<div className='flex items-center gap-2'>
										<IoFastFoodOutline></IoFastFoodOutline>
										<p>Dinner</p>
									</div>
									<div className='flex items-center gap-2'>
										<BiTv></BiTv>
										<p>TV</p>
									</div>
									<div className='flex w-full text-sm items-center'>
										<span className='font-bold'>Rp 2.000.000 / Malam</span>
										<button className="flex justify-center px-2 py-2 bg-yellow-200 rounded-md">
											<span className="text-sm font-bold text-primary">Pesan Sekarang</span>
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

export default AccomodationDetail;
