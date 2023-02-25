import { useLocation } from 'react-router-dom';

import Nav from '../Navbar';
import Breadcumb from '../Breadcumb';
import Footer from '../Footer';

function PortalTemplate(props) {
	const location = useLocation();

	const notBreadcumb = location.pathname != '/';

	return (
		<>
			<Nav />
			{notBreadcumb && <Breadcumb items={props.items} />}
			{props.children}
			<Footer />
		</>
	);
}

export default PortalTemplate;
