import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

import { Link } from 'react-router-dom';

function Card(props) {
	return (
		<div className=" flex flex-col px-6 py-4 space-y-2 overflow-hidden bg-white rounded-[2rem] text-primary ">
			<img src={props.image} alt="background hero" className="h-[15.75rem] rounded-3xl" />
			<div>
				<p className="text-2xl font-bold text-left">Vanada Bugeul Cottage</p>
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
			<div className="flex items-center justify-center">
				<p className="text-2xl font-extrabold">Rp 1,097,561</p>
			</div>
		</div>
	);
}

export default Card;
