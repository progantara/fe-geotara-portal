import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PortalTemplate from '../../Component/Layout';
import { Card } from '../../Component/Card/Card';

import BgHero from '../../Assets/img/hero.jpg';
import IMAGES from '../../Assets/img';
import { BiMap } from 'react-icons/bi';
import { getOneRestaurant } from '../../Services/RestaurantService';

const RestaurantDetail = () => {
	const items = [
		{ label: 'Restaurant', url: '/Restaurant' },
		{ label: 'Restaurant Detail', url: '/Restaurant/detail' },
	];

	let data = [1, 2, 3, 4, 5, 6];

	const {id} = useParams();

	// Get Data Detail Restaurant
	const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getOneRestaurant(id).then((res) => {
      setRestaurant(res.data.data);
    });
  }, []);

	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col p-4 lg:p-20 pt-5 bg-green-100 text-primary md:pt-5">
				<section>
					<div className="text-center">
						<p className="font-bold text-4xl">{restaurant.nama}</p>
						<p>No telp : {restaurant.no_telp}</p>
						<p>Email : {restaurant.email}</p>
						{
							restaurant.thumbnail &&
							<img src={process.env.REACT_APP_API_BASE_URL + "/storage/restoran/" + restaurant.thumbnail} alt="background" className="mt-2 h-52 md:h-96 w-[70%] bg-white mx-auto object-cover rounded-lg overflow-hidden" />
						}
					</div>
				</section>

				<section className='md:px-16'>
					<div className="flex flex-col text-primary mt-5">
						<p className="text-xl md:text-4xl font-bold">Location Info</p>
						<div className="flex items-center">
							<BiMap size={20} />
							{
								restaurant.lokasi &&
								<p className='text-sm md:text-xl'>{restaurant.lokasi?.alamat}</p>
							}
						</div>
					</div>
					<div className="flex mt-4">
						<div class="h-32 w-full bg-center bg-cover md:h-96">
							<img src={IMAGES.map1} alt="background" className="h-full w-full mx-auto object-cover rounded-lg" />
						</div>
					</div>
				</section>

				<section>
					<div className="text-center mt-10">
						<p className="font-bold text-4xl mb-5">Menu</p>

						<div className="flex flex-col justify-center items-center gap-2 md:flex-row">
							{
								restaurant.detail &&
								restaurant.detail.menu.map((item, index) => {
									return (
										<Card
											key={"menu-" + index}
											id={restaurant.detail._id}
											title={item.nama}
											image={process.env.REACT_APP_API_BASE_URL + "/storage/restoran/" + restaurant.thumbnail}
											address={restaurant.lokasi?.alamat}
											rating={item.rating}
											price={item.harga}
										/>
									)
								})
							}
						</div>
					</div>
				</section>
				
			</div>
		</PortalTemplate>
	);
};

export default RestaurantDetail;
