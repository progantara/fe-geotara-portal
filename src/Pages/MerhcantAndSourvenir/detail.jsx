import React, { useState, useEffect } from 'react';

import PortalTemplate from '../../Component/Layout';

import { BiMap } from 'react-icons/bi';
import { BsHouseDoor } from 'react-icons/bs';
import { getOneMerchant } from '../../Services/MerchantService';
import { useParams } from 'react-router-dom';
import { Stars } from '../../Component/Stars/Stars'

const MerhcantAndSouvenirDetail = () => {
	const items = [
		{ label: 'Merhcant & Souvenir', url: '/merchant-sourvenir' },
		{ label: 'Merhcant & Souvenir Detail', url: '/MerhcantAndSouvenir/detail' },
	];

	const {id} = useParams();

	// Get Data Merchant
	const [merchant, setMerchant] = useState([]);

	useEffect(() => {
		getOneMerchant(id).then((res) => {
		setMerchant(res.data.data);
				console.log(res.data);
		});
	}, []);


	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col p-20 bg-green-100">
				<section>
					<div className="flex flex-col text-primary">
						<p className="text-4xl font-bold">{merchant.detail?.product?.nama}</p>
						<div className="flex items-center mt-4 mb-2">
							<Stars rating={merchant.detail?.product?.rating} />
						</div>
					</div>
					<div className="flex my-10">
						<div class="grid grid-cols-3 gap-4 w-1/2">
							<img src={process.env.REACT_APP_API_BASE_URL+ "/storage/merchant/" + merchant.detail?.product?.thumbnail} alt="merchant" class="col-span-3 rounded-xl relative h-[35rem] w-full bg-center bg-cover"/>
							{/* <div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div>
							<div
								class="rounded-xl relative w-full h-[9.375rem] bg-center bg-cover"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
								}}
							></div> */}
						</div>
						<div className="flex flex-col w-1/2 pl-4 space-y-4">
							<div className="flex flex-col p-4 rounded bg-white space-y-[1.375rem]">
								<p className="text-2xl font-bold text-primary">{merchant.detail?.product?.nama}</p>
								<div className="pr-20">
									<p className="font-bold">Spesifikasi Produk : </p>
									<p>{merchant.detail?.product?.deskripsi}</p>
								</div>
								<div className="flex flex-col">
									<p className="font-bold">Varian</p>

									<ol className="flex ml-4 space-x-8 list-disc ">
										<li>{merchant.detail?.product?.varian}</li>
									</ol>
								</div>
								<div className="flex flex-col font-extrabold flex-coltext-2xl">
									<p>Rp</p>
									<p className="text-red-500 "> {merchant.detail?.product?.harga}</p>
								</div>
							</div>
							<div className="flex flex-col w-full p-2 mt-20 bg-white text-primary">
								<p className="flex items-center font-bold">
									<BsHouseDoor className="mr-2" size={20} />
									Location Info
								</p>
								<p className="flex items-center mb-4">
									<BiMap className="mr-2" size={20} />
									{merchant.lokasi?.alamat}
								</p>
								<div
									class="rounded-xl relative w-full h-[18.75rem] bg-center bg-cover"
									style={{
										backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
									}}
								></div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</PortalTemplate>
	);
};

export default MerhcantAndSouvenirDetail;
