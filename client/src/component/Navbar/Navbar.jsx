import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMicrophone, faMagnifyingGlass, faVideo, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

import YouTubeLogo from './YouTubeLogo';

const Navbar = ({setActiveSideBar, activeSideBar}) => {
    const [ inputExtension, setInputExtension ] = useState(false);
    const [ voiceSearch, setVoiceSearch ] = useState(false);
    const [ searchButton, setSearchButton ] = useState(false);
    const [ create, setCreate ] = useState(false);
    const [ bell, setBell ] = useState(false);
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const navigate = useNavigate();

    return (
        <div className='flex justify-between sm:px-6 sm:py-6 sm:gap-8 gap-2 sm:h-20 h-10 py-12 px-2 fixed'>

            <div className='flex gap-6 items-center '>
                <div className='text-3xl cursor-pointer pb-0.5 rounded-full sm:w-16 sm:h-16 w-8 h-8 hover:bg-[#ffffff14] sm:flex hidden items-center justify-center' onClick={() => setActiveSideBar(!activeSideBar)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className='w-36 fill-white cursor-pointer' onClick={() => navigate('/')}>
                    <YouTubeLogo />
                </div>
            </div>

            <div className='flex gap-4 items-center w-[1000px]'>
                <div className='flex items-center flex-1'>
                    <div className='rounded-l-full bg-inherit px-8 border border-[#ffffff1a] h-16 text-2xl  text-[#ffffff14] items-center gap-4 w-full hidden sm:flex'>
                        {inputExtension && <div className='text-white'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>}
                        <input className='bg-inherit focus:outline-none focus:text-white w-full' placeholder=' Search' onFocus={() => setInputExtension(true)} onBlur={() => setInputExtension(false)} />
                    </div>
                    <div className='sm:border sm:border-[#ffffff1a] rounded-full sm:rounded-none sm:rounded-r-full sm:w-24 sm:h-16 w-8 h-8 flex items-center justify-center text-3xl sm:bg-[#ffffff14] cursor-pointer' onMouseOver={() => setSearchButton(true)} onMouseOut={() => setSearchButton(false)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        {searchButton && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Search</div>}
                    </div>
                </div>
                <div>
                    <button className='rounded-full border border-[#ffffff1a] sm:h-16 sm:w-16 w-12 h-12 text-2xl bg-[#ffffff14] hidden sm:relative' onMouseOver={() => setVoiceSearch(true)} onMouseOut={() => setVoiceSearch(false)}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </button>
                    {voiceSearch && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Search with your voice</div>}
                </div>
            </div>


            <div className='flex sm:gap-8 gap-0.5 items-center'>
                {   
                    userProfile?.userInfo ? (
                    <div className='flex sm:gap-8 gap-0,25 items-center'>
                        <div>
                            <a className='text-3xl cursor-pointer rounded-full sm:w-16 sm:h-16 w-12 h-12 hover:bg-[#ffffff14] flex items-center justify-center' onMouseOver={() => setCreate(true)} onMouseOut={() => setCreate(false)} href={`/studio/${userProfile?.userInfo.sub}/${userProfile?.userInfo.name}`}>
                                <FontAwesomeIcon icon={faVideo} />
                            </a>
                            { create && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Create</div> }
                        </div>
                        
                        <div className='flex flex-col items-center'>
                            <div className='text-3xl cursor-pointer rounded-full sm:w-16 sm:h-16 w-12 h-12 hover:bg-[#ffffff14] flex items-center justify-center' onMouseOver={() => setBell(true)} onMouseOut={() => setBell(false)}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            { bell && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Notifications</div> }
                        </div>
                    </div> 
                    ) : 
                    <div className='text-3xl cursor-pointer rounded-full sm:w-16 sm:h-16 w-12 h-12 hover:bg-[#ffffff14] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                }
                
                {
                    userProfile?.userInfo ? (
                        <div>
                            <div className='' onClick={() => navigate('/auth')}>

                            {
                                userProfile.userInfo?.picture ? (
                                    <img className='rounded-full max-w-none sm:w-16 sm:h-16 h-12 w-12' src={userProfile.userInfo.picture} />
                                ) : (
                                    <div className='rounded-full'>{userProfile.userInfo.name.charAt(0)}</div>
                                )
                            }
                            </div>
                        </div>
                    ) : (
                        
                        <div className=''>
                            <div className='flex gap-2 items-center sm:border border-[#ffffff1a] rounded-full sm:px-6 px-4 sm:h-14 h-8text-[#3ea6ff] cursor-pointer hover:bg-[#98bfe1] hover:bg-opacity-40' onClick={() => navigate('/auth')}>
                                <div className='border border-[#3ea6ff] rounded-full w-8 h-8 flex items-center justify-center text-xl'>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <h2 className='sm:text-xl text-md hidden sm:block'>Sign In</h2>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
    }

export default Navbar;