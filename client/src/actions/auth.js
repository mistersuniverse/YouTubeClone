import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin = async ( userAuthInfo, navigate ) => {
    try {
        const { data } = await api.signin(userAuthInfo);
        console.log(data)
        localStorage.setItem('userProfile', JSON.stringify({userInfo: data.result , token: data.token}));
        navigate('/');
    } catch (err) {
        console.log(err);
    }

}

export const signup = async ( userAuthInfo, navigate ) => {
    try {
        const { data } = await api.signup(userAuthInfo);
        console.log(data);  
        localStorage.setItem('userProfile', JSON.stringify({userInfo: data.result , token: data.token}));
        navigate('/');
    } catch (err) {
        console.log(err);
    }

}

export const logout = (navigate) => {
    localStorage.clear();
    navigate('/')
}