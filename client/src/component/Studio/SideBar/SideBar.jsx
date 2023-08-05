import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const SideBarButton = ({ title, icon, showStudioSideBar, activeButton, setActiveButton }) => (
  <Link className={`flex gap-8 items-center lg:text-md text-sm rounded-lg hover:bg-[#ffffff33] ${activeButton === title && 'bg-[#ffffff33]'} px-4 py-2`} to={title.toLowerCase()} onClick={() => setActiveButton(title)}>
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
    {showStudioSideBar && title}
  </Link>
)

const SideBar = ({showStudioSideBar}) => {
  const navigate = useNavigate();
  const [ activeButton, setActiveButton ] = useState('Dashboard');
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
    <div className={`h-screen border-r border-[#484848] px-1 ${showStudioSideBar ? 'min-w-[200px]' : 'w-[65px]'}`}>
      <div className={`${showStudioSideBar ? 'h-[30%]' : 'h-[13%]'} flex justify-center items-center flex-col`}  onClick={() => navigate(`/channel/${userProfile?.userInfo.sub || userProfile?.userInfo._id}/${userProfile?.userInfo.name}`)}>
        { userProfile?.userInfo?.picture ? (
            <img className='rounded-full h-1/2' src={userProfile.userInfo.picture} alt='channel image'/>
          ) : (
            <div className='bg-red-700 rounded-full h-1/2 aspect-square flex items-center justify-center text-[3em]'>{userProfile?.userInfo.name.charAt(0).toUpperCase()}</div>
          )
        }
        { showStudioSideBar && <h2 className='text-lg mt-1 font-semibold'>Your Channel</h2> }
        { showStudioSideBar && <h3 className='text-sm text-[#969595] font-semibold'>{userProfile.userInfo.name}</h3> }
      </div>

      <div className='flex flex-col gap-2 overflow-y-scroll max-h-[47%] sidebar'>
        {items.map((item, index) => (
          <SideBarButton key={index} icon={faHouse} title={item} showStudioSideBar={showStudioSideBar} activeButton={activeButton} setActiveButton={setActiveButton} />
        ))}
      </div>

      <div className='py-4 border-t border-[#484848]'>
        <SideBarButton title='Settings' icon={faHouse} showStudioSideBar={showStudioSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
        <SideBarButton title='Send feedback' icon={faHouse} showStudioSideBar={showStudioSideBar} activeButton={activeButton} setActiveButton={setActiveButton}/>
      </div>
    </div>
  );
};

export default SideBar;
