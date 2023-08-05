import React, { useState } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';

import { Videos, Lives, Posts, Playlists, Podcasts } from './index';

const ChannelContent = () => {
  const headers = ['videos', 'lives', 'posts', 'playlists', 'podcasts'];
  const [navElementState, setNavElementState] = useState('videos');

  return (
    <div className='w-full border-[#484848]'>
      <h1 className='lg:text-2xl sm:text-xl text-lg sm:font-bold font-semibold sm:m-6 m-4'>Channel content</h1>
      <nav>
        <ul className='flex sm:gap-8 gap-4 sm:text-lg text-sm font-semibold sm:mx-6 mx-4 overflow-x-scroll homecontents'>
          {headers.map((header, index) => (
            <li className='flex flex-col gap-2 justify-between items-center' key={index}>
              <Link to={`./${header}`} onClick={() => setNavElementState(header)}>
                {header}
              </Link>
              {navElementState === header && (
                <div className='sm:w-10 w-6 sm:h-1 h-0.5 rounded-full bg-white'></div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <hr className='sm:mb-2 mb-1 border-inherit' />

      <button className='mx-4 sm:mx-6 sm:text-lg text-sm'>Filter</button>

      <hr className='sm:my-2 my-1 border-inherit' />
                
      <Routes >
        <Route path='/' element={<Navigate to='videos' />} />
        <Route path='videos' element={<Videos />} />
        <Route path='lives' element={<Lives />} />
        <Route path='posts' element={<Posts />} />
        <Route path='playlists' element={<Playlists />} />
        <Route path='podcasts' element={<Podcasts />} />
      </Routes>
    </div>
  );
};

export default ChannelContent;


