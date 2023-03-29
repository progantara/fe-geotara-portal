import axios from 'axios';

export const getTopRestaurant = () => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+`/api/portal/topRestoran`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getRestaurant = () => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+`/api/portal/restoran`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneRestaurant = (id) => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+`/api/portal/restoran/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};