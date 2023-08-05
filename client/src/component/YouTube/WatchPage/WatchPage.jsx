import React, { useState, useEffect } from 'react';

import { Navbar, Sidebar } from '../index';
import Watch from './Watch';

const WatchPage = () => {

  const [ activeSideBar, setActiveSideBar ] = useState(false);

  useEffect(() => (
    setActiveSideBar(false)
  ), [screen.width])

  return (
    <div className='text-white fixed w-full overflow-y-scroll h-screen' >
      <Navbar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar} />

      <div className=''>
        {/* <Sidebar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar}/> */}
        <div className='w-full'>
          <Watch />
        </div>
      </div>

    </div>
  )
}

export default WatchPage;