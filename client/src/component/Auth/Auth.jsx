import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Auth = () => {
  const navigate = useNavigate();

  const createOrGetUser = async (response) => {

    const token = response.credential;
    const userInfo = jwtDecode(token);

    try {
      localStorage.setItem('userProfile', JSON.stringify( { userInfo, token } )); // localStorage.setItem(key, value)
      navigate('/');
    } catch (error) {
      console.log(error);
    }   
  }    

  const logout = () => { localStorage.clear(); navigate('/') };

  return (
    <div className='text-white'>
      <GoogleLogin
        onSuccess={(response) => createOrGetUser(response)}
        onError={() => console.log('Something went wrong.Try again!')}
      />

      <button className='' onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Auth;