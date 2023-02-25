import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Auth/Login';
import Regis from './Pages/Auth/Regis';
import Forgot from './Pages/Auth/Forgot';

import Home from './Pages';
import Artikel from './Pages/Artikel';
import Event from './Pages/Event';
import Virtual from './Pages/Virtual-tour';

import Accomodation from './Pages/Accomodation';

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

					<Route path="/Accomodation" element={<Accomodation />} />

					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
