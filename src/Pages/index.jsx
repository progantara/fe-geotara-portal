import React from 'react';
import PortalTemplate from '../Component/Layout';
import { Link } from 'react-router-dom';
import Card from '../Component/Card/Top-penginapan';
import BgHero from '../Assets/img/hero.jpg';
import "../Assets/Css/custom/custom.css"
import { FiCamera, FiMapPin, FiUser } from 'react-icons/fi';
import Button from '../Component/Button/Button';

const Hero = () => {
	return (
		<section className="bg-cover bg-center bg-pattern">
			<div className="container flex justify-between p-5">

				{/* Judul */}
				<div className="flex flex-col text-primary text-center">
				
					{/* Image Hero */}
					<div className='order-1'>
						<img src={BgHero} alt="Background Home" className="rounded-lg mb-5" />
					</div>

					{/* Caption */}
					<div className='order-2'>
						<h1 className="text-3xl font-bold">Lupakan Kerja, Mulailah Liburan</h1>
						<p className="mt-2 mb-5 text-sm">Isilah hari-hari libur kamu dengan sesuatu yang membuat kamu tersenyum, tertawa, dan bersyukur.</p>
					</div>

					{/* Milestones */}
					<div className='order-3'>
						<div className='flex flex-row mb-5 justify-between'>

							{/* Item 1 */}
							<div className='flex flex-col items-center basis-1/3'>
								<FiMapPin className='w-12 h-12 mb-2'></FiMapPin>
								<div className='flex flex-col'>
									<p className='text-sm'><span className='font-bold'>1000+</span></p>
									<p className='text-sm'>Wisata</p>
								</div>	
							</div>

							{/* Item 2 */}
							<div className='flex flex-col items-center basis-1/3'>
								<FiCamera className='w-12 h-12 mb-2'></FiCamera>
								<div className='flex flex-col'>
									<p className='text-sm'><span className='font-bold'>5000+</span></p>
									<p className='text-sm'>Spot Foto</p>
								</div>	
							</div>

							{/* Item 3 */}
							<div className='flex flex-col items-center basis-1/3'>
								<FiUser className='w-12 h-12 mb-2'></FiUser>
								<div className='flex flex-col'>
									<p className='text-sm'><span className='font-bold'>1000+</span></p>
									<p className='text-sm'>Pengunjung Baru</p>
								</div>
							</div>

						</div>
					</div>

					{/* Button */}
					<div className='order-4'>
						<Button size="small" width="full">Coba 360</Button>
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
					return <Card image={BgHero} key={index}/>;
				})}
			</div>
			<Link className="flex items-center justify-end pr-8 mt-8 text-white ">
				Lihat Lebih Banyak
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
			{/* <Penginapan /> */}
			{/* <Entertainment /> */}
			{/* <Objek /> */}
		</PortalTemplate>
	);
};

export default Home;
