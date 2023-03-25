import React, {lazy, Suspense} from 'react';
import PortalTemplate from '../Component/Layout';
import BgHero from '../Assets/img/hero.jpg';
import "../Assets/Css/custom/custom.css"
import { FiArrowRight, FiCamera, FiMapPin, FiUser } from 'react-icons/fi';
import Button from '../Component/Button/Button';
import { Card } from '../Component/Card/Card';
import IMAGES from '../Assets/img';

const Hero = () => {
	return (
		<section className="bg-cover bg-center bg-pattern">
			<div className="flex justify-between p-5 md:p-0 md:pt-8 xl:px-20">

				{/* Hero */}
				<div className="flex flex-col text-primary text-center md:px-14 md:text-left md:flex-row md:flex-wrap md:items-center md:py-14 xl:justify-between">
				
					{/* Image Hero */}
					<div className='order-1 md:order-2 md:basis-1/2 xl:flex xl:justify-end'>
						<img src={BgHero} alt="Background Home" className="rounded-lg mb-5 md:mb-0 md:rounded-xl md:rounded-tl-[70px] xl:w-[500px] xl:h-[350px]" />
					</div>

					{/* Caption */}
					<div className='order-2 md:order-1 md:basis-1/2'>
						<h1 className="text-3xl font-bold md:text-4xl xl:text-6xl">Lupakan Kerja, Mulailah Liburan</h1>
						<p className="mt-2 mb-5 text-sm md:mt-5 xl:text-lg">Isilah hari-hari libur kamu dengan sesuatu <span className='hidden md:block'></span> yang membuat kamu tersenyum, tertawa, dan bersyukur.</p>
						{/* Button */}
						<div className='hidden md:block'>
							<Button size="small" width="content">
								<div className='md:flex md:items-center'>
									<span className='mr-3 xl:text-base'>Coba 360</span>
									<FiArrowRight/>
								</div>
							</Button>
						</div>
					</div>

					{/* Milestones */}
					<div className='order-3 md:order-4 md:mt-10'>
						<div className='flex flex-row mb-5 justify-between md:gap-10'>

							{/* Item 1 */}
							<div className='flex flex-col items-center basis-1/3'>
								<FiMapPin className='w-12 h-12 mb-2'></FiMapPin>
								<div className='flex flex-col text-center'>
									<p className='text-sm'><span className='font-bold'>1000+</span></p>
									<p className='text-sm'>Wisata</p>
								</div>	
							</div>

							{/* Item 2 */}
							<div className='flex flex-col items-center basis-1/3'>
								<FiCamera className='w-12 h-12 mb-2'></FiCamera>
								<div className='flex flex-col text-center'>
									<p className='text-sm'><span className='font-bold'>5000+</span></p>
									<p className='text-sm'>Spot Foto</p>
								</div>	
							</div>

							{/* Item 3 */}
							<div className='flex flex-col items-center basis-1/3'>
								<FiUser className='w-12 h-12 mb-2'></FiUser>
								<div className='flex flex-col text-center'>
									<p className='text-sm'><span className='font-bold'>1000+</span></p>
									<p className='text-sm'>Pengunjung Baru</p>
								</div>
							</div>

						</div>
					</div>

					{/* Button */}
					<div className='order-4 md:hidden'>
						<Button size="small" width="full">
							<div className='flex items-center justify-center'>
								<span className='mr-3 flex'>Coba 360</span>
								<FiArrowRight/>
							</div>
						</Button>
					</div>

				</div>

			</div>
    </section>
  );
};

