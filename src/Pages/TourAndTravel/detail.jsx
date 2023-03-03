import React from 'react';

import PortalTemplate from '../../Component/Layout';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';

const TourAndTravelDetail = () => {
	const items = [
		{ label: 'Tour & Travel', url: '/TourAndTravel' },
		{ label: 'Tour & Travel Detail', url: '/TourAndTravel/detail' },
	];

	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col p-20 bg-green-100">
				<section>
					<div className="flex flex-col text-primary">
						<p className="text-4xl font-bold">Travel Buddies</p>
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
						<div class="grid grid-cols-4 gap-10 pr-8 w-3/4">
							<div
								class="row-span-3 col-span-3 rounded-xl relative h-[35rem] w-full bg-center bg-cover"
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
							></div>
							<div
								class="  rounded-xl relative w-full bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
						</div>
						<div className="flex flex-col px-4 py-5 bg-white border border-gray-500 rounded">
							<p className="text-2xl font-bold">Travel Buddies Hiace </p>
							<div className="my-[2.75rem]">
								<p>Dari</p>
								<p className="text-lg font-semibold">Terminal Duren Sawit : 04.00 WIB</p>
								<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
								<p>Ke</p>
								<p className="text-lg font-semibold">Terminal Pelabuhan Ratu : 11.00 WIB</p>
							</div>
							<div className="flex">
								<div>
									<p>Durasi</p>
									<p>7 Jam</p>
								</div>
								<div>
									<p>Orang</p>
									<p>14 Kursi</p>
								</div>
							</div>
							<div className="text-lg mt-28">
								<p>Rp</p>
								<p className="font-bold text-red-500">280.000</p>
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
									<p>04.00 WIB </p>
									<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
									<p>Terminal Duren Sawit</p>
								</div>
							</div>
							<div>
								<p className="text-lg font-semibold">Titik Turun</p>
								<div className="flex space-x-2">
									<p>04.00 WIB </p>
									<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
									<p>Terminal Duren Sawit</p>
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
								<BiMap size={40} color="#FFE141" />
								<p>Lorem.</p>
							</div>
							<div className="flex flex-col items-center">
								<BiMap size={40} color="#FFE141" />
								<p>Lorem.</p>
							</div>
							<div className="flex flex-col items-center">
								<BiMap size={40} color="#FFE141" />
								<p>Lorem.</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="flex flex-col mt-10 ">
						<p className="text-4xl font-bold">Available Travel</p>
						<div className="flex my-4 ">
							<div class="grid grid-cols-3 gap-4 w-1/5">
								<div
									class="col-span-3 rounded-xl relative h-[13.75rem] w-full bg-center bg-cover"
									style={{
										backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
									}}
								></div>
							</div>
							<div className="flex items-center justify-between w-4/5 px-10 py-5 ml-4 bg-white rounded-lg shadow-2xl">
								<div className="flex flex-col justify-between">
									<p className="mb-8 text-2xl font-bold">
										Travel Buddies Hiace{' '}
									</p>
									<div>
										<p>Dari</p>
										<p className="text-lg font-semibold">
											Terminal Duren Sawit
											: 04.00 WIB
										</p>
										<div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
										<p>Ke</p>
										<p className="text-lg font-semibold">
											Terminal Pelabuhan
											Ratu : 11.00 WIB
										</p>
									</div>
								</div>
								<div className="flex flex-col items-center justify-end space-y-4">
									<div className="flex flex-col">
										<p>
											<span className="line-through ">
												Rp
												1,219,513
											</span>
										</p>
										<p className="text-2xl font-extrabold text-red-500">
											Rp 1,097,561
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
				</section>
			</div>
		</PortalTemplate>
	);
};

export default TourAndTravelDetail;
