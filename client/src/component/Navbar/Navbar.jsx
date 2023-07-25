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
        <div className='flex justify-between px-6 py-3 gap-8 h-20'>

            <div className='flex gap-6 items-center '>
                <div className='text-3xl cursor-pointer pb-0.5 rounded-full w-16 h-16 hover:bg-[#ffffff14] flex items-center justify-center' onClick={() => setActiveSideBar(!activeSideBar)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className='w-36 fill-white cursor-pointer'>
                    <YouTubeLogo />
                    
                </div>
            </div>

            <div className='flex gap-4 w-[1000px] items-center'>
                <div className='flex items-center flex-1'>
                    <div className='rounded-l-full bg-inherit px-8 border border-[#ffffff1a] h-16 text-2xl text-[#ffffff14] items-center gap-4 w-full hidden sm:flex'>
                        {inputExtension && <div className='text-white'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>}
                        <input className='bg-inherit focus:outline-none focus:text-white w-full' placeholder=' Search' onFocus={() => setInputExtension(true)} onBlur={() => setInputExtension(false)} />
                    </div>
                    <div className='border border-[#ffffff1a] rounded-full sm:rounded-none sm:rounded-r-full sm:w-24 w-16 h-16 flex items-center justify-center text-3xl bg-[#ffffff14] cursor-pointer' onMouseOver={() => setSearchButton(true)} onMouseOut={() => setSearchButton(false)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        {searchButton && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Search</div>}
                    </div>
                </div>
                <div>
                    <button className='rounded-full border border-[#ffffff1a] h-16 w-16 text-2xl bg-[#ffffff14]' onMouseOver={() => setVoiceSearch(true)} onMouseOut={() => setVoiceSearch(false)}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </button>
                    {voiceSearch && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Search with your voice</div>}
                </div>
            </div>


            <div className='flex gap-8 items-center'>
                {   
                    userProfile?.userInfo ? (
                    <div className='flex gap-8 items-center'>
                        <div>
                            <a className='text-3xl cursor-pointer rounded-full w-16 h-16 hover:bg-[#ffffff14] flex items-center justify-center' onMouseOver={() => setCreate(true)} onMouseOut={() => setCreate(false)} href={`/upload/${userProfile?.userInfo.sub}`}>
                                <FontAwesomeIcon icon={faVideo} />
                            </a>
                            { create && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Create</div> }
                        </div>
                        
                        <div className='flex flex-col items-center'>
                            <div className='text-3xl cursor-pointer rounded-full w-16 h-16 hover:bg-[#ffffff14] flex items-center justify-center' onMouseOver={() => setBell(true)} onMouseOut={() => setBell(false)}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            { bell && <div className='absolute top-32 bg-[#717171] rounded-lg p-4 text-lg'>Notifications</div> }
                        </div>
                    </div> 
                    ) : 
                    <div className='text-3xl cursor-pointer rounded-full w-16 h-16 hover:bg-[#ffffff14] flex items-center justify-center'>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                }
                
                {
                    userProfile?.userInfo ? (
                        <div>
                            <div className='' onClick={() => navigate('/auth')}>

                            {
                                userProfile.userInfo?.picture ? (
                                    <img className='rounded-full max-w-none w-16 h-16' src={userProfile.userInfo.picture} />
                                ) : (
                                    <div className='rounded-full'>{userProfile.userInfo.name.charAt(0)}</div>
                                )
                            }
                            </div>
                        </div>
                    ) : (
                        
                        <div className=''>
                            <div className='flex gap-2 items-center border border-[#ffffff1a] rounded-full px-6 h-14 text-[#3ea6ff] cursor-pointer hover:bg-[#98bfe1] hover:bg-opacity-40' onClick={() => navigate('/auth')}>
                                <div className='border border-[#3ea6ff] rounded-full w-8 h-8 flex items-center justify-center text-xl'>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <h2 className='text-xl '>Sign In</h2>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
    }

export default Navbar;