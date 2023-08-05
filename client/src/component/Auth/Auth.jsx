import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { signin, signup } from '../../actions/auth';

const Auth = () => {
  const navigate = useNavigate();
  const [ isSignup, setIsSignup ] = useState(true);
  const [ userAuthInfo, setUserAuthInfo ] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});

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

  const handleChange = (e) => {
    setUserAuthInfo({ ...userAuthInfo, [e.target.name] : e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      signup(userAuthInfo, navigate);
    } else {
      signin(userAuthInfo, navigate);
    }
  }

  const handleStatusChange = () => {
    setIsSignup((prevState) => !prevState);
    setUserAuthInfo({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});
  }

  return (
    <div className='flex items-center justify-center'>
        <form className='flex flex-col gap-4 sm:py-12 sm:px-4 py-2 px-1 sm:mt-10 rounded-lg border items-center sm:m-2 my-8 mx-2 w-full max-w-sm' onSubmit={handleSubmit}>
          <h1 className='sm:text-2xl text-lg font-bold mb-4'>{isSignup ? 'Create Account': 'Welcome To YouTubeClone' }</h1>
          {isSignup && ( 
              <div className='flex sm:gap-2 gap-1 w-full'>
                <input className='p-1 rounded-sm w-full text-black' type='text' placeholder='First Name*' name='firstName' value={userAuthInfo.firstName} autoFocus required onChange={handleChange}/>
                <input className='p-1 rounded-sm w-full text-black' type='text' placeholder='Last Name' name='lastName' value={userAuthInfo.lastName} onChange={handleChange}/>
              </div>
            )
          }
          <input className='w-full p-1 rounded-sm text-black' type='email' placeholder='Email*' name='email' value={userAuthInfo.email}  required onChange={handleChange}/>
          <input className='w-full p-1 rounded-sm text-black' type='password' placeholder='Password*' name='password' value={userAuthInfo.password} required onChange={handleChange}/>
          { isSignup && <input className='w-full p-1 rounded-sm text-black' type='password' placeholder='Confirm Password*' name='confirmPassword' value={userAuthInfo.confirmPassword} required onChange={handleChange}/>}
          <button className='border rounded-sm w-full p-1'>{isSignup? 'SIGN UP' : 'SIGN IN'}</button>
          <div className='flex flex-col items-center gap-1 my-4'>
            <h4>OR</h4> 
            <h4>CONNECT with</h4>
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response)}
              onError={() => console.log('Something went wrong.Try again!')}
            />
          </div>
          <button className='' type='button' onClick={handleStatusChange}>{isSignup ? 'ALREADY HAVE ACCOUNT? SIGN IN' : 'DON\'HAVE ACCOUNT? SIGN UP' }</button>
        </form>
    </div>
  )
}

export default Auth;