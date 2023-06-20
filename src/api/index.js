import axios from "axios";
axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization:  'Bearer '+localStorage.adminToken
}
export const postRequest = (payload,url) =>
axios.post(`${process.env.REACT_APP_API_BASE_URL}${url}`,payload);

export const getRequest = (url) =>
axios.get(`${process.env.REACT_APP_API_BASE_URL}${url}`);

export const putRequest = (url) =>
axios.put(`${process.env.REACT_APP_API_BASE_URL}${url}`);