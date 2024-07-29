
import express from 'express';
import { getVideoStatus } from '../api/sora';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/status/:videoId', authMiddleware, async (req, res) => {
  try {
    const status = await getVideoStatus(req.params.videoId);
    res.send(status);
  } catch (error) {
    res.status(500).send('Error fetching video status');
  }
});

export default router;
