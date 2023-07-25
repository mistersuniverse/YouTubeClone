import axios from 'axios';

const DEVELOPMENT_URL = 'http://localhost:5000';
const DEPLOYMENT_URL = '';

const API = axios.create( {baseURL: DEVELOPMENT_URL} );

API.interceptors.request.use((req) => {
    if (localStorage.getItem('userProfile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`
    }
    return req;
})


export const uploadContent = (contentData, channelID, channelName, channelLogo) => API.post(`/channel/${channelID}/videos/upload?channelname=${channelName}&channellogo=${channelLogo}`, contentData);
export const fetchContents = () => API.get('/contents');