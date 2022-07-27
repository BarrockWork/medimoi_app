const axios = require('axios');

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const apiAxios = axios.create({
    baseURL: `${apiBaseUrl}`,
    timeout: 5000,//milliseconds
});

export default apiAxios;