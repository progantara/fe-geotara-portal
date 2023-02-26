import React from 'react';
import PortalTemplate from '../../Component/Layout';

// image
import articel1 from '../../Assets/img/Article-1.jpg'
import articel2 from '../../Assets/img/Article-2.jpg'
import articel3 from '../../Assets/img/Article-3.jpg'
import articel4 from '../../Assets/img/Article-4.jpg'
import articel5 from '../../Assets/img/Article-5.jpg'
import articel6 from '../../Assets/img/Article-6.jpg'

const Artikel = () => {
	return (
		<>
			<PortalTemplate>
				<div className='p-2 pt-1 bg-green-600 sm:px-20 text-white'>
					<span>Beranda {">"} Artikel</span>
				</div>
				<div className='bg-green-100 h-screen flex'>
					<div className='pl-20 pt-7'>
						<img className='rounded-xl h-5/6 w-11/12' src={articel1} alt="" />
						<div class="text-white -mt-60 mx-20 flex-initial">
							<span className='text-white text-4xl font-semibold mt-7 '>
								Keragaman Keindahan,
							</span>
							<div className='text-white text-4xl font-semibold mt-2 flex-auto'>
								Pariwisata Indonesia
							</div>
							<div className='text-white text-base mt-5 flex-auto' >Selly Ardiyati <span className="text-yellow-300 text-2xl">•</span> Juni 27, 2019</div>
						</div>
					</div>
					<div className='pr-20 pt-7'>
						<div className='box-border h-5/6 w-96 border-2 border-green-600 rounded-lg'>
							<img className='rounded-xl h-24	w-40 ml-5 mt-5' src={articel2}></img>
						</div>
					</div>
				</div>
			</PortalTemplate >
		</>
	);
};

export default Artikel;
