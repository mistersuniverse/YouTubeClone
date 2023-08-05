import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faThumbsUp as SolidThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as RegularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';

import { fetchContentByID, fetchChannelByContent } from '../../../actions/upload';

const Watch = () => {

  const [ content, setContent ] = useState();
  const [ channelInfo, setChannelInfo ] = useState();
  const [ like, setLike ] = useState(false);
  const [ disLike, setDisLike ] = useState(false);
  const { videoID: contentID } = useParams();
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  console.log(userProfile);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    fetchContentByID(contentID)
    .then((response) => setContent(response.data[0]))
    .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetchChannelByContent(channelID)
  //   .then((response) => setChannelInfo(response.data[0]))
  //   .catch((err) => console.log(err));
  // }, []);

  console.log(screen.width);

  return (
    <div className='sm:mx-16 sm:my-20 mt-16 m-2 lg:flex justify-between lg:gap-8'>

      <div className='flex flex-col gap-2 sm:w-9/12 w-full'>

        <iframe className='aspect-video w-full'
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>

        <div>
          <h1 className='tex-white sm:text-xl text-lg font-semibold'>{content?.title}</h1>
        </div>

        <div className='flex justify-between flex-col sm:flex-row gap-2'>
          <div className='flex sm:gap-4 items-center justify-between'>
            <img className='rounded-full w-12 h-12' src={userProfile.userInfo.picture} />
            <div>
              <h1 className='font-semibold sm:text-lg text-sm'>{userProfile.userInfo.name}</h1>
              <h5 className='text-xs text-[#aaaaaa] font-semibold'>2.3M subscribers</h5>
            </div>
            <div>
              <button className='bg-white ml-12 rounded-full text-black py-2 px-4 font-semibold'>Subscribe</button>
            </div>
          </div>

          <div className='flex items-center gap-4 justify-between'>
            <div className='rounded-full flex gap-8 bg-[#333333] py-2 px-4'>
              <div onClick={() => setLike(!like)}>
                <FontAwesomeIcon icon={like ? SolidThumbsUp : RegularThumbsUp } /> 426k
              </div>
              <div className='w-px bg-[#ffffff66]'>
                
              </div>
              <div onClick={() => setDisLike(!disLike)}>
                <FontAwesomeIcon icon={disLike ? SolidThumbsUp : RegularThumbsUp } style={{transform: 'rotate(180deg)'}}/>
              </div>
            </div>

            <div className='rounded-full bg-[#333333] py-2 px-4 f
            ont-semibold'>
              Share
            </div>
          </div>

        </div>


        <div className='bg-[#333333] rounded-lg py-2 px-4'>
          <p>{moment(content?.createdAt).fromNow()}</p>
          {showFullDescription ? (
            <>
              <p>{content?.description}</p>
              <button onClick={toggleDescription}>Show less</button>
            </>
          ) : (
            <p>
              {content?.description.slice(0, (screen.width*3/10))}{' '}
              {content?.description.length > (screen.width*3/10) && (
                <span className='font-semibold cursor-pointer text-blue-500' onClick={toggleDescription}>
                  ...more
                </span>
              )}
            </p>
          )}
        </div>

        <div>
          Comments
        </div>
      </div>

      <div className='lg:w-1/3'>
        Recommendations
      </div>

    </div>
  )
}

export default Watch;