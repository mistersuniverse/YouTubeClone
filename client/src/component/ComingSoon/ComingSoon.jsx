import React from 'react'

import { Navbar } from '../index';

const ComingSoon = ({message}) => {
  return (
    <div>
      <Navbar />
      {message}
    </div>
  )
}

export default ComingSoon;
