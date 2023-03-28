import axios from 'axios';

export const getTopWisata = () => {
	return axios.get(process.env.API_BASE_URL+`/api/portal/topWisata`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getWisata = (id) => {
	return axios.get(process.env.API_BASE_URL+`/api/portal/wisata/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getAllWisata = () => {
	return axios.get(process.env.API_BASE_URL+`/api/portal/wisata`, {
		headers: {
			Accept: 'application/json',
		},
	});
}