import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../../../actions/auth';

const UserOptions = ({userProfile}) => {

    const navigate = useNavigate();
    
    return (
        <div className='absolute lg:top-4 top-3 lg:right-14 sm:right-12 right-10 bg-[#282828] flex flex-col gap-2 p-4 rounded-xl shadow-2xl'>
            <div className='flex gap-4 items-start'>
                <div>
                    {
                        userProfile.userInfo?.picture ? (
                            <img className='rounded-full max-w-none sm:w-9 sm:h-9 h-7 w-7 mt-2' src={userProfile.userInfo.picture} />
                        ) : (
                            <div className='bg-red-700 rounded-full max-w-none sm:w-9 sm:h-9 h-7 w-7 mt-2 flex items-center justify-center border text-lg sm:text-xl'>{userProfile.userInfo.name.charAt(0).toUpperCase()}</div>
                        )
                    }   
                </div>
                <div>
                    <h1>{userProfile.userInfo.name}</h1>
                    <h1>userid</h1>
                    <h2 className='mt-4'><Link>Manage your Google Account</Link></h2>
                </div>

            </div>

            <hr />

            <div className='flex flex-col'>
                <Link className='hover:bg-[#ffffff33] p-2 rounded-lg' to=''>Your channel</Link>
                <Link className='hover:bg-[#ffffff33] p-2 rounded-lg' to={'/'}>YouTube</Link>
                <Link className='hover:bg-[#ffffff33] p-2 rounded-lg' to=''>Switch Account</Link>
                <button className='hover:bg-[#ffffff33] p-2 rounded-lg text-left' onClick={() => logout(navigate)}>Sign out</button>
            </div>
                    
            <hr />

            <div className='flex flex-col'>
                <Link className='hover:bg-[#ffffff33] p-2 rounded-lg' to=''>Help</Link>
                <Link className='hover:bg-[#ffffff33] p-2 rounded-lg' to=''>Send feedback</Link>
            </div>
        </div>
    )
}

export default UserOptions;