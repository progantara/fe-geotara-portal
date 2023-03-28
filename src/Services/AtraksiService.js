import axios from 'axios';

export const getTopAtraksi = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/topAtraksi`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getAtraksi = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/atraksi`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneAtraksi = (id) => {
	return axios.get(`http://127.0.0.1:8000/api/portal/atraksi/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};