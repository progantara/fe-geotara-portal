import React from 'react';
import PortalTemplate from '../../Component/Layout';

// image
import profile from '../../Assets/img/profile.jpg'
import articel1 from '../../Assets/img/Article-1.jpg'
import articel2 from '../../Assets/img/Article-2.jpg'
import articel3 from '../../Assets/img/Article-3.jpg'
import articel4 from '../../Assets/img/Article-4.jpg'
import articel5 from '../../Assets/img/Article-5.jpg'
import articel6 from '../../Assets/img/Article-6.jpg'
import articel7 from '../../Assets/img/Article-7.jpg'
import articel8 from '../../Assets/img/Article-8.jpg'
import articel9 from '../../Assets/img/Article-9.jpg'

import { Link, useNavigate } from 'react-router-dom';

const Artikel = () => {
	return (
		<>
			<PortalTemplate>
				<div className='p-2 pt-1 bg-green-600 sm:px-20 text-white'>
					<span>Beranda {">"} Artikel</span>
				</div>
				<div className='bg-green-100 flex flex-col'>
					<div className='flex '>
						<div className="ml-20 mt-7 mb-10 flex flex-row space-x-20">
							<img className='rounded-lg brightness-75 max-w-4xl bg-fixed' src={articel1} />
							<div class="absolute">
								<h1 class="font-dmserif text-3xl font-semibold text-white mt-96 -ml-10">Keragaman Keindahan,</h1>
								<p class="mb-3 text-3xl text-white font-semibold -ml-10">Pariwista Indonesia</p>
								<div className='flex flex-row'>
									<p class="text-sm text-white font-base -ml-10">Selly Ardiyati</p>
									<p class="text-yellow-200 text-2xl ml-2 -mt-2">•</p>
									<p class="text-sm text-white font-base ml-2"> Juni 27, 2019</p>
								</div>
							</div>
							<div class="block max-w-sm border-2 border-green-800 rounded-lg ml-20">
								<img className='rounded-lg h-20 w-32 mt-10 ml-5' src={articel2} />
								<div className='text-green-900 ml-40'>
									<p className='-mt-20 font-bold text-lg'>Senyuman Baru dari Geopark Ciletuh</p>
									<p className='text-sm'>Agustus 26, 2022</p>
								</div>
								<img className='rounded-lg h-20 w-32 mt-7 ml-5' src={articel3} />
								<div className='text-green-900 ml-40'>
									<p className='-mt-20 font-bold text-lg flex '>Pesona Geopark Ciletuh</p>
									<p className='text-sm'>Febuari 20, 2022</p>
								</div>
								<img className='rounded-lg h-20 w-32 mt-14 ml-5' src={articel4} />
								<div className='text-green-900 ml-40'>
									<p className='-mt-20 font-bold text-lg'>Berpetualang Menyusuri Geopark</p>
									<p className='text-sm'>November 15, 2022</p>
								</div>
								<img className='rounded-lg h-20 w-32 mt-7 ml-5' src={articel5} />
								<div className='text-green-900 ml-40'>
									<p className='-mt-20 font-bold text-lg'>Geopark Ciletuh Spektakuler</p>
									<p className='text-sm'>Desember 31, 2022</p>
								</div>
								<img className='rounded-lg h-20 w-32 mt-7 ml-5' src={articel6} />
								<div className='text-green-900 ml-40'>
									<p className='-mt-20 font-bold text-lg'>Mengenal Geopark Ciletuh</p>
									<p className='mb-4 text-sm'>May 02, 2018</p>
								</div>
							</div>
						</div>
					</div>
					<div className='ml-20 '>
						<p className='text-green-900 text-4xl font-semibold mb-4'>Artikel</p>
						<div class="max-w-4xl border-2 border-green-800 rounded-lg flex flex-col mb-10">
							<img className='rounded-lg w-80 h-56 mt-7 ml-7 mb-3 object-cover object-right' src={articel7} />
							<div class="mt-9 ml-8 ">
								<div class="uppercase tracking-wide text-sm text-green-900 font-semibold">Fauziyah</div>
								<a href="#" class="block mt-1 text-lg leading-tight font-medium text-green-900">Lagi Viral, yuk Healing ke</a>
								<a href="#" class="block mt-1 text-lg leading-tight font-medium text-green-900">Geopark Ciletuh Sukabumi</a>
								<p class="mt-2 text-green-900 text-base">Sukabumi menyimpan berbagai wisata alam yang membuat betah berlama - lama di sini. Dengan dataran tinggi, pegunungan dan pantai indah, menjadikan kawasan ini selalu menjadi favorit untuk liburan</p>
							</div>
							<img className='rounded-lg w-80 h-56 mt-7 ml-7 mb-3 object-cover object-bottom' src={articel8} />
							<div class="mt-9 ml-8">
								<div class="uppercase tracking-wide text-sm text-green-900 font-semibold">Fauziyah</div>
								<a href="#" class="block mt-1 text-lg leading-tight font-medium text-green-900">Wajib Melipir : 5 tempat </a>
								<a href="#" class="block mt-1 text-lg leading-tight font-medium text-green-900">Wisata Geopark Ciletuh yang</a>
								<a href="#" class="block mt-1 text-lg leading-tight font-medium text-green-900">bagus banget</a>
								<p class="mt-2 text-slate-500">Wisata ke Geopark Ciletuh adalah satu hal yang harus kamu masukkan ke dalam wishlist. Geopark Ciletuh adalah satu-satunya Global Geopark Network yang ada di Jawa Barat. </p>
							</div>
							<img className='rounded-lg w-80 h-56 mt-7 ml-7 mb-3 object-cover object-left' src={articel9} />
							<div class="mt-9 ml-8">
								<div class="uppercase tracking-wide text-sm text-green-900 font-semibold">Fauziyah</div>
								<a href="#" class="block mt-1 text-lg leading-tight font-medium text-green-900">Indahnya Air Terjun</a>
								<p class="mt-2 mb-10 text-slate-500">Geopark Ciletuh Palabuhanratu, Sukabumi kini resmi menjadi global geopark pertama di Jawa Barat. </p>
							</div>
						</div>
						<div class="flex justify-center ">
							<div className='border-green-600 bg-green-600 rounded-lg mb-10 w-2/4'>
								<h1 className='text-center text-white mt-5'>Newsletter</h1>
								<div className='mx-7 flex flex-col static'>
									<input className='rounded-lg text-sm my-2' type="text" placeholder='Alamat' />
									<div className='inline-block'>
										<button class="bg-yellow-300 hover:bg-yellow-400 text-dark font-bold py-2 px-4 rounded mb-10">
											Button
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PortalTemplate >	
		</>
	);
};

export default Artikel;
