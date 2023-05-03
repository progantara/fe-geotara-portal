import { Link } from 'react-router-dom';
import profile from '../../Assets/img/profile.jpg';

const ArtikelCard = ({ artikel }) => {
	const handleDescription = (text) => {
		// clear tags html
		const regex = /(<([^>]+)>)/gi;
		const result = text.replace(regex, '');
		// clear &nbsp;&amp;&quot;&gt;&lt;
		const regex2 = /(&nbsp;|&amp;|&quot;|&gt;|&lt;)/gi;
		const result2 = result.replace(regex2, '');

		// trim text
		const trimText = result2.substring(0, 200);
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
		<Link to={'/artikel/detail/' + artikel._id} className="flex flex-col items-center mb-4 space-y-2 lg:space-y-0 lg:p-5 lg:flex-row hover:bg-white">
			<div className="w-full lg:w-2/5 h-[12rem]">
				<img
					className="object-cover object-right w-full h-full rounded-lg"
					src={process.env.REACT_APP_API_BASE_URL + `/storage/artikel/` + artikel.thumbnail}
					alt="post-7"
				/>
			</div>
			<div className="w-full lg:pl-5 lg:w-3/5 ">
				<div className="flex flex-row text-sm font-semibold tracking-wide text-dark">
					<img className="w-10 h-8 rounded-full" src={profile} alt={profile} />
					<p className="mt-2 ml-2 text-sm text-dark">Admin</p>
					<p className="ml-1 mr-1 text-2xl text-yellow-200 ">•</p>
					<p className="mt-2 text-sm text-dark">Wisata</p>
					<p className="ml-1 mr-1 text-2xl text-yellow-200 ">•</p>
					<p className="mt-2 text-sm text-dark">{handleTimestamp(artikel.updated_at)}</p>
				</div>
				<div className="block mt-1 text-xl font-semibold text-green-900">{artikel.judul}</div>
				<p className="mt-2 mr-10 text-base text-green-900">{handleDescription(artikel.content)}</p>
			</div>
		</Link>
	);
};

export default ArtikelCard;
