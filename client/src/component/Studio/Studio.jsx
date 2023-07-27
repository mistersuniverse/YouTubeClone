import React, { useState } from 'react';

import { ChannelContent, SideBar, Navbar } from './index';

const Studio = () => {
  const [ showStudioSideBar, setStudioSideBar ] = useState(false);

  return (
    <div className='bg-[#ffffff1a] fixed w-full'>
      <Navbar showStudioSideBar={showStudioSideBar} setStudioSideBar={setStudioSideBar}/>

      <div className='flex pt-16'>
        {showStudioSideBar && <SideBar />}
        <ChannelContent />
      </div>
      
    </div>
  )
}

export default Studio;