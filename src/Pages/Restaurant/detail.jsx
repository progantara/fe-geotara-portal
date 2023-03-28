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
			<div className="flex flex-col p-20 pt-5 space-y-10 bg-green-100 text-primary">
				<section>
					<div className="text-center">
						<p className="font-bold text-4xl">{restaurant.nama}</p>
						<p>No telp : {restaurant.no_telp}</p>
						<p>Email : {restaurant.email}</p>
						<img src={"http://127.0.0.1:8000/storage/restoran/" + restaurant.thumbnail} alt="background" className="mt-2 h-96 w-[70%] mx-auto object-cover rounded-lg" />
					</div>
				</section>

				<section>
					<div className="flex flex-col text-primary">
						<p className="text-4xl font-bold">Location Info</p>
						<div className="flex items-center">
							<BiMap size={20} />
							<p>{restaurant.lokasi?.alamat}</p>
						</div>
					</div>
					<div className="flex mt-4">
						<div class="h-[9.5rem] w-full bg-center bg-cover">
							<img src={IMAGES.map1} alt="background" className="h-52 w-full mx-auto object-cover rounded-lg" />
						</div>
					</div>
				</section>

				<section>
					<div className="text-center mt-10">
						<p className="font-bold text-4xl mb-5">Menu</p>

						<div className="grid grid-cols-3 gap-14 ">
							<Card
								id={restaurant._id}
								title={restaurant.detail?.menu[0].nama}
								image={"http://127.0.0.1:8000/storage/restoran/" + restaurant.thumbnail}
								address={restaurant.lokasi?.alamat}
								rating={restaurant.detail?.menu[0].rating}
								price={restaurant.detail?.menu[0].harga}
							/>
							<Card
								id={restaurant._id}
								title={restaurant.detail?.menu[1].nama}
								image={"http://127.0.0.1:8000/storage/restoran/" + restaurant.thumbnail}
								address={restaurant.lokasi?.alamat}
								rating={restaurant.detail?.menu[1].rating}
								price={restaurant.detail?.menu[1].harga}
							/>
						</div>
					</div>
				</section>
			</div>
		</PortalTemplate>
	);
};

export default RestaurantDetail;
