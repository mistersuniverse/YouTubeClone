import React, {useState, useEffect, useRef } from 'react';
import { fetchContentsByChannel } from '../../../actions/upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEye, faEyeSlash, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { deleteContent } from '../../../actions/upload';

const Row = ({ content }) => {
  
  const [ visibleEditButtons, setVisibleEditButtons ] = useState(false);
  const [ details, setDetails ] = useState(false);
  const [ viewOnYouTube, setViewOnYouTube ] = useState(false);
  const [ options, setOptions ] = useState(false);
  const [ optionsVisible, setOptionsVisible ] = useState(false);
  let optionsRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!optionsRef.current.contains(e.target)){
        setOptionsVisible(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  })

  const handleOptionsClick = () => {
    setOptionsVisible(true);
    setOptions(false);
  }

  const handleDelete = () => {
    deleteContent(content._id);
    setOptionsVisible(false);
  }
  
  return ( 
    <div className='flex sm:gap-4 gap-1 h-20 hover:bg-[#242323] py-2' onMouseOver={() => setVisibleEditButtons(true)} onMouseOut={() => setVisibleEditButtons(false)}>
      <div className=''>
        <input className='' type='checkbox' />
      </div>
      <div className=''>
        <img className='min-w-[75px] w-[75px] sm:w-[100px] aspect-[3/2] rounded-sm object-cover' src={content?.thumbnail} />
      </div>
      <div className='basis-1/4 relative'>
        <h3 className='sm:text-sm text-xs sm:font-semibold font-medium'>{content?.title}</h3>
        { !visibleEditButtons ? (
            <p className='sm:text-xs text-[0.5rem] text-[#b1abab]'>#tags</p>
          ) : (
            <div className='flex justify-between items-start mt-3 relative'>
              <div className="" onMouseOver={() => setDetails(true)} onMouseOut={() => setDetails(false)}>
                <button><FontAwesomeIcon icon={faHouse} /></button>
                {details && <div className='absolute top-10 bg-[#717171] rounded-md font-semibold   p-1 text-[0.6rem]'>Details</div>}
              </div>
              <div  onMouseOver={() => setViewOnYouTube(true)} onMouseOut={() => setViewOnYouTube(false)}>
                <Link to={`/watch/${content._id}`}><FontAwesomeIcon icon={faHouse} /></Link>
                {viewOnYouTube && <div className='absolute top-10 bg-[#717171] rounded-md font-semibold w-max p-1 text-[0.6rem]'>View On YouTube</div>}
              </div>
              <div className='cursor-pointer' onMouseOver={() => setOptions(true)} onMouseOut={() => setOptions(false)} onClick={handleOptionsClick}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
                {options && <div className='absolute top-10 bg-[#717171] rounded-md font-semibold   p-1 text-[0.6rem]'>Options</div>}
              </div>
            </div>
          )
        }
        {optionsVisible && (
          <>
            {/* Overlay to cover the entire screen */}
            {/* <div className="fixed inset-0 bg-black z-20 bg-opacity-75"></div> */}
            <div className='absolute top-10 bg-[#343232] p-4 flex flex-col items-start gap-4 rounded-lg w-52 z-30' ref={optionsRef}>
              <button>Edit title & Description</button>
              <button onClick={handleDelete}>Delete Forever</button>
            </div>
          </>
        )}
      </div>
    </div>
  )  
};

const Row2 = ({content}) => (
    <div className='flex sm:gap-4 min-w-[200px] gap-12 h-20 hover:bg-[#242323] py-2' >
      <div className='basis-1/4 sm:text-sm text-xs text-center h-16'>
        {content?.visibility ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
      </div>
      <div className='basis-1/4 min-w-[100px] sm:text-sm text-xs text-center h-16'>
        {new Date(content?.createdAt).toDateString().slice(4)}
      </div>
      <div className='basis-1/4 min-w-[100px] sm:text-sm text-xs text-center h-16'>
        {content?.likes || 0}
      </div>
    </div>
  )

const Header1 = () => (
      <div className=' flex sm:gap-4 gap-1 h-8'>
        <div className=''>
          <input className='' type='checkbox' />
        </div>
        <div className='text-sm sm:text-lg text-center'>
          <h3>Video</h3>
        </div>
        <div className='basis-1/4 text-sm sm:text-lg'>
          <h3></h3>
        </div>
      </div>
);

const Header2 = () => (
  <div className='flex sm:gap-4 min-w-[200px] gap-12 h-8' >
    <div className='basis-1/4 text-sm sm:text-lg text-center'>
      <h3>Visibility</h3>
    </div>
    <div className='basis-1/4 text-sm sm:text-lg text-center font-bold'>
      <h3>Date</h3>
    </div>
    <div className='basis-1/4 text-sm sm:text-lg text-center'>
      <h3>Likes</h3>
    </div>
  </div>
)

const Videos = () => {
  const [contents, setContents] = useState([]);
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));

  useEffect(() => {
    const channelID = userProfile.userInfo.sub;
    // Fetch the data using fetchContents when the component mounts
    fetchContentsByChannel(channelID)
      .then((response) => setContents(response.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(contents[0]);

  return (
    <div className='m-6 grid gap-4 overflow-y-scroll sm:h-[60vh] h-[72vh] grid-cols-2'>
      <div className='flex flex-col min-w-[160px] w-1/2'> 
        <Header1 />
        {contents.map((content) => <Row key={content._id} content={content} />)}
      </div>
      <div className='flex flex-col w-[300px] sm:w-1/2 overflow-x-scroll overflow-y-hidden'>
        <Header2 />
        {contents.map((content) => <Row2 key={content._id} content={content} />)}
      </div>
    </div>
  )
}

export default Videos;