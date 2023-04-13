import axios from 'axios';

export const getTopAtraksi = () => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+ `/api/portal/topAtraksi`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getAtraksi = () => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+ `/api/portal/atraksi`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneAtraksi = (id) => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+ `/api/portal/atraksi/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};