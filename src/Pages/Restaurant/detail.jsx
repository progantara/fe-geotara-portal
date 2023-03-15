import React from 'react';

import PortalTemplate from '../../Component/Layout';
import Card from '../../Component/Card/Card-no-button';

import BgHero from '../../Assets/img/hero.jpg';

import { BiMap } from 'react-icons/bi';

const RestaurantDetail = () => {
	const items = [
		{ label: 'Restaurant', url: '/Restaurant' },
		{ label: 'Restaurant Detail', url: '/Restaurant/detail' },
	];

	let data = [1, 2, 3, 4, 5, 6];

	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col p-20 space-y-10 bg-green-100 text-primary">
				<section>
					<div className="text-center">
						<p className="font-bold text-4xl">Ghizra Kitchen</p>
						<p>Ghizra Kitchen terletak di Kota Sukabumi, Jawa Barat. Perusahaan ini bekerja di industri berikut: Restoran.</p>
						<img src={BgHero} alt="background" className="mt-2" />
					</div>
				</section>

				<section>
					<div className="flex flex-col text-primary">
						<p className="text-4xl font-bold">Location Info</p>
						<div className="flex items-center">
							<BiMap size={20} />
							<p>Ciwaru, Ciemas, Sukabumi, West Java 43177</p>
						</div>
					</div>
					<div className="flex mt-4">
						<div
							class="h-[9.5rem] w-full bg-center bg-cover"
							style={{
								backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
							}}
						></div>
					</div>
				</section>
				<section>
					<div className="text-center">
						<p className="font-bold text-4xl">Menu</p>

						<div className="grid grid-cols-3 gap-14 ">
							{data.map((data, index) => {
								return <Card key={index} image={BgHero} link={'/attraction/detail'} />;
							})}
						</div>
					</div>
				</section>
			</div>
		</PortalTemplate>
	);
};

export default RestaurantDetail;
