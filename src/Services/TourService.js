import axios from 'axios';

export const getTopTour = () => {
	return axios.get(process.env.REACT_APP_API_BASE_URL +`/api/portal/topTour`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getTour = () => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+ `/api/portal/tour`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneTour = (id) => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+ `/api/portal/tour/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};