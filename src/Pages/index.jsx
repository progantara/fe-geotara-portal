import React from 'react';
import PortalTemplate from '../Component/Layout';

import { IoArrowForwardSharp } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';
import BgHero from '../Assets/img/hero.jpg';

const Hero = () => {
	return (
		<section className="flex justify-between h-screen bg-cover bg-hero-pattern py-[7.5rem] px-20">
			<div className="flex flex-col w-3/5 pr-[17rem] text-primary">
				<h1 className="text-6xl font-bold leading-[4.125rem] ">Lupakan kerja, Mulailah Liburan</h1>
				<p className="my-10 text-2xl">Isilah hari-hari libur kamu dengan sesuatu yang membuat kamu tersenyum, tertawa, dan bersyukur.</p>
				<div>
					<button className="flex items-center px-8 py-4 text-white rounded-md bg-primary">
						Coba 360
						<IoArrowForwardSharp color="white" />
					</button>
				</div>
				<div className="grid grid-cols-3 mt-20">
					<div className="flex flex-col space-y-4">
						<BsBookmark size={50} />
						<p>
							<b>1000+</b> Wisata
						</p>
					</div>
					<div className="flex flex-col space-y-4">
						<BsBookmark size={50} />
						<p>
							<b>5000+</b> Spot Foto
						</p>
					</div>
					<div className="flex flex-col space-y-4">
						<BsBookmark size={50} />
						<p>
							<b>2500+</b> Pengunjung Baru
						</p>
					</div>
				</div>
			</div>
			<img src={BgHero} alt="background hero" className="w-2/5 rounded-tl-[15rem] rounded-3xl" />
		</section>
	);
};

const Home = () => {
	return (
		<PortalTemplate>
			<Hero />
		</PortalTemplate>
	);
};

export default Home;
