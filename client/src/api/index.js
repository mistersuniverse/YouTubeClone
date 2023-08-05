import axios from 'axios';

const DEVELOPMENT_URL = 'http://localhost:5000';
const DEPLOYMENT_URL = 'https://youtubeclone-backend-u64g.onrender.com/';

// const API = axios.create( {baseURL: DEVELOPMENT_URL} );
const API = axios.create( {baseURL: DEPLOYMENT_URL} );

API.interceptors.request.use((req) => {
    if (localStorage.getItem('userProfile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`
    }
    return req;
})


export const fetchContentsByChannel = (channelID) => API.get(`/contents/${channelID}`);
export const fetchContentByID = (contentID) => API.get(`/watch/${contentID}`);
export const fetchChannelByContent = (channelID) => API.get(`/watch/${channelID}`);
export const uploadContent = (contentData, channelID, channelName, channelLogo) => API.post(`/channel/${channelID}/videos/upload?channelname=${channelName}&channellogo=${channelLogo}`, contentData);
export const fetchContents = () => API.get('/contents');
export const deleteContent = (channelID) => API.delete(`/content/delete/${channelID}`);

export const signin = (userAuthInfo) => API.post('/users/signin', userAuthInfo);
export const signup = (userAuthInfo) => API.post('/users/signup', userAuthInfo);