import axios from 'axios'

export const getAllArtikel = () => {
    return axios.get (process.env.REACT_APP_API_BASE_URL+`/api/portal/artikel`),{
        headres:{
            Accept: 'application/json',
        }
    }
}

export const getTopArtikel = () => {
    return axios.get (process.env.REACT_APP_API_BASE_URL+`/api/portal/topArtikel`,{
        headres:{
            Accept: 'application/json',
        }
    })
}

export const getOneArtikel = (id) => {
	return axios.get(process.env.REACT_APP_API_BASE_URL+`/api/portal/artikel/` + id, {
		headers: {
			Accept: 'application/json',
		},
	});
};