import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Auth, UploadContent, ComingSoon } from './component';

const App = () => {
  return (

    <GoogleOAuthProvider clientId='835163780896-fueb64upqcdoo0sfa5b5fjba1qk6ip9k.apps.googleusercontent.com' >
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/upload/:channelID' element={<UploadContent />} />
          <Route path='/watch/:videoID' element={<ComingSoon message='video' />} />
          <Route path='/channel/:channelID' element={<ComingSoon message='channel' />} />
        </Routes>

      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App;