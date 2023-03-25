import React from 'react';

import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {
	const { items } = props;

	return (
		<nav className="flex px-4 py-1 text-white bg-primary" aria-label="Breadcrumb">
			<ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm">
				<li className="inline-flex items-center">
					<Link to={'/'}>Beranda</Link>
				</li>
				{items.map((item, index) => {
					const isLastItem = index === items.length - 1;

					return (
						<li key={index}>
							<div className="flex items-center">
								<svg
									aria-hidden="true"
									className="w-6 h-6 "
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
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
