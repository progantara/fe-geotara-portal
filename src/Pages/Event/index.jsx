import React, { useState, useEffect } from 'react';
import PortalTemplate from '../../Component/Layout';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { BiMap } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { getEvent } from '../../Services/EventService';

import BgEvent6 from '../../Assets/img/event-6.jpg';
import BgEvent7 from '../../Assets/img/event-7.jpg';

const Event = () => {
	const items = [{ label: 'Event', url: '/Event' }];

	// Get Data Event
	const [event, setEvent] = useState([]);

	useEffect(() => {
		getEvent().then((res) => {
			setEvent(res.data.data);
		});
	}, []);

	return (
		<PortalTemplate items = {items}>
			<div className="py-10 px-20 bg-green-100">
				<h2 className="mb-2 text-sm lg:text-1xl font-bold text-primary">TEMUKAN KESERUANNYA!</h2>
				<h1 className="mb-8 text-3xl lg:text-5xl font-extrabold text-green-800">Events Mendatang</h1>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
					{
						event.map((item,index) => {
							if(index == 0){
								return(
									<div className="relative col-span-2 overflow-hidden rounded-1xl">
										<img src={"http://127.0.0.1:8000/storage/event/" + item.flyer_image} alt="event" className="h-full w-full bg-center filter brightness-50 bg-cover rounded-2xl"/>
										<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-6 sm:bottom-10 left-2 sm:left-4">
											<p className="text-xs md:text-sm text-white">Rp 20.000 - Rp 100.000</p>
											<p className="text-sm md:text-xl font-bold text-white cursor-pointer mt-1">{item.nama}</p>
											<p className="flex items-center space-x-3 mb-2 text-xs md:text-sm text-white color-white ">
												<IoCalendarClearOutline className='mr-1'/>
												{item.start_date}
												<BiMap className='mr-1'/>
												Pantai Palangpang, Geopark Ciletuh
											</p>
											<div>
												<button 
													className="px-3 py-1 font-bold text-xs md:text-sm text-black bg-yellow-200 hover:bg-yellow-300 rounded-lg"
												>
													<Link to ={"/event/detail/"+ item._id}>Lihat Event</Link>
												</button>
											</div>
										</div>
									</div>
								)
							}
						})
					}
					{
						event.map((item,index)=>{
							if(index == 1){
								return(
									<div className="relative overflow-hidden rounded-1xl h-full">
										<img src={"http://127.0.0.1:8000/storage/event/" + item.flyer_image} alt="event" className="h-full w-full bg-center bg-cover filter brightness-50 rounded-2xl" />
										<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-6 sm:bottom-10 left-2 sm:left-4">
											<p className="text-xs md:text-sm text-white">Rp 25.000 - Rp 150.000</p>
											<p className="text-sm md:text-xl font-bold text-white cursor-pointer mt-1">{item.nama}</p>
											<p className="flex items-center space-x-3 mb-2 text-xs md:text-sm text-white color-white">
												<IoCalendarClearOutline className='mr-1'/>
												{item.start_date}
												<BiMap className='mr-1'/>
												Ciletuh, Sukabumi
											</p>
											<div>
												<button className="px-3 py-1 font-bold text-xs md:text-sm text-black bg-yellow-200 hover:bg-yellow-300 rounded-lg">
													<Link to ={"/event/detail/"+ item._id}>Lihat Event</Link>
												</button>
											</div>
										</div>
									</div>	
								)
							}
						})
					}
				</div>
				{
					event.map((item,index)=>{
						if(index !=0 && index !=1){
							return(
								<div className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-7 h-full pt-5">
									<div className="relative row-span-2 overflow-hidden rounded-1xl">
										<img src={"http://127.0.0.1:8000/storage/event/" + item.flyer_image} alt="event" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl"/>
										<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
											<p className="text-xs md:text-sm text-white">Rp 200.000 - Rp 352.000</p>
											<p className="text-sm md:text-xl font-bold text-white cursor-pointer mt-1">{item.nama}</p>
											<p className="flex items-center space-x-3 mb-2 text-xs md:text-sm text-white color-white ">
												<IoCalendarClearOutline className='mr-1'/>
												{item.start_date}
												<BiMap className='mr-1'/>
												Puncak Darma, Kec Ciletuh
											</p>
											<div>
												<button className="px-3 py-1 font-bold text-xs md:text-sm text-black bg-yellow-200 rounded-lg">
													<Link to ={"/event/detail/"+ item._id}>Lihat Event</Link>
												</button>
											</div>
										</div>
									</div>
								</div>
							)
						}
					})
				}
				{/* <div className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-7 h-full pt-5">
					<div className="relative row-span-2 overflow-hidden rounded-1xl">
						<img src={BgEvent3} alt="Gambar" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl" />
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
							<p className="text-xs md:text-sm text-white">Rp 200.000 - Rp 352.000</p>
							<p className="text-sm md:text-xl font-bold text-white cursor-pointer mt-1">Run Series</p>
							<p className="flex items-center space-x-3 mb-2 text-xs md:text-sm text-white color-white ">
								<IoCalendarClearOutline className='mr-1'/>
								Mei 15
								<BiMap className='mr-1'/>
								Puncak Darma, Kec Ciletuh
							</p>
							<div>
								<button className="px-3 py-1 font-bold text-xs md:text-sm text-black bg-yellow-200 rounded-lg">
									Lihat Event 
								</button>
							</div>
						</div>
					</div>
					<div className="relative row-span-2 overflow-hidden rounded-1xl">
						<img src={BgEvent4} alt="Gambar" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl" />
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
						<p className="text-xs md:text-sm text-white">Rp 750.000 - Rp 1.000.000</p>
							<p className="text-sm md:text-xl font-bold text-white cursor-pointer mt-1">Offroad Ciletuh</p>
							<p className="flex items-center space-x-3 mb-2 text-xs md:text-sm text-white color-white ">
								<IoCalendarClearOutline className='mr-1'/>
								Maret 18
								<BiMap className='mr-1'/>
								Pantai Palangpang, Kec Ciemas
							</p>
							<div>
								<button className="px-3 py-1 font-bold text-xs md:text-sm text-black bg-yellow-200 rounded-lg">
									Lihat Event
								</button>
							</div>
						</div>
					</div>
					<div className="relative row-span-2 overflow-hidden rounded-1xl">
						<img src={BgEvent5} alt="Gambar" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl" />
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
							<p className="text-xs md:text-sm text-white">Rp 50.000 - Rp 100.000</p>
							<p className="text-sm md:text-xl font-bold text-white cursor-pointer mt-1">Internation Tourism Day</p>
							<p className="flex items-center space-x-3 mb-2 text-xs md:text-sm text-white color-white">
								<IoCalendarClearOutline className='mr-1'/>
								Mei 01
								<BiMap className='mr-1'/>
								Vanada Bugeul Cottage
							</p>
							<div>
								<button className="px-3 py-1 font-bold text-xs md:text-sm text-black bg-yellow-200 rounded-lg">
									Lihat Event
								</button>
							</div>
						</div>
					</div>
				</div> */}
				<h2 className="my-2 text-sm lg:text-1xl font-bold text-primary">ACARA MENDATANG, BERLANGSUNG, SELESAI</h2>
				<h1 className="mb-8 text-3xl lg:text-5xl font-extrabold text-green-800">Semua Events</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
					<div className="relative flex flex-col px-6 py-4 space-y-2 overflow-hidden bg-white rounded-xl text-primary">
						<div className="absolute flex flex-col items-start justify-start w-full h-full py-5 left-8">
							<p className="text-xs md:text-lg bg-primary text-white px-6 rounded-md text-center py-1">
								WISATA
							</p>
						</div>
						<div className="absolute flex flex-col text-black justify-center w-full h-full left-8">
								<p className="text-xl md:text-3xl font-bold cursor-pointer mb-2">Menyelam Bersama</p>
								<p className="text-base md:text-lg">Geopark Ciletuh akan menggelar Event dan Festival 2023...</p>
								<p className="pt-4 text-xs md:text-lg pr-5">
									Rp 550.000 - Rp 750.000
									<span className="ml-2 text-base bg-yellow-200 px-4 rounded-md text-center py-1">
										Mendatang
									</span>
								</p>
								<p className="py-3 flex items-center space-x-3 mb-2 text-xs md:text-base color-black">
									<IoCalendarClearOutline className='mr-1'/>
									Agustus 17
									<BiMap className='mr-1'/>
									Pulau Kunti, Ciletuh
								</p>
								<div>
									<button className="flex items-center px-4 py-2 text-xs md:text-base text-white bg-primary rounded-lg mt-5">
										Lihat Event
										<IoArrowForwardSharp className='ml-1 color-white'/>
									</button>
								</div>
							</div>
						</div>
					<div className="relative overflow-hidden rounded-xl">
						<img src={BgEvent6} alt="Gambar" className="h-full bg-center bg-cover filter brightness-90" />
					</div>
				</div>
				<div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
					<div className="relative flex flex-col px-6 py-4 space-y-2 overflow-hidden bg-white rounded-xl text-primary ">
						<div className="absolute flex flex-col items-start justify-start w-full h-full pt-5 left-8">
							<p className="text-xs md:text-lg bg-primary text-white px-6 rounded-md text-center py-1">
								BUDAYA
							</p>
						</div>
						<div className="absolute flex flex-col text-black justify-center w-full h-full left-8">
								<p className="text-xl md:text-3xl font-bold cursor-pointer mb-2">Tradisi Kasepuhan Ciptagelar</p>
								<p className="text-base md:text-lg">Geopark Ciletuh akan menggelar Event dan Festival 2023...</p>
								<p className="pt-4 text-xs md:text-lg pr-5">
									Rp 10.000 - Rp 15.000
									<span className="ml-2 text-base bg-yellow-200 text-black px-4 rounded-md text-center py-1">
										Mendatang
									</span>
								</p>
								<p className="py-3 flex items-center space-x-3 mb-2 text-xs md:text-base color-black">
									<IoCalendarClearOutline className='mr-1'/>
									Agustus 21
									<BiMap className='mr-1'/>
									Cisolok, Sukabumi
								</p>
								<div>
									<button className="flex items-center px-4 py-2 text-xs md:text-base text-white bg-primary rounded-lg mt-5">
										Lihat Event
										<IoArrowForwardSharp className='ml-1 color-white'/>
									</button>
								</div>
							</div>
						</div>
					<div className="relative overflow-hidden rounded-xl">
						<img src={BgEvent7} alt="Gambar" className="h-full bg-center bg-cover filter brightness-90"/>
					</div>
				</div>
			</div>
		</PortalTemplate>
	);
};

export default Event;