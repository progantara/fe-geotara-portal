import axios from 'axios';

export const getTopRestaurant = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/topRestoran`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getRestaurant = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/restoran`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneRestaurant = (id) => {
	return axios.get(`http://127.0.0.1:8000/api/portal/restoran/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};