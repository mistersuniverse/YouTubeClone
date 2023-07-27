import express from 'express';

import { uploadContent, fetchContents, fetchContentsByChannel } from '../controllers/upload.js';

const router = express.Router();

router.post('/channel/:channelID/videos/upload', uploadContent);
router.get('/contents/:channelID', fetchContentsByChannel);
router.get('/contents', fetchContents);
// router.delete('/content/delete/:channelID', deleteContent);

export default router;