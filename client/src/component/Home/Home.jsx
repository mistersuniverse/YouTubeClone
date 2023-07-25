import React, { useState } from 'react';

import { Navbar, Sidebar, Contents, Recommendations } from '../index';
const Home = () => {

  const [ activeSideBar, setActiveSideBar ] = useState(false);

  return (
    <div className='text-white' >
      <Navbar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar} />

      <div className='flex w-full' onClick={() => setActiveSideBar(false)}>
        { activeSideBar && <Sidebar setActiveSideBar={setActiveSideBar}/>}
        <div className='w-full'>
          <Recommendations />
          <Contents />
        </div>
      </div>

    </div>
  )
}

export default Home;