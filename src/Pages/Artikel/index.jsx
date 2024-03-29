import React, { useEffect, useState } from 'react';
import PortalTemplate from '../../Component/Layout';

// image
import articel1 from '../../Assets/img/Article-1.jpg';
import { getAllArtikel } from '../../Services/ArtikelService';
import ArtikelCard from '../../Component/Card/ArtikelCard';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

const BannerFirstArtikel = () => {
	return (
		<Link to="/artikel/detail/" className="relative">
			<div className="h-[35rem] w-full overflow-hidden relative lg:basis-2/3">
				<div className="absolute w-full h-full bg-gray-900 rounded-lg opacity-40" />
				<div className="absolute text-white bottom-28 left-10 lg:bottom-16">
					<h1 className="text-xl font-bold lg:text-3xl">
						<a href="/artike/detail">Keragaman Keindahan, Pariwisata Indonesia</a>
					</h1>
					<div className="flex items-center gap-2 text-xs lg:text-base">
						<p className="">Selly Ardiyaiti</p>
						<div class="w-1 h-1 rounded-full bg-yellow-300 text-2xl"></div>
						<p className="">Juni 27, 2019</p>
					</div>
				</div>
				<img src={articel1} alt="" className="rounded-lg object-cover w-full lg:w-[55rem] h-full" />
			</div>
		</Link>
	);
};

const ListPopularArtikel = ({ artikel }) => {
	const handleJudul = (judul) => {
		// hanya ambil 20 karakter
		const trimText = judul.substring(0, 40);
		return trimText + '...';
	};

	const handleTimestamp = (timestamp) => {
		const date = new Date(timestamp);
		const year = date.getFullYear();
		// get name month
		const month = date.toLocaleString('default', { month: 'long' });
		const day = date.getDate();

		return `${day} ${month}, ${year}`;
	};

	return (
		<Link to={'/artikel/detail/' + artikel._id} className="flex items-center p-2 mb-2 hover:bg-white">
			<div className="flex flex-wrap">
				<div className="w-32 h-20">
					<img
						className="object-cover w-full h-full rounded-lg"
						scr={process.env.REACT_APP_API_BASE_URL + `/storage/artikel/` + artikel.thumbnail}
						alt="post-2"
					/>
				</div>
			</div>
			<div className="ml-3 text-primary">
				<p className="font-bold text-md">{handleJudul(artikel.judul)}</p>
				<div className="flex flex-row items-center">
					<p className="ml-1 mr-1 text-2xl text-yellow-200">•</p>
					<p className="text-sm">{handleTimestamp(artikel.updated_at)}</p>
				</div>
			</div>
		</Link>
	);
};

const Artikel = () => {
	const items = [{ label: 'Artikel', url: '/artikel' }];

	const [artikels, setArtikels] = useState([]);

	useEffect(() => {
		getAllArtikel().then((res) => {
			setArtikels(res.data.data);
		});
	}, []);

	return (
		<PortalTemplate items={items}>
			<section className="p-5 bg-green-100 lg:px-32">
				<div className="flex flex-col gap-5 lg:flex-row">
					<div>
						<BannerFirstArtikel />
					</div>
					<div className="flex flex-col w-full p-5 border-2 rounded-lg border-primary lg:basis-1/3">
						<h1 className="mb-2 text-xl font-bold text-center text-primary">ARTIKEL POPULER</h1>
						<div className="flex items-center gap-3">
							<div className="w-32 h-24 overflow-hidden rounded-lg">
								<div className="text-primary">
									{artikels.map((artikel, index) => {
										return (
											<ListPopularArtikel
												key={
													index
												}
												artikel={
													artikel
												}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="p-5 bg-green-100 lg:px-32">
				<h2 className="mb-4 text-2xl font-bold text-primary">Artikel Terbaru</h2>
				<div className="flex flex-col gap-5 lg:flex-row">
					<div className="w-full p-5 border-2 rounded-lg border-primary lg:basis-2/3">
						<div className="flex flex-col gap-2 lg:flex-col">
							{artikels.map((artikel) => {
								return <ArtikelCard key={artikel.id} artikel={artikel} />;
							})}
						</div>
					</div>
					<div className="w-full p-5 border-2 rounded-lg border-primary lg:basis-1/3">
						<div className="flex flex-col justify-center gap-5">
							<div className="text-xl font-bold text-center text-primary">
								<h3>Kategori</h3>
							</div>
							<div className="flex justify-between text-primary">
								<div className="flex items-center gap-2 font-bold">
									<div>
										<BiChevronRight></BiChevronRight>
									</div>
									<div>
										<p>Penginapan</p>
									</div>
								</div>
								<div>
									<p>(2)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="p-5 lg:px-32 bg-green-100SA">
				<div className="flex flex-col items-center justify-center gap-5 pt-5 pb-10 bg-primary rounded-xl lg:w-1/2 lg:mx-auto">
					<h3 className="text-lg text-white">Newsletter</h3>
					<div className="flex flex-col justify-center gap-2 lg:flex-row">
						<input
							type="text"
							placeholder="Alamat Email"
							className="block w-56 text-gray-900 border border-gray-300 rounded-lg lg:h-14 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-96"
						/>
						<button className="px-4 py-3 text-sm font-semibold text-green-900 bg-yellow-300 rounded-lg hover:bg-yellow-400 text-dark">
							Subscribe
						</button>
					</div>
				</div>
			</section>
		</PortalTemplate>
	);
};

export default Artikel;
