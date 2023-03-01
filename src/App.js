import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages';
import Artikel from './Pages/Artikel';
import Detail from './Pages/Artikel/Detail';
import Event from './Pages/Event';
import Virtual from './Pages/Virtual-tour';
import Login from './Pages/Auth/Login';
import Regis from './Pages/Auth/Regis';
import Forgot from './Pages/Auth/Forgot';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/artikel" element={<Artikel />} />
					<Route path="/Detail" element={<Detail />} />
					<Route path="/event" element={<Event />} />
					<Route path="/virtual-tour" element={<Virtual />} />
					<Route path ="/Login" element ={<Login/>} />
					<Route path ="/Regis" element ={<Regis/>} />
					<Route path ="/Forgot" element ={<Forgot/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
