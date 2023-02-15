import Nav from '../Navbar';
import Footer from '../Footer';

function PortalTemplate(props) {
	return (
		<>
			<Nav />
			{props.children}
			<Footer />
		</>
	);
}

export default PortalTemplate;
