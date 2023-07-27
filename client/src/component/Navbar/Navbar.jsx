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
        <div className='flex justify-between sm:px-2 sm:py-8 sm:gap-4 gap-1 sm:h-10 h-10 py-7 px-2 fixed w-full'>

            <div className='flex gap-4 items-center '>
                <div className='text-xl cursor-pointer pb-0.5 rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:bg-[#ffffff14] sm:flex hidden items-center justify-center' onClick={() => setActiveSideBar(!activeSideBar)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className='sm:w-28 w-24 fill-white cursor-pointer' onClick={() => navigate('/')}>
                    <YouTubeLogo />
                </div>
            </div>

            <div className='flex gap-2 items-center w-[800px]'>
                <div className='flex items-center flex-1'>
                    <div className='rounded-l-full bg-inherit px-4 border border-[#ffffff1a] sm:h-10 text-md  text-[#ffffff14] items-center gap-4 w-full hidden sm:flex'>
                        {inputExtension && <div className='text-white'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>}
                        <input className='bg-inherit focus:outline-none focus:text-white w-full' placeholder=' Search' onFocus={() => setInputExtension(true)} onBlur={() => setInputExtension(false)} />
                    </div>
                    <div className='sm:border sm:border-[#ffffff1a] rounded-full border border-[#ffffff1a] sm:rounded-none sm:rounded-r-full sm:w-14 sm:h-10 w-8 h-8 flex items-center justify-center sm:text-xl text-lg sm:bg-[#ffffff14] cursor-pointer ml-8 sm:ml-0' onMouseOver={() => setSearchButton(true)} onMouseOut={() => setSearchButton(false)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        {searchButton && <div className='absolute top-20 bg-[#717171] rounded-md p-2 text-xs'>Search</div>}
                    </div>
                </div>
                <div>
                    <button className='rounded-full border border-[#ffffff1a] sm:h-10 sm:w-10 w-8 h-8 sm:text-lg text-md bg-[#ffffff14] mr-8' onMouseOver={() => setVoiceSearch(true)} onMouseOut={() => setVoiceSearch(false)}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </button>
                    {voiceSearch && <div className='absolute top-20 bg-[#717171] rounded-md p-2 text-xs'>Search with your voice</div>}
                </div>
            </div>


            <div className='flex gap-4 items-center'>
                {   
                    userProfile?.userInfo ? (
                    <div className='flex gap-4 items-center'>
                        <div>
                            <a className='text-xl cursor-pointer rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:bg-[#ffffff14] flex items-center justify-center' onMouseOver={() => setCreate(true)} onMouseOut={() => setCreate(false)} href={`/studio/${userProfile?.userInfo.sub}/${userProfile?.userInfo.name}`}>
                                <FontAwesomeIcon icon={faVideo} />
                            </a>
                            { create && <div className='absolute top-20 bg-[#717171] rounded-md p-2 text-xs'>Create</div> }
                        </div>
                        
                        <div className='flex flex-col items-center'>
                            <div className='text-xl cursor-pointer rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:bg-[#ffffff14] flex items-center justify-center' onMouseOver={() => setBell(true)} onMouseOut={() => setBell(false)}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            { bell && <div className='absolute top-20 bg-[#717171] rounded-md p-2 text-xs'>Notifications</div> }
                        </div>
                    </div> 
                    ) : 
                    <div className='text-xl cursor-pointer rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:bg-[#ffffff14] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                }
                
                {
                    userProfile?.userInfo ? (
                        <div>
                            <div className='' onClick={() => navigate('/auth')}>

                            {
                                userProfile.userInfo?.picture ? (
                                    <img className='rounded-full max-w-none sm:w-9 sm:h-9 h-7 w-7' src={userProfile.userInfo.picture} />
                                ) : (
                                    <div className='rounded-full'>{userProfile.userInfo.name.charAt(0)}</div>
                                )
                            }
                            </div>
                        </div>
                    ) : (
                        
                        <div className=''>
                            <div className='flex items-center gap-1.5 sm:w-[100px] sm:border border-[#ffffff1a] rounded-full px-2 sm:h-9 h-6 text-[#3ea6ff] cursor-pointer hover:bg-[#98bfe1] hover:bg-opacity-40' onClick={() => navigate('/auth')}>
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