import React from 'react';
import PortalTemplate from '../../Component/Layout';
import Badge from '../../Component/Badge';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiBed, BiMap, BiTv, BiWifi } from 'react-icons/bi';
import { MdOutlineGarage, MdOutlineShower } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import IMAGES from '../../Assets/img';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getOnePenginapan } from '../../Services/PenginapanService';

const AccomodationDetail = () => {

	const {id} = useParams();

	// Get Data Detail Accomodation
	const [penginapan, setPenginapan] = useState([]);

  useEffect(() => {
    getOnePenginapan(id).then((res) => {
      setPenginapan(res.data.data);
    });
  }, []);

	const items = [
		{ label: 'Accomodation', url: '/Accomodation' },
		{ label: `${penginapan.nama}`, url: `/Accomodation/detail/${penginapan._id}` },
	];

	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col px-6 py-10 bg-green-100 lg:px-32">
				<section>

					{/* Header */}
					<div className="flex flex-col text-primary mb-5">
						<p className="text-xl md:text-4xl font-bold">{penginapan.nama}</p>
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
							<p className='text-sm'>{penginapan.lokasi?.alamat}</p>
						</div>
					</div>

					{/* Gambar */}
					<div className='flex flex-col gap-2 lg:flex-row'>
						<div className='w-full h-52 bg-white rounded-xl overflow-hidden relative lg:h-96 lg:w-[70%]'>
							<img src={process.env.REACT_APP_API_BASE_URL + "/storage/penginapan/" + penginapan?.thumbnail} alt="hotel" className='w-full h-full object-cover'/>
						</div>
						<div className='flex flex-row justify-between lg:flex-col lg:w-[30%] lg:h-96 lg:gap-2'>
							<div className='w-[30%] h-32 rounded-xl overflow-hidden relative lg:w-full '>
								<img src={IMAGES.hoteldetail1} alt="hotel" className='w-full h-full object-cover'/>
							</div>
							<div className='w-[30%] h-32 rounded-xl overflow-hidden relative lg:w-full'>
								<img src={IMAGES.hoteldetail2} alt="hotel" className='w-full h-full object-cover'/>
							</div>
							<div className='w-[30%] h-32 rounded-xl overflow-hidden relative lg:w-full'>
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
									<IoFastFoodOutline className='w-5 h-5 lg:w-12 lg:h-12 text-yellow-300'></IoFastFoodOutline>
									<p className='text-white text-[10px] lg:text-lg'>Sarapan</p>
								</div>
								<div className='flex flex-col items-center'>
									<MdOutlineGarage className='w-5 h-5 lg:w-12 lg:h-12 text-yellow-300'></MdOutlineGarage>
									<p className='text-white text-[10px] lg:text-lg'>Garasi</p>
								</div>
								<div className='flex flex-col items-center'>
									<MdOutlineShower className='w-5 h-5 lg:w-12 lg:h-12 text-yellow-300'></MdOutlineShower>
									<p className='text-white text-[10px] lg:text-lg'>Kolam Renang</p>
								</div>
								<div className='flex flex-col items-center'>
									<BiWifi className='w-5 h-5 lg:w-12 lg:h-12 text-yellow-300'></BiWifi>
									<p className='text-white text-[10px] lg:text-lg'>Wifi</p>
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
								<p className='text-sm'>{penginapan.lokasi?.alamat}</p>
							</div>
						</div>

						<div className='lg:flex lg:flex-row lg:justify-between'>
							{/* Map */}
							<div className='w-full h-36 bg-white rounded-lg overflow-hidden lg:h-96 lg:w-[65%]'>
								<img src={IMAGES.map1} alt="map" className='w-full h-full object-cover' />
							</div>

							{/* Destinasi Terdekat */}
							<div className='flex flex-col gap-2 lg:w-[33%]'>
								<h3 className='font-bold'>Destinasi Terdekat</h3>
								<div className='flex flex-col gap-2'>
									
									{/* Destinasi */}
									<div className='w-full flex justify-between items-center gap-2'>

										<div className='flex items-center gap-2'>
											<div className='w-10 h-10 lg:w-20 lg:h-20 overflow-hidden'>
												<img src={IMAGES.hoteldetail4} alt="4" className='w-full h-full object-cover'/>
											</div>
											<div className='flex flex-col'>
												<h4 className='font-bold text-sm lg:text-lg'>Curug Cimarinjung</h4>
												<p className='text-[10px] lg:text-base'>Wisata</p>
											</div>
										</div>

										<div className='flex flex-col items-center lg:items-end'>
											<h4 className='text-[10px] lg:text-base'>962 meters</h4>
											<p className='text-[10px]'>(10 Minute)</p>
										</div>

									</div>
									
									{/* Destinasi */}
									<div className='w-full flex justify-between items-center gap-2'>

										<div className='flex items-center gap-2'>
											<div className='w-10 h-10 lg:w-20 lg:h-20 overflow-hidden'>
												<img src={IMAGES.hoteldetail5} alt="4" className='w-full h-full object-cover'/>
											</div>
											<div className='flex flex-col'>
												<h4 className='font-bold text-sm lg:text-lg'>Curug Sodong</h4>
												<p className='text-[10px] lg:text-base'>Wisata</p>
											</div>
										</div>

										<div className='flex flex-col items-center lg:items-end'>
											<h4 className='text-[10px] lg:text-base'>1200 meters</h4>
											<p className='text-[10px]'>(12 Minute)</p>
										</div>

									</div>
									
									{/* Destinasi */}
									<div className='w-full flex justify-between items-center gap-2'>

										<div className='flex items-center gap-2'>
											<div className='w-10 h-10 lg:w-20 lg:h-20 overflow-hidden'>
												<img src={IMAGES.hoteldetail6} alt="4" className='w-full h-full object-cover'/>
											</div>
											<div className='flex flex-col'>
												<h4 className='font-bold text-sm lg:text-lg'>Batu Batik</h4>
												<p className='text-[10px] lg:text-base'>Wisata</p>
											</div>
										</div>

										<div className='flex flex-col items-center lg:items-end'>
											<h4 className='text-[10px] lg:text-base'>873 meters</h4>
											<p className='text-[10px]'>(8 Minute)</p>
										</div>

									</div>
									
									{/* Destinasi */}
									<div className='w-full flex justify-between items-center gap-2'>

										<div className='flex items-center gap-2'>
											<div className='w-10 h-10 lg:w-20 lg:h-20 overflow-hidden'>
												<img src={IMAGES.hoteldetail7} alt="4" className='w-full h-full object-cover'/>
											</div>
											<div className='flex flex-col'>
												<h4 className='font-bold text-sm lg:text-lg'>Pantai Pasir Putih</h4>
												<p className='text-[10px] lg:text-base'>Wisata</p>
											</div>
										</div>

										<div className='flex flex-col items-center lg:items-end'>
											<h4 className='text-[10px] lg:text-base'>640 meters</h4>
											<p className='text-[10px]'>(5 Minute)</p>
										</div>

									</div>

								</div>
							</div>
						</div>

					</div>
				</section>

				<section className='mt-5'>
					<div className='text-primary'>
						<h2 className='text-xl font-bold uppercase'>Available Room</h2>

						<div className='flex flex-col gap-5'>
							{
								penginapan.detail?.kamar &&
								penginapan.detail.kamar.map((item, index) => {
									return (
										<div key={"kamar-" + index} className='flex flex-col justify-between items-center gap-2 h-96 md:flex-row'>

											{/* Gambar */}
											<div className='w-full h-[50%] md:h-full flex flex-col gap-2 lg:w-[40%] justify-between'>
												<div className='w-full h-[60%] md:h-[70%] lg:h-[70%] bg-white rounded-xl overflow-hidden relative'>
													<img src={process.env.REACT_APP_API_BASE_URL + "/storage/penginapan/kamar/" + item.thumbnail} alt="hotel" className='w-full h-full object-cover'/>
												</div>
												<div className='flex flex-row justify-between h-[40%] md:h-[30%]'>
													<div className='w-[32%] h-full lg:h-full rounded-xl overflow-hidden relative'>
														<img src={IMAGES.hoteldetail1} alt="hotel" className='w-full h-full object-cover'/>
													</div>
													<div className='w-[32%] h-full lg:h-full rounded-xl overflow-hidden relative'>
														<img src={IMAGES.hoteldetail2} alt="hotel" className='w-full h-full object-cover'/>
													</div>
													<div className='w-[32%] h-full lg:h-full rounded-xl overflow-hidden relative'>
														<img src={IMAGES.hoteldetail3} alt="hotel" className='w-full h-full object-cover'/>
													</div>
												</div>
											</div>

											{/* Kamar */}
											<div className='w-full h-[50%] p-2 md:h-full bg-white lg:p-5 lg:w-[55%] rounded-lg md:flex md:flex-col md:justify-between'>
												<div>
													<h4 className='text-base font-bold mb-0 md:mb-2'>{item.tipe}</h4>
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
												</div>
												<div className='flex flex-col w-full text-sm lg:justify-between'>
													<span className='font-bold md:mr-5 lg:mr-0 self-center'>Rp {item.harga} / Malam</span>
													<button className="flex justify-center px-2 py-2 bg-yellow-200 rounded-md">
														<span className="text-sm font-bold text-primary">Pesan Sekarang</span>
													</button>
												</div>
											</div>
											
										</div>
									)
								})
							}
						</div>

					</div>
				</section>

			</div>
		</PortalTemplate>
	);
};

export default AccomodationDetail;
