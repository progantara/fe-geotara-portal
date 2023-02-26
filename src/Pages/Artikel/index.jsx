import React from 'react';
import PortalTemplate from '../../Component/Layout';

// image
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
				<div className='bg-green-100 h-screen md:flex'>
					<div className='pl-20 pt-7'>
						<img className='rounded-xl h-5/6 w-11/12' src={articel1} alt="" />
						<div class="text-white -mt-60 mx-20 flex-initial">
							<span className='text-white text-4xl font-semibold mt-7 '>
								Keragaman Keindahan,
							</span>
							<div className='text-white text-4xl font-semibold mt-2'>
								Pariwisata Indonesia
							</div>
							<div className='text-white text-base mt-5'>Selly Ardiyati <span className="text-yellow-300 text-2xl">•</span> Juni 27, 2019</div>
						</div>
					</div>
					<div className='Article pt-7'>
						{/* Articel 2 */}
						<img className='rounded-xl h-24	w-40 ml-5 mt-10' src={articel2}></img>
						<p className='text-green-900 ml-48 -mt-24 text-lg font-semibold'>Senyuman Baru dari Geopark Ciletuh</p>
						<p className='text-green-900 text-sm ml-48 font-medium'>Agustus, 26 2022</p>
						{/* Articel 3 */}
						<img className='rounded-xl h-24	w-40 ml-5 mt-10' src={articel3}></img>
						<p className='text-green-900 ml-48 -mt-24 text-lg font-semibold'>Senyuman Baru dari Geopark Ciletuh</p>
						<p className='text-green-900 text-sm ml-48 font-medium'>Agustus, 26 2022</p>
						{/* Articel 4 */}
						<img className='rounded-xl h-24	w-40 ml-5 mt-10' src={articel4}></img>
						<p className='text-green-900 ml-48 -mt-24 text-lg font-semibold'>Senyuman Baru dari Geopark Ciletuh</p>
						<p className='text-green-900 text-sm ml-48 font-medium'>Agustus, 26 2022</p>
						{/* Articel 5 */}
						<img className='rounded-xl h-24	w-40 ml-5 mt-10' src={articel5}></img>
						<p className='text-green-900 ml-48 -mt-24 text-lg font-semibold'>Senyuman Baru dari Geopark Ciletuh</p>
						<p className='text-green-900 text-sm ml-48 font-medium'>Agustus, 26 2022</p>
						{/* Articel 6 */}
						<img className='rounded-xl h-24	w-40 ml-5 mt-10' src={articel6}></img>
						<p className='text-green-900 ml-48 -mt-24 text-lg font-semibold'>Senyuman Baru dari Geopark Ciletuh</p>
						<p className='text-green-900 text-sm ml-48 font-medium'>Agustus, 26 2022</p>
					</div>
				</div>
				<div className='bg-green-100 h-screen pl-20 flex'>
					<h1 className='text-green-900 text-5xl font-semibold'>Articel</h1>
					<div class='pt-20 -ml-28'>
						<img className='rounded-xl h-24	w-40 ml-5' src={articel7}></img>
						<div className='text-dark text-base -mt-24 ml-48'>Selly Ardiyati <span className="text-yellow-300 text-2xl">•</span> Wisata <span className="text-yellow-300 text-2xl">•</span> Juni 27, 2019</div>
						<p className='text-green-900 text-lg font-semibold ml-48'>Lagi Viral, Yuk Healing ke</p>
						<p className='text-green-900 text-sm font-medium ml-48'>Sukabumi menyimpan berbagai wisata alam yang membuat betah berlama-lama di sini. Dengan dataran tinggi, pengunungan dan pantai indah, menjadikan kawasan ini selalu menjadi favorit untuk liburan</p>
					</div>
				</div>
			</PortalTemplate >
		</>
	);
};

export default Artikel;
