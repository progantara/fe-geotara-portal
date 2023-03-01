import React from 'react';
import Logo from '../../Assets/img/logo.png';

import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="px-20 py-3 bg-white border-gray-200 shadow-lg border-b-gray-900 dark:bg-gray-900 dark:border-gray-700">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link to="/" className="flex items-center">
					<img src={Logo} className="h-6 mr-3 sm:h-14" alt="Geotara Logo" />
				</Link>
				<button
					data-collapse-toggle="navbar-dropdown"
					type="button"
					className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-dropdown"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<Link
								to="/virtual-tour"
								className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent"
								aria-current="page"
							>
								Virtual Tour
							</Link>
						</li>
						<li>
							<Link
								to="/artikel"
								className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent"
								aria-current="page"
							>
								Artikel
							</Link>
						</li>
						<li>
							<button
								id="dropdownNavbarLink"
								data-dropdown-toggle="dropdownNavbar"
								className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
									<li>
										<Link
											to="/"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Dashboard
										</Link>
									</li>
									<li>
										<Link
											to="/"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Settings
										</Link>
									</li>
									<li>
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
						<li>
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
	);
};

export default Navbar;
