import React, { useState } from 'react';
import Logo from '../../Assets/img/logo.png'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

	const [isNavbarActive, setIsNavbarActive] = useState(false);
	const [isNavMobile, setIsNavMobile] = useState(false);

  const toggleClass = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleClassMobile = () => {
    setIsNavMobile(!isNavMobile);
  };

	return (
		<>
			<nav className="w-full bg-white px-5 py-2 border-gray-200 shadow-lg border-b-gray-900 dark:bg-gray-900 dark:border-gray-700 md:px-14 xl:px-32">
				<div className=" flex flex-wrap items-center justify-between mx-auto md:flex-nowrap">
					{/* Logo */}
					<Link to="/" className="flex items-center">
						<img src={Logo} className="w-24 xl:w-32" alt="Geotara Logo" />
					</Link>

					{/* Menu */}
					<div className="hidden w-full md:block md:w-fit">
						<ul className="flex flex-col md:flex-row gap-5 md:text-sm md:font-medium xl:text-base">
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
									className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
							</li>
							<li key={7}>
								<Link
									to="/event"
									className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Event
								</Link>
							</li>
						</ul>
					</div>

					{/* Login */}
					<Link
						to="/login"
						className="hidden md:block focus:outline-none shadow-lg text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
						Login
					</Link>

					{/* Hamburger */}
					<div onClick={toggleClassMobile} className="md:hidden text-primary">
						<GiHamburgerMenu className='text-primary'></GiHamburgerMenu>
					</div>

				</div>
			</nav>

			{/* Navbar Mobile */}
			<div className={`${isNavMobile ? 'block' : 'hidden'} absolute bg-primary w-full shadow-lg`}>
				<ul className='flex flex-col py-8'>
					<li>
						<Link
							to="/virtual-tour"
							className="text-base text-white py-2 mx-8 flex"
							aria-current="page">
							Virtual Tour
						</Link>
					</li>
					<li>
						<Link
							to="/artikel"
							className="text-base text-white py-2 mx-8 flex"
							aria-current="page">
							Artikel
						</Link>
					</li>
					<li key={3}>
						<p className='text-base text-white pt-2 mx-8 flex'>Rencanakan Perjalanan Anda</p>
						<ul className="flex flex-col py-2 mx-8 font-normal text-white rounded">
							<li>
								<Link
									to="/accomodation"
									className="text-white py-1 mx-8 flex"
									aria-current="page">
									Penginapan
								</Link>
							</li>
							<li>
								<Link
									to="/tour-travel"
									className="text-white py-1 mx-8 flex"
									aria-current="page">
									Tour & Travel
								</Link>
							</li>
							<li>
								<Link
									to="/merchant-sourvenir"
									className="text-white py-1 mx-8 flex"
									aria-current="page">
									Merchant & Souveniers
								</Link>
							</li>
							<li>
								<Link
									to="/restaurant"
									className="text-white py-1 mx-8 flex"
									aria-current="page">
									Restoran
								</Link>
							</li>
							<li>
								<Link
									to="/attraction"
									className="text-white py-1 mx-8 flex"
									aria-current="page">
									Atraksi
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link
							to="/event"
							className="text-base text-white py-2 mx-8 flex"
							aria-current="page">
							Event
						</Link>
					</li>
					<li>
						<Link
							to="/login"
							className="text-base bg-white text-primary py-2 mx-8 mt-5 flex justify-center rounded">
							Login
						</Link>
					</li>
				</ul>
			</div>

			<ul className={`${isNavbarActive ? 'block' : 'hidden'} bg-white shadow-2xl py-2 absolute z-50 left-[50%] text-sm text-primary dark:text-gray-400 rounded xl:text-base`}>
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
