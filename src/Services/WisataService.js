import axios from 'axios';

export const getTopWisata = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/topWisata`, {
		headers: {
			Accept: 'application/json',
		},
	});
};