import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ChannelContent, SideBar, Navbar, Dashboard } from './index';

const Studio = () => {
  const [ showStudioSideBar, setStudioSideBar ] = useState(false);

  return (
    <div className='bg-[#ffffff1a] fixed w-full h-screen'>
      <Navbar showStudioSideBar={showStudioSideBar} setStudioSideBar={setStudioSideBar}/>
      
      <div className='flex pt-10 sm:pt-14'>
        <SideBar showStudioSideBar={showStudioSideBar}/>
        <Routes>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='content/videos/*' element={<ChannelContent />}/>
          <Route path='/' element={<Navigate to='dashboard' />} />
          <Route path='/content' element={<Navigate to='videos' />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default Studio;