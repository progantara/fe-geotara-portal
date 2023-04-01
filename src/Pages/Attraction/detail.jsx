import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PortalTemplate from '../../Component/Layout';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { getOneAtraksi } from '../../Services/AtraksiService';
import { Stars } from '../../Component/Stars/Stars';

const AttractionDetail = () => {
	const items = [
		{ label: 'Attraction', url: '/Attraction' },
		{ label: 'Attraction Detail', url: '/Attraction/detail' },
	];

	const {id} = useParams();

	// Get Data Atraksi
	const [atraksi, setAtraksi] = useState([]);

	useEffect(() => {
		getOneAtraksi(id).then((res) => {
		setAtraksi(res.data.data);
				console.log(res.data);
		});
	}, []);

	return (
		<PortalTemplate items={items}>
			<div className="flex flex-col p-20 bg-green-100">
				<section>
					<div className="flex flex-col text-primary">
						<p className="sm:text-2xl lg:text-4xl font-bold">{atraksi.nama}</p>
						<div className="flex items-center mt-4 mb-2">
							<p className="text-black px-6 mr-2 rounded-3xl bg-[#FFE141]">{atraksi.detail?.tipe_atraksi}</p>
							<Stars rating={atraksi.detail?.rating} />
						</div>
					</div>
					<div className="flex flex-col md:flex-row my-10 gap-5">
						{/* <div className="w-full h-full md:w-[80%] md:h-[80%]">
							<div className="rounded-xl h-full w-full overflow-hidden bg-center bg-cover bg-white">
								<img src={"http://127.0.0.1:8000/storage/atraksi/" + atraksi.thumbnail} alt="atraksi"/>
							</div>
						</div> */}
						<div className="w-full h-full md:w-[80%] md:h-[80%]">
							<div className="rounded-xl h-full w-full overflow-hidden bg-center bg-cover bg-white">
								<img src={process.env.REACT_APP_API_BASE_URL + "/storage/atraksi/" + atraksi.thumbnail} alt="atraksi"/>
							</div>
						</div>
						<div className="grid sm:grid-cols-1 w-full lg:w-1/4 h-full lg:h-[50%]">
							<div className="flex flex-col overflow-hidden px-4 pt-5 space-y-4 bg-white rounded">
								<div>
									<p className="sm:text-lg text-2xl font-bold text-primary">
										{atraksi.nama}
									</p>
									<p>
										{atraksi.detail?.deskripsi}
									</p>
								</div>
								<div className="grid sm:grid-cols-1 md:grid-cols-2 w-full">
									<div>
										<p>Durasi</p>
										<p className="font-bold">
											{atraksi.detail?.durasi} {' '}
											<span className="text-black">
												menit
											</span>
										</p>
									</div>
									<div>
										<p>Kapasitas</p>
										<p className="font-bold">{atraksi.detail?.kapasitas}{' '}
											<span className="text-black">
												orang
											</span>
										</p>
									</div>
								</div>
								<div className="sm:text-sm lg:text-lg">
									<p className="font-bold">Rp</p>
									<p className="font-bold text-red-500">
										{atraksi.harga_tiket}{' '}
										<span className="text-sm text-black">
											/ Tiket
										</span>
									</p>
									<button className="flex mt-4 items-center px-6 py-3 text-white rounded-lg shadow bg-primary">
										Pesan Tiket <AiOutlineArrowRight />
									</button>
								</div>
								<p></p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</PortalTemplate>
	);
};

export default AttractionDetail;