const TopWisata = () => {
  return (
  <section className='bg-cover bg-center bg-pattern mb-5'>
    <div className='flex flex-col justify-between p-5 md:p-0 md:pt-8 md:px-14 lg:px-16 xl:px-32'>

      {/* Title */}
      <div className='flex flex-col'>
        <h2 className="text-base font-extrabold text-gray-600 md:text-xl">Top Wisata</h2>
        <h1 className="mb-8 text-md font-extrabold text-primary md:text-3xl">
          Paling Diminati Oleh Kebanyakan Orang
        </h1>
      </div>

      {/* Card Wisata */}
      <div className='flex flex-col gap-3 lg:flex-row lg:h-96 lg:justify-between xl:h-[600px]'>

        {/* Card Hero */}
        <div className='w-full h-32 bg-white rounded-xl overflow-hidden relative lg:h-full lg:w-96 xl:w-[500px]'>

          {/* Badge */}
          <div className='absolute top-0 right-0 bg-yellow-300 z-10 px-6 py-2 rounded-bl-3xl'>
            <p className='text-sm text-primary font-bold'>Gratis</p>
          </div>

          {/* Title */}
          <div className='absolute bottom-3 left-3 text-white z-10'>
            <p className='text-lg lg:text-xl'>Pantai Sawarna</p>
            <p className='text-sm lg:text-lg'>Pantai</p>
          </div>

          <div className='w-full h-full bg-gray-900 absolute opacity-40' />
          <img src={IMAGES.top1} alt="top-wisata" className='w-full object-cover lg:h-full' />
        </div>

				{/* Card 4 */}
        <div className='flex flex-row flex-wrap gap-y-3 justify-between'>

          {/* Card Item */}
          <div className='w-[49%] h-52 bg-white rounded-xl overflow-hidden relative object-cover lg:h-[48%]'>
            {/* Badge */}
            <div className='absolute top-0 right-0 bg-yellow-300 z-10 px-6 py-2 rounded-bl-3xl'>
              <p className='text-sm text-primary font-bold'>Gratis</p>
            </div>

            {/* Title */}
            <div className='absolute bottom-3 left-3 text-white z-10'>
              <p className='text-base lg:text-xl'>Curug Sodong</p>
              <p className='text-sm lg:text-lg'>Curug</p>
            </div>

            <div className='w-full h-full bg-gray-900 absolute opacity-40' />
            <img src={IMAGES.top2} alt="top-wisata" className='w-full h-full object-cover' />
          </div>

          {/* Card Item */}
          <div className='w-[49%] h-52 bg-white rounded-xl overflow-hidden relative object-cover lg:h-[48%]'>
            {/* Badge */}
            <div className='absolute top-0 right-0 bg-yellow-300 z-10 px-6 py-2 rounded-bl-3xl'>
              <p className='text-sm text-primary font-bold'>Gratis</p>
            </div>

            {/* Title */}
            <div className='absolute bottom-3 left-3 text-white z-10'>
              <p className='text-base lg:text-xl'>Pantai Citepus</p>
              <p className='text-sm lg:text-lg'>Pantai</p>
            </div>

            <div className='w-full h-full bg-gray-900 absolute opacity-40' />
            <img src={IMAGES.top3} alt="top-wisata" className='w-full h-full object-cover' />
          </div>

          {/* Card Item */}
          <div className='w-[49%] h-52 bg-white rounded-xl overflow-hidden relative object-cover lg:h-[48%]'>
            {/* Badge */}
            <div className='absolute top-0 right-0 bg-yellow-300 z-10 px-6 py-2 rounded-bl-3xl'>
              <p className='text-sm text-primary font-bold'>Gratis</p>
            </div>

            {/* Title */}
            <div className='absolute bottom-3 left-3 text-white z-10'>
              <p className='text-base lg:text-xl'>Bukit Tanjung</p>
              <p className='text-sm lg:text-lg'>Bukit</p>
            </div>

            <div className='w-full h-full bg-gray-900 absolute opacity-40' />
            <img src={IMAGES.top4} alt="top-wisata" className='w-full h-full object-cover' />
          </div>

          {/* Card Item */}
          <div className='w-[49%] h-52 bg-white rounded-xl overflow-hidden relative object-cover lg:h-[48%]'>
            {/* Badge */}
            <div className='absolute top-0 right-0 bg-yellow-300 z-10 px-6 py-2 rounded-bl-3xl'>
              <p className='text-sm text-primary font-bold'>Gratis</p>
            </div>

            {/* Title */}
            <div className='absolute bottom-3 left-3 text-white z-10'>
              <p className='text-base lg:text-xl'>Batuan Citepus</p>
              <p className='text-sm lg:text-lg'>Batuan</p>
            </div>

            <div className='w-full h-full bg-gray-900 absolute opacity-40' />
            <img src={IMAGES.top5} alt="top-wisata" className='w-full h-full object-cover' />
          </div>

        </div>

      </div>

    </div>
  </section>
  )
}

