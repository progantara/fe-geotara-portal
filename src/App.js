import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Auth/Login';
import Regis from './Pages/Auth/Regis';
import Forgot from './Pages/Auth/Forgot';

import Home from './Pages';
import Artikel from './Pages/Artikel';
import Event from './Pages/Event';
import Virtual from './Pages/VirtualTour';

import Accomodation from './Pages/Accomodation';
import AccomodationDetail from './Pages/Accomodation/detail';

import TourAndTravel from './Pages/TourAndTravel';
import TourAndTravelDetail from './Pages/TourAndTravel/detail';

import MerhcantAndSourvenir from './Pages/MerhcantAndSourvenir';
import MerhcantAndSourvenirDetail from './Pages/MerhcantAndSourvenir/detail';

import Restaurant from './Pages/Restaurant';

import Attraction from './Pages/Attraction';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/Login" element={<Login />} />
					<Route path="/Regis" element={<Regis />} />
					<Route path="/Forgot" element={<Forgot />} />

					<Route exact path="/" element={<Home />} />
					<Route path="/artikel" element={<Artikel />} />
					<Route path="/event" element={<Event />} />
					<Route path="/virtual-tour" element={<Virtual />} />

					{/* Akomodasi */}
					<Route exact path="/accomodation" element={<Accomodation />} />
					<Route path="/accomodation/detail" element={<AccomodationDetail />} />

					{/* Tour And Travel */}
					<Route exact path="/tour-travel" element={<TourAndTravel />} />
					<Route path="/tour-travel/detail" element={<TourAndTravelDetail />} />

					<Route exact path="/merchant-sourvenir" element={<MerhcantAndSourvenir />} />
					<Route path="/merchant-sourvenir/detail" element={<MerhcantAndSourvenirDetail />} />

					<Route path="/restaurant" element={<Restaurant />} />
					<Route path="/attraction" element={<Attraction />} />

					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
