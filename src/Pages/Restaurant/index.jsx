import React, { useState } from 'react';
import PortalTemplate from '../../Component/Layout';
import { BiMap, BiTrash } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';
import CheckBox from '../../Component/CheckBox';
import Toggle from '../../Component/Toggle';
import Slider from '../../Component/Slider';
import Bintang from '../../Component/Slider/Bintang';
import "../../Assets/Css/custom/custom.css"
import Button from '../../Component/Button/Button';
import Dropdown from '../../Component/Dropdown';
import { Card } from '../../Component/Card/Card';
import IMAGES from '../../Assets/img';
import { useEffect } from 'react';
import { getRestaurant } from '../../Services/RestaurantService';

const Restaurant = () => {
	let dataKecamatan = [
		{
			"id": 1,
			"nama": "Ciemas"
		},
		{
			"id": 2,
			"nama": "Cikakak"
		},
		{
			"id": 3,
			"nama": "Pelabuhan Ratu"
		},
		{
			"id": 4,
			"nama": "Simpenan"
		},
		{
			"id": 5,
			"nama": "Waluran"
		},
		{
			"id": 6,
			"nama": "Surade"
		},
		{
			"id": 7,
			"nama": "Cilacap"
		}
		
	]

	let dataTipe = [
		{
			"id": 1,
			"nama": "Resto"
		},
		{
			"id": 2,
			"nama": "Cafe"
		},
		{
			"id": 3,
			"nama": "FoodCourt"
		}
	]

	const [isFilterActive, setIsFilterActive] = useState(false);

  const toggleClass = () => {
    setIsFilterActive(!isFilterActive);
  };

	const toggleClose = () => {
		setIsFilterActive(!isFilterActive);
	}

	const initialState = dataKecamatan.reduce((acc, cur, idx) => {
		return {
			...acc,
			[`item-${idx+1}`]: true // set nilai awal checkbox ke false
		}
	}, {})

	const [checkboxStatus, setCheckboxStatus] = useState(initialState);
	
	const toggleClear = () => {
		const newCheckboxStatus = {};
		dataKecamatan.forEach((item, index) => {
			newCheckboxStatus[`item-${index+1}`] = false;
		});
		setCheckboxStatus(newCheckboxStatus);
	}

	const items = [{ label: 'Restaurant', url: '/Restaurant' }];

	// Get Data Accomodation
	const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurant().then((res) => {
      setRestaurant(res.data.data);
    });
  }, []);


	return (
		<PortalTemplate items={items}>
			<div className="relative h-72 bg-center bg-cover bg-hero-restaurant -z-50 xl:h-[400px]">
				<div className='w-full h-full bg-gray-900 absolute opacity-50'></div>
				<div className="absolute px-4 py-2 font-semibold top-10 border-white border-2 rounded-2xl flex items-center text-white right-20 w-62 ml-5">
					<p className='text-sm'>Kecamatan Ciemas, <br /> Ciletuh Hills</p>
					
					<div className='lg:hidden'>
						<BiMap size={40} />
					</div>

					<div className='hidden xl:block'>
						<BiMap size={60} />
					</div>


				</div>
			</div>
			<section className="z-50 px-2 -mt-10 md:px-10">
				<div className="flex flex-col px-4 py-10 bg-green-100 rounded-lg rounded-t-[3rem] text-primary lg:px-14">

					{/* Caption */}
					<div className="flex flex-col text-center space-y-4 mt-16 mb-10">
						<h1 className="text-xl md:text-3xl xl:text-5xl font-bold lg:w-[800px] xl:mx-auto">TENTUKAN CAFE ATAU RESTO TERDEKAT</h1>
						<p className="text-sm md:text-lg xl:text-xl">Temukan cafe atau resto untuk makan selama liburan mu !</p>
					</div>

					{/* Filter Area */}
					<div className="flex flex-col">
						{/* Title */}
						<div>
							<p className="text-base md:text-lg xl:text-xl font-bold text-secondary">List Restaurant</p>
							<p className="text-lg md:text-xl xl:text-3xl font-bold">Avalaible Restaurant</p>
						</div>

						<div className="flex items-center justify-between flex-nowrap w-full mb-5 mt-4 gap-2">

							{/* Filter */}
							<div className='relative'>

								{/* Button */}
								<button className="flex items-center px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300" onClick={toggleClass}>
									<GiHamburgerMenu />
									<p className="ml-2 font-medium">Filter</p>
								</button>

								{/* Isi Filter */}
								<div className={`${isFilterActive ? 'block' : 'hidden'} bg-green-50 absolute z-[100] w-72 left-0 shadow-2xl text-sm dark:text-gray-400 rounded-md py-5 px-5 md:w-[700px]`}>
								
									{/* Header */}
									<div className='flex justify-between mb-5'>
										<button className="flex items-center px-4 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-lg">
											<BiTrash></BiTrash>
											<p className='ml-2 font-medium' onClick={toggleClear}>Clear All</p>
										</button>
										<button>
											<FiX className='w-8 h-8' onClick={toggleClose}></FiX>
										</button>
									</div>

									{/* Body */}
									<div className='bg-green-100 rounded-lg p-5'>
										{/* Checkbox Tour Travel*/}
										<div className='mt-5'>
											<p className='text-xl font-bold text-black mb-3'>Kecamatan</p>
											<CheckBox
												data={dataKecamatan}
												checkboxStatus={checkboxStatus}
												setCheckboxStatus={setCheckboxStatus}
											/>
										</div>

										{/* Checkbox Tipe*/}
										<div className='mt-5'>
											<p className='text-xl font-bold text-black mb-3'>Tipe</p>
											<CheckBox
												data={dataTipe}
												checkboxStatus={checkboxStatus}
												setCheckboxStatus={setCheckboxStatus}
											/>
										</div>

										{/* Slider Harga*/}
										<div className='mt-5'>
											<p className='text-xl font-bold text-black mb-3'>Harga</p>
											<Toggle
												nama="Harga"
											/>
											<Slider/>
											
										</div>
										
										{/* Slider Bintang*/}
										<div className='mt-5'>
											<p className='text-xl font-bold text-black mb-3'>Bintang</p>
											<Toggle
												nama="Bintang"
											/>
											<Bintang/>
										</div>

									</div>

									<div className='mt-5'>
										<Button size="small">Confirm</Button>
									</div>

								</div>

							</div>

							{/* Search */}
							<form className="w-36 md:w-52 xl:w-[350px]">
								<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<svg
											aria-hidden="true"
											className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
										className="block w-full px-8 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Cari Item"
										required
									/>
								</div>
							</form>

							{/* Showing */}
							<div className="flex items-center">
								<p className="mr-4 text-[10px] hidden md:block xl:text-lg">SHOWING 1 - 6 OF 12 ITEM(S)</p>
							<Dropdown></Dropdown>
							</div>

						</div>

					</div>
					
					{/* Card Restaurant */}
					<div className='flex flex-wrap gap-5 justify-center lg:justify-between xl:gap-10 mb-10'>
						{
								restaurant.map((item, index) => {
									return (
										<Card
											key={index}
											id={item._id}
											title={item.nama}
											image={process.env.REACT_APP_API_BASE_URL+"/storage/restoran/" + item.thumbnail}
											address={item.lokasi.alamat}
											rating={item.rating}
											open={item.jam_buka}
											close={item.jam_tutup}
											link={"/restaurant/detail/"+ item._id}
										/>
									)
								})
							}
						{/* <Card
							title="Ghizra Kitchen"
							image={IMAGES.restaurant1}
							address="Ciwaru, Sukabumi"
							rating="500"
							open="07.00"
							close="19.00"
							link={"/restaurant/detail"}
						/>
						<Card
							title="Kusbick Coffe"
							image={IMAGES.restaurant2}
							address="Ciwaru, Ciemas"
							rating="487"
							open="10.00"
							close="23.59"
							link={"/restaurant/detail"}
						/>
						<Card
							title="Lesehan Ibu Sri"
							image={IMAGES.restaurant3}
							address="Ciwaru, Ciemas"
							rating="320"
							open="05.00"
							close="18.00"
							link={"/restaurant/detail"}
						/>
						<Card
							title="Saung Kapikat"
							image={IMAGES.restaurant4}
							address="Ciwaru, Ciemas"
							rating="438"
							open="07.00"
							close="21.00"
							link={"/restaurant/detail"}
						/>
						<Card
							title="Resto Panenjoan"
							image={IMAGES.restaurant5}
							address="Tamanjaya, Ciemas"
							rating="420"
							open="13.00"
							close="23.00"
							link={"/restaurant/detail"}
						/>
						<Card
							title="Ciletuh Cafe"
							image={IMAGES.restaurant6}
							address="Curug Sodong, Ciletuh"
							rating="120"
							open="07.00"
							close="21.00"
							link={"/restaurant/detail"}
						/> */}
					</div>

					{/* Artikel */}
					<div className="relative bg-center bg-cover bg-article-restaurant h-96 rounded-md overflow-hidden">
						<div className='w-full h-full bg-gray-900 opacity-40'></div>
						<div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-full text-white md:items-start md:mx-10">
							<p className="text-xl font-bold text-center mb-2 md:text-left md:text-2xl md:w-[500px]">
								KEINDAHAN SAMBIL MENIKMATI SECANGKIR KOPI DI GEOPARK CILETUH
							</p>
							<button className="flex items-center px-8 py-4 bg-yellow-300 rounded-md">
								<span className="font-semibold text-black">
									Lihat Artikel
								</span>
							</button>
						</div>
					</div>

				</div>
			</section>
		</PortalTemplate>
	);
};

export default Restaurant;
