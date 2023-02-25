import React from 'react';
import Logo from '../../Assets/img/logo.png';

import { Link, useNavigate } from 'react-router-dom';

const Breadcrumbs = (props) => {
	const { items } = props;
	const navigate = useNavigate();

	return (
		<nav class="flex py-1 bg-primary text-white px-20" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<Link to={'/'}>Beranda</Link>
				</li>
				{items.map((item, index) => {
					const isLastItem = index === items.length - 1;

					return (
						<li>
							<div class="flex items-center">
								<svg
									aria-hidden="true"
									class="w-6 h-6 "
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>

								{isLastItem ? item.label : <Link to={item.url}>{item.label}</Link>}
							</div>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
