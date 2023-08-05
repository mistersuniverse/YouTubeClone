import express from 'express';

import { uploadContent, fetchContents, fetchContentsByChannel, fetchContentByID, fetchChannelByContent, home } from '../controllers/upload.js';

const router = express.Router();

router.post('/channel/:channelID/videos/upload', uploadContent);
router.get('/watch/:contentID', fetchContentByID);
router.get('/watch/:channelID', fetchChannelByContent);
router.get('/contents/:channelID', fetchContentsByChannel);
router.get('/contents', fetchContents);
router.get('/', home);
// router.delete('/content/delete/:channelID', deleteContent);

export default router;