import React, { useState } from 'react';

import { Navbar, Sidebar, Contents, Recommendations } from '../index';
const Home = () => {

  const [ activeSideBar, setActiveSideBar ] = useState(false);

  return (
    <div className='text-white'>
      <Navbar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar} />

      <div className='flex w-full'>
        { activeSideBar && <Sidebar />}
        <div className='w-full'>
          <Recommendations />
          <Contents />
        </div>
      </div>

    </div>
  )
}

export default Home;