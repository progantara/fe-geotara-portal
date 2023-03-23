import React, { useState } from 'react';
import Logo from '../../Assets/img/logo.png';

import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';

const Navbar = () => {

	const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleClass = () => {
    setIsNavbarActive(!isNavbarActive);
  };

	return (
		<>
			<nav className="px-20 py-3 bg-white border-gray-200 shadow-lg border-b-gray-900 dark:bg-gray-900 dark:border-gray-700">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<Link to="/" className="flex items-center">
						<img src={Logo} className="h-6 mr-3 sm:h-14" alt="Geotara Logo" />
					</Link>
					<div className="hidden w-full md:block md:w-auto">
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li key={1}>
								<Link
									to="/virtual-tour"
									className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent"
									aria-current="page"
								>
									Virtual Tour
								</Link>
							</li>
							<li key={2}>
								<Link
									to="/artikel"
									className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent"
									aria-current="page"
								>
									Artikel
								</Link>
							</li>
							<li key={3}>
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle="dropdownNavbar"
									className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
									onClick={toggleClass}
								>
									Rencanakan Perjalanan Anda
									<svg
										className="w-5 h-5 ml-1"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
								{/* Dropdown menu */}
								<div
									id="dropdownNavbar"
									className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
								>
									<ul
										className="py-2 text-sm text-gray-700 dark:text-gray-400"
										aria-labelledby="dropdownLargeButton"
									>
										<li key={4}>
											<Link
												to="/"
												className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Dashboard
											</Link>
										</li>
										<li key={5}>
											<Link
												to="/"
												className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Settings
											</Link>
										</li>
										<li key={6}>
											<Link
												to="/"
												className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Earnings
											</Link>
										</li>
									</ul>
									<div className="py-1">
										<Link
											to="/"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
										>
											Sign out
										</Link>
									</div>
								</div>
							</li>
							<li key={7}>
								<Link
									to="/event"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Event
								</Link>
							</li>
						</ul>
					</div>
					<Link
						to="/login"
						className="focus:outline-none shadow-lg text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Login
					</Link>
				</div>
			</nav>
			<ul className={`${isNavbarActive ? 'block' : 'hidden'} bg-white shadow py-2 absolute z-50 left-[50%] text-sm text-gray-700 dark:text-gray-400 rounded`}>
				<li key={1}>
					<Link
						to="/accomodation"
						className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">
						Penginapan
					</Link>
				</li>
				<li key={2}>
					<Link
						to="/TourAndTravel"
						className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">
						Tour & Travel
					</Link>
				</li>
				<li key={3}>
					<Link
						to="/merhcantandsourvenir"
						className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">
						Merchant & Souveniers
					</Link>
				</li>
				<li key={4}>
					<Link
						to="/Restaurant"
						className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">
						Restoran
					</Link>
				</li>
				<li key={5}>
					<Link
						to="/Attraction"
						className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">
						Atraksi
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Navbar;
