import React from 'react';
import moment from 'moment';

const Videos = ({ contents }) => {    
    console.log(contents)
    return (
        <div className='flex flex-wrap overflow-auto h-[50vh] xl:gap-[1%] gap-[2%] w-full'>
            {contents.map((content, index) => (
                <div className='flex flex-col gap-1 xl:w-[24%] lg:w-[31%] sm:w-[48%] w-full max-w-xs sm:mx-0 mx-auto mb-8' key={index}>
                    <img className='w-full aspect-video rounded-lg object-cover' src={content?.thumbnail} />    
                    <h1>{content?.title}</h1>
                    <div className='flex gap-4 text-xs'>
                        <h4>14 views</h4>
                        <h4>{moment(content?.createdAt).fromNow()}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Videos;