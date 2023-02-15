import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages';
import Artikel from './Pages/Artikel';
import Event from './Pages/Event';
import Virtual from './Pages/Virtual-tour';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/artikel" element={<Artikel />} />
					<Route path="/event" element={<Event />} />
					<Route path="/virtual-tour" element={<Virtual />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
