import axios from 'axios';

// export const getTopTour = () => {
// 	return axios.get(process.env.REACT_APP_API_BASE_URL +`/api/portal/topTour`, {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	});
// };

// export const getTour = () => {
// 	return axios.get(process.env.REACT_APP_API_BASE_URL+ `/api/portal/tour`, {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	});
// };

// export const getOneTour = (id) => {
// 	return axios.get(process.env.REACT_APP_API_BASE_URL+ `/api/portal/tour/` + id, {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	});
// };

export const getTopTour = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/topTour`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getTour = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/tour`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneTour = (id) => {
	return axios.get(`http://127.0.0.1:8000/api/portal/tour/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};