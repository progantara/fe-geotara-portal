import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

function Card(props) {
	return (
		<div className="relative flex flex-col px-6 py-4 space-y-2 overflow-hidden bg-white rounded-[2rem] text-primary ">
			<div className="absolute top-0 left-0 w-16 h-16">
				<div className="absolute transform -rotate-45 bg-yellow-200 text-center text-white font-semibold py-1 left-[-36px] top-[32px] w-[170px]">
					<span className="text-red-500">10%</span>
					<span className="ml-2 text-black">OFF</span>
				</div>
			</div>
			<img src={props.image} alt="background hero" className="h-[15.75rem] rounded-3xl" />
			<div>
				<p className="text-2xl font-bold">Vanada Bugeul Cottage</p>
				<p className="flex items-center">
					<BiMap />
					Ciwaru, Ciemas
				</p>
			</div>
			<div className="flex items-center">
				<AiFillStar size={20} color="yellow" />
				<AiFillStar size={20} color="yellow" />
				<AiFillStar size={20} color="yellow" />
				<AiFillStar size={20} color="yellow" />
				<AiOutlineStar size={20} color="yellow" />
				<p className="ml-2 text-black">(365)</p>
			</div>
			<div className="flex items-center justify-between">
				<div className="">
					<p>
						Start From : <span className="text-red-500 line-through ">Rp 1,219,513</span>
					</p>
					<p className="text-2xl font-extrabold">Rp 1,097,561</p>
				</div>
				<div>
					<button className="px-6 py-3 text-white bg-primary rounded-xl">Lihat</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
