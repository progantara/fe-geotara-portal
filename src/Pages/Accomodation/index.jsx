import React from 'react';

import PortalTemplate from '../../Component/Layout';

import Card from '../../Component/Card/Top-penginapan';

import BgHero from '../../Assets/img/hero.jpg';
import { BiMap } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Accomodation = () => {
	const items = [{ label: 'Accomodation', url: '/Accomodation' }];
	let data = [1, 2, 3, 4, 5, 6];

	return (
		<PortalTemplate items={items}>
			<div
				className="relative h-screen bg-center bg-cover -z-50"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
				}}
			>
				<div className="absolute px-4 py-2 font-semibold top-20 border-white border-2 rounded-2xl flex items-center text-white right-20 w-[13.75rem]">
					<p>Kecamatan Citepus, Hotel Cleopatra</p>
					<BiMap size={60} />
				</div>
			</div>
			<section className="z-50 px-20 -mt-10">
				<div className="flex flex-col px-10 py-10 bg-green-100 rounded-lg rounded-t-[3rem] text-primary">
					<div className="flex flex-col px-[16.25rem] text-center space-y-4 my-20">
						<h1 className="text-5xl font-black">TEMUKAN HOTEL ATAU PENGINAPAN UNTUK BERISTIRAHAT</h1>
						<p className="text-xl">Temukan penginapan terdekat dengan tujuan kunjungan mu !</p>
					</div>
					<div className="flex flex-col">
						<p className="text-xl font-bold text-secondary">List Penginapan</p>
						<p className="text-3xl font-bold">Avalaible Penginapan</p>
						<div className="flex items-center justify-between w-full mb-[2.188rem] mt-[1.875rem]">
							<button className="flex items-center px-4 py-2 bg-yellow-200 rounded-lg">
								<GiHamburgerMenu />
								<p className="ml-2 font-medium">Filter</p>
							</button>
							<form className="w-[28.125rem]">
								<label
									htmlFor="default-search"
									className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
								>
									Search
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<svg
											aria-hidden="true"
											className="w-5 h-5 text-gray-500 dark:text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											></path>
										</svg>
									</div>
									<input
										type="search"
										id="default-search"
										className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Search Mockups, Logos..."
										required
									/>
								</div>
							</form>
							<div className="flex items-center">
								<p className="mr-4">SHOWING 1 - 6 OF 12 ITEM(S)</p>
								<div>
									<button
										id="dropdownDefaultButton"
										data-dropdown-toggle="dropdown"
										className="bg-white flex items-center w-[15rem] text-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center justify-between "
										type="button"
									>
										SORT BY
										<svg
											className="w-4 h-4 ml-2"
											aria-hidden="true"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={
													2
												}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
									{/* Dropdown menu */}
									<div
										id="dropdown"
										className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
									>
										<ul
											className="py-2 text-sm text-gray-700 dark:text-gray-200"
											aria-labelledby="dropdownDefaultButton"
										>
											<li>
												<a
													href="#"
													className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Dashboard
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Settings
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Earnings
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Sign
													out
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-3 gap-14 ">
							{data.map((data, index) => {
								return <Card key={index} image={BgHero} link={'/Accomodation/detail'} />;
							})}
						</div>
						<div className="flex justify-center my-20">
							<nav aria-label="Page navigation example">
								<ul className="flex items-center space-x-4 text-primary">
									<li>
										<a
											href="#"
											className="flex items-center justify-center w-8 h-8 leading-tight transition-all border-2 rounded-lg hover:text-white hover:bg-primary border-primary "
										>
											<span className="sr-only">
												Previous
											</span>
											<svg
												aria-hidden="true"
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="flex items-center justify-center w-8 h-8 leading-tight transition-all border-2 rounded-lg hover:text-white hover:bg-primary border-primary "
										>
											1
										</a>
									</li>
									<li>
										<a
											href="#"
											className="flex items-center justify-center w-8 h-8 leading-tight transition-all border-2 rounded-lg hover:text-white hover:bg-primary border-primary "
										>
											2
										</a>
									</li>
									<li>
										<a
											href="#"
											aria-current="page"
											className="flex items-center justify-center w-8 h-8 leading-tight transition-all border-2 rounded-lg hover:text-white hover:bg-primary border-primary "
										>
											3
										</a>
									</li>
									<li>
										<a
											href="#"
											className="flex items-center justify-center w-8 h-8 leading-tight transition-all border-2 rounded-lg hover:text-white hover:bg-primary border-primary "
										>
											4
										</a>
									</li>
									<li>
										<a
											href="#"
											className="flex items-center justify-center w-8 h-8 leading-tight transition-all border-2 rounded-lg hover:text-white hover:bg-primary border-primary "
										>
											5
										</a>
									</li>
									<li>
										<a
											href="#"
											className="flex items-center justify-center w-8 h-8 leading-tight transition-all border-2 rounded-lg hover:text-white hover:bg-primary border-primary "
										>
											<span className="sr-only">
												Next
											</span>
											<svg
												aria-hidden="true"
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
										</a>
									</li>
								</ul>
							</nav>
						</div>

						<div
							className="relative bg-center bg-cover h-[31.25rem]"
							style={{
								backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
							}}
						>
							<div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-full text-white">
								<div className="text-left">
									<p className="text-5xl font-extrabold mb-[1.875rem]">
										5 Alasan Mengapa Hotel Cleopatra <br />
										Menjadi Tempat Yang Tepat Untuk
										Beristirahat
									</p>
									<button className="flex items-center px-8 py-4 bg-yellow-200 rounded-md ">
										<span className="font-semibold text-black">
											Lihat Artikel
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</PortalTemplate>
	);
};

export default Accomodation;
