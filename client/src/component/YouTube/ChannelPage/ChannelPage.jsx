import React, { useState, useEffect } from 'react';

import Channel from './Channel';

import { Navbar, Sidebar } from '../index';
const ChannelPage = () => {

  const [ activeSideBar, setActiveSideBar ] = useState(false);

  useEffect(() => (
    setActiveSideBar(false)
  ), [screen.width])

  return (
    <div className='text-white fixed w-full' >
      <Navbar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar} />

      <div className='flex w-full pt-12'>
        <Sidebar activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar}/>
        <div className='w-full'>
          <Channel />
        </div>
      </div>

    </div>
  )
}

export default ChannelPage;