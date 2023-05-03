import React from 'react';
import PortalTemplate from '../../Component/Layout';

// image
import profile from '../../Assets/img/profile.jpg';
import articel1 from '../../Assets/img/Article-1.jpg';
import articel2 from '../../Assets/img/Article-2.jpg';
import articel3 from '../../Assets/img/Article-3.jpg';
import articel4 from '../../Assets/img/Article-4.jpg';
import articel5 from '../../Assets/img/Article-5.jpg';
import articel6 from '../../Assets/img/Article-6.jpg';
import articel7 from '../../Assets/img/Article-7.jpg';
import articel8 from '../../Assets/img/Article-8.jpg';
import articel9 from '../../Assets/img/Article-9.jpg';

const Artikel = () => {
	const items = [{ label: 'Artikel', url: '/artikel' }];
	let data = [1, 2, 3, 4, 5, 6];

	return (
		<>
			<PortalTemplate items={items}>
				<div className="flex flex-col bg-green-100">
					<div className="flex ">
						<div className="flex flex-col mb-10 lg:ml-20 lg:flex-row mt-7">
							<div className="flex">
								<img
									className="w-full bg-fixed lg:rounded-lg lg:max-w-4xl brightness-75"
									src={articel1}
									alt="post-1"
								/>
							</div>
							<div className="absolute pl-4 mt-10 lg:mt-96">
								<a
									href="/artikel/detail"
									className="text-3xl font-semibold text-white lg:-ml-10 font-dmserif mt-96"
								>
									Keragaman Keindahan,
								</a>
								<p className="mb-3 text-3xl font-semibold text-white lg:-ml-10">
									Pariwista Indonesia
								</p>
								<div className="flex flex-row">
									<p className="text-sm text-white lg:-ml-10 font-base">
										Selly Ardiyati
									</p>
									<p className="ml-2 -mt-2 text-2xl text-yellow-200">•</p>
									<p className="ml-2 text-sm text-white font-base">
										{' '}
										Juni 27, 2019
									</p>
								</div>
							</div>
							<div className="w-full border border-green-800 rounded-lg lg:ml-20 lg:max-w-sm">
								<img className="w-32 h-20 mt-10 ml-5 rounded-lg" src={articel2} alt="post-2" />
								<div className="ml-40 text-green-900">
									<p className="-mt-20 text-lg font-bold">
										Senyuman Baru dari Geopark Ciletuh
									</p>
									<p className="text-sm">Agustus 26, 2022</p>
								</div>
								<img className="w-32 h-20 ml-5 rounded-lg mt-7" src={articel3} alt="post-3" />
								<div className="ml-40 text-green-900">
									<p className="-mt-20 font-bold text-lg mr-[2rem]">
										Pesona Geopark Ciletuh
									</p>
									<p className="text-sm">Febuari 20, 2022</p>
								</div>
								<img className="w-32 h-20 mt-10 ml-5 rounded-lg" src={articel4} alt="post-4" />
								<div className="ml-40 text-green-900">
									<p className="-mt-20 font-bold text-lg mr-[2rem]">
										Berpetualang Menyusuri Geopark
									</p>
									<p className="text-sm">November 15, 2022</p>
								</div>
								<img className="w-32 h-20 ml-5 rounded-lg mt-7" src={articel5} alt="post-5" />
								<div className="ml-40 text-green-900">
									<p className="-mt-20 font-bold text-lg mr-[2rem]">
										Geopark Ciletuh Spektakuler
									</p>
									<p className="text-sm">Desember 31, 2022</p>
								</div>
								<img className="w-32 h-20 ml-5 rounded-lg mt-7" src={articel6} alt="post-6" />
								<div className="ml-40 text-green-900">
									<p className="-mt-20 font-bold text-lg mr-[2rem]">
										Mengenal Geopark Ciletuh
									</p>
									<p className="mb-4 text-sm">May 02, 2018</p>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:ml-20">
						<p className="mt-3 mb-4 text-4xl font-semibold text-green-900">Artikel</p>
						<div className="flex flex-col max-w-4xl mb-10 border border-green-800 rounded-lg">
							<div className="flex flex-col lg:flex-row">
								<img
									className="rounded-lg w-full lg:w-[45rem] lg:h-[12rem] lg:mt-7 lg:ml-7 mb-3 object-cover object-right"
									src={articel7}
									alt="post-7"
								/>
								<div className="ml-8 mt-9 ">
									<div className="flex flex-row text-sm font-semibold tracking-wide text-dark">
										<img
											className="w-10 h-8 rounded-full"
											src={profile}
											alt={profile}
										/>
										<p className="mt-2 ml-2 text-sm text-dark">
											NurFauziyah
										</p>
										<p className="ml-1 mr-1 text-2xl text-yellow-200 ">
											•
										</p>
										<p className="mt-2 text-sm text-dark">
											Wisata
										</p>
										<p className="ml-1 mr-1 text-2xl text-yellow-200 ">
											•
										</p>
										<p className="mt-2 text-sm text-dark">
											September 21, 2022
										</p>
									</div>
									<a
										href="/Detail"
										className="block mt-1 text-xl font-semibold text-green-900"
									>
										Lagi Viral, yuk Healing ke
									</a>
									<a
										href="/Detail"
										className="block mt-1 text-xl font-semibold text-green-900"
									>
										Geopark Ciletuh Sukabumi{' '}
									</a>
									<p className="mt-2 mr-10 text-base text-green-900">
										Sukabumi menyimpan berbagai wisata alam
										yang membuat betah berlama - lama di
										sini. Dengan dataran tinggi, pegunungan
										dan pantai indah, menjadikan kawasan ini
										selalu menjadi favorit untuk liburan
									</p>
								</div>
							</div>
							<div className="flex justify-center">
								<span className="h-px mt-4 mb-4 bg-green-600 lg:w-11/12"></span>
							</div>
							<div className="flex flex-col lg:flex-row">
								<img
									className="rounded-lg w-full lg:w-[45rem] lg:h-[12rem] lg:mt-7 lg:ml-7 mb-3 object-cover object-right"
									src={articel8}
									alt="post-8"
								/>
								<div className="ml-8 mt-9 ">
									<div className="flex flex-row text-sm font-semibold tracking-wide text-dark">
										<img
											className="w-10 h-8 rounded-full"
											src={profile}
											alt={profile}
										/>
										<p className="mt-2 ml-2 text-sm text-dark">
											Tiara
										</p>
										<p className="ml-1 mr-1 text-2xl text-yellow-200">
											•
										</p>
										<p className="mt-2 ml-2 text-sm text-dark">
											Wisata
										</p>
										<p className="ml-1 mr-1 text-2xl text-yellow-200">
											•
										</p>
										<p className="mt-2 ml-2 text-sm text-dark">
											Oktober 09, 2020
										</p>
									</div>
									<a
										href="/Detail"
										className="block mt-1 text-xl font-semibold text-green-900 lg:mr-[20rem]"
									>
										Wajib Melipir: 5 Tempat Wisata Geopark
										Ciletuh yang Bagus Banget
									</a>
									<p className="mt-2 mr-10 text-base text-green-900">
										Wisata ke Geopark Ciletuh adalah satu
										hal yang harus kamu masukkan ke dalam
										wishlist. Geopark Ciletuh adalah
										satu-satunya Global Geopark Network yang
										ada di Jawa Barat.{' '}
									</p>
								</div>
							</div>
							<div className="flex justify-center">
								<span className="h-px mt-4 mb-4 bg-green-600 lg:w-11/12"></span>
							</div>
							<div className="flex flex-col lg:flex-row">
								<img
									className="rounded-lg w-full lg:w-[45rem] lg:h-[12rem] lg:mt-7 lg:ml-7 mb-3 object-cover object-right"
									src={articel9}
									alt="post-9"
								/>
								<div className="ml-8 mt-9 ">
									<div className="flex flex-row text-sm font-semibold tracking-wide text-dark">
										<img
											className="w-10 h-8 rounded-full"
											src={profile}
										/>
										<p className="mt-2 ml-2 text-sm text-dark">
											Echi
										</p>
										<p className="ml-1 mr-1 text-2xl text-yellow-200">
											•
										</p>
										<p className="mt-2 ml-2 text-sm text-dark">
											Wisata
										</p>
										<p className="ml-1 mr-1 text-2xl text-yellow-200">
											•
										</p>
										<p className="mt-2 ml-2 text-sm text-dark">
											Februari 20, 2020
										</p>
									</div>
									<a
										href="/Detail"
										className="block mt-1 text-xl font-semibold text-green-900"
									>
										Indahnya Air Terjun
									</a>
									<p className="mt-2 mb-5 mr-10 text-base text-green-900">
										Geopark Ciletuh Palabuhanratu, Sukabumi
										kini resmi menjadi global geopark
										pertama di Jawa Barat.{' '}
									</p>
								</div>
							</div>
						</div>

						<div className="flex-col items-center justify-center w-full px-4 pt-10 mx-auto mb-10 text-white bg-green-600 lg:px-40 lg:w-fit pb-14 rounded-xl">
							<p className="mb-2 text-center">Newsletter</p>
							<div className="flex flex-col justify-center gap-2 lg:flex-row">
								<input
									type="text"
									placeholder="Alamat Email"
									className="block w-full text-gray-900 border border-gray-300 rounded-lg lg:w-96 h-14 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								<button className="px-4 py-3 text-sm font-semibold text-green-900 bg-yellow-300 rounded-lg hover:bg-yellow-400 text-dark">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</PortalTemplate>
		</>
	);
};

export default Artikel;
