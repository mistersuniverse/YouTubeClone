import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faVideo, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setStudioSideBar, showStudioSideBar}) => {
    const [ create, setCreate ] = useState(false);
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center sm:px-2 sm:py-8 sm:gap-4 gap-1 sm:h-10 h-4 py-6 px-1 shadow-xl fixed w-full'>

            <div className='flex gap-4 items-center '>
                <div className='text-xl cursor-pointer pb-0.5 rounded-full sm:w-12 sm:h-12 w-8 h-8 hover:bg-[#ffffff14] sm:flex hidden items-center justify-center' onClick={() => setStudioSideBar(!showStudioSideBar)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className='sm:w-24 w-[5rem] ml-4 fill-white cursor-pointer' onClick={() => navigate(`/studio/${userProfile?.userInfo.sub}/${userProfile?.userInfo.name}`)}>
                    <img src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg" />   
                </div>
            </div>

            <div className='max-w-[800px] w-full bg-inherit sm:px-4 sm:border border-[#ffffff1a] sm:h-12 text-lg  text-[#ffffff14] items-center justify-end gap-2 flex'>
                <div className='text-white'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>  
                <input className='bg-inherit focus:outline-none focus:text-white w-full hidden sm:block' placeholder=' Search across your channel' onFocus={() => setInputExtension(true)} onBlur={() => setInputExtension(false)} />
            </div>


            <div className='flex sm:gap-1 gap-0.5 items-center'>
                {   
                    userProfile?.userInfo ? (
                    <div className='flex sm:gap-4 gap-0.25 items-center'>
                        <div>
                            <button className='text-xl cursor-pointer rounded-full w-12 h-12 hover:bg-[#ffffff14] flex items-center justify-center' onMouseOver={() => setCreate(true)} onMouseOut={() => setCreate(false)} onClick={() => alert("work in progress")}>
                                <FontAwesomeIcon icon={faVideo} />
                            </button>
                            { create && <div className='absolute top-20 bg-[#717171] rounded-md p-2 text-xs'>Create</div> }
                        </div>
                    </div> 
                    ) : 
                    <div className='text-xl cursor-pointer rounded-full sm:w-12 sm:h-12 h-8 w-8 hover:bg-[#ffffff14] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                }
                
                {
                    userProfile?.userInfo ? (
                        <div>
                            <div className='' onClick={() => navigate('/auth')}>

                            {
                                userProfile.userInfo?.picture ? (
                                    <img className='rounded-full max-w-none sm:w-10 sm:h-10 h-8 w-8' src={userProfile.userInfo.picture} />
                                ) : (
                                    <div className='rounded-full'>{userProfile.userInfo.name.charAt(0)}</div>
                                )
                            }
                            </div>
                        </div>
                    ) : (
                        
                        <div className=''>
                            <div className='flex items-center gap-1.5 sm:w-[100px] sm:border border-[#ffffff1a] rounded-full px-2 sm:h-10 h-6 text-[#3ea6ff] cursor-pointer hover:bg-[#98bfe1] hover:bg-opacity-40' onClick={() => navigate('/auth')}>
                                <div className='border border-[#3ea6ff] rounded-full w-6 h-6 flex items-center justify-center text-md'>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <h2 className=' text-md hidden sm:block'>Sign In</h2>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
    }

export default Navbar;