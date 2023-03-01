import React from 'react';
import PortalTemplate from '../Component/Layout';
import { Link } from 'react-router-dom';

import { IoArrowForwardSharp } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';

import Card from '../Component/Card/Top-penginapan';

import BgHero from '../Assets/img/hero.jpg';

const Hero = () => {
	return (
		<section className="bg-cover flex flex-col space-y-40 bg-hero-pattern pb-20 pt-[7.5rem] px-20">
			<div className="flex justify-between ">
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
				<img src={BgHero} alt="background hero" className="w-2/5 h-[22.375rem] rounded-tl-[10rem] rounded-3xl" />
			</div>

			<div>
				<h2 className="text-3xl font-extrabold text-gray-600">Top Wisata</h2>
				<h1 className="mb-8 text-5xl font-extrabold text-primary">Paling Diminati Oleh Kebanyakan Orang</h1>
				<div className="grid grid-cols-3 gap-8">
					<div
						className="relative row-span-2 overflow-hidden rounded-3xl bg-center bg-cover"
						style={{
							backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
						}}
					>
						<div className="absolute bottom-0 left-0 flex flex-col items-end justify-start w-full h-full ">
							<p className="text-xl font-bold bg-yellow-200 text-primary w-[11.75rem] rounded-bl-full text-center py-2">
								Gratis
							</p>
						</div>
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-4 left-4">
							<p className="text-2xl font-bold text-white">Pantai Sawarna</p>
							<p className="text-base text-white">Pantai</p>
						</div>
					</div>
					<div className="relative overflow-hidden rounded-3xl">
						<img src={BgHero} alt="Gambar" className="h-full bg-center bg-cover rounded-3xl" />
						<div className="absolute bottom-0 left-0 flex flex-col items-end justify-start w-full h-full ">
							<p className="text-xl font-bold bg-yellow-200 text-primary w-[11.75rem] rounded-bl-full text-center py-2">
								5K per tiket
							</p>
						</div>
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-4 left-4">
							<p className="text-2xl font-bold text-white">Curug Sodong</p>
							<p className="text-base text-white">Curug</p>
						</div>
					</div>
					<div className="relative overflow-hidden rounded-3xl">
						<img src={BgHero} alt="Gambar" className="h-full bg-center bg-cover rounded-3xl" />
						<div className="absolute bottom-0 left-0 flex flex-col items-end justify-start w-full h-full ">
							<p className="text-xl font-bold bg-yellow-200 text-primary w-[11.75rem] rounded-bl-full text-center py-2">
								10K per tiket
							</p>
						</div>
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-4 left-4">
							<p className="text-2xl font-bold text-white">Bukit Tanjung</p>
							<p className="text-base text-white">Bukit</p>
						</div>
					</div>
					<div className="relative overflow-hidden rounded-3xl">
						<img src={BgHero} alt="Gambar" className="h-full bg-center bg-cover rounded-3xl" />
						<div className="absolute bottom-0 left-0 flex flex-col items-end justify-start w-full h-full ">
							<p className="text-xl font-bold bg-yellow-200 text-primary w-[11.75rem] rounded-bl-full text-center py-2">
								5K per tiket
							</p>
						</div>
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-4 left-4">
							<p className="text-2xl font-bold text-white">Pantai Citepus</p>
							<p className="text-base text-white">Pantai</p>
						</div>
					</div>
					<div className="relative overflow-hidden rounded-3xl">
						<img src={BgHero} alt="Gambar" className="h-full bg-center bg-cover rounded-3xl" />
						<div className="absolute bottom-0 left-0 flex flex-col items-end justify-start w-full h-full ">
							<p className="text-xl font-bold bg-yellow-200 text-primary w-[11.75rem] rounded-bl-full text-center py-2">
								10K per tiket
							</p>
						</div>
						<div className="absolute flex flex-col items-start justify-end w-full h-full bottom-4 left-4">
							<p className="text-2xl font-bold text-white">Batuan Citepus</p>
							<p className="text-base text-white">Batuan</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Penginapan = () => {
	let data = [1, 2, 3, 4, 5, 6];

	return (
		<div className="p-20 bg-primary">
			<h2 className="text-3xl font-extrabold text-gray-400">Top Penginapan</h2>
			<h1 className="mb-8 text-5xl font-extrabold text-white">Pilih Penginapan Unggulan Untuk Kenyamanan Anda</h1>
			<div className="grid grid-cols-3 gap-14 ">
				{data.map((data, index) => {
					return <Card image={BgHero} />;
				})}
			</div>
			<Link className="flex items-center justify-end pr-8 mt-8 text-white ">
				Lihat Lebih Banyak
				<IoArrowForwardSharp size={30} color="white" className="ml-2" />
			</Link>
		</div>
	);
};

const Entertainment = () => {
	return (
		<section className="bg-cover bg-hero-pattern pb-20 pt-[7.5rem] px-20">
			<h2 className="text-3xl font-extrabold text-gray-400">Entertainment Baru</h2>
			<h1 className="mb-8 text-5xl font-extrabold pr-[35rem] text-primary">Buatlah Memori Bersama Kami Di Geopark </h1>
			<div className="grid grid-cols-4 gap-8 h-[33rem]">
				<div
					className="relative overflow-hidden rounded-3xl  bg-center bg-cover"
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
					}}
				></div>
				<div
					className="relative overflow-hidden rounded-3xl  bg-center bg-cover"
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
					}}
				></div>
				<div
					className="relative overflow-hidden rounded-3xl  bg-center bg-cover"
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
					}}
				></div>
				<div
					className="relative overflow-hidden rounded-3xl  bg-center bg-cover"
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
					}}
				></div>
			</div>
		</section>
	);
};

const Objek = () => {
	return (
		<section className="relative">
			<img src={BgHero} alt="Gambar" className="bg-center bg-cover" />
			<div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-full text-white">
				<div className="text-left">
					<p className="text-5xl font-extrabold">Menjelajahi Beragam Objek Wisata Di Cikaso</p>
					<p className="my-4 text-2xl font-medium">
						Cikaso merupakan sebuah objek wisata di Kabupaten Ciletuh <br /> yang kaya akan berbagai geosite menakjubkan.
					</p>
					<button className="flex items-center px-8 py-4 bg-yellow-200 rounded-md ">
						<span className="font-semibold text-primary">Lihat Virtual Tour</span>
					</button>
				</div>
			</div>
		</section>
	);
};

const Home = () => {
	return (
		<PortalTemplate>
			<Hero />
			<Penginapan />
			<Entertainment />
			<Objek />
		</PortalTemplate>
	);
};

export default Home;
