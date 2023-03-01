import React from 'react';

import PortalTemplate from '../../Component/Layout';

import BgHero from '../../Assets/img/hero.jpg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
const AccomodationDetail = () => {
	const items = [
		{ label: 'Accomodation', url: '/Accomodation' },
		{ label: 'Accomodation Detail', url: '/Accomodation/detail' },
	];

	return (
		<PortalTemplate items={items}>
			<div className="bg-green-100 p-20 flex flex-col">
				<div className="flex flex-col text-primary">
					<p className="font-bold text-4xl">Vanada Bugeul Cottage</p>
					<div className="flex items-center mb-2 mt-4">
						<p className="text-black px-6 mr-2 rounded-3xl bg-[#FFE141]">Hotel</p>
						<AiFillStar size={20} color="#FFE141" />
						<AiFillStar size={20} color="#FFE141" />
						<AiFillStar size={20} color="#FFE141" />
						<AiFillStar size={20} color="#FFE141" />
						<AiOutlineStar size={20} color="#FFE141" />
					</div>
					<div className="flex items-center">
						<BiMap size={20} />
						<p>Ciwaru, Ciemas, Sukabumi, West Java 43177</p>
					</div>
				</div>
				<div class="grid grid-cols-4 gap-10 my-10">
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
				<div className="flex flex-col ">
					<p className=" text-center text-[#064E3B] font-extrabold text-3xl mb-4">FASILITAS</p>
					<div className="flex bg-primary justify-center space-x-10 text-white py-[3.125rem]">
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
						<div className="flex flex-col items-center">
							<BiMap size={40} color="#FFE141" />
							<p>Lorem.</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col text-primary mt-20">
					<p className="font-bold text-4xl">Location Info</p>
					<div className="flex items-center">
						<BiMap size={20} />
						<p>Ciwaru, Ciemas, Sukabumi, West Java 43177</p>
					</div>
				</div>
				<div className="flex mt-4">
					<div
						class="h-[32rem] w-3/5 bg-center bg-cover"
						style={{
							backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
						}}
					></div>
					<div className="flex flex-col w-2/5 px-5">
						<p className="font-bold">Destinasi Terdekat</p>
						<br />
						<div className="flex items-center justify-between p-2 my-4">
							<div className="flex items-center">
								<img
									src={BgHero}
									alt=""
									className="w-[4.625rem] h-[4.625rem] mr-4 rounded-sm"
								/>
								<div className="flex flex-col justify-start">
									<p className="font-semibold">Curug Cimarinjung</p>
									<p>Wisata</p>
								</div>
							</div>
							<div className="flex flex-col justify-end ">
								<p>962 meters </p>
								<p>(10 minute)</p>
							</div>
						</div>
						<div className="flex items-center justify-between p-2 my-4">
							<div className="flex items-center">
								<img
									src={BgHero}
									alt=""
									className="w-[4.625rem] h-[4.625rem] mr-4 rounded-sm"
								/>
								<div className="flex flex-col justify-start">
									<p className="font-semibold">Curug Cimarinjung</p>
									<p>Wisata</p>
								</div>
							</div>
							<div className="flex flex-col justify-end ">
								<p>962 meters </p>
								<p>(10 minute)</p>
							</div>
						</div>
						<div className="flex items-center justify-between p-2 my-4">
							<div className="flex items-center">
								<img
									src={BgHero}
									alt=""
									className="w-[4.625rem] h-[4.625rem] mr-4 rounded-sm"
								/>
								<div className="flex flex-col justify-start">
									<p className="font-semibold">Curug Cimarinjung</p>
									<p>Wisata</p>
								</div>
							</div>
							<div className="flex flex-col justify-end ">
								<p>962 meters </p>
								<p>(10 minute)</p>
							</div>
						</div>
						<div className="flex items-center justify-between p-2 my-4">
							<div className="flex items-center">
								<img
									src={BgHero}
									alt=""
									className="w-[4.625rem] h-[4.625rem] mr-4 rounded-sm"
								/>
								<div className="flex flex-col justify-start">
									<p className="font-semibold">Curug Cimarinjung</p>
									<p>Wisata</p>
								</div>
							</div>
							<div className="flex flex-col justify-end ">
								<p>962 meters </p>
								<p>(10 minute)</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col mt-10">
					<p className="font-bold text-4xl">Available room</p>
					<div className="flex my-4">
						<div class="grid grid-cols-3 gap-4 bg-white w-2/5">
							<div
								class="col-span-3 rounded-xl relative h-[13.75rem] w-full bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
						</div>
						<div className="flex flex-col bg-white w-3/5 px-10 py-5 justify-between">
							<p className="font-bold">Superior Double Room, 1 Double Bed</p>
							<div className="flex flex-col">
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<div className="flex flex-col">
									<p>
										<span className=" line-through ">
											Rp 1,219,513
										</span>
									</p>
									<p className="text-2xl font-extrabold text-red-500">
										Rp 1,097,561
									</p>
									<p>/malam</p>
								</div>

								<div>
									<button className="flex items-center px-8 py-4 bg-yellow-200 rounded-md ">
										<span className="font-semibold text-black">
											Pesan Sekarang
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="flex my-4">
						<div class="grid grid-cols-3 gap-4 bg-white w-2/5">
							<div
								class="col-span-3 rounded-xl relative h-[13.75rem] w-full bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
						</div>
						<div className="flex flex-col bg-white w-3/5 px-10 py-5 justify-between">
							<p className="font-bold">Superior Double Room, 1 Double Bed</p>
							<div className="flex flex-col">
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
								<div className="flex items-center">
									<BiMap />
									<p className="ml-2">1 Double & 2 Twin</p>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<div className="flex flex-col">
									<p>
										<span className=" line-through ">
											Rp 1,219,513
										</span>
									</p>
									<p className="text-2xl font-extrabold text-red-500">
										Rp 1,097,561
									</p>
									<p>/malam</p>
								</div>

								<div>
									<button className="flex items-center px-8 py-4 bg-yellow-200 rounded-md ">
										<span className="font-semibold text-black">
											Pesan Sekarang
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PortalTemplate>
	);
};

export default AccomodationDetail;
