import axios from 'axios'

export const getAllArtikel = () => {
    return axios.get (`http://127.0.0.1:8000/api/portal/artikel`,{
        headres:{
            Accept: 'application/json',
        }
    })
}

export const getTopArtikel = () => {
    return axios.get (`http://127.0.0.1:8000/api/portal/topArtikel`,{
        headres:{
            Accept: 'application/json',
        }
    })
}

export const getOneArtikel = (id) => {
	return axios.get(`http://127.0.0.1:8000/api/portal/artikel/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};