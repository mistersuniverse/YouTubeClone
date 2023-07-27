import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Content = ({ content }) => {

  const navigate = useNavigate();

  const goToVideo = () => {
    navigate(`/watch/${content._id}`);
  }

  const goToChannel = (event) => {
    event.stopPropagation();
    navigate(`/channel/${content.channelID}/${content.channelName}`);
  }

  return (
    <div className='w-full sm:w-[49%] xl:w-[32.7%] min-[1980px]:w-1/6 flex flex-col aspect-[4/3] mb-4 cursor-pointer z-10' onClick={goToVideo}>

      <img className='sm:rounded-2xl rounded-md hover:rounded-none w-full h-4/5' src={content.thumbnail} alt='thumbnail' />
      
      <div className='flex gap-2'>

        <div className="aspect-square w-[10%] mt-2" >
          <img className='rounded-full' src={content.channelLogo} alt='channel logo' onClick={goToChannel}/>
        </div>


        <div className='flex flex-col w-full justify-start'>
          <h2 className='w-4/5 text-[1.2rem] leading-8 font-medium'>{content.title}</h2>
          <div>
            <h3 className="text-[1rem] font-medium leading-3 text-[#aaaaaa] hover:text-white w-fit mt-1" onClick={goToChannel}>{content.channelName}</h3>
          </div>
          <div className='flex gap-[4%] text-[0.8rem] leading-7 text-[#aaaaaa] font-medium'>
            <p>total views </p>
            <p>{moment(content.createdAt).fromNow()}</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Content;
