const axios = require('axios');

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
console.log('baseUrl', apiBaseUrl)
const apiAxios = axios.create({
    baseURL: `${apiBaseUrl}`,
    timeout: 5000,//milliseconds
});

export default apiAxios;