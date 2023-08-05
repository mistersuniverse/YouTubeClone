import React, { useState } from 'react';
import Filebase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';

import { uploadContent } from '../../actions/upload';

const UploadContent = () => {
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
            <form className='flex flex-col items-center gap-2 w-full border border-[#3c3c3c] mt-8 sm:py-16 sm:px-8 p-4 bg-[#1f1f1f]' onSubmit={handleSubmit}>
                <input className='text-black rounded-md h-12 px-4 w-full' value={contentData.title} name='title' placeholder='Title' onChange={handleInput} required/>
                
                <label className='px-4 flex gap-2 bg-white text-black rounded-md h-12 items-center w-full'>
                    Upload Thumbnail:
                    <Filebase type='file' multiple={false} onDone={({ base64 }) => setContentData({ ...contentData, thumbnail: base64 })} required/>
                </label>

                <textarea className='text-black rounded-md px-4 py-2 w-full' value={contentData.description} name='description' rows='5' placeholder='Description' onChange={handleInput} />
                <button className='bg-[#3ea6ff] text-black w-2/12 h-12 px-4 rounded-md' >Upload</button>
            </form>
        </div>
    )
}

export default UploadContent;