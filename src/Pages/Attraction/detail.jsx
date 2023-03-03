import React from 'react';

import PortalTemplate from '../../Component/Layout';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const AttractionDetail = () => {
	const items = [
		{ label: 'Attraction', url: '/Attraction' },
		{ label: 'Attraction Detail', url: '/Attraction/detail' },
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
						<div className="w-1/4">
							<div className="flex flex-col px-4 pt-5 space-y-4 bg-white rounded">
								<div>
									<p className="text-2xl font-bold text-primary">
										Banana Boat
									</p>
									<p>
										Nikmati wahana banana boat dengan
										keluarga dan rasakan kesanangannya
									</p>
								</div>
								<div className="flex space-x-20 w-full">
									<div>
										<p>Durasi</p>
										<p className="font-bold">7 Jam</p>
									</div>
									<div>
										<p>Orang</p>
										<p className="font-bold">14 Kursi</p>
									</div>
								</div>
								<div className="text-lg ">
									<p className="font-bold">Rp</p>
									<p className="font-bold text-red-500">
										280.000{' '}
										<span className="text-black">
											/ Perahu
										</span>
									</p>
									<button className="flex mt-4 items-center px-6 py-3 text-white rounded-lg shadow bg-primary">
										Pesan Tiket <AiOutlineArrowRight />
									</button>
								</div>
								<p></p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</PortalTemplate>
	);
};

export default AttractionDetail;
