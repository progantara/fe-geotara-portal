import React, { useEffect, useState } from 'react';
import PortalTemplate from '../../Component/Layout';

// Image
import profile from '../../Assets/img/profile.jpg';

import { Link, useParams } from 'react-router-dom';
import { getAllArtikel, getOneArtikel } from '../../Services/ArtikelService';

const handleTimestamp = (timestamp) => {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	// get name month
	const month = date.toLocaleString('default', { month: 'long' });
	const day = date.getDate();

	return `${day} ${month}, ${year}`;
};

const CardTerkait = ({ artikel }) => {
	const handleJudul = (judul) => {
		// hanya ambil 20 karakter
		const trimText = judul.substring(0, 40);
		return trimText + '...';
	};

	return (
		<Link to={'/artikel/detail/' + artikel._id} className="flex flex-col items-center p-2 lg:flex-row hover:bg-white">
			<div className="flex flex-wrap w-full h-20 lg:w-1/3">
				<img src={process.env.REACT_APP_API_BASE_URL + `/storage/artikel/` + artikel.thumbnail} alt="articel2" className="object-cover w-full h-full rounded-lg" />
			</div>
			<div className="w-full ml-2 lg:w-2/3">
				<p className="text-lg font-bold leading-5">{handleJudul(artikel.judul)}</p>
				<p className="text-xs">{handleTimestamp(artikel.updated_at)}</p>
			</div>
		</Link>
	);
};

const Detail = () => {
	const items = [
		{ label: 'Artikel', url: '/artikel' },
		{
			label: 'Keragaman Keindahan, Pariwisata Indonesia',
			url: '/artikel/detail',
		},
	];

	const { id } = useParams();
	const [artikel, setArtikel] = useState({});
	const [artikels, setArtikels] = useState([]);

	useEffect(() => {
		getOneArtikel(id).then((res) => {
			setArtikel(res.data.data);
		});
		getAllArtikel().then((res) => {
			setArtikels(res.data.data);
		});
	}, [id]);

	return (
		<>
			<PortalTemplate items={items}>
				<div className="px-4 py-10 bg-green-100 lg:px-20">
					<div id="title" className="mb-10">
						<h1 className="text-3xl font-bold text-green-900">{artikel.judul}</h1>
						<div className="flex items-center pt-3">
							<img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
							<p className="ml-1 mr-1 text-2xl text-yellow-200 ">•</p>
							<p className="text-sm">Admin</p>
							<p className="ml-1 mr-1 text-2xl text-yellow-200 ">•</p>
							<p className="text-sm">{artikel.tags ? artikel.tags[0] : ''}</p>
							<p className="ml-1 mr-1 text-2xl text-yellow-200 ">•</p>
							<p className="text-sm">{handleTimestamp(artikel.updated_at)}</p>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row">
						<div className="w-full lg:w-4/6">
							<div id="thumbnail" className="flex flex-wrap">
								<img
									src={
										process.env.REACT_APP_API_BASE_URL +
										`/storage/artikel/` +
										artikel.thumbnail
									}
									alt="thumbnail"
									className="object-cover w-full h-full rounded-lg"
								/>
							</div>
							<div id="content" className="mt-10">
								<div dangerouslySetInnerHTML={{ __html: artikel.content }} />
								<hr class="h-px my-8 bg-gray-700 border-0 dark:bg-gray-700"></hr>
							</div>
							{/* Komentar */}
							<div className="mx-auto max-w-1xl">
								<div className="flex items-center justify-between mb-6">
									<h2 className="text-lg font-bold text-green-900 lg:text-2xl">
										Komentar
									</h2>
								</div>
								<form className="mb-6">
									<div className="px-4 py-2 mb-6 bg-white border border-gray-200 rounded-lg rounded-t-lg dark:bg-gray-800 dark:border-gray-700">
										<textarea
											id="comment"
											rows="6"
											className="w-full text-base text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
											placeholder="Berikan Komentar Anda......."
											required
										></textarea>
									</div>
									<button
										type="submit"
										className="inline-flex items-center px-8 py-4 text-base font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
									>
										Kirim Komentar
									</button>
								</form>
								<article className="p-6 mb-6 border-2 rounded-lg text-bas dark:bg-gray-900 border-primary">
									<footer className="flex items-center justify-between mb-2">
										<div className="flex items-center">
											<p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
												<img
													class="mr-2 w-6 h-6 rounded-full"
													src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
													alt="Michael Gough"
												/>
												Michael
												Gough
											</p>
											<p class="text-sm text-gray-600 dark:text-gray-400">
												<time
													pubdate
													datetime="2022-02-08"
													title="February 8th, 2022"
												>
													Feb.
													8,
													2022
												</time>
											</p>
										</div>
									</footer>
									<p className="text-black dark:text-gray-400">
										Dalam keseluruhan, wisata ke Pantai
										Pangandaran adalah pengalaman yang tidak
										boleh dilewatkan. Kita dapat menikmati
										keindahan alam yang menakjubkan dan
										belajar tentang budaya lokal, sambil
										tetap menjaga kelestarian lingkungan dan
										kebudayaan setempat.
									</p>
								</article>
							</div>
						</div>
						<div className="w-full lg:w-2/6">
							<div className="lg:pl-5">
								<div id="tag" className="h-full p-5 border border-green-800 rounded-lg">
									<h1 className="mb-2 text-xl font-bold text-center">Tag</h1>
									<div className="flex flex-wrap justify-center">
										{artikel.tags &&
											artikel.tags.map(
												(
													tag,
													index
												) => (
													<div className="p-2 mb-2 mr-2 bg-green-800 rounded-lg">
														<p className="text-white">
															{
																tag
															}
														</p>
													</div>
												)
											)}
									</div>
								</div>
								<div
									id="related"
									className="h-full p-5 mt-5 border border-green-800 rounded-lg"
								>
									<h1 className="mb-2 text-xl font-bold text-center">
										Artikel Terkait
									</h1>
									{artikels &&
										artikels.map((artikel, index) => (
											<CardTerkait
												key={
													index
												}
												artikel={
													artikel
												}
											/>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</PortalTemplate>
		</>
	);
};

export default Detail;
