import axios from 'axios';

export const getTopMerchant = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/topMerchant`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getMerchant = () => {
	return axios.get(`http://127.0.0.1:8000/api/portal/merchant`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOneMerchant = (id) => {
	return axios.get(`http://127.0.0.1:8000/api/portal/merchant/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};