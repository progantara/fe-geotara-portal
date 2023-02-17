import React from 'react';
import PortalTemplate from '../Component/Layout';

const Home = () => {
	return (
		<>
			<PortalTemplate>
				<h1 className="font-DMSans">Ini dm sans</h1>
				<h1>Ini bukan dm sans</h1>
			</PortalTemplate>
		</>
	);
};

export default Home;
