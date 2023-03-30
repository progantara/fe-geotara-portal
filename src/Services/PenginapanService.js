import axios from 'axios';

export const getTopPenginapan = () => {
	
	return axios.get(process.env.REACT_APP_API_BASE_URL + `/api/portal/topPenginapan`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getPenginapan = () => {
	return axios.get(process.env.REACT_APP_API_BASE_URL + `/api/portal/penginapan`, {
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getOnePenginapan = (id) => {
	return axios.get(process.env.REACT_APP_API_BASE_URL + `/api/portal/penginapan/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};

// export const getAllDesa = () => {
// 	return axios.get(process.env.REACT_APP_API_BASE_URL+`/api/master/lokasi/desa`, {
// 		headers: {
// 			Accept: 'application/json',
// 			Authorization: `Bearer 6422f02b7927fb12fa066153|hUuxTOUVZEtcJnQv7z0DeBuHGuPloU7YvyO46SXE`,
// 		},
// 	});
// };

// export const getOneDesa = (id) => {
// 	return axios.get(process.env.REACT_APP_API_BASE_URL+`/api/master/lokasi/desa/` + id, {
// 		headers: {
// 			Accept: 'application/json',
// 			Authorization: `Bearer 6422f02b7927fb12fa066153|hUuxTOUVZEtcJnQv7z0DeBuHGuPloU7YvyO46SXE`,
// 		},
// 	});
// };