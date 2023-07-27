import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const SideBarButton = ({ title, icon, activeSideBar, setActiveButton, activeButton }) => (
  <a className={`flex gap-7 items-center activeSideBar={activeSideBar} text-md rounded-lg hover:bg-[#ffffff33] px-4 h-10 ${activeButton === title && 'bg-[#ffffff33]'} ${activeSideBar && 'justify-center'}`} onClick={() => setActiveButton(title)}>
    <div>
    <FontAwesomeIcon icon={icon} />
    </div>
    {!activeSideBar && title}
  </a>
)
const Sidebar = ({activeSideBar, setActiveSideBar}) => {

  const Subscriptions=['a', 'b', 'c', 'd', 'e'];
  const Explore = ['Trending', 'Shopping', 'Music', 'Films', 'Live', 'Gaming', 'News', 'Sport', 'Learning', 'Fashion & Beauty'];
  const [ activeButton, setActiveButton ] = useState('Home');

  
  useEffect(() => (
    setActiveSideBar(false)
  ), [screen.width])

  if (screen.width < 640 && !activeSideBar ) return (
    <div className='flex flex-col gap-6 w-30 mt-4 px-2 fixed z-50 bg-[#0f0f0f] h-screen '>
        <button className='rounded-lg py-1 px-2 text-xs font-medium bg-red-500 hover:bg-red-800 sm:hidden' onClick={() => setActiveSideBar(!activeSideBar)}>S</button>
        <FontAwesomeIcon icon={faHouse} activeSideBar={activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <FontAwesomeIcon icon={faHouse} activeSideBar={activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <FontAwesomeIcon icon={faHouse} activeSideBar={activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <FontAwesomeIcon icon={faHouse} activeSideBar={activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
      </div>
  )

  return (
  <div className={`bg-[#0f0f0f] min-[1980px]:w-1/5 overflow-y-scroll h-[93vh] ${activeSideBar ? 'w-[260px] sm:px-[0.17rem]' : 'w-[60px] px-2 sm:relative fixed'} min-[1980px]:static sidebar pt-4 z-20  sm:ml-1 sm:mt-3.5`} onFocus={() => console.log("hi")} onBlur={() => {setActiveSideBar(false)}}>
      <div className='flex flex-col gap-1'>
        <button className='rounded-lg py-1 px-1 m-1.5 text-xs font-medium bg-red-500 hover:bg-red-800 sm:hidden' onClick={() => setActiveSideBar(!activeSideBar)}>S</button>
        <SideBarButton title={'Home'} icon={faHouse} activeSideBar={!activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title={'Shorts'} icon={faHouse} activeSideBar={!activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title={'Subscriptions'} icon={faHouse} activeSideBar={!activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
        { !activeSideBar && <SideBarButton title={'Library'} icon={faHouse} activeSideBar={!activeSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>}
      </div>

      {activeSideBar && <hr className='my-4'/> }

      { activeSideBar && (
        <>
      <div className='flex flex-col gap-1'>
        <SideBarButton title={'Library'} icon={faHouse} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title={'History'} icon={faHouse} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title={'Your Videos'} icon={faHouse} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title={'Watch Later'} icon={faHouse} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title={'Liked Videos'} icon={faHouse} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <button className='text-md rounded-lg hover:bg-[#ffffff33] h-10'>Show more</button>
      </div>

      <hr className='my-4'/>

      <div className='flex flex-col gap-1 '>
        <h3 className='text-lg font-medium ml-2'>Subscriptions</h3>
        {Subscriptions.map((sub, index) => (<SideBarButton title={sub} key={index} icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>))}
        <button className='text-md rounded-lg hover:bg-[#ffffff33] h-10'>Show more</button>
      </div>
      
      <hr className='my-4'/>

      <div>
        <h3 className='text-lg font-medium ml-2'>Explore</h3>
        {Explore.map((sub, index) => (<SideBarButton title={sub} key={index} icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>))}
      </div>
      
      <hr className='my-4'/>

      <div>
        <h3 className='text-lg font-medium ml-2 mb-2'>More from YouTube</h3>
        <SideBarButton title='YouTube Premium' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title='YouTube Music' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title='YouTube Studio' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title='YouTube Kids' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
      </div>
      
      <hr className='my-4'/>

      <div>
        <SideBarButton title='Settings' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title='Report History' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title='Help' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title='Send feedback' icon={faHouse}  activeButton={activeButton} setActiveButton={setActiveButton}/>
      </div>

      <hr className='my-4'/>

      <div className='flex flex-col gap-4 px-6 py-4 font-medium text-xs text-[#aaa]'>
        <div className='flex gap-1 flex-wrap'>
          <a>About</a>
          <a>Press</a>
          <a>Copyright</a>
          <a>Contact Us</a>
          <a>Creator</a>
          <a>developer</a>
          <a>Advertise</a>
          <a>About</a>
        </div>

        <div className='flex gap-1 flex-wrap'>
          <a>Terms</a>
          <a>Privacy</a>
          <a>Policy & Safety</a>
          <a>How YouTube works</a>
          <a>Test new features</a>
        </div>

        <p className='font- font-extralight text-[#717171]'>
          © 2021 Google LLC
        </p>
      </div>
      </>)}

    </div>
  )
}

export default Sidebar;