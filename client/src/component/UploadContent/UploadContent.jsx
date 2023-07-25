import React, { useState } from 'react';
import Filebase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';

import { uploadContent } from '../../actions/upload';

const Create = () => {
    const [ contentData, setContentData ] = useState({ title: '', thumbnail: '', video: '', description: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadContent(contentData);
        clear();
    };

    const handleInput = (e) => {
        setContentData({...contentData, [e.target.name]: e.target.value }); // square brackets are used for dynamically setting the key
    };

    const clear = () => {
        setContentData({ title: '', thumbnail: '', video: '', description: '' });
    };

    return (
        <div className='flex justify-center items-center'>
            <form className='flex flex-col gap-2 xl:w-6/12 sm:w-8/12 w-11/12 border border-white mt-8 sm:py-8 sm:px-4 p-2' onSubmit={handleSubmit}>
                <input className='text-black rounded-md h-12 px-4' value={contentData.title} name='title' placeholder='Title' onChange={handleInput} required/>
                
                <label className='px-4 flex gap-2 bg-white text-black'>
                    Upload Thumbnail:
                    <Filebase type='file' multiple={false} onDone={({ base64 }) => setContentData({ ...contentData, thumbnail: base64 })} required/>
                </label>

                <textarea className='text-black rounded-md px-4 py-2' value={contentData.description} name='description' rows='5' placeholder='Description' onChange={handleInput} />
                <div className='flex gap-2'>
                    <button className='bg-[#3ea6ff] text-black w-2/12 h-12 px-4 rounded-md' >Upload</button>
                    <button className='border border-[#3ea6ff] text-[#3ea6ff] w-2/12 h-12 px-4 rounded-md' onClick={() => navigate('/')}>Back</button>
                </div>
            </form>
        </div>
    )
}

export default Create;