import React from 'react'

import Navbar from '../YouTube/Navbar/Navbar';

const ComingSoon = ({message}) => {
  return (
    <div>
      <Navbar />
      {message}
    </div>
  )
}

export default ComingSoon;
