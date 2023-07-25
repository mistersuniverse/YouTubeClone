import React, { useState, useEffect } from 'react';
import Content from './Content/Content';
import { fetchContents } from '../../actions/upload';

const Contents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data using fetchContents when the component mounts
    fetchContents()
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='flex flex-wrap sm:m-12 m-2 justify-between gap-[0.1%]'>
      {data.map((content) => (
        <Content key={content._id} content={content} />
      ))}
    </div>
  );
};

export default Contents;
