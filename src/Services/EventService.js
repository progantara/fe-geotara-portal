import axios from 'axios';

export const getTopEvent = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/topEvent`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getEvent = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/event`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneEvent = (id) => {
	return axios.get(`http://127.0.0.1:8000/api/portal/event/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};