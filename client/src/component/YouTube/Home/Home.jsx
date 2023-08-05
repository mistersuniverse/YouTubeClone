import React, { useState, useEffect } from 'react';

import { Navbar, Sidebar, Contents, Recommendations } from '../index';
const Home = () => {

  const [ activeSideBar, setActiveSideBar ] = useState(false);

  useEffect(() => (
    setActiveSideBar(false)
  ), [screen.width])

  return (
    <div className='text-white fixed w-full' >
      <Navbar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar} />

      <div className='flex w-full pt-12 mx-auto'>
        <Sidebar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar}/>
        <div className='w-full'>
          <Recommendations setActiveSideBar={setActiveSideBar} activeSideBar={activeSideBar}/>
          <Contents />
        </div>
      </div>

    </div>
  )
}

export default Home;