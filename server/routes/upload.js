import express from 'express';

import { uploadContent, fetchContents } from '../controllers/upload.js';

const router = express.Router();

router.post('/channel/:channelID/videos/upload', uploadContent);
router.get('/contents', fetchContents);

export default router;