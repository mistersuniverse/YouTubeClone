import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Content = ({ content }) => {

  const navigate = useNavigate();

  const goToVideo = () => {
    navigate(`/watch/${content._id}`);
  }

  const goToChannel = (event) => {
    event.stopPropagation();
    navigate(`/channel/${content.channelID}`);
  }

  return (
    <div className='w-full sm:w-[49%] xl:w-[32.7%] min-[1980px]:w-[24%] flex flex-col gap-4 aspect-[4/3] mb-16' onClick={goToVideo}>

      <img className='rounded-2xl hover:rounded-none w-full h-4/5' src={content.thumbnail} alt='thumbnail' />
      
      <div className='flex gap-4'>

        <div className="aspect-square w-[13%]" >
          <img className='rounded-full' src={content.channelLogo} alt='channel logo' onClick={goToChannel}/>
        </div>


        <div className='flex flex-col w-full'>
          <h2 className='w-4/5 text-[1.6rem] font-medium mb-2'>{content.title}</h2>
          <div>
            <h3 className="text-[1.4rem] font-medium text-[#aaaaaa] hover:text-white w-fit" onClick={goToChannel}>{content.channelName}</h3>
          </div>
          <div className='flex gap-[8%] text-[1.4rem] leading-7 text-[#aaaaaa] font-medium'>
            <p>total views </p>
            <p>{moment(content.createdAt).fromNow()}</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Content;
