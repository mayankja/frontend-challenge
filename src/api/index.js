import axios from 'axios';

const api = (method, url, params) => {
    return axios({ method: method, url: `http://localhost:3001${url}`, params: params })
        .then((res) => { return res; })
        .catch((err) => { throw err; });
}

export const getCars = (params) => {
    return api('get', `/cars.json`, params)
        .then((res) => { return res.data; })
        .catch((err) => { throw err; });
}