const Penginapan = () => {
	return (
		<section>
			<div className=" flex flex-col p-5 bg-primary md:px-14 xl:px-32">

				{/* Head */}
				<div className='flex flex-col'>
					<p className="font-extrabold text-gray-400 md:text-xl xl:text-2xl">Top Penginapan</p>
					<h2 className="text-md font-extrabold mb-8 text-white md:text-2xl xl:text-3xl">Pilih Penginapan Unggulan Untuk Kenyamanan Anda</h2>
				</div>

				{/* Content */}
				<div className='flex flex-wrap gap-5 justify-center xl:justify-between xl:gap-10'>
					<Card
						title="Vanada Bugeul Cottage"
						image={IMAGES.hotel1}
						address="Ciwaru, Ciemas"
						rating="365"
						price={850000}
						link={"/virtual-tour"}
					/>
					<Card
						title="Ciletuh Hills"
						image={IMAGES.hotel2}
						address="Ciwaru, Ciemas"
						rating="200"
						discount="25"
						priceBefore={1200000}
						price={900000}
						link={"/virtual-tour"}
					/>
					<Card
						title="Homestay Family"
						image={IMAGES.hotel3}
						address="Ciwaru, Ciemas"
						rating="450"
						discount="10"
						priceBefore={1000000}
						price={900000}
						link={"/virtual-tour"}
					/>
					<Card
						title="Villa Tenjo Gunung"
						image={IMAGES.hotel4}
						address="Ciwaru, Ciemas"
						rating="257"
						price={900000}
						link={"/virtual-tour"}
					/>
					<Card
						title="Villa Satria Bahari"
						image={IMAGES.hotel5}
						address="Ciwaru, Ciemas"
						rating="150"
						price={1580000}
						link={"/virtual-tour"}
					/>
					<Card
						title="Penginapan D'Leuit Exa"
						image={IMAGES.hotel6}
						address="Ciwaru, Ciemas"
						rating="650"
						price={530000}
						link={"/virtual-tour"}
					/>
				</div>

			</div>
		</section>
	);
};

const Entertainment = () => {
	return (
		<section>
			<div className='flex flex-col p-5 md:px-14 xl:px-32'>

				{/* Head */}
				<div className='flex flex-col'>
					<p className="font-extrabold text-gray-400 md:text-xl xl:text-2xl">Entertainment Baru</p>
					<h2 className="text-md font-extrabold mb-4 text-primary md:text-2xl xl:text-3xl">Buatlah Memori Bersama Kami Di Geopark</h2>
				</div>

				{/* Content */}
				<div className='flex flex-row flex-wrap justify-center gap-2 md:flex-nowrap'>
					<div className='w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]'>
						<div className='w-full h-full bg-gray-900 absolute opacity-40'></div>
						<img src={IMAGES.entertainment1} alt="enter-1" className='h-full object-cover'/>
					</div>
					<div className='w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]'>
						<div className='w-full h-full bg-gray-900 absolute opacity-40'></div>
						<img src={IMAGES.entertainment2} alt="enter-1" className='h-full object-cover'/>
					</div>
					<div className='w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]'>
						<div className='w-full h-full bg-gray-900 absolute opacity-40'></div>
						<img src={IMAGES.entertainment3} alt="enter-1" className='h-full object-cover'/>
					</div>
					<div className='w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]'>
						<div className='w-full h-full bg-gray-900 absolute opacity-40'></div>
						<img src={IMAGES.entertainment4} alt="enter-1" className='h-full object-cover'/>
					</div>
				</div>

			</div>
		</section>
		
	);
};

const Objek = () => {
	return (
		<section>
			<div className='relative'>

				<div className='w-full h-full overflow-hidden relative xl:h-screen'>
					<div className='w-full h-full bg-gray-900 absolute opacity-40'></div>
					<img src={IMAGES.hero} alt="Virtual Tour" className='w-full h-96 object-cover xl:h-screen'/>
				</div>

				<div className="p-5 absolute bottom-0 left-0 flex flex-col justify-center w-full h-full text-white md:px-14 xl:px-32">
					<p className="text-lg font-bold uppercase md:text-2xl xl:text-4xl">Menjelajahi Beragam Objek Wisata Di Cikaso</p>
					<p className='text-sm mt-2 mb-4 xl:text-lg'>Cikaso merupakan sebuah objek wisata di Kabupaten Ciletuh yang kaya akan berbagai geosite menakjubkan.</p>
					<button className="w-40 flex justify-center px-5 py-3 bg-yellow-200 rounded-md">
						<span className="text-sm font-bold text-primary">Lihat Virtual Tour</span>
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
			<TopWisata/>
      <Penginapan />
      <Entertainment />
      <Objek />
    </PortalTemplate>
  );
};

export default Home;