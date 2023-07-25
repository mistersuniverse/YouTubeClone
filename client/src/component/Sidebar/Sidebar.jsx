import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const SideBarButton = ({ title, icon }) => (
  <a className='flex gap-10 items-center lg:text-2xl text-xl rounded-lg hover:bg-[#ffffff33] px-4 h-16'>
    <div>
    <FontAwesomeIcon icon={icon} />
    </div>
    {title}
  </a>
)
const Sidebar = () => {

  const Subscriptions=['a', 'b', 'c', 'd', 'e']
  const Explore = ['Trending', 'Shopping', 'Music', 'Films', 'Live', 'Gaming', 'News', 'Sport', 'Learning', 'Fashion & Beauty']

  return (
<div className='bg-[#0f0f0f] px-6 min-[1980px]:w-1/5 overflow-y-scroll h-screen fixed w-[360px] min-[1980px]:static' onBlur={() => {}}>

          <div className='flex flex-col gap-1'>
            <SideBarButton title={'Home'} icon={faHouse}/>
            <SideBarButton title={'Shorts'} icon={faHouse}/>
            <SideBarButton title={'Subscriptions'} icon={faHouse}/>
          </div>

          <hr className='my-4'/>

          <div className='flex flex-col gap-1'>
            <SideBarButton title={'Library'} icon={faHouse}/>
            <SideBarButton title={'History'} icon={faHouse}/>
            <SideBarButton title={'Your Videos'} icon={faHouse}/>
            <SideBarButton title={'Watch Later'} icon={faHouse}/>
            <SideBarButton title={'Liked Videos'} icon={faHouse}/>
            <button className='text-xl rounded-lg hover:bg-[#ffffff33] h-16'>Show more</button>
          </div>

          <hr className='my-4'/>

          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl font-medium'>Subscriptions</h3>
            {Subscriptions.map((sub, index) => (<SideBarButton title={sub} key={index} icon={faHouse} />))}
            <button className='text-xl rounded-lg hover:bg-[#ffffff33] h-16'>Show more</button>
          </div>
          
          <hr className='my-4'/>

          <div>
            <h3 className='text-2xl font-medium'>Explore</h3>
            {Explore.map((sub, index) => (<SideBarButton title={sub} key={index} icon={faHouse} />))}
          </div>
          
          <hr className='my-4'/>

          <div>
            <h3 className='text-2xl font-medium'>More from YouTube</h3>
            <SideBarButton title='YouTube Premium' icon={faHouse} />
            <SideBarButton title='YouTube Music' icon={faHouse} />
            <SideBarButton title='YouTube Studio' icon={faHouse} />
            <SideBarButton title='YouTube Kids' icon={faHouse} />
          </div>
          
          <hr className='my-4'/>

          <div>
            <SideBarButton title='Settings' icon={faHouse} />
            <SideBarButton title='Report History' icon={faHouse} />
            <SideBarButton title='Help' icon={faHouse} />
            <SideBarButton title='Send feedback' icon={faHouse} />
          </div>

          <hr className='my-4'/>

          <div className='flex flex-col gap-4 px-6 py-4 font-medium text-lg text-[#aaa]'>
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

    </div>
  )
}

export default Sidebar;