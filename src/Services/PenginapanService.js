import axios from 'axios';

export const getTopPenginapan = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/topPenginapan`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getPenginapan = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/penginapan`, {
		headers: {
			Accept: 'application/json',
		},
	});
};