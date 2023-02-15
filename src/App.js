import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<h1 className="text-3xl font-bold text-green-600 underline">Home!</h1>} />
					<Route path="/coba" element={<h1 className="text-3xl font-bold text-green-600 underline">Coba!</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
