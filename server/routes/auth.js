import express from 'express';

import { signin, signup, test } from '../controllers/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/', test);

export default router;