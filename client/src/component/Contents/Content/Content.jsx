import moment from 'moment';

const Content = ({ content }) => {

  return (
    <div className='w-full sm:w-[49%] xl:w-[32.7%] min-[1980px]:w-[24%] h-1/3 flex flex-col gap-4 aspect-[4/3] mb-16'>

      <img className='rounded-2xl hover:rounded-none w-full h-4/5' src={content.thumbnail} alt='thumbnail'/>
      
      <div className='flex gap-4'>

        <div className="aspect-square w-[13%]">
          <img className='rounded-full' src={content.channelLogo} href='channel logo' />
        </div>


        <div className='flex flex-col w-full'>
          <h2 className='w-4/5 text-2xl font-medium mb-2'>{content.title}</h2>
          <h3 className="text-[1.2rem] font-medium">{content.channelName}</h3>
          <div className='flex gap-[8%] text-[1.2rem] leading-7 text-[#aaaaaa] font-medium'>
            <p>total views </p>
            <p>{moment(content.createdAt).fromNow()}</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Content;
