import React, { useState, useEffect} from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Videos, Home } from './index';
import { fetchContentsByChannel } from '../../../actions/upload';

const Channel = () => {
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const headers = ['home', 'videos', 'playlists', 'channels', 'about'];
  const [navElementState, setNavElementState] = useState('home');
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const channelID = userProfile.userInfo.sub;
    // Fetch the data using fetchContents when the component mounts
    fetchContentsByChannel(channelID)
      .then((response) => setContents(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='flex flex-col gap-8 xl:px-32 lg:px-24 sm:px-16 xs:px-1 sm:py-12 p-4'>

      <div className='flex flex-col sm:flex-row gap-4 items-center justify-between'>
        <div className='flex gap-6 items-center'>
          <div>
            <img className='rounded-full sm:w-36 w-28' src={userProfile.userInfo.picture}/>
          </div>
          <div className='flex flex-col'>
            <h1 className='sm:text-2xl text-lg font-semibold'>{userProfile.userInfo.name}</h1>
            <h4 className='sm:text-sm text-xs text-[#aaa] mt-2.5'>@youtubeuniquehandle</h4>
            <div className='flex gap-2 sm:text-sm text-xs text-[#aaa] mb-2.5'>
              <h4>107 subscribers</h4>
              <h4>{contents?.length} videos</h4>
            </div>
            <p className='text-xs sm:text-sm text-[#aaa]'>Welcome to my YouTube Channel...</p>
          </div>
        </div>
        <div className='flex gap-8 lg:flex-row sm:flex-col flex-row'>
          <button className='rounded-full px-4 py-2  bg-[#ffffff1a] hover:bg-[#ffffff33] font-semibold text-sm sm:text-md'>Customise Channel</button>
          <button className='rounded-full px-4 py-2  bg-[#ffffff1a] hover:bg-[#ffffff33] font-semibold text-sm sm:text-md'>Manage videos</button>
        </div>
      </div>
      
      <div>
        <ul className='flex gap-6 sm:text-md text-sm font-semibold overflow-x-scroll homecontents'>
          {headers.map((header, index) => (
            <li className='flex flex-col gap-2 justify-between items-center w-36' key={index}>
              <Link to={`./${header}`} onClick={() => setNavElementState(header)}>
                {header.toUpperCase()}
              </Link>
              {navElementState === header && (
                <div className='w-32 h-0.5 rounded-full bg-white'></div>
              )}
            </li>
          ))}
        </ul>
        <hr />
      </div>

      <div>
        <Routes >
          <Route path='videos' element={<Videos contents={contents} />} />
          <Route path='home' element={<Home contents={contents} />} />
        </Routes>
      </div>

    </div>
  )
}

export default Channel