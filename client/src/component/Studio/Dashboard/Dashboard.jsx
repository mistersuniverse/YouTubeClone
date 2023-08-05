import React, { useState, useEffect, useRef } from 'react';

import {create, weeklyYouTubeNewsFlash, tryATrend } from '../../../assets/index.js';
import UploadContent from '../../UploadContent/UploadContent';
import { Link } from 'react-router-dom';

const Subscriber = () => (
  <div className='flex gap-8'>
    <img className='w-9 h-9 rounded-full bg-red-600'/>
    <div>
      <h1 className='text-sm'>Prabhav Saxena</h1>
      <h3 className='text-xs text-[#aaa]'>4 subscribers</h3>
    </div>
  </div>
)
const Dashboard = () => {
  
  const [ isCreating, setIsCreating ] = useState(false);
  let optionsRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!optionsRef.current.contains(e.target)){
        setIsCreating(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  })

  return (
    <div className='mt-2 sm:p-6 p-4 w-full bg-[#1f1f1f] overflow-auto h-[90vh]'>
      {isCreating && <div className="bg-black bg-opacity-70 z-10 fixed w-full h-full  top-0 right-0"></div>}
      <h1 className='lg:text-2xl sm:text-xl text-lg sm:font-bold font-semibold'>Channel Dashboard</h1>
      
      <div className='flex items-center justify-center'>
        <div className='absolute w-full max-w-6xl top-28 z-20' ref={optionsRef}>
          { isCreating && <UploadContent />}
        </div>
      </div>

      <div className='w-full mt-8 flex md:flex-row flex-col gap-6'>
        <div className='md:w-1/3 w-full md:max-w-sm flex flex-col gap-6'>
          <div className='border border-[#3c3c3c] flex flex-col items-center h-[500px] justify-center gap-2 bg-[#282828] rounded-md'>
            <img className='' src={create}/>
            <p className='w-9/12 text-sm'>
                Want to see metrics on your recent video?
                Upload and publish a video to get started.
            </p>
            <button className='bg-[#3ea6ff] text-black p-2 rounded-md mt-3 text-sm font-semibold' onClick={() => setIsCreating(!isCreating)}>UPLOAD VIDEOS</button>

          </div>
    
          <div  className='border border-[#3c3c3c] flex flex-col gap-3 h-[380px] justify-between bg-[#282828] p-4 rounded-md'>
    
          </div>
        </div>

        <div className='md:w-1/3 w-full md:max-w-sm flex flex-col gap-6'>
          <div  className='border border-[#3c3c3c] flex flex-col gap-3 h-[440px] justify-between bg-[#282828] p-4 rounded-md'>
          
          </div>
    
          <div className='border border-[#3c3c3c] flex flex-col gap-3 h-[320px] justify-between bg-[#282828] p-4 rounded-md'>
            <div>
              <h1 className='text-xl'>Recent subscribers</h1>
              <h6 className='text-[#aaa]'>Lifetime</h6>
            </div>
            <div className='flex flex-col gap-6'>
                <Subscriber />
                <Subscriber />
                <Subscriber />
            </div>
            <Link className='text-[#3ea6ff]'>SEE ALL</Link>
          </div>
        </div>

        <div className='md:w-1/3 w-full md:max-w-sm flex flex-col gap-6'>
          <div className='border border-[#3c3c3c] flex flex-col md:h-[420px] h-[500px] justify-between gap-2 bg-[#282828] p-4 rounded-md'>
            <h1 className='text-lg font-bold'>News</h1>
            <img className='' src={tryATrend}/>
            <h2 className='font-bold'>Your Next Idea Starts Here</h2>
            <p className='text-sm text-[#aaa]'>
              Whether you're looking for inspiration for your next video, general YouTube knowledge, 
              or opportunities to get ahead of rising trends, here are some top trends our experts are seeing around the world
            </p>
            <Link className='text-[#3ea6ff]'>CHECK THEM OUT</Link>
          </div>
    
          <div className='border border-[#3c3c3c] flex flex-col md:h-[420px] h-[500px] justify-between gap-2 bg-[#282828] p-4 rounded-md'>
            <h1 className='text-lg font-bold'>Creator Insider</h1>
            <img className='' src={weeklyYouTubeNewsFlash}/>
            <h2 className='font-bold'>Improvements to YouTube Studio</h2>
            <p className='text-sm text-[#aaa]'>
              Hello Insiders! Today we're talking about improvements we're making to YouTube 
              Studio settings to improve navigation and ease of use for creators
            </p>
            <Link className='text-[#3ea6ff]'>WATCH ON YOUTUBE</Link>
          </div>

        </div>
      
      </div>
    </div>
  )
}

export default Dashboard;