import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SideBarButton = ({ title, icon }) => (
  <a className='flex gap-8 items-center lg:text-md text-sm rounded-lg hover:bg-[#ffffff33] px-4 py-2'>
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
    {title}
  </a>
)

const SideBar = () => {
  const navigate = useNavigate();
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const items = [
    'Dashboard',
    'Content',
    'Analytics',
    'Comments',
    'Subtitles',
    'Copyright',
    'Earn',
    'Customisation',
    'Audio libraries',
  ];

  return (
    <div className='h-screen border-r border-[#484848] px-1  w-2/12 min-w-[200px]'>
      <div className='h-[30%] flex justify-center items-center flex-col'>
        <img className='rounded-full h-1/2' src={userProfile.userInfo.picture} alt='channel image' onClick={() => navigate(`/channel/${userProfile?.userInfo.sub}/${userProfile?.userInfo.name}`)}/>
        <h2 className='text-lg mt-1 font-semibold'>Your Channel</h2>
        <h3 className='text-sm text-[#969595] font-semibold'>{userProfile.userInfo.name}</h3>
      </div>

      <div className='flex flex-col gap-2 overflow-y-scroll max-h-[47%] sidebar'>
        {items.map((item, index) => (
          <SideBarButton key={index} icon={faHouse} title={item} />
        ))}
      </div>

      <div className='py-4 border-t border-[#484848]'>
        <SideBarButton title='Settings' icon={faHouse} />
        <SideBarButton title='Send feedback' icon={faHouse} />
      </div>
    </div>
  );
};

export default SideBar;
