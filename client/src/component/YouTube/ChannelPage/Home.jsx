import React from 'react';
import moment from 'moment';

const Home = ({ contents }) => {
  return (
    <div>
      <h1 className='text-lg mb-4'>Videos</h1>
      <div className='flex overflow-x-scroll sm:w-[70vw] mx-auto sm:mx-0 gap-4'>
        {contents.map((content, index) => (
          <div className='flex flex-col gap-1 sm:min-w-[200px] min-w-full' key={index}>
            <img className='aspect-video rounded-lg object-cover' src={content?.thumbnail} alt={content?.title} />
            <h1>{content?.title}</h1>
            <div className='flex gap-4 text-xs'>
              <h4>14 views</h4>
              <h4>{moment(content?.createdAt).fromNow()}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;




