import React from 'react';
import PortalTemplate from '../../Component/Layout';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { BiMap } from 'react-icons/bi';

import BgEvent1 from '../../Assets/img/event-1.jpeg';
import BgEvent2 from '../../Assets/img/event-2.png';
import BgEvent3 from '../../Assets/img/event-3.jpg';
import BgEvent4 from '../../Assets/img/event-4.jpg';
import BgEvent5 from '../../Assets/img/event-5.jpg';
import BgEvent6 from '../../Assets/img/event-6.jpg';
import BgEvent7 from '../../Assets/img/event-7.jpg';

const UpcomingDetail = () => {
	return (
		<div className="p-20 bg-secondary">
			<h2 className="mb-2 text-1xl font-bold text-primary">TEMUKAN KESERUANNYA!</h2>
			<h1 className="mb-8 text-5xl font-extrabold text-green-800">Events Mendatang</h1>
			<div className="grid grid-cols-3 gap-7">
				<div className="relative col-span-2 overflow-hidden rounded-1xl">
					<img src={BgEvent1} alt="Gambar" className="h-full bg-center filter brightness-50 bg-cover rounded-2xl" />
					<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
						<p className="text-sm text-white">Rp 20.000 - Rp 100.000</p>
						<p className="text-xl font-bold text-white cursor-pointer mt-1">Geopark Ciletuh Spektakuler (GCS)</p>
						<p className="flex items-center space-x-3 mb-2 text-sm text-white color-white ">
							<IoCalendarClearOutline className='mr-1'/>
							Desember 30
							<BiMap className='mr-1'/>
							Pantai Palangpang, Geopark Ciletuh
						</p>
						<div>
							<button className="px-2 py-0.5 font-bold text-sm text-black bg-yellow-200 rounded-lg">
								Pesan Tiket
							</button>
						</div>
					</div>
				</div>
				<div className="relative overflow-hidden rounded-1xl h-[30rem]">
					<img src={BgEvent2} alt="Gambar" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl" />
					<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
						<p className="text-sm text-white">Rp 25.000 - Rp 150.000</p>
						<p className="text-xl font-bold text-white cursor-pointer mt-1">Exhibition Ciletuh Geopark Run</p>
						<p className="flex items-center space-x-3 mb-2 text-sm text-white color-white">
							<IoCalendarClearOutline className='mr-1'/>
							Februari 12
							<BiMap className='mr-1'/>
							Ciletuh, Sukabumi
						</p>
						<div>
							<button className="px-2 py-0.5 font-bold text-sm text-black bg-yellow-200 rounded-lg">
								Pesan Tiket
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-7 h-[30rem] pt-5">
				<div className="relative row-span-2 overflow-hidden rounded-1xl">
					<img src={BgEvent3} alt="Gambar" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl" />
					<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
						<p className="text-sm text-white">Rp 200.000 - Rp 352.000</p>
						<p className="text-xl font-bold text-white cursor-pointer mt-1">Run Series</p>
						<p className="flex items-center space-x-3 mb-2 text-sm text-white color-white ">
							<IoCalendarClearOutline className='mr-1'/>
							Mei 15
							<BiMap className='mr-1'/>
							Puncak Darma, Kec Ciletuh
						</p>
						<div>
							<button className="px-2 py-0.5 font-bold text-sm text-black bg-yellow-200 rounded-lg">
								Pesan Tiket 
							</button>
						</div>
					</div>
				</div>
				<div className="relative row-span-2 overflow-hidden rounded-1xl">
					<img src={BgEvent4} alt="Gambar" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl" />
					<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
					<p className="text-sm text-white">Rp 750.000 - Rp 1.000.000</p>
						<p className="text-xl font-bold text-white cursor-pointer mt-1">Offroad Ciletuh</p>
						<p className="flex items-center space-x-3 mb-2 text-sm text-white color-white ">
							<IoCalendarClearOutline className='mr-1'/>
							Maret 18
							<BiMap className='mr-1'/>
							Pantai Palangpang, Kec Ciemas
						</p>
						<div>
							<button className="px-2 py-0.5 font-bold text-sm text-black bg-yellow-200 rounded-lg">
								Pesan Tiket
							</button>
						</div>
					</div>
				</div>
				<div className="relative row-span-2 overflow-hidden rounded-1xl">
					<img src={BgEvent5} alt="Gambar" className="h-full bg-center bg-cover filter brightness-50 rounded-2xl" />
					<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
						<p className="text-sm text-white">Rp 50.000 - Rp 100.000</p>
						<p className="text-xl font-bold text-white cursor-pointer mt-1">Internation Tourism Day</p>
						<p className="flex items-center space-x-3 mb-2 text-sm text-white color-white">
							<IoCalendarClearOutline className='mr-1'/>
							Mei 01
							<BiMap className='mr-1'/>
							Vanada Bugeul Cottage
						</p>
						<div>
							<button className="px-2 py-0.5 font-bold text-sm text-black bg-yellow-200 rounded-lg">
								Pesan Tiket
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const AllEvent = () => {
	return (
		<div className="pt-5 p-20 bg-secondary">
			<h2 className="mb-2 text-1xl font-bold text-primary">ACARA MENDATANG, BERLANGSUNG, SELESAI</h2>
			<h1 className="mb-8 text-5xl font-extrabold text-green-800">Semua Events</h1>
			<div className="grid grid-cols-2 gap-5">
				<div className="relative flex flex-col px-6 py-4 space-y-2 overflow-hidden bg-white rounded-xl text-primary">
					<div className="absolute flex flex-col items-start justify-start w-full h-full pt-5 left-8">
						<p className="text-xs bg-primary text-white px-6 rounded-md text-center py-1">
							WISATA
						</p>
					</div>
					<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-20 left-8">
							<p className="text-2xl font-bold text-black cursor-pointer">Menyelam Bersama</p>
							<p className="text-base text-black">Geopark Ciletuh akan menggelar Event dan</p>
							<p className="text-base text-black">Festival 2023...</p>
							<p className="pt-4 text-xs text-black pr-5">
								Rp 550.000 - Rp 750.000
								<span className="ml-2 text-xs bg-yellow-200 text-black px-4 rounded-md text-center py-1">
									Mendatang
								</span>
							</p>
							<p className="py-3 flex items-center space-x-3 mb-2 text-sm text-black color-black">
								<IoCalendarClearOutline className='mr-1'/>
								Agustus 17
								<BiMap className='mr-1'/>
								Pulau Kunti, Ciletuh
							</p>
							<div>
								<button className="flex items-center px-4 py-2 text-sm text-white bg-primary rounded-lg">
									Pesan Tiket
									<IoArrowForwardSharp className='ml-1 color-white'/>
								</button>
							</div>
						</div>
					</div>
				<div className="relative overflow-hidden rounded-xl">
					<img src={BgEvent6} alt="Gambar" className="h-full bg-center bg-cover filter brightness-90" />
				</div>
			</div>
			<div className="pt-5 grid grid-cols-2 gap-5">
				<div className="relative flex flex-col px-6 py-4 space-y-2 overflow-hidden bg-white rounded-xl text-primary ">
					<div className="absolute flex flex-col items-start justify-start w-full h-full pt-5 left-8">
						<p className="text-xs bg-primary text-white px-6 rounded-md text-center py-1">
							BUDAYA
						</p>
					</div>
					<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-20 left-8">
							<p className="text-2xl font-bold text-black cursor-pointer">Tradisi Kasepuhan Ciptagelar</p>
							<p className="text-base text-black">Geopark Ciletuh akan menggelar Event dan</p>
							<p className="text-base text-black">Festival 2023...</p>
							<p className="pt-4 text-xs text-black pr-5">
								Rp 10.000 - Rp 15.000
								<span className="ml-2 text-xs bg-yellow-200 text-black px-4 rounded-md text-center py-1">
									Mendatang
								</span>
							</p>
							<p className="py-3 flex items-center space-x-3 mb-2 text-sm text-black color-black">
								<IoCalendarClearOutline className='mr-1'/>
								Agustus 21
								<BiMap className='mr-1'/>
								Cisolok, Sukabumi
							</p>
							<div>
								<button className="flex items-center px-4 py-2 text-sm text-white bg-primary rounded-lg">
									Pesan Tiket
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
	);
};

const EventDetail = () => {
	return (
		<>
			<PortalTemplate>
				<UpcomingDetail />
				<AllEvent />
			</PortalTemplate>
		</>
	);
};

export default EventDetail;
